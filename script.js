// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.Download",
      "filePrefix": "study",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "SubjectID": "${ Math.round(this.random.random() * 9000 + 1000)}"
        }
      ],
      "sample": {
        "mode": "draw-shuffle"
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Loop",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "Sequence",
        "content": [
          {
            "type": "lab.html.Page",
            "items": [
              {
                "type": "text",
                "title": "研究に関する説明",
                "content": "\u003Cp\u003E本調査の実施者は大阪教育大学教育学部教育心理科学専攻4回生水脇音です（実験監督：大阪教育大学教育学部 山口正寛）。私はソーシャルサポートについて研究を行っております。\u003C\u002Fp\u003E\n\u003Col\u003E\n \n    \u003Cli\u003E本アンケートの手続きと対象者\n        \u003Cbr\u003Eもし，あなたが本アンケートに参加にした場合，あなたにはいくつかのアンケート項目に回答していただきます。\nこのアンケートは問ほどで構成されており、所要時間は10～15分程度です。\n    \u003C\u002Fli\u003E\n    \u003Cli\u003E潜在的なリスク・苦痛など\n        \u003Cbr\u003E調査による多少の疲労は除き，潜在的なリスクや苦痛はありません。\n    \u003C\u002Fli\u003E\n    \u003Cli\u003E匿名性の確保\n        \u003Cbr\u003E本アンケートによって得られた情報は法律による開示請求を除き，匿名性が維持されます。\n 　\u003C\u002Fli\u003E\n    \u003Cli\u003E参加と中止\n        \u003Cbr\u003Eあなたは本調査への参加は任意によるものです。また，参加した場合でも，いつでも，どのような理由でも，途中で調査を中止することができます。１度「次へ進む」を押すと、戻ることはできません。\n    \u003C\u002Fli\u003E\n    \u003Cli\u003E調査データの保存\n        \u003Cbr\u003E本アンケートによって得られたデータは，暗号化されパスワードをかけた状態の電子データとして保存されます。その上で，個人が特定されないようにデータを匿名化し，私がデータの解析・レポートの作成を行うために使用されます。\n　\u003C\u002Fli\u003E\n　\u003Cli\u003E本調査への質問は、水脇（g217135＠ex.osaka-kyoiku.ac.jp)へお問い合わせください。\n\u003C\u002Fol\u003E"
              },
              {
                "required": true,
                "type": "checkbox",
                "label": "調査への参加に同意いただけますか？同意いただける方はチェックした上で、「次へ進む」をクリックしてアンケートに回答してください。同意いただけない方は，ESCを押した後，ウィンドウを閉じてください。",
                "options": [
                  {
                    "label": "上記の説明をよく読み，理解した上で，実験・調査への参加に同意します。",
                    "coding": "informedConsent"
                  }
                ],
                "name": "esc"
              },
              {
                "required": true,
                "type": "html",
                "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ進む\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                "name": ""
              }
            ],
            "scrollTop": true,
            "submitButtonText": "次へ進む　　　",
            "submitButtonPosition": "hidden",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "informedConsent",
            "width": "l"
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "type": "text",
                "title": "はじめに",
                "content": "まずはあなた自身のことについてお聞きします。"
              },
              {
                "required": true,
                "type": "input",
                "label": "あなたの年齢を教えて下さい。",
                "attributes": {
                  "type": "number",
                  "min": "18",
                  "max": "39"
                },
                "help": "半角数字で入力して下さい。例えば20歳だったとしたら 20 と入力します。",
                "name": "age"
              },
              {
                "required": true,
                "type": "radio",
                "label": "あなたの性別を教えて下さい。",
                "options": [
                  {
                    "label": "男性",
                    "coding": "1"
                  },
                  {
                    "label": "女性",
                    "coding": "2"
                  },
                  {
                    "label": "答えない",
                    "coding": "3"
                  }
                ],
                "name": "gender"
              },
              {
                "required": true,
                "type": "html",
                "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ進む\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                "name": ""
              }
            ],
            "scrollTop": true,
            "submitButtonText": "次へ進む",
            "submitButtonPosition": "hidden",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Face"
          },
          {
            "type": "lab.flow.Sequence",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Sequence",
            "shuffle": true,
            "content": [
              {
                "type": "lab.flow.Sequence",
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "Sequence",
                "shuffle": true,
                "content": [
                  {
                    "type": "lab.html.Page",
                    "items": [
                      {
                        "required": true,
                        "type": "text",
                        "title": "現在のあなたについての質問をします。",
                        "content": "あなたに不利益を被ることはありません、率直にご回答ください。\n※１度「次へ進む」を押すと、戻ることはできません。回答が無効になるため、ブラウザの戻るボタンを使用しないでください。"
                      },
                      {
                        "required": true,
                        "type": "likert",
                        "items": [
                          {
                            "label": "私は目上の人に仕返しや報復をしたいと思うことがある",
                            "coding": "Q1"
                          },
                          {
                            "label": "私は物騒な状況に飛び込むようなことはしない",
                            "coding": "Q2"
                          },
                          {
                            "label": "報復は、即座に、冷静に行うものだ",
                            "coding": "Q3"
                          },
                          {
                            "label": "私は他人からよく手に負えないと言われる",
                            "coding": "Q4"
                          },
                          {
                            "label": "私は他人につらく当たっても平気だというのが実際のところだ",
                            "coding": "Q5"
                          },
                          {
                            "label": "私をからかう者はいつまでもその行為を後悔することになる",
                            "coding": "Q6"
                          },
                          {
                            "label": "私は人に迷惑をかけるような問題を起こしていない",
                            "coding": "Q7"
                          },
                          {
                            "label": "私は後先考えずに、ほとんど知らない異性と関係を持つのを楽しむことがある",
                            "coding": "Q8"
                          },
                          {
                            "label": "私は誰に何を言ってでも、欲しいものを手に入れる",
                            "coding": "Q9"
                          }
                        ],
                        "width": "5",
                        "anchors": [
                          "\u003Cspan class = 'tategaki'\u003E非常にそう思う\u003C\u002Fspan\u003E",
                          "\u003Cspan class = 'tategaki'\u003Eまあそうだ\u003C\u002Fspan\u003E",
                          "\u003Cspan class = 'tategaki'\u003Eどちらとも言えない\u003C\u002Fspan\u003E",
                          "\u003Cspan class = 'tategaki'\u003Eあまりそう思わない\u003C\u002Fspan\u003E",
                          "\u003Cspan class = 'tategaki'\u003E全くそう思わない\u003C\u002Fspan\u003E"
                        ],
                        "label": "以下の質問について、当てはまるか否かをお答え下さい。",
                        "shuffle": true,
                        "name": "psychopathy"
                      },
                      {
                        "required": true,
                        "type": "html",
                        "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ進む\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                        "name": ""
                      }
                    ],
                    "scrollTop": true,
                    "submitButtonText": "Continue →",
                    "submitButtonPosition": "hidden",
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "personality-psychopathy"
                  },
                  {
                    "type": "lab.html.Page",
                    "items": [
                      {
                        "required": true,
                        "type": "text",
                        "title": "あなた自身に関する質問をします。",
                        "content": "あなたに不利益を被ることはありません、率直にご回答ください。\n※１度「次へ進む」を押すと、戻ることはできません。回答が無効になるため、ブラウザの戻るボタンを使用しないでください。"
                      },
                      {
                        "required": true,
                        "type": "likert",
                        "items": [
                          {
                            "label": "他の誰かに自分の秘密を教えないということは賢明なことだ",
                            "coding": "Q1"
                          },
                          {
                            "label": "自分の思い通りになるように、賢く周りの人々を扱いたい",
                            "coding": "Q2"
                          },
                          {
                            "label": "とにかく、重要な人物は自分の味方に付けておいたほうが良い",
                            "coding": "Q3"
                          },
                          {
                            "label": "将来その人が自分の役に立つかもしれないので、人との直接の争いは避けるようにしている",
                            "coding": "Q4"
                          },
                          {
                            "label": "後になって誰かに対して利用できるような情報に目を配っておくことは賢明なことだ",
                            "coding": "Q5"
                          },
                          {
                            "label": "誰かに復讐するなら、それに最適な時がくるまでじっと待つべきだ",
                            "coding": "Q6"
                          },
                          {
                            "label": "自分の良い評判を守るために、他の人に秘密にしなければならないことがある",
                            "coding": "Q7"
                          },
                          {
                            "label": "自分の計画が、他の誰かの利益ではなく自分の利益になるように取り計らっている",
                            "coding": "Q8"
                          },
                          {
                            "label": "ほとんどの人々は簡単に踊らされたり、操られたりしてしまうものだ",
                            "coding": "Q9"
                          }
                        ],
                        "width": "5",
                        "anchors": [
                          "\u003Cspan class = 'tategaki'\u003E非常にそう思う\u003C\u002Fspan\u003E",
                          "\u003Cspan class = 'tategaki'\u003Eまあそうだ\u003C\u002Fspan\u003E",
                          "\u003Cspan class = 'tategaki'\u003Eどちらとも言えない\u003C\u002Fspan\u003E",
                          "\u003Cspan class = 'tategaki'\u003Eあまりそう思わない\u003C\u002Fspan\u003E",
                          "\u003Cspan class = 'tategaki'\u003E全くそう思わない\u003C\u002Fspan\u003E"
                        ],
                        "label": "以下の質問について、当てはまるか否かをお答え下さい。",
                        "shuffle": true,
                        "name": "Machiavellianism"
                      },
                      {
                        "required": true,
                        "type": "html",
                        "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ進む\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                        "name": ""
                      }
                    ],
                    "scrollTop": true,
                    "submitButtonText": "Continue →",
                    "submitButtonPosition": "hidden",
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "personality-Machiavellianism"
                  },
                  {
                    "type": "lab.html.Page",
                    "items": [
                      {
                        "required": true,
                        "type": "text",
                        "title": "あなた自身に関する質問をします。",
                        "content": "あなたに不利益を被ることはありません、率直にご回答ください。\n※１度「次へ進む」を押すと、戻ることはできません。回答が無効になるため、ブラウザの戻るボタンを使用しないでください。"
                      },
                      {
                        "required": true,
                        "type": "likert",
                        "items": [
                          {
                            "label": "周りの人は私を生まれながらのリーダーだと思っている",
                            "coding": "Q1"
                          },
                          {
                            "label": "私は注目の的になることが嫌いだ",
                            "coding": "Q2"
                          },
                          {
                            "label": "私なしではグループの多くの活動が滞ってしまう",
                            "coding": "Q3"
                          },
                          {
                            "label": "周りの人がそう言っているので私は特別な人間なのだと思う",
                            "coding": "Q4"
                          },
                          {
                            "label": "私は地位の高い重要な人物と親しくなるのを好んでいる",
                            "coding": "Q5"
                          },
                          {
                            "label": "私は褒められると恥ずかしくなってしまう",
                            "coding": "Q6"
                          },
                          {
                            "label": "私はこれまでに著名な人物にたとえられたことがある",
                            "coding": "Q7"
                          },
                          {
                            "label": "私は平均的でたいしたことのない人間だ",
                            "coding": "Q8"
                          },
                          {
                            "label": "私は自分が受けるに値する尊敬を集めるべき人間だ",
                            "coding": "Q9"
                          }
                        ],
                        "width": "5",
                        "anchors": [
                          "\u003Cspan class = 'tategaki'\u003E非常にそう思う\u003C\u002Fspan\u003E",
                          "\u003Cspan class = 'tategaki'\u003Eまあそうだ\u003C\u002Fspan\u003E",
                          "\u003Cspan class = 'tategaki'\u003Eどちらとも言えない\u003C\u002Fspan\u003E",
                          "\u003Cspan class = 'tategaki'\u003Eあまりそう思わない\u003C\u002Fspan\u003E",
                          "\u003Cspan class = 'tategaki'\u003E全くそう思わない\u003C\u002Fspan\u003E"
                        ],
                        "label": "以下の質問について、当てはまるか否かをお答え下さい。",
                        "shuffle": true,
                        "name": "narcissism"
                      },
                      {
                        "required": true,
                        "type": "html",
                        "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ進む\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                        "name": ""
                      }
                    ],
                    "scrollTop": true,
                    "submitButtonText": "Continue →",
                    "submitButtonPosition": "hidden",
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "personality-narcissism"
                  }
                ]
              },
              {
                "type": "lab.flow.Sequence",
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "Sequence",
                "shuffle": true,
                "content": [
                  {
                    "type": "lab.html.Page",
                    "items": [
                      {
                        "type": "text",
                        "title": "過去のあなたについての質問をします。13歳～17歳の頃を思い出して回答してください。",
                        "content": "あなたに不利益を被ることはありません、率直にご回答ください。\n※１度「次へ進む」を押すと、戻ることはできません。回答が無効になるため、ブラウザの戻るボタンを使用しないでください。"
                      },
                      {
                        "required": true,
                        "type": "radio",
                        "label": "あなたは13歳～17歳の間に、ビール・サワー・ワイン・日本酒などのアルコール飲料を飲んだことがありますか？",
                        "options": [
                          {
                            "label": "全くしたことがない",
                            "coding": "0"
                          },
                          {
                            "coding": "1",
                            "label": "1回したことがある"
                          },
                          {
                            "coding": "2",
                            "label": "2回したことがある"
                          },
                          {
                            "coding": "3",
                            "label": "3回以上したことがある"
                          }
                        ],
                        "name": "delinquency1"
                      },
                      {
                        "required": true,
                        "type": "html",
                        "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ進む\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                        "name": ""
                      }
                    ],
                    "scrollTop": true,
                    "submitButtonText": "Continue →",
                    "submitButtonPosition": "hidden",
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "delinquency1"
                  },
                  {
                    "type": "lab.html.Page",
                    "items": [
                      {
                        "type": "text",
                        "title": "過去のあなたについての質問をします。13歳～17歳の頃を思い出して回答してください。",
                        "content": "あなたに不利益を被ることはありません、率直にご回答ください。\n※１度「次へ進む」を押すと、戻ることはできません。回答が無効になるため、ブラウザの戻るボタンを使用しないでください。"
                      },
                      {
                        "required": true,
                        "type": "radio",
                        "label": "あなたは13歳～17歳の間に理由もないのに、学校を丸一日さぼったことがありますか？",
                        "options": [
                          {
                            "label": "全くしたことがない",
                            "coding": "0"
                          },
                          {
                            "coding": "1",
                            "label": "1回したことがある"
                          },
                          {
                            "coding": "2",
                            "label": "2回したことがある"
                          },
                          {
                            "coding": "3",
                            "label": "3回以上したことがある"
                          }
                        ],
                        "name": "delinquency2"
                      },
                      {
                        "required": true,
                        "type": "html",
                        "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ進む\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                        "name": ""
                      }
                    ],
                    "scrollTop": true,
                    "submitButtonText": "Continue →",
                    "submitButtonPosition": "hidden",
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "delinquency2"
                  },
                  {
                    "type": "lab.html.Page",
                    "items": [
                      {
                        "type": "text",
                        "title": "過去のあなたについての質問をします。13歳～17歳の頃を思い出して回答してください。",
                        "content": "あなたに不利益を被ることはありません、率直にご回答ください。\n※１度「次へ進む」を押すと、戻ることはできません。回答が無効になるため、ブラウザの戻るボタンを使用しないでください。"
                      },
                      {
                        "required": true,
                        "type": "radio",
                        "label": "あなたは13歳～17歳の間にバスや電車で、キセルや無賃乗車をしたり、しようとしたことがありますか？",
                        "options": [
                          {
                            "label": "全くしたことがない",
                            "coding": "0"
                          },
                          {
                            "coding": "1",
                            "label": "1回したことがある"
                          },
                          {
                            "coding": "2",
                            "label": "2回したことがある"
                          },
                          {
                            "coding": "3",
                            "label": "3回以上したことがある"
                          }
                        ],
                        "name": "delinquency3"
                      },
                      {
                        "required": true,
                        "type": "html",
                        "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ進む\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                        "name": ""
                      }
                    ],
                    "scrollTop": true,
                    "submitButtonText": "Continue →",
                    "submitButtonPosition": "hidden",
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "delinquency3"
                  },
                  {
                    "type": "lab.html.Page",
                    "items": [
                      {
                        "type": "text",
                        "title": "過去のあなたについての質問をします。13歳～17歳の頃を思い出して回答してください。",
                        "content": "あなたに不利益を被ることはありません、率直にご回答ください。\n※１度「次へ進む」を押すと、戻ることはできません。回答が無効になるため、ブラウザの戻るボタンを使用しないでください。"
                      },
                      {
                        "required": true,
                        "type": "radio",
                        "label": "あなたは13歳～17歳の間に勝手に入ってはいけない場所や建物に入ったことがありますか？",
                        "options": [
                          {
                            "label": "全くしたことがない",
                            "coding": "0"
                          },
                          {
                            "coding": "1",
                            "label": "1回したことがある"
                          },
                          {
                            "coding": "2",
                            "label": "2回したことがある"
                          },
                          {
                            "coding": "3",
                            "label": "3回以上したことがある"
                          }
                        ],
                        "name": "delinquency4"
                      },
                      {
                        "required": true,
                        "type": "html",
                        "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ進む\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                        "name": ""
                      }
                    ],
                    "scrollTop": true,
                    "submitButtonText": "Continue →",
                    "submitButtonPosition": "hidden",
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "delinquency4"
                  },
                  {
                    "type": "lab.html.Page",
                    "items": [
                      {
                        "type": "text",
                        "title": "過去のあなたについての質問をします。13歳～17歳の頃を思い出して回答してください。",
                        "content": "あなたに不利益を被ることはありません、率直にご回答ください。\n※１度「次へ進む」を押すと、戻ることはできません。回答が無効になるため、ブラウザの戻るボタンを使用しないでください。"
                      },
                      {
                        "required": true,
                        "type": "radio",
                        "label": "あなたは13歳～17歳の間に、家族以外の人の持ち物や乗り物（自転車・バイク・自動車など）をわざと壊したり、傷つけたり、燃やしたりしたことがありますか？（落書きも含む）",
                        "options": [
                          {
                            "label": "全くしたことがない",
                            "coding": "0"
                          },
                          {
                            "coding": "1",
                            "label": "1回したことがある"
                          },
                          {
                            "coding": "2",
                            "label": "2回したことがある"
                          },
                          {
                            "coding": "3",
                            "label": "3回以上したことがある"
                          }
                        ],
                        "name": "delinquency5"
                      },
                      {
                        "required": true,
                        "type": "html",
                        "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ進む\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                        "name": ""
                      }
                    ],
                    "scrollTop": true,
                    "submitButtonText": "Continue →",
                    "submitButtonPosition": "hidden",
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "delinquency5"
                  },
                  {
                    "type": "lab.html.Page",
                    "items": [
                      {
                        "type": "text",
                        "title": "過去のあなたについての質問をします。13歳～17歳の頃を思い出して回答してください。",
                        "content": "あなたに不利益を被ることはありません、率直にご回答ください。\n※１度「次へ進む」を押すと、戻ることはできません。回答が無効になるため、ブラウザの戻るボタンを使用しないでください。"
                      },
                      {
                        "required": true,
                        "type": "radio",
                        "label": "あなたは13歳～17歳の間に保護者の許しがないのに、外泊したり、家出したことがありますか？",
                        "options": [
                          {
                            "label": "全くしたことがない",
                            "coding": "0"
                          },
                          {
                            "coding": "1",
                            "label": "1回したことがある"
                          },
                          {
                            "coding": "2",
                            "label": "2回したことがある"
                          },
                          {
                            "coding": "3",
                            "label": "3回以上したことがある"
                          }
                        ],
                        "name": "delinquency6"
                      },
                      {
                        "required": true,
                        "type": "html",
                        "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ進む\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                        "name": ""
                      }
                    ],
                    "scrollTop": true,
                    "submitButtonText": "Continue →",
                    "submitButtonPosition": "hidden",
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "delinquency6"
                  },
                  {
                    "type": "lab.html.Page",
                    "items": [
                      {
                        "type": "text",
                        "title": "過去のあなたについての質問をします。13歳～17歳の頃を思い出して回答してください。",
                        "content": "あなたに不利益を被ることはありません、率直にご回答ください。\n※１度「次へ進む」を押すと、戻ることはできません。回答が無効になるため、ブラウザの戻るボタンを使用しないでください。"
                      },
                      {
                        "required": true,
                        "type": "radio",
                        "label": "あなたは13歳～17歳の間に免許を取っていないのに自転車・バイク・スクーターに乗ったことがありますか？",
                        "options": [
                          {
                            "label": "全くしたことがない",
                            "coding": "0"
                          },
                          {
                            "coding": "1",
                            "label": "1回したことがある"
                          },
                          {
                            "coding": "2",
                            "label": "2回したことがある"
                          },
                          {
                            "coding": "3",
                            "label": "3回以上したことがある"
                          }
                        ],
                        "name": "delinquency7"
                      },
                      {
                        "required": true,
                        "type": "html",
                        "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ進む\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                        "name": ""
                      }
                    ],
                    "scrollTop": true,
                    "submitButtonText": "Continue →",
                    "submitButtonPosition": "hidden",
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "delinquency7"
                  },
                  {
                    "type": "lab.html.Page",
                    "items": [
                      {
                        "type": "text",
                        "title": "過去のあなたについての質問をします。13歳～17歳の頃を思い出して回答してください。",
                        "content": "あなたに不利益を被ることはありません、率直にご回答ください。\n※１度「次へ進む」を押すと、戻ることはできません。回答が無効になるため、ブラウザの戻るボタンを使用しないでください。"
                      },
                      {
                        "required": true,
                        "type": "radio",
                        "label": "あなたは13歳～17歳の間に広場などの公共の場所で集団で騒いだことがありますか？",
                        "options": [
                          {
                            "label": "全くしたことがない",
                            "coding": "0"
                          },
                          {
                            "coding": "1",
                            "label": "1回したことがある"
                          },
                          {
                            "coding": "2",
                            "label": "2回したことがある"
                          },
                          {
                            "coding": "3",
                            "label": "3回以上したことがある"
                          }
                        ],
                        "name": "delinquency8"
                      },
                      {
                        "required": true,
                        "type": "html",
                        "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ進む\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                        "name": ""
                      }
                    ],
                    "scrollTop": true,
                    "submitButtonText": "Continue →",
                    "submitButtonPosition": "hidden",
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "delinquency8"
                  },
                  {
                    "type": "lab.html.Page",
                    "items": [
                      {
                        "type": "text",
                        "title": "過去のあなたについての質問をします。13歳～17歳の頃を思い出して回答してください。",
                        "content": "あなたに不利益を被ることはありません、率直にご回答ください。\n※１度「次へ進む」を押すと、戻ることはできません。回答が無効になるため、ブラウザの戻るボタンを使用しないでください。"
                      },
                      {
                        "required": true,
                        "type": "radio",
                        "label": "あなたは13歳～17歳の間に他人の自転車・バイク・スクーターの部品を持っていったり、持っていこうとしたことがありますか？",
                        "options": [
                          {
                            "label": "全くしたことがない",
                            "coding": "0"
                          },
                          {
                            "coding": "1",
                            "label": "1回したことがある"
                          },
                          {
                            "coding": "2",
                            "label": "2回したことがある"
                          },
                          {
                            "coding": "3",
                            "label": "3回以上したことがある"
                          }
                        ],
                        "name": "delinquency9"
                      },
                      {
                        "required": true,
                        "type": "html",
                        "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ進む\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                        "name": ""
                      }
                    ],
                    "scrollTop": true,
                    "submitButtonText": "Continue →",
                    "submitButtonPosition": "hidden",
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "delinquency9"
                  },
                  {
                    "type": "lab.html.Page",
                    "items": [
                      {
                        "type": "text",
                        "title": "過去のあなたについての質問をします。13歳～17歳の頃を思い出して回答してください。",
                        "content": "あなたに不利益を被ることはありません、率直にご回答ください。\n※１度「次へ進む」を押すと、戻ることはできません。回答が無効になるため、ブラウザの戻るボタンを使用しないでください。"
                      },
                      {
                        "required": true,
                        "type": "radio",
                        "label": "あなたは13歳～17歳の間に学校のものをわざと壊したり、傷つけたり、燃やしたりしたことがありますか？（落書きも含む）",
                        "options": [
                          {
                            "label": "全くしたことがない",
                            "coding": "0"
                          },
                          {
                            "coding": "1",
                            "label": "1回したことがある"
                          },
                          {
                            "coding": "2",
                            "label": "2回したことがある"
                          },
                          {
                            "coding": "3",
                            "label": "3回以上したことがある"
                          }
                        ],
                        "name": "delinquency10"
                      },
                      {
                        "required": true,
                        "type": "html",
                        "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ進む\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                        "name": ""
                      }
                    ],
                    "scrollTop": true,
                    "submitButtonText": "Continue →",
                    "submitButtonPosition": "hidden",
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "delinquency10"
                  },
                  {
                    "type": "lab.html.Page",
                    "items": [
                      {
                        "type": "text",
                        "title": "過去のあなたについての質問をします。13歳～17歳の頃を思い出して回答してください。",
                        "content": "あなたに不利益を被ることはありません、率直にご回答ください。\n※１度「次へ進む」を押すと、戻ることはできません。回答が無効になるため、ブラウザの戻るボタンを使用しないでください。"
                      },
                      {
                        "required": true,
                        "type": "radio",
                        "label": "あなたは13歳～17歳の間に他人の自転車を、かってに乗り回したり、もっていったりしたことがありますか？",
                        "options": [
                          {
                            "label": "全くしたことがない",
                            "coding": "0"
                          },
                          {
                            "coding": "1",
                            "label": "1回したことがある"
                          },
                          {
                            "coding": "2",
                            "label": "2回したことがある"
                          },
                          {
                            "coding": "3",
                            "label": "3回以上したことがある"
                          }
                        ],
                        "name": "delinquency11"
                      },
                      {
                        "required": true,
                        "type": "html",
                        "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ進む\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                        "name": ""
                      }
                    ],
                    "scrollTop": true,
                    "submitButtonText": "Continue →",
                    "submitButtonPosition": "hidden",
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "delinquency11"
                  },
                  {
                    "type": "lab.html.Page",
                    "items": [
                      {
                        "type": "text",
                        "title": "過去のあなたについての質問をします。13歳～17歳の頃を思い出して回答してください。",
                        "content": "あなたに不利益を被ることはありません、率直にご回答ください。\n※１度「次へ進む」を押すと、戻ることはできません。回答が無効になるため、ブラウザの戻るボタンを使用しないでください。"
                      },
                      {
                        "required": true,
                        "type": "radio",
                        "label": "あなたは13歳～17歳の間に学校から、こっそりお金やものをもち出したり、もち出そうとしたりしたことがありますか？",
                        "options": [
                          {
                            "label": "全くしたことがない",
                            "coding": "0"
                          },
                          {
                            "coding": "1",
                            "label": "1回したことがある"
                          },
                          {
                            "coding": "2",
                            "label": "2回したことがある"
                          },
                          {
                            "coding": "3",
                            "label": "3回以上したことがある"
                          }
                        ],
                        "name": "delinquency12"
                      },
                      {
                        "required": true,
                        "type": "html",
                        "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ進む\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                        "name": ""
                      }
                    ],
                    "scrollTop": true,
                    "submitButtonText": "Continue →",
                    "submitButtonPosition": "hidden",
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "delinquency12"
                  },
                  {
                    "type": "lab.html.Page",
                    "items": [
                      {
                        "type": "text",
                        "title": "過去のあなたについての質問をします。13歳～17歳の頃を思い出して回答してください。",
                        "content": "あなたに不利益を被ることはありません、率直にご回答ください。\n※１度「次へ進む」を押すと、戻ることはできません。回答が無効になるため、ブラウザの戻るボタンを使用しないでください。"
                      },
                      {
                        "required": true,
                        "type": "radio",
                        "label": "あなたは13歳～17歳の間に家族の人に乱暴なことをしたり、「乱暴なことをするぞ」とおどかしたりしたことがありますか？",
                        "options": [
                          {
                            "label": "全くしたことがない",
                            "coding": "0"
                          },
                          {
                            "coding": "1",
                            "label": "1回したことがある"
                          },
                          {
                            "coding": "2",
                            "label": "2回したことがある"
                          },
                          {
                            "coding": "3",
                            "label": "3回以上したことがある"
                          }
                        ],
                        "name": "delinquency13"
                      },
                      {
                        "required": true,
                        "type": "html",
                        "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ進む\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                        "name": ""
                      }
                    ],
                    "scrollTop": true,
                    "submitButtonText": "Continue →",
                    "submitButtonPosition": "hidden",
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "delinquency13"
                  },
                  {
                    "type": "lab.html.Page",
                    "items": [
                      {
                        "type": "text",
                        "title": "過去のあなたについての質問をします。13歳～17歳の頃を思い出して回答してください。",
                        "content": "あなたに不利益を被ることはありません、率直にご回答ください。\n※１度「次へ進む」を押すと、戻ることはできません。回答が無効になるため、ブラウザの戻るボタンを使用しないでください。"
                      },
                      {
                        "required": true,
                        "type": "radio",
                        "label": "あなたは13歳～17歳の間に自分の家から、こっそり家族の人のお金や物をもち出したり、もち出そうとしたりしたことがありますか？",
                        "options": [
                          {
                            "label": "全くしたことがない",
                            "coding": "0"
                          },
                          {
                            "coding": "1",
                            "label": "1回したことがある"
                          },
                          {
                            "coding": "2",
                            "label": "2回したことがある"
                          },
                          {
                            "coding": "3",
                            "label": "3回以上したことがある"
                          }
                        ],
                        "name": "delinquency14"
                      },
                      {
                        "required": true,
                        "type": "html",
                        "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ進む\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                        "name": ""
                      }
                    ],
                    "scrollTop": true,
                    "submitButtonText": "Continue →",
                    "submitButtonPosition": "hidden",
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "delinquency14"
                  },
                  {
                    "type": "lab.html.Page",
                    "items": [
                      {
                        "type": "text",
                        "title": "過去のあなたについての質問をします。13歳～17歳の頃を思い出して回答してください。",
                        "content": "あなたに不利益を被ることはありません、率直にご回答ください。\n※１度「次へ進む」を押すと、戻ることはできません。回答が無効になるため、ブラウザの戻るボタンを使用しないでください。"
                      },
                      {
                        "required": true,
                        "type": "radio",
                        "label": "あなたは13歳～17歳の間に人をだまして、お金やものをとったり、とろうとしたりしたことがありますか？",
                        "options": [
                          {
                            "label": "全くしたことがない",
                            "coding": "0"
                          },
                          {
                            "coding": "1",
                            "label": "1回したことがある"
                          },
                          {
                            "coding": "2",
                            "label": "2回したことがある"
                          },
                          {
                            "coding": "3",
                            "label": "3回以上したことがある"
                          }
                        ],
                        "name": "delinquency15"
                      },
                      {
                        "required": true,
                        "type": "html",
                        "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ進む\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                        "name": ""
                      }
                    ],
                    "scrollTop": true,
                    "submitButtonText": "Continue →",
                    "submitButtonPosition": "hidden",
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "delinquency15"
                  },
                  {
                    "type": "lab.html.Page",
                    "items": [
                      {
                        "type": "text",
                        "title": "過去のあなたについての質問をします。13歳～17歳の頃を思い出して回答してください。",
                        "content": "あなたに不利益を被ることはありません、率直にご回答ください。\n※１度「次へ進む」を押すと、戻ることはできません。回答が無効になるため、ブラウザの戻るボタンを使用しないでください。"
                      },
                      {
                        "required": true,
                        "type": "radio",
                        "label": "あなたは13歳～17歳の間にナイフをもち歩いたことがありますか？",
                        "options": [
                          {
                            "label": "全くしたことがない",
                            "coding": "0"
                          },
                          {
                            "coding": "1",
                            "label": "1回したことがある"
                          },
                          {
                            "coding": "2",
                            "label": "2回したことがある"
                          },
                          {
                            "coding": "3",
                            "label": "3回以上したことがある"
                          }
                        ],
                        "name": "delinquency16"
                      },
                      {
                        "required": true,
                        "type": "html",
                        "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ進む\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                        "name": ""
                      }
                    ],
                    "scrollTop": true,
                    "submitButtonText": "Continue →",
                    "submitButtonPosition": "hidden",
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "delinquency16"
                  },
                  {
                    "type": "lab.html.Page",
                    "items": [
                      {
                        "type": "text",
                        "title": "過去のあなたについての質問をします。13歳～17歳の頃を思い出して回答してください。",
                        "content": "あなたに不利益を被ることはありません、率直にご回答ください。\n※１度「次へ進む」を押すと、戻ることはできません。回答が無効になるため、ブラウザの戻るボタンを使用しないでください。"
                      },
                      {
                        "required": true,
                        "type": "radio",
                        "label": "あなたは13歳～17歳の間に学校以外の公共のもの（自動販売機・公衆電話・公園の植物など）、自宅以外の建物のかべや窓を、わざと壊したり、傷つけたり、燃やしたりしたことがありますか？（落書きを含む）",
                        "options": [
                          {
                            "label": "全くしたことがない",
                            "coding": "0"
                          },
                          {
                            "coding": "1",
                            "label": "1回したことがある"
                          },
                          {
                            "coding": "2",
                            "label": "2回したことがある"
                          },
                          {
                            "coding": "3",
                            "label": "3回以上したことがある"
                          }
                        ],
                        "name": "delinquency17"
                      },
                      {
                        "required": true,
                        "type": "html",
                        "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ進む\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                        "name": ""
                      }
                    ],
                    "scrollTop": true,
                    "submitButtonText": "Continue →",
                    "submitButtonPosition": "hidden",
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "delinquency17"
                  },
                  {
                    "type": "lab.html.Page",
                    "items": [
                      {
                        "type": "text",
                        "title": "過去のあなたについての質問をします。13歳～17歳の頃を思い出して回答してください。",
                        "content": "あなたに不利益を被ることはありません、率直にご回答ください。\n※１度「次へ進む」を押すと、戻ることはできません。回答が無効になるため、ブラウザの戻るボタンを使用しないでください。"
                      },
                      {
                        "required": true,
                        "type": "radio",
                        "label": "あなたは13歳～17歳の間に自宅の壁や窓、家族の人の持ち物を、わざと壊したり、傷つけたり、燃やしたりしたことがありますか？",
                        "options": [
                          {
                            "label": "全くしたことがない",
                            "coding": "0"
                          },
                          {
                            "coding": "1",
                            "label": "1回したことがある"
                          },
                          {
                            "coding": "2",
                            "label": "2回したことがある"
                          },
                          {
                            "coding": "3",
                            "label": "3回以上したことがある"
                          }
                        ],
                        "name": "delinquency18"
                      },
                      {
                        "required": true,
                        "type": "html",
                        "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ進む\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                        "name": ""
                      }
                    ],
                    "scrollTop": true,
                    "submitButtonText": "Continue →",
                    "submitButtonPosition": "hidden",
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "delinquency18"
                  },
                  {
                    "type": "lab.html.Page",
                    "items": [
                      {
                        "type": "text",
                        "title": "過去のあなたについての質問をします。13歳～17歳の頃を思い出して回答してください。",
                        "content": "あなたに不利益を被ることはありません、率直にご回答ください。\n※１度「次へ進む」を押すと、戻ることはできません。回答が無効になるため、ブラウザの戻るボタンを使用しないでください。"
                      },
                      {
                        "required": true,
                        "type": "radio",
                        "label": "あなたは13歳～17歳の間に店から、こっそり商品をもち出したり、もち出そうとしたりしたことがありますか？",
                        "options": [
                          {
                            "label": "全くしたことがない",
                            "coding": "0"
                          },
                          {
                            "coding": "1",
                            "label": "1回したことがある"
                          },
                          {
                            "coding": "2",
                            "label": "2回したことがある"
                          },
                          {
                            "coding": "3",
                            "label": "3回以上したことがある"
                          }
                        ],
                        "name": "delinquency19"
                      },
                      {
                        "required": true,
                        "type": "html",
                        "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ進む\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                        "name": ""
                      }
                    ],
                    "scrollTop": true,
                    "submitButtonText": "Continue →",
                    "submitButtonPosition": "hidden",
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "delinquency19"
                  },
                  {
                    "type": "lab.html.Page",
                    "items": [
                      {
                        "type": "text",
                        "title": "過去のあなたについての質問をします。13歳～17歳の頃を思い出して回答してください。",
                        "content": "あなたに不利益を被ることはありません、率直にご回答ください。\n※１度「次へ進む」を押すと、戻ることはできません。回答が無効になるため、ブラウザの戻るボタンを使用しないでください。"
                      },
                      {
                        "required": true,
                        "type": "radio",
                        "label": "あなたは13歳～17歳の間に集団で自転車・バイク・スクーターに乗って、道路で危ないことをしたことがありますか？",
                        "options": [
                          {
                            "label": "全くしたことがない",
                            "coding": "0"
                          },
                          {
                            "coding": "1",
                            "label": "1回したことがある"
                          },
                          {
                            "coding": "2",
                            "label": "2回したことがある"
                          },
                          {
                            "coding": "3",
                            "label": "3回以上したことがある"
                          }
                        ],
                        "name": "delinquency20"
                      },
                      {
                        "required": true,
                        "type": "html",
                        "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ進む\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                        "name": ""
                      }
                    ],
                    "scrollTop": true,
                    "submitButtonText": "Continue →",
                    "submitButtonPosition": "hidden",
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "delinquency20"
                  },
                  {
                    "type": "lab.html.Page",
                    "items": [
                      {
                        "type": "text",
                        "title": "過去のあなたについての質問をします。13歳～17歳の頃を思い出して回答してください。",
                        "content": "あなたに不利益を被ることはありません、率直にご回答ください。\n※１度「次へ進む」を押すと、戻ることはできません。回答が無効になるため、ブラウザの戻るボタンを使用しないでください。"
                      },
                      {
                        "required": true,
                        "type": "radio",
                        "label": "あなたは13歳～17歳の間に学校の生徒に乱暴なことをしたり、「乱暴なことをするぞ」とおどかしたりしたことがありますか？",
                        "options": [
                          {
                            "label": "全くしたことがない",
                            "coding": "0"
                          },
                          {
                            "coding": "1",
                            "label": "1回したことがある"
                          },
                          {
                            "coding": "2",
                            "label": "2回したことがある"
                          },
                          {
                            "coding": "3",
                            "label": "3回以上したことがある"
                          }
                        ],
                        "name": "delinquency21"
                      },
                      {
                        "required": true,
                        "type": "html",
                        "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ進む\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                        "name": ""
                      }
                    ],
                    "scrollTop": true,
                    "submitButtonText": "Continue →",
                    "submitButtonPosition": "hidden",
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "delinquency21"
                  }
                ]
              },
              {
                "type": "lab.flow.Sequence",
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "Sequence",
                "shuffle": true,
                "content": [
                  {
                    "type": "lab.html.Page",
                    "items": [
                      {
                        "required": true,
                        "type": "text",
                        "title": "過去のあなたについての質問をします。13歳～17歳のことを思い出して回答してください。",
                        "content": "あなたに不利益を被ることはありません、率直にご回答ください。\n※１度「次へ進む」を押すと、戻ることはできません。回答が無効になるため、ブラウザの戻るボタンを使用しないでください。"
                      },
                      {
                        "required": true,
                        "type": "radio",
                        "label": "あなたが13歳～17歳の間、あなたの親は家の中で暴力をふるったことがありますか？",
                        "options": [
                          {
                            "label": "全くなかった",
                            "coding": "1"
                          },
                          {
                            "label": "ほとんどなかった",
                            "coding": "2"
                          },
                          {
                            "label": "ときどきあった",
                            "coding": "3"
                          },
                          {
                            "label": "よくあった",
                            "coding": "4"
                          }
                        ],
                        "name": "environment-family background1"
                      },
                      {
                        "required": true,
                        "type": "html",
                        "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ進む\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                        "name": ""
                      }
                    ],
                    "scrollTop": true,
                    "submitButtonText": "Continue →",
                    "submitButtonPosition": "hidden",
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "environment-family background1"
                  },
                  {
                    "type": "lab.html.Page",
                    "items": [
                      {
                        "required": true,
                        "type": "text",
                        "title": "過去のあなたについての質問をします。13歳～17歳のことを思い出して回答してください。",
                        "content": "あなたに不利益を被ることはありません、率直にご回答ください。\n※１度「次へ進む」を押すと、戻ることはできません。回答が無効になるため、ブラウザの戻るボタンを使用しないでください。"
                      },
                      {
                        "required": true,
                        "type": "radio",
                        "label": "あなたが13歳～17歳の間、あなたの親はあなたをしかるときにたたいたりしたことがありますか？",
                        "options": [
                          {
                            "label": "全くなかった",
                            "coding": "1"
                          },
                          {
                            "label": "ほとんどなかった",
                            "coding": "2"
                          },
                          {
                            "label": "ときどきあった",
                            "coding": "3"
                          },
                          {
                            "label": "よくあった",
                            "coding": "4"
                          }
                        ],
                        "name": "environment-family background2"
                      },
                      {
                        "required": true,
                        "type": "html",
                        "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ進む\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                        "name": ""
                      }
                    ],
                    "scrollTop": true,
                    "submitButtonText": "Continue →",
                    "submitButtonPosition": "hidden",
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "environment-family background2"
                  },
                  {
                    "type": "lab.html.Page",
                    "items": [
                      {
                        "required": true,
                        "type": "text",
                        "title": "過去のあなたについての質問をします。13歳～17歳のことを思い出して回答してください。",
                        "content": "あなたに不利益を被ることはありません、率直にご回答ください。\n※１度「次へ進む」を押すと、戻ることはできません。回答が無効になるため、ブラウザの戻るボタンを使用しないでください。"
                      },
                      {
                        "required": true,
                        "type": "radio",
                        "label": "あなたが13歳～17歳の間、あなたの親から暴力をふるわれたことがありますか？",
                        "options": [
                          {
                            "label": "全くなかった",
                            "coding": "1"
                          },
                          {
                            "label": "ほとんどなかった",
                            "coding": "2"
                          },
                          {
                            "label": "ときどきあった",
                            "coding": "3"
                          },
                          {
                            "label": "よくあった",
                            "coding": "4"
                          }
                        ],
                        "name": "environment-family background3"
                      },
                      {
                        "required": true,
                        "type": "html",
                        "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ進む\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                        "name": ""
                      }
                    ],
                    "scrollTop": true,
                    "submitButtonText": "Continue →",
                    "submitButtonPosition": "hidden",
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "environment-family background3"
                  },
                  {
                    "type": "lab.html.Page",
                    "items": [
                      {
                        "required": true,
                        "type": "text",
                        "title": "過去のあなたについての質問をします。13歳～17歳のことを思い出して回答してください。",
                        "content": "あなたに不利益を被ることはありません、率直にご回答ください。\n※１度「次へ進む」を押すと、戻ることはできません。回答が無効になるため、ブラウザの戻るボタンを使用しないでください。"
                      },
                      {
                        "required": true,
                        "type": "radio",
                        "label": "あなたが13歳～17歳の間、あなたの父親と母親はよくけんかをしていましたか？",
                        "options": [
                          {
                            "label": "全くなかった",
                            "coding": "1"
                          },
                          {
                            "label": "ほとんどなかった",
                            "coding": "2"
                          },
                          {
                            "label": "ときどきあった",
                            "coding": "3"
                          },
                          {
                            "label": "よくあった",
                            "coding": "4"
                          }
                        ],
                        "name": "environment-family background4"
                      },
                      {
                        "required": true,
                        "type": "html",
                        "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ進む\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                        "name": ""
                      }
                    ],
                    "scrollTop": true,
                    "submitButtonText": "Continue →",
                    "submitButtonPosition": "hidden",
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "environment-family background4"
                  },
                  {
                    "type": "lab.html.Page",
                    "items": [
                      {
                        "required": true,
                        "type": "text",
                        "title": "過去のあなたについての質問をします。13歳～17歳のことを思い出して回答してください。",
                        "content": "あなたに不利益を被ることはありません、率直にご回答ください。\n※１度「次へ進む」を押すと、戻ることはできません。回答が無効になるため、ブラウザの戻るボタンを使用しないでください。"
                      },
                      {
                        "required": true,
                        "type": "radio",
                        "label": "あなたが13歳～17歳の間、あなたの親はあなたが放課後や休日どこで何をしているかを知っていましたか？",
                        "options": [
                          {
                            "label": "全くなかった",
                            "coding": "1"
                          },
                          {
                            "label": "ほとんどなかった",
                            "coding": "2"
                          },
                          {
                            "label": "ときどきあった",
                            "coding": "3"
                          },
                          {
                            "label": "よくあった",
                            "coding": "4"
                          }
                        ],
                        "name": "environment-family background5R"
                      },
                      {
                        "required": true,
                        "type": "html",
                        "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ進む\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                        "name": ""
                      }
                    ],
                    "scrollTop": true,
                    "submitButtonText": "Continue →",
                    "submitButtonPosition": "hidden",
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "environment-family background5R"
                  },
                  {
                    "type": "lab.html.Page",
                    "items": [
                      {
                        "required": true,
                        "type": "text",
                        "title": "過去のあなたについての質問をします。13歳～17歳のことを思い出して回答してください。",
                        "content": "あなたに不利益を被ることはありません、率直にご回答ください。\n※１度「次へ進む」を押すと、戻ることはできません。回答が無効になるため、ブラウザの戻るボタンを使用しないでください。"
                      },
                      {
                        "required": true,
                        "type": "radio",
                        "label": "あなたが13歳～17歳の間、あなたの親はあなたの友人関係を知っていましたか？",
                        "options": [
                          {
                            "label": "全くなかった",
                            "coding": "1"
                          },
                          {
                            "label": "ほとんどなかった",
                            "coding": "2"
                          },
                          {
                            "label": "ときどきあった",
                            "coding": "3"
                          },
                          {
                            "label": "よくあった",
                            "coding": "4"
                          }
                        ],
                        "name": "environment-family background6R"
                      },
                      {
                        "required": true,
                        "type": "html",
                        "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ進む\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                        "name": ""
                      }
                    ],
                    "scrollTop": true,
                    "submitButtonText": "Continue →",
                    "submitButtonPosition": "hidden",
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "environment-family background6R"
                  },
                  {
                    "type": "lab.html.Page",
                    "items": [
                      {
                        "required": true,
                        "type": "text",
                        "title": "過去のあなたについての質問をします。13歳～17歳のことを思い出して回答してください。",
                        "content": "あなたに不利益を被ることはありません、率直にご回答ください。\n※１度「次へ進む」を押すと、戻ることはできません。回答が無効になるため、ブラウザの戻るボタンを使用しないでください。"
                      },
                      {
                        "required": true,
                        "type": "radio",
                        "label": "あなたが13歳～17歳の間、あなたの親は学校での出来事をよく聞いてきましたか？",
                        "options": [
                          {
                            "label": "全くなかった",
                            "coding": "1"
                          },
                          {
                            "label": "ほとんどなかった",
                            "coding": "2"
                          },
                          {
                            "label": "ときどきあった",
                            "coding": "3"
                          },
                          {
                            "label": "よくあった",
                            "coding": "4"
                          }
                        ],
                        "name": "environment-family background7R"
                      },
                      {
                        "required": true,
                        "type": "html",
                        "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ進む\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                        "name": ""
                      }
                    ],
                    "scrollTop": true,
                    "submitButtonText": "Continue →",
                    "submitButtonPosition": "hidden",
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "environment-family background7R"
                  },
                  {
                    "type": "lab.html.Page",
                    "items": [
                      {
                        "required": true,
                        "type": "text",
                        "title": "過去のあなたについての質問をします。13歳～17歳のことを思い出して回答してください。",
                        "content": "あなたに不利益を被ることはありません、率直にご回答ください。\n※１度「次へ進む」を押すと、戻ることはできません。回答が無効になるため、ブラウザの戻るボタンを使用しないでください。"
                      },
                      {
                        "required": true,
                        "type": "radio",
                        "label": "あなたが13歳～17歳の間、あなたの親はあなたが今まで持っていなかったものを持っていると、すぐに気づいてくれましたか？",
                        "options": [
                          {
                            "label": "全くなかった",
                            "coding": "1"
                          },
                          {
                            "label": "ほとんどなかった",
                            "coding": "2"
                          },
                          {
                            "label": "ときどきあった",
                            "coding": "3"
                          },
                          {
                            "label": "よくあった",
                            "coding": "4"
                          }
                        ],
                        "name": "environment-family background8R"
                      },
                      {
                        "required": true,
                        "type": "html",
                        "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ進む\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                        "name": ""
                      }
                    ],
                    "scrollTop": true,
                    "submitButtonText": "Continue →",
                    "submitButtonPosition": "hidden",
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "environment-family background8R"
                  },
                  {
                    "type": "lab.flow.Sequence",
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Sequence",
                    "content": [
                      {
                        "type": "lab.html.Page",
                        "items": [
                          {
                            "required": true,
                            "type": "text",
                            "title": "過去のあなたについての質問をします。13歳～17歳のことを思い出して回答してください。",
                            "content": "あなたに不利益を被ることはありません、率直にご回答ください。\n※１度「次へ進む」を押すと、戻ることはできません。回答が無効になるため、ブラウザの戻るボタンを使用しないでください。"
                          },
                          {
                            "required": true,
                            "type": "radio",
                            "label": "あなたが13～17歳の間、あなたの友達がビール・サワー・ワイン・日本酒などのアルコール飲料を飲んでいるのを見たことがありますか？",
                            "name": "environment-deviate friends1",
                            "options": [
                              {
                                "label": "全く見たことがない",
                                "coding": "0"
                              },
                              {
                                "label": "1回見たことがある",
                                "coding": "1"
                              },
                              {
                                "label": "2回見たことがある",
                                "coding": "2"
                              },
                              {
                                "label": "3回以上見たことがある",
                                "coding": "3"
                              }
                            ]
                          },
                          {
                            "required": true,
                            "type": "html",
                            "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ進む\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                            "name": ""
                          }
                        ],
                        "scrollTop": true,
                        "submitButtonText": "Continue →",
                        "submitButtonPosition": "hidden",
                        "files": {},
                        "responses": {
                          "": ""
                        },
                        "parameters": {},
                        "messageHandlers": {},
                        "title": "environment-deviate friends1"
                      },
                      {
                        "type": "lab.html.Page",
                        "items": [
                          {
                            "required": true,
                            "type": "text",
                            "title": "過去のあなたについての質問をします。13歳～17歳のことを思い出して回答してください。",
                            "content": "あなたに不利益を被ることはありません、率直にご回答ください。\n※１度「次へ進む」を押すと、戻ることはできません。回答が無効になるため、ブラウザの戻るボタンを使用しないでください。"
                          },
                          {
                            "required": true,
                            "type": "radio",
                            "label": "あなたが13～17歳の間、あなたの友達が理由もないのに、学校を丸一日さぼっているのを見たことがありますか？",
                            "name": "environment-deviate friends2",
                            "options": [
                              {
                                "label": "全く見たことがない",
                                "coding": "0"
                              },
                              {
                                "label": "1回見たことがある",
                                "coding": "1"
                              },
                              {
                                "label": "2回見たことがある",
                                "coding": "2"
                              },
                              {
                                "label": "3回以上見たことがある",
                                "coding": "3"
                              }
                            ]
                          },
                          {
                            "required": true,
                            "type": "html",
                            "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ進む\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                            "name": ""
                          }
                        ],
                        "scrollTop": true,
                        "submitButtonText": "Continue →",
                        "submitButtonPosition": "hidden",
                        "files": {},
                        "responses": {
                          "": ""
                        },
                        "parameters": {},
                        "messageHandlers": {},
                        "title": "environment-deviate friends2"
                      },
                      {
                        "type": "lab.html.Page",
                        "items": [
                          {
                            "required": true,
                            "type": "text",
                            "title": "過去のあなたについての質問をします。13歳～17歳のことを思い出して回答してください。",
                            "content": "あなたに不利益を被ることはありません、率直にご回答ください。\n※１度「次へ進む」を押すと、戻ることはできません。回答が無効になるため、ブラウザの戻るボタンを使用しないでください。"
                          },
                          {
                            "required": true,
                            "type": "radio",
                            "label": "あなたが13～17歳の間、あなたの友達がバスや電車で、キセルや無賃乗車をしたり、しようとしているのを見たことがありますか？",
                            "name": "environment-deviate friends3",
                            "options": [
                              {
                                "label": "全く見たことがない",
                                "coding": "0"
                              },
                              {
                                "label": "1回見たことがある",
                                "coding": "1"
                              },
                              {
                                "label": "2回見たことがある",
                                "coding": "2"
                              },
                              {
                                "label": "3回以上見たことがある",
                                "coding": "3"
                              }
                            ]
                          },
                          {
                            "required": true,
                            "type": "html",
                            "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ進む\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                            "name": ""
                          }
                        ],
                        "scrollTop": true,
                        "submitButtonText": "Continue →",
                        "submitButtonPosition": "hidden",
                        "files": {},
                        "responses": {
                          "": ""
                        },
                        "parameters": {},
                        "messageHandlers": {},
                        "title": "environment-deviate friends3"
                      },
                      {
                        "type": "lab.html.Page",
                        "items": [
                          {
                            "required": true,
                            "type": "text",
                            "title": "過去のあなたについての質問をします。13歳～17歳のことを思い出して回答してください。",
                            "content": "あなたに不利益を被ることはありません、率直にご回答ください。\n※１度「次へ進む」を押すと、戻ることはできません。回答が無効になるため、ブラウザの戻るボタンを使用しないでください。"
                          },
                          {
                            "required": true,
                            "type": "radio",
                            "label": "あなたが13～17歳の間、あなたの友達が勝手に入ってはいけない場所や建物に入っているのを見たことがありますか？",
                            "name": "environment-deviate friends4",
                            "options": [
                              {
                                "label": "全く見たことがない",
                                "coding": "0"
                              },
                              {
                                "label": "1回見たことがある",
                                "coding": "1"
                              },
                              {
                                "label": "2回見たことがある",
                                "coding": "2"
                              },
                              {
                                "label": "3回以上見たことがある",
                                "coding": "3"
                              }
                            ]
                          },
                          {
                            "required": true,
                            "type": "html",
                            "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ進む\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                            "name": ""
                          }
                        ],
                        "scrollTop": true,
                        "submitButtonText": "Continue →",
                        "submitButtonPosition": "hidden",
                        "files": {},
                        "responses": {
                          "": ""
                        },
                        "parameters": {},
                        "messageHandlers": {},
                        "title": "environment-deviate friends4"
                      },
                      {
                        "type": "lab.html.Page",
                        "items": [
                          {
                            "required": true,
                            "type": "text",
                            "title": "過去のあなたについての質問をします。13歳～17歳のことを思い出して回答してください。",
                            "content": "あなたに不利益を被ることはありません、率直にご回答ください。\n※１度「次へ進む」を押すと、戻ることはできません。回答が無効になるため、ブラウザの戻るボタンを使用しないでください。"
                          },
                          {
                            "required": true,
                            "type": "radio",
                            "label": "あなたが13～17歳の間、あなたの友達が家族以外の人の持ち物や乗り物（自転車・バイク・自動車など）をわざと壊したり、傷つけたり、燃やしたりしているのを見たことがありますか（落書きを含む）？",
                            "name": "environment-deviate friends5",
                            "options": [
                              {
                                "label": "全く見たことがない",
                                "coding": "0"
                              },
                              {
                                "label": "1回見たことがある",
                                "coding": "1"
                              },
                              {
                                "label": "2回見たことがある",
                                "coding": "2"
                              },
                              {
                                "label": "3回以上見たことがある",
                                "coding": "3"
                              }
                            ]
                          },
                          {
                            "required": true,
                            "type": "html",
                            "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ進む\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                            "name": ""
                          }
                        ],
                        "scrollTop": true,
                        "submitButtonText": "Continue →",
                        "submitButtonPosition": "hidden",
                        "files": {},
                        "responses": {
                          "": ""
                        },
                        "parameters": {},
                        "messageHandlers": {},
                        "title": "environment-deviate friends5"
                      },
                      {
                        "type": "lab.html.Page",
                        "items": [
                          {
                            "required": true,
                            "type": "text",
                            "title": "過去のあなたについての質問をします。13歳～17歳のことを思い出して回答してください。",
                            "content": "あなたに不利益を被ることはありません、率直にご回答ください。\n※１度「次へ進む」を押すと、戻ることはできません。回答が無効になるため、ブラウザの戻るボタンを使用しないでください。"
                          },
                          {
                            "required": true,
                            "type": "radio",
                            "label": "あなたが13～17歳の間、あなたの友達が保護者の許しがないのに、外泊したり、家出しているのを見たことがありますか？",
                            "name": "environment-deviate friends6",
                            "options": [
                              {
                                "label": "全く見たことがない",
                                "coding": "0"
                              },
                              {
                                "label": "1回見たことがある",
                                "coding": "1"
                              },
                              {
                                "label": "2回見たことがある",
                                "coding": "2"
                              },
                              {
                                "label": "3回以上見たことがある",
                                "coding": "3"
                              }
                            ]
                          },
                          {
                            "required": true,
                            "type": "html",
                            "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ進む\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                            "name": ""
                          }
                        ],
                        "scrollTop": true,
                        "submitButtonText": "Continue →",
                        "submitButtonPosition": "hidden",
                        "files": {},
                        "responses": {
                          "": ""
                        },
                        "parameters": {},
                        "messageHandlers": {},
                        "title": "environment-deviate friends6"
                      },
                      {
                        "type": "lab.html.Page",
                        "items": [
                          {
                            "required": true,
                            "type": "text",
                            "title": "過去のあなたについての質問をします。13歳～17歳のことを思い出して回答してください。",
                            "content": "あなたに不利益を被ることはありません、率直にご回答ください。\n※１度「次へ進む」を押すと、戻ることはできません。回答が無効になるため、ブラウザの戻るボタンを使用しないでください。"
                          },
                          {
                            "required": true,
                            "type": "radio",
                            "label": "あなたが13～17歳の間、あなたの友達が免許を取っていないのに自転車・バイク・スクーターに乗っているのを見たことがありますか？",
                            "name": "environment-deviate friends7",
                            "options": [
                              {
                                "label": "全く見たことがない",
                                "coding": "0"
                              },
                              {
                                "label": "1回見たことがある",
                                "coding": "1"
                              },
                              {
                                "label": "2回見たことがある",
                                "coding": "2"
                              },
                              {
                                "label": "3回以上見たことがある",
                                "coding": "3"
                              }
                            ]
                          },
                          {
                            "required": true,
                            "type": "html",
                            "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ進む\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                            "name": ""
                          }
                        ],
                        "scrollTop": true,
                        "submitButtonText": "Continue →",
                        "submitButtonPosition": "hidden",
                        "files": {},
                        "responses": {
                          "": ""
                        },
                        "parameters": {},
                        "messageHandlers": {},
                        "title": "environment-deviate friends7"
                      },
                      {
                        "type": "lab.html.Page",
                        "items": [
                          {
                            "required": true,
                            "type": "text",
                            "title": "過去のあなたについての質問をします。13歳～17歳のことを思い出して回答してください。",
                            "content": "あなたに不利益を被ることはありません、率直にご回答ください。\n※１度「次へ進む」を押すと、戻ることはできません。回答が無効になるため、ブラウザの戻るボタンを使用しないでください。"
                          },
                          {
                            "required": true,
                            "type": "radio",
                            "label": "あなたが13～17歳の間、あなたの友達が広場などの公共の場所で集団で騒いでいるのを見たことがありますか？",
                            "name": "environment-deviate friends8",
                            "options": [
                              {
                                "label": "全く見たことがない",
                                "coding": "0"
                              },
                              {
                                "label": "1回見たことがある",
                                "coding": "1"
                              },
                              {
                                "label": "2回見たことがある",
                                "coding": "2"
                              },
                              {
                                "label": "3回以上見たことがある",
                                "coding": "3"
                              }
                            ]
                          },
                          {
                            "required": true,
                            "type": "html",
                            "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ進む\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                            "name": ""
                          }
                        ],
                        "scrollTop": true,
                        "submitButtonText": "Continue →",
                        "submitButtonPosition": "hidden",
                        "files": {},
                        "responses": {
                          "": ""
                        },
                        "parameters": {},
                        "messageHandlers": {},
                        "title": "environment-deviate friends8"
                      },
                      {
                        "type": "lab.html.Page",
                        "items": [
                          {
                            "required": true,
                            "type": "text",
                            "title": "過去のあなたについての質問をします。13歳～17歳のことを思い出して回答してください。",
                            "content": "あなたに不利益を被ることはありません、率直にご回答ください。\n※１度「次へ進む」を押すと、戻ることはできません。回答が無効になるため、ブラウザの戻るボタンを使用しないでください。"
                          },
                          {
                            "required": true,
                            "type": "radio",
                            "label": "あなたが13～17歳の間、あなたの友達が他人の自転車・バイク・スクーターの部品を持っていったり、持っていこうとしているのを見たことがありますか？",
                            "name": "environment-deviate friends9",
                            "options": [
                              {
                                "label": "全く見たことがない",
                                "coding": "0"
                              },
                              {
                                "label": "1回見たことがある",
                                "coding": "1"
                              },
                              {
                                "label": "2回見たことがある",
                                "coding": "2"
                              },
                              {
                                "label": "3回以上見たことがある",
                                "coding": "3"
                              }
                            ]
                          },
                          {
                            "required": true,
                            "type": "html",
                            "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ進む\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                            "name": ""
                          }
                        ],
                        "scrollTop": true,
                        "submitButtonText": "Continue →",
                        "submitButtonPosition": "hidden",
                        "files": {},
                        "responses": {
                          "": ""
                        },
                        "parameters": {},
                        "messageHandlers": {},
                        "title": "environment-deviate friends9"
                      },
                      {
                        "type": "lab.html.Page",
                        "items": [
                          {
                            "required": true,
                            "type": "text",
                            "title": "過去のあなたについての質問をします。13歳～17歳のことを思い出して回答してください。",
                            "content": "あなたに不利益を被ることはありません、率直にご回答ください。\n※１度「次へ進む」を押すと、戻ることはできません。回答が無効になるため、ブラウザの戻るボタンを使用しないでください。"
                          },
                          {
                            "required": true,
                            "type": "radio",
                            "label": "あなたが13～17歳の間、あなたの友達が学校のものをわざと壊したり、傷つけたり、燃やしたりしているのを見たことがありますか？（落書きも含む）",
                            "name": "environment-deviate friends10",
                            "options": [
                              {
                                "label": "全く見たことがない",
                                "coding": "0"
                              },
                              {
                                "label": "1回見たことがある",
                                "coding": "1"
                              },
                              {
                                "label": "2回見たことがある",
                                "coding": "2"
                              },
                              {
                                "label": "3回以上見たことがある",
                                "coding": "3"
                              }
                            ]
                          },
                          {
                            "required": true,
                            "type": "html",
                            "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ進む\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                            "name": ""
                          }
                        ],
                        "scrollTop": true,
                        "submitButtonText": "Continue →",
                        "submitButtonPosition": "hidden",
                        "files": {},
                        "responses": {
                          "": ""
                        },
                        "parameters": {},
                        "messageHandlers": {},
                        "title": "environment-deviate friends10"
                      },
                      {
                        "type": "lab.html.Page",
                        "items": [
                          {
                            "required": true,
                            "type": "text",
                            "title": "過去のあなたについての質問をします。13歳～17歳のことを思い出して回答してください。",
                            "content": "あなたに不利益を被ることはありません、率直にご回答ください。\n※１度「次へ進む」を押すと、戻ることはできません。回答が無効になるため、ブラウザの戻るボタンを使用しないでください。"
                          },
                          {
                            "required": true,
                            "type": "radio",
                            "label": "あなたが13～17歳の間、あなたの友達が他人の自転車を、かってに乗り回したり、もっていったりしているのを見たことがありますか？",
                            "name": "environment-deviate friends11",
                            "options": [
                              {
                                "label": "全く見たことがない",
                                "coding": "0"
                              },
                              {
                                "label": "1回見たことがある",
                                "coding": "1"
                              },
                              {
                                "label": "2回見たことがある",
                                "coding": "2"
                              },
                              {
                                "label": "3回以上見たことがある",
                                "coding": "3"
                              }
                            ]
                          },
                          {
                            "required": true,
                            "type": "html",
                            "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ進む\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                            "name": ""
                          }
                        ],
                        "scrollTop": true,
                        "submitButtonText": "Continue →",
                        "submitButtonPosition": "hidden",
                        "files": {},
                        "responses": {
                          "": ""
                        },
                        "parameters": {},
                        "messageHandlers": {},
                        "title": "environment-deviate friends11"
                      },
                      {
                        "type": "lab.html.Page",
                        "items": [
                          {
                            "required": true,
                            "type": "text",
                            "title": "過去のあなたについての質問をします。13歳～17歳のことを思い出して回答してください。",
                            "content": "あなたに不利益を被ることはありません、率直にご回答ください。\n※１度「次へ進む」を押すと、戻ることはできません。回答が無効になるため、ブラウザの戻るボタンを使用しないでください。"
                          },
                          {
                            "required": true,
                            "type": "radio",
                            "label": "あなたが13～17歳の間、あなたの友達が学校から、こっそりお金やものをもち出したり、もち出そうとしたりしているのを見たことがありますか？",
                            "name": "environment-deviate friends12",
                            "options": [
                              {
                                "label": "全く見たことがない",
                                "coding": "0"
                              },
                              {
                                "label": "1回見たことがある",
                                "coding": "1"
                              },
                              {
                                "label": "2回見たことがある",
                                "coding": "2"
                              },
                              {
                                "label": "3回以上見たことがある",
                                "coding": "3"
                              }
                            ]
                          },
                          {
                            "required": true,
                            "type": "html",
                            "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ進む\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                            "name": ""
                          }
                        ],
                        "scrollTop": true,
                        "submitButtonText": "Continue →",
                        "submitButtonPosition": "hidden",
                        "files": {},
                        "responses": {
                          "": ""
                        },
                        "parameters": {},
                        "messageHandlers": {},
                        "title": "environment-deviate friends12"
                      },
                      {
                        "type": "lab.html.Page",
                        "items": [
                          {
                            "required": true,
                            "type": "text",
                            "title": "過去のあなたについての質問をします。13歳～17歳のことを思い出して回答してください。",
                            "content": "あなたに不利益を被ることはありません、率直にご回答ください。\n※１度「次へ進む」を押すと、戻ることはできません。回答が無効になるため、ブラウザの戻るボタンを使用しないでください。"
                          },
                          {
                            "required": true,
                            "type": "radio",
                            "label": "あなたが13～17歳の間、あなたの友達が家族の人に乱暴なことをしたり、「乱暴なことをするぞ」とおどかしたりしているのを見たことがありますか？",
                            "name": "environment-deviate friends13",
                            "options": [
                              {
                                "label": "全く見たことがない",
                                "coding": "0"
                              },
                              {
                                "label": "1回見たことがある",
                                "coding": "1"
                              },
                              {
                                "label": "2回見たことがある",
                                "coding": "2"
                              },
                              {
                                "label": "3回以上見たことがある",
                                "coding": "3"
                              }
                            ]
                          },
                          {
                            "required": true,
                            "type": "html",
                            "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ進む\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                            "name": ""
                          }
                        ],
                        "scrollTop": true,
                        "submitButtonText": "Continue →",
                        "submitButtonPosition": "hidden",
                        "files": {},
                        "responses": {
                          "": ""
                        },
                        "parameters": {},
                        "messageHandlers": {},
                        "title": "environment-deviate friends13"
                      },
                      {
                        "type": "lab.html.Page",
                        "items": [
                          {
                            "required": true,
                            "type": "text",
                            "title": "過去のあなたについての質問をします。13歳～17歳のことを思い出して回答してください。",
                            "content": "あなたに不利益を被ることはありません、率直にご回答ください。\n※１度「次へ進む」を押すと、戻ることはできません。回答が無効になるため、ブラウザの戻るボタンを使用しないでください。"
                          },
                          {
                            "required": true,
                            "type": "radio",
                            "label": "あなたが13～17歳の間、あなたの友達が自分の家から、こっそり家族の人のお金や物をもち出したり、もち出そうとしたりしているのを見たことがありますか？",
                            "name": "environment-deviate friends14",
                            "options": [
                              {
                                "label": "全く見たことがない",
                                "coding": "0"
                              },
                              {
                                "label": "1回見たことがある",
                                "coding": "1"
                              },
                              {
                                "label": "2回見たことがある",
                                "coding": "2"
                              },
                              {
                                "label": "3回以上見たことがある",
                                "coding": "3"
                              }
                            ]
                          },
                          {
                            "required": true,
                            "type": "html",
                            "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ進む\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                            "name": ""
                          }
                        ],
                        "scrollTop": true,
                        "submitButtonText": "Continue →",
                        "submitButtonPosition": "hidden",
                        "files": {},
                        "responses": {
                          "": ""
                        },
                        "parameters": {},
                        "messageHandlers": {},
                        "title": "environment-deviate friends14"
                      },
                      {
                        "type": "lab.html.Page",
                        "items": [
                          {
                            "required": true,
                            "type": "text",
                            "title": "過去のあなたについての質問をします。13歳～17歳のことを思い出して回答してください。",
                            "content": "あなたに不利益を被ることはありません、率直にご回答ください。\n※１度「次へ進む」を押すと、戻ることはできません。回答が無効になるため、ブラウザの戻るボタンを使用しないでください。"
                          },
                          {
                            "required": true,
                            "type": "radio",
                            "label": "あなたが13～17歳の間、あなたの友達が人をだまして、お金やものをとったり、とろうとしたりしているのを見たことがありますか？",
                            "name": "environment-deviate friends15",
                            "options": [
                              {
                                "label": "全く見たことがない",
                                "coding": "0"
                              },
                              {
                                "label": "1回見たことがある",
                                "coding": "1"
                              },
                              {
                                "label": "2回見たことがある",
                                "coding": "2"
                              },
                              {
                                "label": "3回以上見たことがある",
                                "coding": "3"
                              }
                            ]
                          },
                          {
                            "required": true,
                            "type": "html",
                            "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ進む\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                            "name": ""
                          }
                        ],
                        "scrollTop": true,
                        "submitButtonText": "Continue →",
                        "submitButtonPosition": "hidden",
                        "files": {},
                        "responses": {
                          "": ""
                        },
                        "parameters": {},
                        "messageHandlers": {},
                        "title": "environment-deviate friends15"
                      },
                      {
                        "type": "lab.html.Page",
                        "items": [
                          {
                            "required": true,
                            "type": "text",
                            "title": "過去のあなたについての質問をします。13歳～17歳のことを思い出して回答してください。",
                            "content": "あなたに不利益を被ることはありません、率直にご回答ください。\n※１度「次へ進む」を押すと、戻ることはできません。回答が無効になるため、ブラウザの戻るボタンを使用しないでください。"
                          },
                          {
                            "required": true,
                            "type": "radio",
                            "label": "あなたが13～17歳の間、あなたの友達がナイフをもち歩いているのを見たことがありますか？",
                            "name": "environment-deviate friends16",
                            "options": [
                              {
                                "label": "全く見たことがない",
                                "coding": "0"
                              },
                              {
                                "label": "1回見たことがある",
                                "coding": "1"
                              },
                              {
                                "label": "2回見たことがある",
                                "coding": "2"
                              },
                              {
                                "label": "3回以上見たことがある",
                                "coding": "3"
                              }
                            ]
                          },
                          {
                            "required": true,
                            "type": "html",
                            "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ進む\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                            "name": ""
                          }
                        ],
                        "scrollTop": true,
                        "submitButtonText": "Continue →",
                        "submitButtonPosition": "hidden",
                        "files": {},
                        "responses": {
                          "": ""
                        },
                        "parameters": {},
                        "messageHandlers": {},
                        "title": "environment-deviate friends16"
                      },
                      {
                        "type": "lab.html.Page",
                        "items": [
                          {
                            "required": true,
                            "type": "text",
                            "title": "過去のあなたについての質問をします。13歳～17歳のことを思い出して回答してください。",
                            "content": "あなたに不利益を被ることはありません、率直にご回答ください。\n※１度「次へ進む」を押すと、戻ることはできません。回答が無効になるため、ブラウザの戻るボタンを使用しないでください。"
                          },
                          {
                            "required": true,
                            "type": "radio",
                            "label": "あなたが13～17歳の間、あなたの友達が学校以外の公共のもの（自動販売機・公衆電話・公園の植物など）、自宅以外の建物のかべや窓を、わざと壊したり、傷つけたり、燃やしたりしているのを見たことがありますか？（落書きを含む）",
                            "name": "environment-deviate friends17",
                            "options": [
                              {
                                "label": "全く見たことがない",
                                "coding": "0"
                              },
                              {
                                "label": "1回見たことがある",
                                "coding": "1"
                              },
                              {
                                "label": "2回見たことがある",
                                "coding": "2"
                              },
                              {
                                "label": "3回以上見たことがある",
                                "coding": "3"
                              }
                            ]
                          },
                          {
                            "required": true,
                            "type": "html",
                            "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ進む\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                            "name": ""
                          }
                        ],
                        "scrollTop": true,
                        "submitButtonText": "Continue →",
                        "submitButtonPosition": "hidden",
                        "files": {},
                        "responses": {
                          "": ""
                        },
                        "parameters": {},
                        "messageHandlers": {},
                        "title": "environment-deviate friends17"
                      },
                      {
                        "type": "lab.html.Page",
                        "items": [
                          {
                            "required": true,
                            "type": "text",
                            "title": "過去のあなたについての質問をします。13歳～17歳のことを思い出して回答してください。",
                            "content": "あなたに不利益を被ることはありません、率直にご回答ください。\n※１度「次へ進む」を押すと、戻ることはできません。回答が無効になるため、ブラウザの戻るボタンを使用しないでください。"
                          },
                          {
                            "required": true,
                            "type": "radio",
                            "label": "あなたが13～17歳の間、あなたの友達が自宅の壁や窓、家族の人の持ち物を、わざと壊したり、傷つけたり、燃やしたりしているのを見たことがありますか？",
                            "name": "environment-deviate friends18",
                            "options": [
                              {
                                "label": "全く見たことがない",
                                "coding": "0"
                              },
                              {
                                "label": "1回見たことがある",
                                "coding": "1"
                              },
                              {
                                "label": "2回見たことがある",
                                "coding": "2"
                              },
                              {
                                "label": "3回以上見たことがある",
                                "coding": "3"
                              }
                            ]
                          },
                          {
                            "required": true,
                            "type": "html",
                            "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ進む\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                            "name": ""
                          }
                        ],
                        "scrollTop": true,
                        "submitButtonText": "Continue →",
                        "submitButtonPosition": "hidden",
                        "files": {},
                        "responses": {
                          "": ""
                        },
                        "parameters": {},
                        "messageHandlers": {},
                        "title": "environment-deviate friends18"
                      },
                      {
                        "type": "lab.html.Page",
                        "items": [
                          {
                            "required": true,
                            "type": "text",
                            "title": "過去のあなたについての質問をします。13歳～17歳のことを思い出して回答してください。",
                            "content": "あなたに不利益を被ることはありません、率直にご回答ください。\n※１度「次へ進む」を押すと、戻ることはできません。回答が無効になるため、ブラウザの戻るボタンを使用しないでください。"
                          },
                          {
                            "required": true,
                            "type": "radio",
                            "label": "あなたが13～17歳の間、あなたの友達が店から、こっそり商品をもち出したり、もち出そうとしたりしているのを見たことがありますか？",
                            "name": "environment-deviate friends19",
                            "options": [
                              {
                                "label": "全く見たことがない",
                                "coding": "0"
                              },
                              {
                                "label": "1回見たことがある",
                                "coding": "1"
                              },
                              {
                                "label": "2回見たことがある",
                                "coding": "2"
                              },
                              {
                                "label": "3回以上見たことがある",
                                "coding": "3"
                              }
                            ]
                          },
                          {
                            "required": true,
                            "type": "html",
                            "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ進む\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                            "name": ""
                          }
                        ],
                        "scrollTop": true,
                        "submitButtonText": "Continue →",
                        "submitButtonPosition": "hidden",
                        "files": {},
                        "responses": {
                          "": ""
                        },
                        "parameters": {},
                        "messageHandlers": {},
                        "title": "environment-deviate friends19"
                      },
                      {
                        "type": "lab.html.Page",
                        "items": [
                          {
                            "required": true,
                            "type": "text",
                            "title": "過去のあなたについての質問をします。13歳～17歳のことを思い出して回答してください。",
                            "content": "あなたに不利益を被ることはありません、率直にご回答ください。\n※１度「次へ進む」を押すと、戻ることはできません。回答が無効になるため、ブラウザの戻るボタンを使用しないでください。"
                          },
                          {
                            "required": true,
                            "type": "radio",
                            "label": "あなたが13～17歳の間、あなたの友達が集団で自転車・バイク・スクーターに乗って、道路で危ないことをしているのを見たことがありますか？",
                            "name": "environment-deviate friends20",
                            "options": [
                              {
                                "label": "全く見たことがない",
                                "coding": "0"
                              },
                              {
                                "label": "1回見たことがある",
                                "coding": "1"
                              },
                              {
                                "label": "2回見たことがある",
                                "coding": "2"
                              },
                              {
                                "label": "3回以上見たことがある",
                                "coding": "3"
                              }
                            ]
                          },
                          {
                            "required": true,
                            "type": "html",
                            "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ進む\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                            "name": ""
                          }
                        ],
                        "scrollTop": true,
                        "submitButtonText": "Continue →",
                        "submitButtonPosition": "hidden",
                        "files": {},
                        "responses": {
                          "": ""
                        },
                        "parameters": {},
                        "messageHandlers": {},
                        "title": "environment-deviate friends20"
                      },
                      {
                        "type": "lab.html.Page",
                        "items": [
                          {
                            "required": true,
                            "type": "text",
                            "title": "過去のあなたについての質問をします。13歳～17歳のことを思い出して回答してください。",
                            "content": "あなたに不利益を被ることはありません、率直にご回答ください。\n※１度「次へ進む」を押すと、戻ることはできません。回答が無効になるため、ブラウザの戻るボタンを使用しないでください。"
                          },
                          {
                            "required": true,
                            "type": "radio",
                            "label": "あなたが13～17歳の間、あなたの友達が学校の生徒に乱暴なことをしたり、「乱暴なことをするぞ」とおどかしたりしているのを見たことがありますか？",
                            "name": "environment-deviate friends21",
                            "options": [
                              {
                                "label": "全く見たことがない",
                                "coding": "0"
                              },
                              {
                                "label": "1回見たことがある",
                                "coding": "1"
                              },
                              {
                                "label": "2回見たことがある",
                                "coding": "2"
                              },
                              {
                                "label": "3回以上見たことがある",
                                "coding": "3"
                              }
                            ]
                          },
                          {
                            "required": true,
                            "type": "html",
                            "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ進む\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                            "name": ""
                          }
                        ],
                        "scrollTop": true,
                        "submitButtonText": "Continue →",
                        "submitButtonPosition": "hidden",
                        "files": {},
                        "responses": {
                          "": ""
                        },
                        "parameters": {},
                        "messageHandlers": {},
                        "title": "environment-deviate friends21"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "lab.flow.Sequence",
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "Sequence",
                "shuffle": true,
                "content": [
                  {
                    "type": "lab.html.Page",
                    "items": [
                      {
                        "required": true,
                        "type": "text",
                        "title": "過去のあなたについての質問をします。13歳～17歳のことを思い出して回答してください。",
                        "content": "あなたに不利益を被ることはありません、率直にご回答ください。\n※１度「次へ進む」を押すと、戻ることはできません。回答が無効になるため、ブラウザの戻るボタンを使用しないでください。"
                      },
                      {
                        "required": true,
                        "type": "radio",
                        "label": "あなたが13～17歳の間、あなたの家族は、あなたが落ち込んでいると元気づけてくれましたか？",
                        "options": [
                          {
                            "label": "全くあてはまらない",
                            "coding": "1"
                          },
                          {
                            "label": "あてはまらない",
                            "coding": "2"
                          },
                          {
                            "label": "あてはまる",
                            "coding": "3"
                          },
                          {
                            "label": "とてもよくあてはまる",
                            "coding": "4"
                          }
                        ],
                        "name": "social support-family1"
                      },
                      {
                        "required": true,
                        "type": "html",
                        "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ進む\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                        "name": ""
                      }
                    ],
                    "scrollTop": true,
                    "submitButtonText": "Continue →",
                    "submitButtonPosition": "hidden",
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "social support-family1"
                  },
                  {
                    "type": "lab.html.Page",
                    "items": [
                      {
                        "required": true,
                        "type": "text",
                        "title": "過去のあなたについての質問をします。13歳～17歳のことを思い出して回答してください。",
                        "content": "あなたに不利益を被ることはありません、率直にご回答ください。\n※１度「次へ進む」を押すと、戻ることはできません。回答が無効になるため、ブラウザの戻るボタンを使用しないでください。"
                      },
                      {
                        "required": true,
                        "type": "radio",
                        "label": "あなたが13～17歳の間、あなたの家族は、あなたのことをよくほめてくれましたか？",
                        "options": [
                          {
                            "label": "全くあてはまらない",
                            "coding": "1"
                          },
                          {
                            "label": "あてはまらない",
                            "coding": "2"
                          },
                          {
                            "label": "あてはまる",
                            "coding": "3"
                          },
                          {
                            "label": "とてもよくあてはまる",
                            "coding": "4"
                          }
                        ],
                        "name": "social support-family2"
                      },
                      {
                        "required": true,
                        "type": "html",
                        "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ進む\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                        "name": ""
                      }
                    ],
                    "scrollTop": true,
                    "submitButtonText": "Continue →",
                    "submitButtonPosition": "hidden",
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "social support-family2"
                  },
                  {
                    "type": "lab.html.Page",
                    "items": [
                      {
                        "required": true,
                        "type": "text",
                        "title": "過去のあなたについての質問をします。13歳～17歳のことを思い出して回答してください。",
                        "content": "あなたに不利益を被ることはありません、率直にご回答ください。\n※１度「次へ進む」を押すと、戻ることはできません。回答が無効になるため、ブラウザの戻るボタンを使用しないでください。"
                      },
                      {
                        "required": true,
                        "type": "radio",
                        "label": "あなたが13～17歳の間、あなたには何か困っているときにどうしたらいいか教えてくれる家族がいましたか？",
                        "options": [
                          {
                            "label": "全くあてはまらない",
                            "coding": "1"
                          },
                          {
                            "label": "あてはまらない",
                            "coding": "2"
                          },
                          {
                            "label": "あてはまる",
                            "coding": "3"
                          },
                          {
                            "label": "とてもよくあてはまる",
                            "coding": "4"
                          }
                        ],
                        "name": "social support-family3"
                      },
                      {
                        "required": true,
                        "type": "html",
                        "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ進む\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                        "name": ""
                      }
                    ],
                    "scrollTop": true,
                    "submitButtonText": "Continue →",
                    "submitButtonPosition": "hidden",
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "social support-family3"
                  },
                  {
                    "type": "lab.html.Page",
                    "items": [
                      {
                        "required": true,
                        "type": "text",
                        "title": "過去のあなたについての質問をします。13歳～17歳のことを思い出して回答してください。",
                        "content": "あなたに不利益を被ることはありません、率直にご回答ください。\n※１度「次へ進む」を押すと、戻ることはできません。回答が無効になるため、ブラウザの戻るボタンを使用しないでください。"
                      },
                      {
                        "required": true,
                        "type": "radio",
                        "label": "あなたが13～17歳の間、あなたの家族は、あなたがなにか失敗しても助けてくれましたか？",
                        "options": [
                          {
                            "label": "全くあてはまらない",
                            "coding": "1"
                          },
                          {
                            "label": "あてはまらない",
                            "coding": "2"
                          },
                          {
                            "label": "あてはまる",
                            "coding": "3"
                          },
                          {
                            "label": "とてもよくあてはまる",
                            "coding": "4"
                          }
                        ],
                        "name": "social support-family4"
                      },
                      {
                        "required": true,
                        "type": "html",
                        "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ進む\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                        "name": ""
                      }
                    ],
                    "scrollTop": true,
                    "submitButtonText": "Continue →",
                    "submitButtonPosition": "hidden",
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "social support-family4"
                  },
                  {
                    "type": "lab.html.Page",
                    "items": [
                      {
                        "required": true,
                        "type": "text",
                        "title": "過去のあなたについての質問をします。13歳～17歳のことを思い出して回答してください。",
                        "content": "あなたに不利益を被ることはありません、率直にご回答ください。\n※１度「次へ進む」を押すと、戻ることはできません。回答が無効になるため、ブラウザの戻るボタンを使用しないでください。"
                      },
                      {
                        "required": true,
                        "type": "radio",
                        "label": "あなたが13～17歳の間、あなたの家族は、あなたが助けてほしいときに力になってくれましたか？",
                        "options": [
                          {
                            "label": "全くあてはまらない",
                            "coding": "1"
                          },
                          {
                            "label": "あてはまらない",
                            "coding": "2"
                          },
                          {
                            "label": "あてはまる",
                            "coding": "3"
                          },
                          {
                            "label": "とてもよくあてはまる",
                            "coding": "4"
                          }
                        ],
                        "name": "social support-family5"
                      },
                      {
                        "required": true,
                        "type": "html",
                        "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ進む\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                        "name": ""
                      }
                    ],
                    "scrollTop": true,
                    "submitButtonText": "Continue →",
                    "submitButtonPosition": "hidden",
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "social support-family5"
                  },
                  {
                    "type": "lab.html.Page",
                    "items": [
                      {
                        "required": true,
                        "type": "text",
                        "title": "過去のあなたについての質問をします。13歳～17歳のことを思い出して回答してください。",
                        "content": "あなたに不利益を被ることはありません、率直にご回答ください。\n※１度「次へ進む」を押すと、戻ることはできません。回答が無効になるため、ブラウザの戻るボタンを使用しないでください。"
                      },
                      {
                        "required": true,
                        "type": "radio",
                        "label": "あなたが13～17歳の間、あなたの家族は、1人ではできないことがあった時に、手伝ってくれましたか？",
                        "options": [
                          {
                            "label": "全くあてはまらない",
                            "coding": "1"
                          },
                          {
                            "label": "あてはまらない",
                            "coding": "2"
                          },
                          {
                            "label": "あてはまる",
                            "coding": "3"
                          },
                          {
                            "label": "とてもよくあてはまる",
                            "coding": "4"
                          }
                        ],
                        "name": "social support-family6"
                      },
                      {
                        "required": true,
                        "type": "html",
                        "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ進む\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                        "name": ""
                      }
                    ],
                    "scrollTop": true,
                    "submitButtonText": "Continue →",
                    "submitButtonPosition": "hidden",
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "social support-family6"
                  },
                  {
                    "type": "lab.flow.Sequence",
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Sequence",
                    "content": [
                      {
                        "type": "lab.html.Page",
                        "items": [
                          {
                            "required": true,
                            "type": "text",
                            "title": "過去のあなたについての質問をします。13歳～17歳のことを思い出して回答してください。",
                            "content": "あなたに不利益を被ることはありません、率直にご回答ください。\n※１度「次へ進む」を押すと、戻ることはできません。回答が無効になるため、ブラウザの戻るボタンを使用しないでください。"
                          },
                          {
                            "required": true,
                            "type": "radio",
                            "label": "あなたが13～17歳の間、あなたの友達は、あなたが落ち込んでいると元気づけてくれましたか？",
                            "options": [
                              {
                                "label": "全くあてはまらない",
                                "coding": "1"
                              },
                              {
                                "label": "あてはまらない",
                                "coding": "2"
                              },
                              {
                                "label": "あてはまる",
                                "coding": "3"
                              },
                              {
                                "label": "とてもよくあてはまる",
                                "coding": "4"
                              }
                            ],
                            "name": "social support-friends1"
                          },
                          {
                            "required": true,
                            "type": "html",
                            "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ進む\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                            "name": ""
                          }
                        ],
                        "scrollTop": true,
                        "submitButtonText": "Continue →",
                        "submitButtonPosition": "hidden",
                        "files": {},
                        "responses": {
                          "": ""
                        },
                        "parameters": {},
                        "messageHandlers": {},
                        "title": "social support-friends1"
                      },
                      {
                        "type": "lab.html.Page",
                        "items": [
                          {
                            "required": true,
                            "type": "text",
                            "title": "過去のあなたについての質問をします。13歳～17歳のことを思い出して回答してください。",
                            "content": "あなたに不利益を被ることはありません、率直にご回答ください。\n※１度「次へ進む」を押すと、戻ることはできません。回答が無効になるため、ブラウザの戻るボタンを使用しないでください。"
                          },
                          {
                            "required": true,
                            "type": "radio",
                            "label": "あなたが13～17歳の間、あなたの友達は、あなたのことをよくほめてくれましたか？",
                            "options": [
                              {
                                "label": "全くあてはまらない",
                                "coding": "1"
                              },
                              {
                                "label": "あてはまらない",
                                "coding": "2"
                              },
                              {
                                "label": "あてはまる",
                                "coding": "3"
                              },
                              {
                                "label": "とてもよくあてはまる",
                                "coding": "4"
                              }
                            ],
                            "name": "social support-friends2"
                          },
                          {
                            "required": true,
                            "type": "html",
                            "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ進む\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                            "name": ""
                          }
                        ],
                        "scrollTop": true,
                        "submitButtonText": "Continue →",
                        "submitButtonPosition": "hidden",
                        "files": {},
                        "responses": {
                          "": ""
                        },
                        "parameters": {},
                        "messageHandlers": {},
                        "title": "social support-friends2"
                      },
                      {
                        "type": "lab.html.Page",
                        "items": [
                          {
                            "required": true,
                            "type": "text",
                            "title": "過去のあなたについての質問をします。13歳～17歳のことを思い出して回答してください。",
                            "content": "あなたに不利益を被ることはありません、率直にご回答ください。\n※１度「次へ進む」を押すと、戻ることはできません。回答が無効になるため、ブラウザの戻るボタンを使用しないでください。"
                          },
                          {
                            "required": true,
                            "type": "radio",
                            "label": "あなたが13～17歳の間、あなたには何か困っているときにどうしたらいいか教えてくれる友達がいましたか？",
                            "options": [
                              {
                                "label": "全くあてはまらない",
                                "coding": "1"
                              },
                              {
                                "label": "あてはまらない",
                                "coding": "2"
                              },
                              {
                                "label": "あてはまる",
                                "coding": "3"
                              },
                              {
                                "label": "とてもよくあてはまる",
                                "coding": "4"
                              }
                            ],
                            "name": "social support-friends3"
                          },
                          {
                            "required": true,
                            "type": "html",
                            "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ進む\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                            "name": ""
                          }
                        ],
                        "scrollTop": true,
                        "submitButtonText": "Continue →",
                        "submitButtonPosition": "hidden",
                        "files": {},
                        "responses": {
                          "": ""
                        },
                        "parameters": {},
                        "messageHandlers": {},
                        "title": "social support-friends3"
                      },
                      {
                        "type": "lab.html.Page",
                        "items": [
                          {
                            "required": true,
                            "type": "text",
                            "title": "過去のあなたについての質問をします。13歳～17歳のことを思い出して回答してください。",
                            "content": "あなたに不利益を被ることはありません、率直にご回答ください。\n※１度「次へ進む」を押すと、戻ることはできません。回答が無効になるため、ブラウザの戻るボタンを使用しないでください。"
                          },
                          {
                            "required": true,
                            "type": "radio",
                            "label": "あなたが13～17歳の間、あなたの友達は、あなたがなにか失敗しても助けてくれましたか？",
                            "options": [
                              {
                                "label": "全くあてはまらない",
                                "coding": "1"
                              },
                              {
                                "label": "あてはまらない",
                                "coding": "2"
                              },
                              {
                                "label": "あてはまる",
                                "coding": "3"
                              },
                              {
                                "label": "とてもよくあてはまる",
                                "coding": "4"
                              }
                            ],
                            "name": "social support-friends4"
                          },
                          {
                            "required": true,
                            "type": "html",
                            "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ進む\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                            "name": ""
                          }
                        ],
                        "scrollTop": true,
                        "submitButtonText": "Continue →",
                        "submitButtonPosition": "hidden",
                        "files": {},
                        "responses": {
                          "": ""
                        },
                        "parameters": {},
                        "messageHandlers": {},
                        "title": "social support-friends4"
                      },
                      {
                        "type": "lab.html.Page",
                        "items": [
                          {
                            "required": true,
                            "type": "text",
                            "title": "過去のあなたについての質問をします。13歳～17歳のことを思い出して回答してください。",
                            "content": "あなたに不利益を被ることはありません、率直にご回答ください。\n※１度「次へ進む」を押すと、戻ることはできません。回答が無効になるため、ブラウザの戻るボタンを使用しないでください。"
                          },
                          {
                            "required": true,
                            "type": "radio",
                            "label": "あなたが13～17歳の間、あなたの友達は、あなたが助けてほしいときに力になってくれましたか？",
                            "options": [
                              {
                                "label": "全くあてはまらない",
                                "coding": "1"
                              },
                              {
                                "label": "あてはまらない",
                                "coding": "2"
                              },
                              {
                                "label": "あてはまる",
                                "coding": "3"
                              },
                              {
                                "label": "とてもよくあてはまる",
                                "coding": "4"
                              }
                            ],
                            "name": "social support-friends5"
                          },
                          {
                            "required": true,
                            "type": "html",
                            "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ進む\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                            "name": ""
                          }
                        ],
                        "scrollTop": true,
                        "submitButtonText": "Continue →",
                        "submitButtonPosition": "hidden",
                        "files": {},
                        "responses": {
                          "": ""
                        },
                        "parameters": {},
                        "messageHandlers": {},
                        "title": "social support-friends5"
                      },
                      {
                        "type": "lab.html.Page",
                        "items": [
                          {
                            "required": true,
                            "type": "text",
                            "title": "過去のあなたについての質問をします。13歳～17歳のことを思い出して回答してください。",
                            "content": "あなたに不利益を被ることはありません、率直にご回答ください。\n※１度「次へ進む」を押すと、戻ることはできません。回答が無効になるため、ブラウザの戻るボタンを使用しないでください。"
                          },
                          {
                            "required": true,
                            "type": "radio",
                            "label": "あなたが13～17歳の間、あなたの友達は、1人ではできないことがあった時に、手伝ってくれましたか？",
                            "options": [
                              {
                                "label": "全くあてはまらない",
                                "coding": "1"
                              },
                              {
                                "label": "あてはまらない",
                                "coding": "2"
                              },
                              {
                                "label": "あてはまる",
                                "coding": "3"
                              },
                              {
                                "label": "とてもよくあてはまる",
                                "coding": "4"
                              }
                            ],
                            "name": "social support-friends6"
                          },
                          {
                            "required": true,
                            "type": "html",
                            "content": "\u003Cdiv style=\"margin: 20px 0 100px 0;\"\u003E\u003Cbutton\u003E次へ進む\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E",
                            "name": ""
                          }
                        ],
                        "scrollTop": true,
                        "submitButtonText": "Continue →",
                        "submitButtonPosition": "hidden",
                        "files": {},
                        "responses": {
                          "": ""
                        },
                        "parameters": {},
                        "messageHandlers": {},
                        "title": "social support-friends6"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "type": "text",
                "content": "これで回答は終了です。\u003Cbr\u003E\n続いて、参加確認のための「参加者番号」を提示します。"
              },
              {
                "required": true,
                "type": "text",
                "title": "あなたの参加者番号は「${ this.parameters.SubjectID }」です。",
                "content": "この番号は，実験に参加したことの証明ですので、\u003Cbr\u003E\nメモを取るまたはスクリーンショットを撮影するなど、\u003Cbr\u003E\n入力を求められた際に思い出せるようにしておいてください。\u003Cbr\u003E\n再発行はできませんのでご了承ください。"
              },
              {
                "required": true,
                "type": "text",
                "title": "参加者番号を保存した方は，「参加者番号をメモした」をクリックして次に進んでください。"
              }
            ],
            "scrollTop": true,
            "submitButtonText": "Continue →",
            "submitButtonPosition": "hidden",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
this.options.items.push({
          "type": "text",
           "content": "<ul><u>※注意事項※ <br>この参加者番号の第三者への開示はご遠慮願います。</u></ul>"
        })

this.options.items.push({
          "type": "html",
          "content": "<div class=\"content-horizontal-center\"><button>参加者番号をメモした</button></div>"
        })
this.options.submitButtonPosition = 'hidden';
}
            },
            "title": "Show ID"
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "type": "text",
                "title": "これでアンケートは終了です。ご協力ありがとうございました。",
                "content": "ウィンドウを閉じて終了してください。"
              }
            ],
            "scrollTop": true,
            "submitButtonText": "Continue →",
            "submitButtonPosition": "hidden",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
//check Tardy
//ファイル名をランダムIDにする
const participantID = this.random.uuid4()

//csvファイルで保存する場合
const filename = participantID + "_data.csv"
const data = study.internals.controller.datastore.exportCsv();

fetch("https://pipe.jspsych.org/api/data/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
  body: JSON.stringify({
    experimentID: "qExPFrMUiBGH",
    filename: filename,
    data: data,
  }),
});
}
            },
            "title": "End",
            "timeout": "1000",
            "tardy": true
          }
        ]
      }
    }
  ]
})

// Let's go!
study.run()