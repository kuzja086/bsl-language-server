window.BENCHMARK_DATA = {
  "lastUpdate": 1587459439038,
  "repoUrl": "https://github.com/1c-syntax/bsl-language-server",
  "entries": {
    "BSL LS perfomance measurement (SSL 3.1)": [
      {
        "commit": {
          "author": {
            "email": "nixel2007@gmail.com",
            "name": "Nikita Gryzlov",
            "username": "nixel2007"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6653a3b708904ab9f45c80c2a784b22d7e30c15b",
          "message": "Merge pull request #1031 from 1c-syntax/feature/benchmark-badge\n\nБейдж замеров производительности",
          "timestamp": "2020-04-11T12:18:54+03:00",
          "tree_id": "f63e3dc9fc8765d9635d244826c692e49e3a0220",
          "url": "https://github.com/1c-syntax/bsl-language-server/commit/6653a3b708904ab9f45c80c2a784b22d7e30c15b"
        },
        "date": 1586597055409,
        "tool": "pytest",
        "benches": [
          {
            "name": ".github/scripts/benchmark.py::test_analyze_ssl31",
            "value": 63.476545333862305,
            "unit": "sec",
            "range": "stddev: 0",
            "extra": "mean: 63.476545333862305 sec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nixel2007@gmail.com",
            "name": "Nikita Gryzlov",
            "username": "nixel2007"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8ac7c0591539f07e3c6d04b14771c1650ce33397",
          "message": "Merge pull request #1033 from otymko/feature/fix-benchmark\n\nFix benchmark",
          "timestamp": "2020-04-11T16:59:45+03:00",
          "tree_id": "6f84e553b2d863245d2ef8607e4dff865fea0878",
          "url": "https://github.com/1c-syntax/bsl-language-server/commit/8ac7c0591539f07e3c6d04b14771c1650ce33397"
        },
        "date": 1586613940488,
        "tool": "pytest",
        "benches": [
          {
            "name": ".github/scripts/benchmark.py::test_analyze_ssl31",
            "value": 72.43926119804382,
            "unit": "sec",
            "range": "stddev: 0",
            "extra": "mean: 72.43926119804382 sec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nixel2007@gmail.com",
            "name": "Nikita Gryzlov",
            "username": "nixel2007"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5eebe6dc36fb11482ceea0279253a9f1cb9f7f08",
          "message": "Merge pull request #1034 from 1c-syntax/otymko-patch-round\n\nУвеличение кругов bench с 1 до 3",
          "timestamp": "2020-04-11T17:32:47+03:00",
          "tree_id": "39fc6a8b65b34b0e9b16e8ca2795c90eb6ce93ab",
          "url": "https://github.com/1c-syntax/bsl-language-server/commit/5eebe6dc36fb11482ceea0279253a9f1cb9f7f08"
        },
        "date": 1586616026290,
        "tool": "pytest",
        "benches": [
          {
            "name": ".github/scripts/benchmark.py::test_analyze_ssl31",
            "value": 63.76906005541483,
            "unit": "sec",
            "range": "stddev: 1.2978114728391386",
            "extra": "mean: 63.76906005541483 sec\nrounds: 3"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "olegtymko@yandex.ru",
            "name": "Oleg Tymko",
            "username": "otymko"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a96ffc5e9403a211648c232117bcd906a72bfba9",
          "message": "Total не подходит при нескольких замерах\n\ntotal -> mean",
          "timestamp": "2020-04-11T21:56:46+07:00",
          "tree_id": "4f7dae6312c530b92c95d0b8edb1049a6d987656",
          "url": "https://github.com/1c-syntax/bsl-language-server/commit/a96ffc5e9403a211648c232117bcd906a72bfba9"
        },
        "date": 1586617497388,
        "tool": "pytest",
        "benches": [
          {
            "name": ".github/scripts/benchmark.py::test_analyze_ssl31",
            "value": 69.42885907491048,
            "unit": "sec",
            "range": "stddev: 1.0543839909905468",
            "extra": "mean: 69.42885907491048 sec\nrounds: 3"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nixel2007@gmail.com",
            "name": "Nikita Gryzlov",
            "username": "nixel2007"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4ba04dfa567cc70a030ccba456d44fc967aa2b89",
          "message": "Merge pull request #1039 from 1c-syntax/fix/docs\n\nИсправление в документации",
          "timestamp": "2020-04-12T13:33:05+03:00",
          "tree_id": "13d755e4b99fc6e61ee6d690f3f5426e4b56543c",
          "url": "https://github.com/1c-syntax/bsl-language-server/commit/4ba04dfa567cc70a030ccba456d44fc967aa2b89"
        },
        "date": 1586688082994,
        "tool": "pytest",
        "benches": [
          {
            "name": ".github/scripts/benchmark.py::test_analyze_ssl31",
            "value": 71.28481260935466,
            "unit": "sec",
            "range": "stddev: 0.6141648824262582",
            "extra": "mean: 71.28481260935466 sec\nrounds: 3"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nixel2007@gmail.com",
            "name": "Nikita Gryzlov",
            "username": "nixel2007"
          },
          "committer": {
            "email": "nixel2007@gmail.com",
            "name": "Nikita Gryzlov",
            "username": "nixel2007"
          },
          "distinct": true,
          "id": "f2ce76727ce3431591fe29658eb2294284cf5e41",
          "message": "Fix qf",
          "timestamp": "2020-04-13T11:10:02+03:00",
          "tree_id": "ab5d079fa5e86ef0d3d3f265416bf34a2deb730f",
          "url": "https://github.com/1c-syntax/bsl-language-server/commit/f2ce76727ce3431591fe29658eb2294284cf5e41"
        },
        "date": 1586765891385,
        "tool": "pytest",
        "benches": [
          {
            "name": ".github/scripts/benchmark.py::test_analyze_ssl31",
            "value": 70.39345208803813,
            "unit": "sec",
            "range": "stddev: 1.5018149040124404",
            "extra": "mean: 70.39345208803813 sec\nrounds: 3"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "maximovvalery@gmail.com",
            "name": "Maximov Valery",
            "username": "theshadowco"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8cc23a4de7a15a2305e39ebac98ee00b825129d2",
          "message": "Merge pull request #1049 from artbear/contrib-doc-fix\n\nВ Руководство контрибьютора нет ссылки на полезную статью \"Структура диагностики, назначение и содержимое файлов\"",
          "timestamp": "2020-04-13T16:14:51+03:00",
          "tree_id": "82d35d5a605df4efe98fcb55dcd04b367b469df9",
          "url": "https://github.com/1c-syntax/bsl-language-server/commit/8cc23a4de7a15a2305e39ebac98ee00b825129d2"
        },
        "date": 1586784230733,
        "tool": "pytest",
        "benches": [
          {
            "name": ".github/scripts/benchmark.py::test_analyze_ssl31",
            "value": 78.91837930679321,
            "unit": "sec",
            "range": "stddev: 0.40390016008562496",
            "extra": "mean: 78.91837930679321 sec\nrounds: 3"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nixel2007@gmail.com",
            "name": "Nikita Gryzlov",
            "username": "nixel2007"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9976528a338c977787c19c8a624abe1af56fad04",
          "message": "Merge pull request #1053 from 1c-syntax/fix/MethodeComputer\n\nMethodeComputer fix",
          "timestamp": "2020-04-13T20:47:54+03:00",
          "tree_id": "1a7e0762333b168949b153cfa23f0cb99b52291f",
          "url": "https://github.com/1c-syntax/bsl-language-server/commit/9976528a338c977787c19c8a624abe1af56fad04"
        },
        "date": 1586800571799,
        "tool": "pytest",
        "benches": [
          {
            "name": ".github/scripts/benchmark.py::test_analyze_ssl31",
            "value": 72.92317056655884,
            "unit": "sec",
            "range": "stddev: 1.5978113513600387",
            "extra": "mean: 72.92317056655884 sec\nrounds: 3"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nixel2007@gmail.com",
            "name": "Nikita Gryzlov",
            "username": "nixel2007"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dcc65a5d00115565a08ce5587409b17272e34219",
          "message": "Merge pull request #1028 from APonkratov/feature/missingVariablesDescription\n\nОтсутствует описание у переменной",
          "timestamp": "2020-04-13T20:49:07+03:00",
          "tree_id": "1aa97eb0978f135f3f6d13eab6180c72967b8902",
          "url": "https://github.com/1c-syntax/bsl-language-server/commit/dcc65a5d00115565a08ce5587409b17272e34219"
        },
        "date": 1586800646296,
        "tool": "pytest",
        "benches": [
          {
            "name": ".github/scripts/benchmark.py::test_analyze_ssl31",
            "value": 73.00902581214905,
            "unit": "sec",
            "range": "stddev: 0.8845486896504238",
            "extra": "mean: 73.00902581214905 sec\nrounds: 3"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nixel2007@gmail.com",
            "name": "Nikita Gryzlov",
            "username": "nixel2007"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "67f6969d9b8fff668b74e54732cc5e2fe68000e1",
          "message": "Merge pull request #1042 from artbear/UsingServiceTag-fix\n\nУбрал ненужный дубль проверки строки на регулярку - обработка замечания от инспекции Идеи",
          "timestamp": "2020-04-13T21:57:22+03:00",
          "tree_id": "1e5fa221b7ab3195b666812840d712d9acee2add",
          "url": "https://github.com/1c-syntax/bsl-language-server/commit/67f6969d9b8fff668b74e54732cc5e2fe68000e1"
        },
        "date": 1586804768235,
        "tool": "pytest",
        "benches": [
          {
            "name": ".github/scripts/benchmark.py::test_analyze_ssl31",
            "value": 76.9522720972697,
            "unit": "sec",
            "range": "stddev: 1.385167640697603",
            "extra": "mean: 76.9522720972697 sec\nrounds: 3"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nixel2007@gmail.com",
            "name": "Nikita Gryzlov",
            "username": "nixel2007"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c3078ec793fe82a315a3c7e524833c0501f2107d",
          "message": "Merge pull request #1036 from 1c-syntax/feature/contribute\n\nПравки документации для разработчиков",
          "timestamp": "2020-04-13T21:56:29+03:00",
          "tree_id": "7f0e3fc23a2312a00657300e5fcc7b8082987896",
          "url": "https://github.com/1c-syntax/bsl-language-server/commit/c3078ec793fe82a315a3c7e524833c0501f2107d"
        },
        "date": 1586804775557,
        "tool": "pytest",
        "benches": [
          {
            "name": ".github/scripts/benchmark.py::test_analyze_ssl31",
            "value": 83.80595016479492,
            "unit": "sec",
            "range": "stddev: 2.955904299753347",
            "extra": "mean: 83.80595016479492 sec\nrounds: 3"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nixel2007@gmail.com",
            "name": "Nikita Gryzlov",
            "username": "nixel2007"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c2884518a39c9febd797a189e62aae557665597c",
          "message": "Merge pull request #1040 from Stepa86/fix/typo_Exceptions\n\nНовые исключения в Typo на основе проверки ERP и БСП",
          "timestamp": "2020-04-13T21:57:46+03:00",
          "tree_id": "c91a12743d909566c46c8da39c2da7e4990a0abe",
          "url": "https://github.com/1c-syntax/bsl-language-server/commit/c2884518a39c9febd797a189e62aae557665597c"
        },
        "date": 1586804796764,
        "tool": "pytest",
        "benches": [
          {
            "name": ".github/scripts/benchmark.py::test_analyze_ssl31",
            "value": 64.5100724697113,
            "unit": "sec",
            "range": "stddev: 1.6384966856365597",
            "extra": "mean: 64.5100724697113 sec\nrounds: 3"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nixel2007@gmail.com",
            "name": "Nikita Gryzlov",
            "username": "nixel2007"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0c21eba148bad6de5bfd576394b773bb12aa70e3",
          "message": "Merge pull request #1055 from 1c-syntax/fix/ContentList\n\nContentList with last whiteSpaces",
          "timestamp": "2020-04-14T00:54:10+03:00",
          "tree_id": "27c91d8a6993352478309c42f79cee2790729fa7",
          "url": "https://github.com/1c-syntax/bsl-language-server/commit/0c21eba148bad6de5bfd576394b773bb12aa70e3"
        },
        "date": 1586815342717,
        "tool": "pytest",
        "benches": [
          {
            "name": ".github/scripts/benchmark.py::test_analyze_ssl31",
            "value": 72.54413104057312,
            "unit": "sec",
            "range": "stddev: 0.12933625592096532",
            "extra": "mean: 72.54413104057312 sec\nrounds: 3"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nixel2007@gmail.com",
            "name": "Nikita Gryzlov",
            "username": "nixel2007"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "14696a69d01e9b4b0a80328dcafbc172cf2aec3d",
          "message": "Merge pull request #1056 from artbear/doc-auto-fix\n\nПропущенные результаты precommit - т.к. при его выполнении правильно удаляется лишний пробел",
          "timestamp": "2020-04-14T11:29:26+03:00",
          "tree_id": "708edc31b238e66f7d02b77066ecb9fc4ad4044d",
          "url": "https://github.com/1c-syntax/bsl-language-server/commit/14696a69d01e9b4b0a80328dcafbc172cf2aec3d"
        },
        "date": 1586853590629,
        "tool": "pytest",
        "benches": [
          {
            "name": ".github/scripts/benchmark.py::test_analyze_ssl31",
            "value": 66.89521845181783,
            "unit": "sec",
            "range": "stddev: 1.4015741547607594",
            "extra": "mean: 66.89521845181783 sec\nrounds: 3"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nixel2007@gmail.com",
            "name": "Nikita Gryzlov",
            "username": "nixel2007"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bf03f7d9fe23c488fd63eb49fae44e2e6924b8f5",
          "message": "Исправил ссылку на результаты бенчмарка",
          "timestamp": "2020-04-14T15:14:36+03:00",
          "tree_id": "3d98b5d6c39e1a3a7a8844b9d8cf53b554f193ef",
          "url": "https://github.com/1c-syntax/bsl-language-server/commit/bf03f7d9fe23c488fd63eb49fae44e2e6924b8f5"
        },
        "date": 1586866968653,
        "tool": "pytest",
        "benches": [
          {
            "name": ".github/scripts/benchmark.py::test_analyze_ssl31",
            "value": 70.18764797846477,
            "unit": "sec",
            "range": "stddev: 0.40065979797498813",
            "extra": "mean: 70.18764797846477 sec\nrounds: 3"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nixel2007@gmail.com",
            "name": "Nikita Gryzlov",
            "username": "nixel2007"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7d4585534c4746a2b7c7b51a199548179675b820",
          "message": "Merge pull request #1058 from 1c-syntax/feature/EOF\n\nПарсер отдает EOF в Hidden Channel",
          "timestamp": "2020-04-15T00:28:53+03:00",
          "tree_id": "0e005d4fdd7c3ed9c73b573f95f69858c8253394",
          "url": "https://github.com/1c-syntax/bsl-language-server/commit/7d4585534c4746a2b7c7b51a199548179675b820"
        },
        "date": 1586900211885,
        "tool": "pytest",
        "benches": [
          {
            "name": ".github/scripts/benchmark.py::test_analyze_ssl31",
            "value": 70.21630811691284,
            "unit": "sec",
            "range": "stddev: 1.4232242041767722",
            "extra": "mean: 70.21630811691284 sec\nrounds: 3"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "int-it@yandex.ru",
            "name": "Alexey Sosnoviy",
            "username": "asosnoviy"
          },
          "committer": {
            "email": "int-it@yandex.ru",
            "name": "Alexey Sosnoviy",
            "username": "asosnoviy"
          },
          "distinct": true,
          "id": "e93883c94bac1affb541e89a15176d1645a9ad7c",
          "message": "parser version bump",
          "timestamp": "2020-04-15T10:30:43+03:00",
          "tree_id": "efa9cd397c4b1484d9f75fe56d2ebbb1744e31d0",
          "url": "https://github.com/1c-syntax/bsl-language-server/commit/e93883c94bac1affb541e89a15176d1645a9ad7c"
        },
        "date": 1586936345988,
        "tool": "pytest",
        "benches": [
          {
            "name": ".github/scripts/benchmark.py::test_analyze_ssl31",
            "value": 72.06531023979187,
            "unit": "sec",
            "range": "stddev: 0.3590659233219285",
            "extra": "mean: 72.06531023979187 sec\nrounds: 3"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nixel2007@gmail.com",
            "name": "Nikita Gryzlov",
            "username": "nixel2007"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0063780d0fb549ead597540c24a9978d51c2c784",
          "message": "Merge pull request #1037 from 1c-syntax/feature/thisObjectAssign\n\nthisObjectAssignDiagnostic",
          "timestamp": "2020-04-15T16:56:31+03:00",
          "tree_id": "742a016e6e8e49bcd556cbdc19802e25dc221967",
          "url": "https://github.com/1c-syntax/bsl-language-server/commit/0063780d0fb549ead597540c24a9978d51c2c784"
        },
        "date": 1586959467742,
        "tool": "pytest",
        "benches": [
          {
            "name": ".github/scripts/benchmark.py::test_analyze_ssl31",
            "value": 70.31435871124268,
            "unit": "sec",
            "range": "stddev: 0.301043109178605",
            "extra": "mean: 70.31435871124268 sec\nrounds: 3"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "int-it@yandex.ru",
            "name": "Alexey Sosnoviy",
            "username": "asosnoviy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2378801f71267827e5abd7f9454e0c8470a67e51",
          "message": "Merge pull request #1051 from MinimaJack/cqic-fix-1\n\nAnother fix fp запрос в цикле",
          "timestamp": "2020-04-15T18:38:07+03:00",
          "tree_id": "f69b12b6699228de7691f1f36a87fe8341978b9d",
          "url": "https://github.com/1c-syntax/bsl-language-server/commit/2378801f71267827e5abd7f9454e0c8470a67e51"
        },
        "date": 1586965631417,
        "tool": "pytest",
        "benches": [
          {
            "name": ".github/scripts/benchmark.py::test_analyze_ssl31",
            "value": 74.84124422073364,
            "unit": "sec",
            "range": "stddev: 0.5293300239154064",
            "extra": "mean: 74.84124422073364 sec\nrounds: 3"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nixel2007@gmail.com",
            "name": "Nikita Gryzlov",
            "username": "nixel2007"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bbec2f0aec1afa221a38250a0cf2fc40ca6dffec",
          "message": "Merge pull request #1059 from 1c-syntax/feature/silent\n\nДобавил молчаливый режим консоли",
          "timestamp": "2020-04-15T19:07:49+03:00",
          "tree_id": "d262d82374d3cc3e612322b8d4852fdadbe73c2e",
          "url": "https://github.com/1c-syntax/bsl-language-server/commit/bbec2f0aec1afa221a38250a0cf2fc40ca6dffec"
        },
        "date": 1586967440797,
        "tool": "pytest",
        "benches": [
          {
            "name": ".github/scripts/benchmark.py::test_analyze_ssl31",
            "value": 81.59028649330139,
            "unit": "sec",
            "range": "stddev: 1.3442582992913759",
            "extra": "mean: 81.59028649330139 sec\nrounds: 3"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nixel2007@gmail.com",
            "name": "Nikita Gryzlov",
            "username": "nixel2007"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c878e4a1efd1b43bc6972f7e2b7cb173a042fa4a",
          "message": "Merge pull request #1062 from 1c-syntax/fix/eofParseError\n\nEOF parse error fix",
          "timestamp": "2020-04-16T14:47:39+03:00",
          "tree_id": "25ef8da1c1a30d6a944d8af1bbb5d09e80bb854f",
          "url": "https://github.com/1c-syntax/bsl-language-server/commit/c878e4a1efd1b43bc6972f7e2b7cb173a042fa4a"
        },
        "date": 1587038084583,
        "tool": "pytest",
        "benches": [
          {
            "name": ".github/scripts/benchmark.py::test_analyze_ssl31",
            "value": 60.420881589253746,
            "unit": "sec",
            "range": "stddev: 0.892696717753229",
            "extra": "mean: 60.420881589253746 sec\nrounds: 3"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nixel2007@gmail.com",
            "name": "Nikita Gryzlov",
            "username": "nixel2007"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fcdc725635065beb83376065eb6de5979b949c41",
          "message": "Merge pull request #1064 from 1c-syntax/fix/variableKind\n\nchange variableKind to Module",
          "timestamp": "2020-04-16T17:19:49+03:00",
          "tree_id": "d77f76be4418ddfb37bb88a355830577bb5d9401",
          "url": "https://github.com/1c-syntax/bsl-language-server/commit/fcdc725635065beb83376065eb6de5979b949c41"
        },
        "date": 1587047335465,
        "tool": "pytest",
        "benches": [
          {
            "name": ".github/scripts/benchmark.py::test_analyze_ssl31",
            "value": 73.69795568784077,
            "unit": "sec",
            "range": "stddev: 2.7807064572982356",
            "extra": "mean: 73.69795568784077 sec\nrounds: 3"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nixel2007@gmail.com",
            "name": "Nikita Gryzlov",
            "username": "nixel2007"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e8de04f671f28ac74c3086367d8114c9c1abccb4",
          "message": "Merge pull request #1063 from 1c-syntax/fix/uselessFoeEach\n\nuseLessForeach field FP fix",
          "timestamp": "2020-04-16T17:34:17+03:00",
          "tree_id": "20e257ce2bbdd909d8ef5fc191aa3947810fd01e",
          "url": "https://github.com/1c-syntax/bsl-language-server/commit/e8de04f671f28ac74c3086367d8114c9c1abccb4"
        },
        "date": 1587048135816,
        "tool": "pytest",
        "benches": [
          {
            "name": ".github/scripts/benchmark.py::test_analyze_ssl31",
            "value": 68.57601547241211,
            "unit": "sec",
            "range": "stddev: 1.4638553938007226",
            "extra": "mean: 68.57601547241211 sec\nrounds: 3"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nixel2007@gmail.com",
            "name": "Nikita Gryzlov",
            "username": "nixel2007"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ce01eeadad4f15cf2a7cc68aaea24437e33f1028",
          "message": "Merge pull request #1067 from 1c-syntax/feature/config_for_bench\n\nWIP: Исключение из замера диагностики Type + исправление опечатки",
          "timestamp": "2020-04-17T00:32:35+03:00",
          "tree_id": "926d6b5d7e9d70546acd7adf9df36ce891516e52",
          "url": "https://github.com/1c-syntax/bsl-language-server/commit/ce01eeadad4f15cf2a7cc68aaea24437e33f1028"
        },
        "date": 1587073168284,
        "tool": "pytest",
        "benches": [
          {
            "name": ".github/scripts/benchmark.py::test_analyze_ssl31",
            "value": 55.04965249697367,
            "unit": "sec",
            "range": "stddev: 0.39911953056612615",
            "extra": "mean: 55.04965249697367 sec\nrounds: 3"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nixel2007@gmail.com",
            "name": "Nikita Gryzlov",
            "username": "nixel2007"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "df525816eaed68f64e988317d9150e9d2778dd21",
          "message": "Merge pull request #1086 from 1c-syntax/feature/issue1079\n\nОбменДанными.Загрузка в обработчиках событий объекта",
          "timestamp": "2020-04-20T17:49:41+03:00",
          "tree_id": "7fa8436d937cead1f629a9893268a89c4ebcc940",
          "url": "https://github.com/1c-syntax/bsl-language-server/commit/df525816eaed68f64e988317d9150e9d2778dd21"
        },
        "date": 1587394587171,
        "tool": "pytest",
        "benches": [
          {
            "name": ".github/scripts/benchmark.py::test_analyze_ssl31",
            "value": 54.360833485921226,
            "unit": "sec",
            "range": "stddev: 0.4788611610911804",
            "extra": "mean: 54.360833485921226 sec\nrounds: 3"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nixel2007@gmail.com",
            "name": "Nikita Gryzlov",
            "username": "nixel2007"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "57660172dddc7ce045da58c489118fd50cb17240",
          "message": "Merge pull request #1093 from 1c-syntax/feature/issue1079\n\nIssue1079 / Фикс регулярки + map to flatmap (избавился от get)",
          "timestamp": "2020-04-20T19:15:19+03:00",
          "tree_id": "adace9e276d299d4848da2efb90c476bc1cc4dfc",
          "url": "https://github.com/1c-syntax/bsl-language-server/commit/57660172dddc7ce045da58c489118fd50cb17240"
        },
        "date": 1587399710353,
        "tool": "pytest",
        "benches": [
          {
            "name": ".github/scripts/benchmark.py::test_analyze_ssl31",
            "value": 53.85562459627787,
            "unit": "sec",
            "range": "stddev: 1.0383059448663565",
            "extra": "mean: 53.85562459627787 sec\nrounds: 3"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nixel2007@gmail.com",
            "name": "Nikita Gryzlov",
            "username": "nixel2007"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "27c95d8bb19260140035278b88cba79fd7de3319",
          "message": "Merge pull request #1094 from artbear/dot-reg-fix\n\nНеточные регулярки - неточное использование точки",
          "timestamp": "2020-04-20T21:14:45+03:00",
          "tree_id": "348bb2c3367bdf1f95d081cbe6252fb8d6873ad1",
          "url": "https://github.com/1c-syntax/bsl-language-server/commit/27c95d8bb19260140035278b88cba79fd7de3319"
        },
        "date": 1587406890527,
        "tool": "pytest",
        "benches": [
          {
            "name": ".github/scripts/benchmark.py::test_analyze_ssl31",
            "value": 54.797364950180054,
            "unit": "sec",
            "range": "stddev: 0.6695273614546695",
            "extra": "mean: 54.797364950180054 sec\nrounds: 3"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nixel2007@gmail.com",
            "name": "Nikita Gryzlov",
            "username": "nixel2007"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4db0e660a76d8356d800f2c4b3b280d9f6be9f99",
          "message": "Merge pull request #1097 from qtLex/feature/CanceledStandartInteractionWithAutomatedTestingTools\n\nFeature/canceled standart interaction with automated testing tools",
          "timestamp": "2020-04-20T23:35:06+03:00",
          "tree_id": "097d1a46335a816662bd82ab2dc028ee8fbf69cb",
          "url": "https://github.com/1c-syntax/bsl-language-server/commit/4db0e660a76d8356d800f2c4b3b280d9f6be9f99"
        },
        "date": 1587415308721,
        "tool": "pytest",
        "benches": [
          {
            "name": ".github/scripts/benchmark.py::test_analyze_ssl31",
            "value": 53.12495541572571,
            "unit": "sec",
            "range": "stddev: 1.2134717858871449",
            "extra": "mean: 53.12495541572571 sec\nrounds: 3"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nixel2007@gmail.com",
            "name": "Nikita Gryzlov",
            "username": "nixel2007"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "db66398eadec27726e62b6832401b8490bdbf387",
          "message": "Merge pull request #1095 from 1c-syntax/fix/npeDataLoad\n\nDataExchangeLoadingDiagnostic npe fix",
          "timestamp": "2020-04-21T11:50:01+03:00",
          "tree_id": "5e9490dcd0d3c9e9161964b62405b260543dcfcd",
          "url": "https://github.com/1c-syntax/bsl-language-server/commit/db66398eadec27726e62b6832401b8490bdbf387"
        },
        "date": 1587459404376,
        "tool": "pytest",
        "benches": [
          {
            "name": ".github/scripts/benchmark.py::test_analyze_ssl31",
            "value": 52.9276594320933,
            "unit": "sec",
            "range": "stddev: 0.08179733693368213",
            "extra": "mean: 52.9276594320933 sec\nrounds: 3"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nixel2007@gmail.com",
            "name": "Nikita Gryzlov",
            "username": "nixel2007"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "07e5f43885aa67e2d0ca390e3791a083dabf1aad",
          "message": "Merge pull request #1099 from 1c-syntax/fix/fpStartTransaction\n\nbegin transaction fp fix",
          "timestamp": "2020-04-21T11:51:12+03:00",
          "tree_id": "e1f462949c89a49ea3325537e9c0d6abbda1d42d",
          "url": "https://github.com/1c-syntax/bsl-language-server/commit/07e5f43885aa67e2d0ca390e3791a083dabf1aad"
        },
        "date": 1587459437752,
        "tool": "pytest",
        "benches": [
          {
            "name": ".github/scripts/benchmark.py::test_analyze_ssl31",
            "value": 47.79250224431356,
            "unit": "sec",
            "range": "stddev: 1.6354533051298585",
            "extra": "mean: 47.79250224431356 sec\nrounds: 3"
          }
        ]
      }
    ]
  }
}