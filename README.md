# 職務経歴書

## 基本情報

| Name | 矢崎 祐樹 |
| --- | --- |
| Blog | [zackey推し](https://kic-yuuki.hatenablog.com/) |
| Qiita | [@zaki_zaki](https://qiita.com/zaki_zaki) |
| GitHub | [@zakizaki-ri9](https://github.com/zakizaki-ri9) |
| SpeakerDeck | [zucky_zakizaki](https://speakerdeck.com/zucky_zakizaki) |
| Forkwell | [@zakizaki-ri9](https://portfolio.forkwell.com/@zakizaki-ri9) |
| LAPRAS | [プロフィール](https://lapras.com/public/FCUDBRL) |

## スキル

### 言語/フレームワーク/ライブラリ

- Ruby
  - Ruby(2.3~)
  - Ruby on Rails(5.1~)
    - RailsをベースとしたAPI開発の経験あり
    - ActiveRecordのマイグレーションおよび[ridgepole](https://github.com/winebarrel/ridgepole)の使用経験あり
- JavaScript / TypeScript
  - Vue.js 3.x
  - Nuxt3
- C#
  - .NET Framework(4.x)
- Java
  - JSP・サーブレット
- Python
  - 2.x, 3.x
  - Django をベースとした API やバッチ処理の設計・実装

### DB

- MySQL(5.7~)
- PostgreSQL(10.0~)
- SQLServer(2017~)
- Oracle(11=)

### ツール・OS・他

- Git / GitHub
- Slack / ChatWork
- Redash
- Docker
- Windows / macOS
- Visual Studio Code
- AWS
  - EC2 / S3 / CodePipeline / RDS / WAF / ElasticBeanstalk
    - 一から構築した経験はない
    - 概念を理解、変更（メンテナンス）を実施
  - AWSCLIの使用経験あり
- GCP
  - Google App Engine / CloudFunctions / CloudScheduler / BigQuery

## 強み / 興味があること

- 強み
  - Ruby on Rails / Python / TypeScript / Vue.jsの実務経験
  - フロントエンド・サーバーサイドまでひととおりの実装経験
  - すでに実装されたシステムを理解、拡張・保守
  - 足回り（eslint / Prettierなど）の整備
- 興味があること
  - フロントエンドを中心としたアプリケーション開発
  - フロントエンド・サーバーサイド問わず、事業成長・成功を目標とした開発
  - ジェネレーティブ AI を利用した開発速度向上・事業支援導入

## 主な課外活動・実績
### 開発系

- https://github.com/engineers-lt/aneki-bot-go-netlify-functions
  - Go / Netlify Functions
  - [エンジニアの登壇を応援する会](https://portal.engineers-lt.info)のSlackbotで使用
- https://github.com/zakizaki-ri9/gridsome-trattoria-site
  - Gridsome（Vue.js製の静的サイトジェネレーター） / Netlifyでホスティング
  - [実家のお店](https://www.instagram.com/trattoriaporto/)の[ホームページ](https://trattoria-e-bar-porto-yamanashi.netlify.com)

### 執筆系

- [【合同誌】エンジニアの成長を応援する本](https://booth.pm/ja/items/1317843)の第11章を執筆
- [【合同誌】ワンストップ目標設定](https://booth.pm/ja/items/1572943)の第25章を執筆

### コミュニティ系

- [エンジニアの登壇を応援する会](https://portal.engineers-lt.info)
  - コアスタッフとしての参加経験あり
    - イベント参加確認のbot開発
    - 合宿（ワークショップ）のしおり作成等を担当
      - [合宿参加レポート](https://kic-yuuki.hatenablog.com/entry/2019/03/12/093359)
- [技術書同人誌博覧会](https://gishohaku.dev)
  - コアスタッフとしての参加経験あり
    - 主に[公式ブログ](https://blog.gishohaku.dev)の執筆担当

## 職務経歴

### 2020.06 - 現在: 株式会社ビザスク

- 職務: エンジニア

#### 既存 toB 向けアプリケーションの再設計・リライト(2022.12~)

- 担当:主にフロントエンド
- 業務:詳細設計、製造、単体テスト
- 技術スタック:Nuxt3 / Auth0 / Terraform

主に次を行いました。

- PDM, 開発側リーダーとともに再設計に伴う要件定義、画面設計〜実装
- Nuxt3 を利用したフロントエンド周りの実装
  - Storybook, Chromatic を利用したコンポーネント開発、デザイナーと協働
  - Vitest, UnoCss, Sentry の導入
- vite-plugin-singlefile を利用した Auth0 向けの HTML ファイル生成

#### 社内向け管理画面開発(2020.06~2022.12)

- 担当:フロント、サーバサイド
- 業務:詳細設計、製造、単体テスト
- 技術スタック:Python2.x / Django1.x / AngularJS / Vue.js2.x / Google App Engine / MySQL5.7

主に次を行いました。

- ディレクターやプロダクトオーナーがまとめた要件を元に、サーバサイド〜フロントを包括して設計・実装
- ユーザー系テーブル新設に伴う、データマイグレーション・参照先モデルの変更
- LTS 切れの既存機能をリライト計画・進行
  - フロントエンドのコードを AngularJS -> Vue2 x CompositionAPI へのリライト
  - サーバサイドのコードを Python2.x -> Python3.x へのリライト

### 2019.05 - 2022.02: 株式会社ランチェスター

- 職務: エンジニア

#### 副業(2020.10~2022.02)

- 担当: フロント、CI周り
- 業務:詳細設計、製造、単体テスト
- 技術スタック:Ruby on Rails5 / Vue.js / Docker / GitHub Actions / AWS(ECR)

主に次を行いました。

- フロントエンドを中心とした機能開発
- フロントエンド（Vue.js） の TypeScript 化
- GitHub Actions x ECR を利用した CI 整備
  - サーバサイド: RSpec, Rubocop の実行と Reviewdog によるコメント
  - フロント: ESLint の実行と Reviewdog によるコメント

#### プロダクト・ソリューション開発(2019.05~2020.05)

- 担当: メイン：フロント、サブ：バックエンド・インフラ
- 業務:詳細設計、製造、単体テスト
- 技術スタック:Ruby on Rails5 / Vue.js / Docker / AWS(ElasticBeanstalk,WAF,CodePipeline)

メイン業務は、自社プロダクトを元に導入企業向けのカスタマイズ開発。  
サブ業務は、自社プロダクトのIssueを拾い修正PRを投げるといった形で業務を遂行しました。

開発はVue.jsを用いたフロントエンドの開発をメインで担当し、  

- 冗長なコードをコンポーネント化するなどのリファクター
- 足回りの整備（eslint x prettier x lint-staged x huskyの導入）
- ライブラリバージョンアップ調査（vue-cli v2→v4など）

を行いました。

### 2017.12 - 2019.04: 株式会社Rosso

- 職務:システムエンジニア

#### マーケティング支援サービスの開発と拡張(2018.09~2019.04)

- 担当:バックエンド、フロント
- 業務:要件整理、詳細設計、製造、単体テスト
- 技術スタック:Ruby on Rails5 / Vue.js / Docker / AWS(SQS,S3,RDB - MySQL5.7) / PostgreSQL10.x

メンバーとして参画、10日間を1Sprintとしたスクラム開発を行いました。

コードレビューはGitHubのPR、単体テストはRSpecを用いたユニットテストを実施しました。

1. 要件定義(プロダクトオーナーの要件を明確化)
2. 詳細設計(新機能の場合のみ、改修は規模に応じて)
3. 製造・コードレビュー・単体テスト(ユニットテスト)
4. 結合テスト(手動でのシナリオテスト)
5. 各種(PM,QA)レビュー

サービスのメジャーバージョンアップということで、  
元々Slimで書かれていたViewをVue.jsでSPA化するという方針がありました。

私はMockから使用頻度の高い要素を洗い出し→コンポーネント化することに成功しました。

#### 機器管理システムの保守(2018.07~2018.08)

- 担当:SE
- 業務:詳細設計、製造、結合テスト、保守
- 技術スタック:Java5 / JSP・Servlet / MySQL5.x

10年以上続いている機器管理システムの保守および拡張を行うSEという立ち位置で参画しました。

主にユーザー問い合わせ内容の深掘り、  
ソースコードやDBから調査＆報告書をExcelやRedmineにまとめるということを行いました。

#### 既存施工管理Webアプリケーションの拡張対応案件(2017.12~2018.06)

- 担当:SE
- 業務:要件整理、詳細設計、製造、結合テスト
- 技術スタック:ASP.NET MVC5 / VB.NET / JQuery / D3.js / Azure(CosmosDB,SQLDatabase)

既存施工管理Webアプリケーションの拡張対応案件にSEとして参画しました。

DBをOracleからAzureへ移行、  
CosmosDBに格納された座標情報をもとに地形断面図を表示するという案件でした。

私は地形断面図のUI製造をメインで担当し、機能面や表示内容の要件整理とD3.jsによる画面実装を行いました。

また、CosmosDBからの情報を整形するためにASP.NETで製造されたWebAPIの改修にも携わりました。

### 2010.04 - 2017.11: 株式会社イオ

- 職務:システムエンジニア/プログラマ

#### 作画ミス検出アプリ開発(2016.10~2017.03)

- 担当:SE
- 業務:技術調査、要件定義、基本設計、詳細設計、製造、テスト
- 技術スタック:Java8 / JavaFX / Python / OpenCV2 / SQLite

JavaFXを利用したLinux(Ubuntu)向けGUIアプリケーション開発のリーダーとして参画しました。

主に顧客との要件整理と仕様調整、スケジュール調整を行いました。

また、技術調査のため、PythonとJavaでOpenCVという画像編集用ライブラリを用いて  
動画ファイルから画像取得、画像加工の調査を行いました。

#### デジタルサイネージ開発(2016.10~2017.03)

- 担当:PG
- 業務:詳細設計、製造
- 技術スタック:Java6 / Android

デジタルサイネージ（大きなディスプレイ）のアプリおよび、  
サーバと常時通信するサービス開発へスポット参画しました。

PreferenceActivityという設定情報を保存する仕組みを使って設定画面の製造を行いました。

#### 工場向け生産管理システム開発(2010.04~2017.11)

- 担当:PG/SE
- 業務:要件定義、基本設計、詳細設計、製造、テスト、保守、現地サポート
- 技術スタック:C#(WindowsForms) / ASP.NET XML Webサービス / SQLServer(2008,2012,2015,2017) / VC++

特定企業向けの生産管理システム開発に参画し、  
CASIO製PDA（VC++）、Windowsアプリ（C#）を開発しました。

PDA〜サーバ間はWebサービス（ASP.NET）、DBはSQLServerを使用しました。

新卒の頃から約8年間携わり、  
製造→設計→要件定義＆保守のように下流→上流工程をひととおり経験いたしました。

システム拡大に伴い、DBアクセス遅延問題が発生しましたが、  
全体的なSQLのリファクタリング（インデックスが使用されているか、SQL構文や実行計画確認など）を実施、  
改善に従事しました。
