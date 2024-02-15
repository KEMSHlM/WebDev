# DB 基礎知識

## 1. Docker によるDB構築

以下は，docker-compose.yml の例である．

```yaml
version: "3.7"
services:
  postgres:
    image: postgres:12.2-alpine
    container_name: todo
    ports:
      - 5432:5432
    volumes:
      - ./docker/postgres/init.d:/docker-entrypoint-initdb.d
      - ./docker/postgres/pgdata:/var/lib/postgresql/data
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
      POSTGRES_INITDB_ARGS: "--encoding=UTF-8"
      POSTGRES_DB: postgres
    hostname: postgres
    restart: always
    user: root
```

このdocker-compose.yml を`$ docker-compose up -d` で起動する．

生成されたディレクトリ構造は以下の様になる．

```shell
.
├── pgadmin
│   ├── azurecredentialcache
│   ├── pgadmin4.db
│   ├── sessions
│   └── storage
└── postgres
    ├── init.d
    └── pgdata
```

生成されたinit.dディレクトリは，PostgreSQLデータベースコンテナを初期化するために使用されるスクリプトである．  
volumes設定で，'./docker/postgres/init.d:/docker-entrypoint-initdb.d'の欄は，  
ホスト:'./docker/postgres/init.d'  
コンテナ:'/docker-entrypoint-initdb.d'
としてマウントされる．

/var/lib/postgres/data は，Postgresデータベースのデータファイルが保存される場所である．
