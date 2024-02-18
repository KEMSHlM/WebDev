# Nestjs

## OVERVIEW

<!--toc:start-->

- [Nestjs](#nestjs)
  - [OVERVIEW](#overview)
  - [基本アーキテクチャ](#基本アーキテクチャ)
    - [Controller](#controller)
    - [Service](#service)
  - [バリデーションと例外処理](#バリデーションと例外処理)
    - [DTO(Data Transfer Object)](#dtodata-transfer-object)
    - [バリデーション](#バリデーション)
  - [ORM(Object Relational Mapping)](#ormobject-relational-mapping)
    - [メリット](#メリット)
    - [デメリット](#デメリット)
    - [TypeORM](#typeorm)
      - [例(TypeORM: 0.3)](#例typeorm-03)
        - [Entity](#entity)
        - [Repository](#repository)
      - [例(TypeORM: 0.2)](#例typeorm-02)
        - [コマンド実行例](#コマンド実行例)
        - [Repository](#repository)
        - [Relarions](#relarions)
    - [非同期](#非同期)
    - [UP, DOWN](#up-down)
  - [認証と認可](#認証と認可)
    - [認証(Authentication)](#認証authentication)
    - [認可(Authorization)](#認可authorization)
      - [JWT](#jwt)
  - [Testの実装．](#testの実装)
    - [手順](#手順)
  - [備考](#備考) - [HTTPメソッド](#httpメソッド) - [クラス図](#クラス図) - [CLUD](#clud) - [残る疑問たち](#残る疑問たち)
  <!--toc:end-->

## 基本アーキテクチャ

```mermaid
graph TB;
    A["アプケーション(main.ts)"];
    B["ルートモジュール(app.module.ts)"];
    C["Featureモジュール(feature.module.ts)"];
    D["サービス(feature.service.ts)"]
    E["コントローラ(feature.controller.ts)"];

    A --> B;
    B --> C;
    subgraph Feature
        C --> D & E;
        E --> D;
    end
```

ルートモジュールは1つ以上必要．  
Featureモジュールは0以上必要．

### Controller

クライアントからのリクエストを受け付け，クライアントにレスポンスを返す．  
 また，ネットワーク上でデータを転送する際，その経路を導き出すことルーティングと呼ぶ．  
 <img src=https://docs.nestjs.com/assets/Controllers_1.png width=500>

例えば，以下の例では，  
 POST `http://localhost:3000/users`

- 定義方法  
   通常，HTTPメソッドは，クラス（ハンドラー）にデコレータをつける．

  ```typescript
  import { Controller } from "@nestjs/common";

  // クラス（ハンドラー）にHTTPメソッドデコレータをつける．
  @Controller("users")
  export class UsersController {
    // メソッドにHTTPメソッドデコレータをつける．
    @Post()
    create() {
      // Create user
    }
  }
  ```

  ?? Postデコレータは予約語? -> そう，HTTPメソッドデコレータと呼ぶ．

### Service

ビジネスロジック(具体的な業務で扱う様々な実体を表現し，それらの関係や処理の方法，業務の流れを実装した部分)を実装する．  
 Controllerから呼び出すことで，ユースケースを実現する．

例えば，データベースへのアクセスや外部APIとの通信など．

- Dependency Injection (DI)  
   サービスをコントローラの外部から注入する．

  ```mermaid
  classDiagram
      direction LR
      UsersService ..|> UsersController : DI

      class UsersController {
          -usersService: UsersService
      }
      class UsersService {
      }
  ```

  これにより，本番用とテスト用でインスタンスの切り替えが容易になる.  
   ログの出力先の切り替えなどにも利用できる．

  依存するクラスが複数になると，DIの管理が大変になる．  
   そのため，Nestjsでは，DIコンテナを利用する．

  Serviceの定義, `$ nest g service users`

  ```typescript
  import { Injectable } from "@nestjs/common";

  @Injectable()
  exort class UsersService {
      // ...
  }
  ```

  ModuleのprovidersにServiceを登録する．上のCLIコマンドで自動で登録される．

  ```typescript
  @Module({
      controllers: [UsersController], // 依存するコントローラ(?? ファイル名？)
      providers: [UsersService], // 依存するサービス
  })
  exprot class UsersModule {}
  ```

  ControllerからServiceを利用する.

  ```typescript
  @Controller('users')
  export class UserController {
      constructor(private readonlyreadonly usersService: UsersService) {}

      @Get(':username')
      find(@Param('username') username: string) {
          this.usersService.find(username);
      }
  }
  ```

  面白いのは，Nestjsはサービスが, DIを用いた設計であるという前提で作られている点．

## バリデーションと例外処理

### DTO(Data Transfer Object)

データの受け渡しを行うためのオブジェクト．  
 Nestjs特有の機能ではなく，ソフトウェア開発において広く使われる．

- メンテナンス性の向上  
   データの内容や型などが変更になった場合でも，修正箇所をDTOに閉じ込めることができる．
- 安全性の向上  
   やり取りするデータをDTOの型に制限することができる．  
   よって，誤ったデータが扱われるリスクがへる．

- Nestjsのバリデーション機能
  型チェックだけではなく，複雑なバリデーションが可能になる．

### バリデーション

リクエストオブジェクトの形式チェック  
 例えば，

- ユーザー名が1文字以上20字以内であること
- emailはメールアドレスの形式であること
- パスワードは英数字で8文字以上であること

Pipeを利用することで，バリデーションを行うことができる．

- ハンドラーがリクエストを受け取る前にリクエストに対して処理を行う．
- データの変換とバリデーションが可能．
- 処理を行った後のデータをハンドラーに渡す．
- Pipeの処理中に例外を返すことも可能．

以下は，ハンドラへの適用例．

```typescript
@Post()
@UsePipes(ParseIntPipe)
create(@Body('id') id: number) {
    //
}
```

以下は, パラメータごとへの適用例．

```typescript
@Post()
create(
    @Body('id', ParseIntPipe) id: number,
    @Body('isActive', ParseBoolPipe) isActive: boolean,
) {
    //
}
```

以下は, グローバルへの適用例．

```typescript
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
```

上記のParseIntPipeは，文字列を数値に変換する組み込みのPipe．

例えば，ParseUUIDPipeを用いることで，UUIDの形式チェックが可能．  
 error -> http://localhost:3000/items/test1

以下はエラーのレスポンス．

```json
{
  "message": "Validation failed (uuid is expected)",
  "error": "Bad Request",
  "statusCode": 400
}
```

ok -> http://localhost:3000/items/123e4567-e89b-12d3-a456-426614174000

## ORM(Object Relational Mapping)

ORM(Object Relational Mapping)とは，オブジェクト思考の言語とRDBの**非互換なデータをマッピングする役割**を持つ．  
 オブジェクト指向は，「**現実世界の物事に即したデータモデル**」
RDBは，「**検索などRDBとしての役割を果たすために最適化されたモデル**」

- Migration
  移行を意味する単語．DBにおけるマイグレーションとは, 「DBの変更内容をファイルに記録し，その内容を実行してDBのスキーマ(構造や構成)を更新していく手法のこと」.  
  テーブルの仕様が変わる都度，マイグレーションファイルを作成する．  
  DBの変更履歴を管理するために，マイグレーションファイルはタイムスタンプを含むファイル名で保存される．

### メリット

- SQLを書かなくてもDB操作ができる．
- データの定義が一箇所ですむので，メンテナンス性が高まる．
- データベースを抽象化できる（プログラマがSQLの方言などを気にしなくてよくなる．）

### デメリット

- ORMライブラリの操作を学ぶ必要がある．
- パフォーマンスチューニングが難しい．

### TypeORM

TypeScriptで書かれたORMライブラリ．データベースの変更やマイグレーションを発行する．
TypeORMで，スキーマの更新を行う．その際に`synchronize = true`を選択したら自動でデータベースのスキーマが更新される．  
Migrationとは，データベースのスキーマを変更することではなく，そのスキーマの変更履歴を管理するための一連の手続きである．  
そのため，Synchronizeはfalseにするべき．

ここで，注意するのはTypeORMに限ったことなのか，わからないが  
TypeORMでは最新のマイグレーションファイルとデータベースの状態に違いがあれば, Migrationファイルを作成可能になるわけではない．  
Migrationファイルを生成する前に，データベースに最新の変更がされて，Entityとの差分がない場合，マイグレーションファイルは生成できない．

(うまく自動生成にしてくれよ)

以下にTypeORMのMigrationの手順を示す．

#### 例(TypeORM: 0.3)

以下は，データベースにtableを追加していない状態からスタートする．  
最初に，Dockerを立ち上げる．

```shell
docker-compose up -d
```

entityを作成したら，migrationファイルを発行する．

```shell
npm run typeorm-ts-node-commonjs migration:generate -- --dataSource src/database/data-source.ts --pretty src/migrations/todoPriority
```

データベースに変更を反映させる．

````shell
```shell
npm run typeorm-ts-node-commonjs migration:run -d src/database/data-source.ts
````

サービスを立ち上げる．

```shell
npm run start:dev
```

##### Entity

RDBのテーブルと対応するオブジェクト．  
@Entityデコレーターをつけたクラスとして定義する.

```typescript
@Entity()
export class Item {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;
}
```

##### Repository

```typescript
@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>,
  ) {}
  /* ... */
}
```

#### 例(TypeORM: 0.2)

##### コマンド実行例

```shell
 docker-compose up -d
 npx typeorm migration:generate -n CreateItem
 npx typeorm migratino:run
 npm run start:dev
```

##### Repository

Entityを管理するためのオブジェクト  
 EntityとRespositoryが1対1の関係となり，データベース操作を抽象化する．

```typescript
@EntityRepository(Item)
export class ItemRepository extends Repository<Item> {
  findById(id: string) {
    return this.findById(id);
  }
}
```

##### Relarions

リレーションとは，テーブル間の関係を表すもの．
リレーションを定義する．

例えば，ItemとUserが1対1の関係になる場合，以下のように定義する．

```typescript
@Entity()
export class Item {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column()
  name: string;
  @OneToOne((type) => User, (user) => user.item)
  user: User;
}
```

### 非同期

forRootAsyncをメソッドを使用して，非同期にモジュールのオプションを渡す必要がある場合にこのforRootAsyncメソッドを使用する．  
例えば，環境変数からの設定読み込み(APIなどの設定を隠蔽できる)や非同期API呼び出しによる設定の取得，動的に設定を生成するといった事例が当てはまる．

### UP, DOWN

upメソッドとdownメソッドは,データベースのスキーマ変更を管理するための重要な概念.

- upメソッド
  upメソッドは、マイグレーションを適用する際に実行される処理を定義します。これには、新しいテーブルの作成、既存のテーブルにカラムを追加する、インデックスを作成する、データ型を変更するなど、データベーススキーマに対する変更が含まれます。基本的にupメソッドはデータベーススキーマを新しいバージョンにアップグレードするために使用されます。

- downメソッド
  downメソッドは, upメソッドで行われた変更を元に戻す（ロールバックする）際に実行される処理を定義する.  
  マイグレーションが誤っていたり, 問題が発生した場合に, データベーススキーマを以前の状態に戻すために使用する.  
  downメソッドには, upメソッドで行われた変更を逆に適用する処理が記述される．

```typescript
export class CreateUsersTable1588102418410 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // ユーザーテーブルを作成する
    await queryRunner.query(`
            CREATE TABLE users (
                id INT AUTO_INCREMENT,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL UNIQUE,
                PRIMARY KEY (id)
            )
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // ユーザーテーブルを削除する
    await queryRunner.query(`DROP TABLE users`);
  }
}
```

## 認証と認可

### 認証(Authentication)

通信の相手が誰であるかを確認すること．

- ユーザー作成機能やログイン機能を実装する必要がある．
- ハッシュ化，JWTの生成などが必要．

### 認可(Authorization)

とある条件に対して，リソースのアクセス権限を与えること．

- ロールによる認可処理を実装．
- Guards, カスタムデコレータ．

#### JWT

三つの要素からなる．

- ヘッダ：ハッシュアルゴリズムの情報などのメタデータ．
- ペイロード：認証対象の情報で，ユーザ名やIDなど任意の情報．
- 署名：ヘッダとペイロードをエンコードしたものに秘密鍵を加えて，ハッシュ化したもの．

要素ごとに，Base64エンコードされている．  
 3つの要素がドットで連結されている．

例えば，適当な例を以下に載せる．  
 `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`
最初のドットで区切られるまでの部分はヘッダ，その次がエンコードされたペイロード，最後が署名(秘密鍵)．

[jwt.io](https://jwt.io) で生成されたTokenをデコードすることができる．  
 ![decode](.img/screenshot_20240213_131900.png)

上の画像から，生成された時間(iat), 期限切れになる時間(exp)が確認できる．

## Testの実装．

jestを利用．  
 テスト様に，jtestのインスタンス化が可能である．

テストの際は，モック（本番に用いるオブジェクトなどを模擬的に作成すること）を利用する．

実際の開発で，Testを行うのは品質保証の意味合いが強い．

### 手順

1. JWTの取得．  
   localからサーバに，Username/Passwordを送信．その後，サーバーはtokenを返す．

2. JWTの認証．  
   localからサーバに，tokenを送信．その後，サーバーはtokenを認証する．

これによって，
署名による改ざんの確認，有効期限をつけることで，セキュアなtokenが発行可能，セッションと異なり，状態をサーバーで管理する必要がない，任意のデータをtokenに含めることができる．

## 備考

### HTTPメソッド

HTTPメソッドは，クライアントが行いたい処理をサーバに伝えるためのもの．  
 よく使われるHTTPメソッドは以下の通り．

1. GET: データの取得
2. POST: 新しいデータをサーバに送信.
3. PUT: 既存のデータを更新．
4. DELETE: 既存のデータを削除．
5. PATCH: 既存のデータを部分的に更新．
6. HEAD: データの本体を取得せずに，HTTPヘッダのみを取得．
7. OPTIONS: 使用可能なHTTPメソッドを取得．

### クラス図

1. 継承 `..|>`  
   継承は，一つのクラスが別のクラスの属性や振る舞いを受け継ぐことを示す．  
   以下のように実践で表す．

   ```mermaid
   classDiagram
       class A
       class B
       direction RL
       A ..> B
   ```

2. 依存 `..>`  
   依存は，あるクラスが他のクラスに一時的に依存していることを示す．  
   以下のように実践で表す．

   ```mermaid
   classDiagram
       class A
       class B
       direction RL
       A ..> B
   ```

3. 関連 `-->`  
   関連は二つのクラス間に論理的な接続があることを示す．  
   一方のクラスのオブジェクトが他方のクラスのオブジェクトにアクセスできることを意味する．  
   インスタンスを持ってなくてもアクセスできれば，関連は成り立つ．

   以下のように実践で表す．

   ```mermaid
   classDiagram
       class A
       class B
       direction RL
       A --> B
   ```

4. 集約 `o-->`  
   集約は，関連の特別な形で，「全体」と「部分」の関係を示す．  
   例えば，あるクラスが他のクラスを含むが，それぞれ独立して存在できるという関係である．  
   「車」クラスが「タイヤ」クラスを持つが，タイヤがなくても車は存在できるといった関係性．

   以下のように実践で表す．

   ```mermaid
   classDiagram
       class A
       class B
       direction RL
       A o--> B
   ```

5. 実現 `..|>`  
    実現は，クラスがインターフェースを実装すること表す．  
    以下のように実践で表す．
   ```mermaid
   classDiagram
       class A
       class B
       direction RL
       A ..|> B
   ```

### CLUD

CLUDは，create, read, update, deleteの頭文字をとったもの．  
 CLUDを実装することで，データベースを操作や管理を自在に行うことができるようになる.  
 また，データベースに限らず文脈内で使われるみたい．

### 残る疑問たち

- [x] Entityを変更した際に，Migrationを実行する前に，`$ npm run start:dev` したら，データベースの内容も変更されていた．これは，何故か．Migrationは，データベースを操作するSQLを発行するもので，これを実行しないとうまく行かないんじゃないのか？

      これは，synchronizeオプションがtrueになっていたから．
      また，migrationは，データベースのスキーマを変更するものではない．そのスキーマの変更履歴を管理するためにある．
      それは，長期の開発でデータベースの変更などの要求に応えるためである. そのため，Synchronizeはfalseにするべき．
