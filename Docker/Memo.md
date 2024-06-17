# Docker Notes

## Dockerとは

サンドボックス(完全隔離された空間)でアプリケーションを開発できるオープンソースプラットフォーム．  
軽量の仮想環境を**コンテナ**という．

## Dockerの仕組み

ある場所から別の場所へ貨物を輸送することと似ている(らしい)．  
一言で言えば，ソフトウェアの開発・デプロイを標準化する技術．

## Docker Engine

Docker Engineは，Dockerでアプリケーションを構築し，**コンテナ化するためのクライアントサーバー型アプリケーション**．

### クライアントサーバー型とは

- クライアント  
  サーバーに対してリクエストを送信するコンピューターまたはソフトウェア．クライアントは，サーバーから受け取った応答やデータを利用して，ユーザー2章を提供したり，特定のタスクを実行する．

- サーバー
  サーバーは，リソースやサービスを提供するコンピュータまたはソフトウェア．サーバーは常時稼働し，ネットワークを通じて，クライアントからのリクエストを受け取る．

この二つで構成される．

### クライアントサーバー型の特徴

- 分散型処理  
  システムの処理が複数のクライアントとサーバに分散されているため，効率的なリソースの利用が可能．
- 専門化  
  サーバーは，特定のリソースやサービスを提供するため，最適化された処理やセキュリティ対策ができる．
- スケーラビリティ  
  クライアントサーバー型は，クライアントやサーバーを追加することで，システムの処理能力を拡張できる．
- 柔軟性  
  クライアントとサーバーは独立しており，一方を変更または更新しても他方に最小限の影響しか与えない．

### Dockerとクライアントサーバ方式

Dockerは，アプリケーションとコンテナという軽量で独立したパッケージに格納して，実行環境から独立させる技術．  
Dockerを利用することで，クライアントサーバーシステムの開発，テスト，デプロイメントが容易になる．

Dcokerコンテナ

<img src="https://kinsta.com/wp-content/uploads/2022/10/Docker-Diagram.png" width=700>

## Docker image と Docker container

Dockerには，イメージとコンテナという概念がある．

簡潔にいうと，  
Docker imageは，オブジェクト指向のクラスに相当する．
Docker containerは，オブジェクト指向のインスタンスに相当する．

## Docker Command

- docker pull: イメージを取得する.
- docker run: イメージから新しいコンテナを初期化して立ち上げる．
  書き方は，`docker run <option> <image_name>`である．  
  主なオプションを紹介する．

  - d: バックグラウンドで実行する．
  - it: インタラクティブモードで実行する．これは，コンテナ内でbashを実行するために使用される．
  - p: 例えば，`-p 8080:80`で，ホストの8080ポートをコンテナの80ポートにマッピングする．
  - e: 環境変数を指定する．
  - v: ボリュームを指定する．
  - link: コンテナ間を連携させる.

- docker start: 既存コンテナを立ち上げる．
- docker stop: 既存コンテナを終了させる．
- docker ps: コンテナ一覧を表示する．
- docker exec: 起動中のコンテナに対して，コマンドを実行する．  
  書き方は，`docker exec <option> <container_name> <command> <command_argument>`である．

- docker <something> prune: 例えば，containerが入れば，未使用のコンテナを削除する．

- docker build: Dockerfileからイメージをビルドする．  
  書き方は，`-t <tag_name> -f <Dockerfile> <path>`

- docker rm: コンテナを削除する．
- docker rmi: イメージを削除する．

- docker cp: コンテナとホスト間でファイルをコピーする．
  ローカルからコンテナへのコピーは，`docker cp <local_path> <container_name>:<container_path>`である．
  コンテナからローカルへのコピーは，`docker cp <container_name>:<container_path> <local_path>`である．

## Dockerfile

## Nvidia Docker

論文コードは特定のバージョンに依存していることが多々あり，すでに構築されてある環境との競合が問題となる．  
そのため学習の環境構築には，dockerが有用．

複数バージョンが存在する．

- base: 最小構成
- runtime: baseを拡張したもの
- devel: runtimeを拡張したもの

develのみで，nvccが使える．

[CUDAのコンテナはこちらから確認](https://hub.docker.com/r/nvidia/cuda)できる．

## 疑問

- image, containerをよく理解していない．
  接続するのは，container??

- FROMが複数ある，ベースイメージがなぜ複数あるのか？
