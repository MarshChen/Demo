// Jiten frequency data, CC BY-SA 4.0; see DATA_SOURCES.md.
const WORDS = [
  {
    "id": "jp2k-0001",
    "word": "の",
    "reading": "の",
    "group": 1,
    "sourceRank": 1
  },
  {
    "id": "jp2k-0002",
    "word": "は",
    "reading": "は",
    "group": 1,
    "sourceRank": 2
  },
  {
    "id": "jp2k-0003",
    "word": "に",
    "reading": "に",
    "group": 1,
    "sourceRank": 3
  },
  {
    "id": "jp2k-0004",
    "word": "を",
    "reading": "を",
    "group": 1,
    "sourceRank": 4
  },
  {
    "id": "jp2k-0005",
    "word": "が",
    "reading": "が",
    "group": 1,
    "sourceRank": 5
  },
  {
    "id": "jp2k-0006",
    "word": "と",
    "reading": "と",
    "group": 1,
    "sourceRank": 6
  },
  {
    "id": "jp2k-0007",
    "word": "で",
    "reading": "で",
    "group": 1,
    "sourceRank": 7
  },
  {
    "id": "jp2k-0008",
    "word": "も",
    "reading": "も",
    "group": 1,
    "sourceRank": 8
  },
  {
    "id": "jp2k-0009",
    "word": "だ",
    "reading": "だ",
    "group": 1,
    "sourceRank": 9
  },
  {
    "id": "jp2k-0010",
    "word": "する",
    "reading": "する",
    "group": 1,
    "sourceRank": 10
  },
  {
    "id": "jp2k-0011",
    "word": "から",
    "reading": "から",
    "group": 1,
    "sourceRank": 11
  },
  {
    "id": "jp2k-0012",
    "word": "か",
    "reading": "か",
    "group": 1,
    "sourceRank": 12
  },
  {
    "id": "jp2k-0013",
    "word": "よ",
    "reading": "よ",
    "group": 1,
    "sourceRank": 13
  },
  {
    "id": "jp2k-0014",
    "word": "な",
    "reading": "な",
    "group": 1,
    "sourceRank": 14
  },
  {
    "id": "jp2k-0015",
    "word": "です",
    "reading": "です",
    "group": 1,
    "sourceRank": 15
  },
  {
    "id": "jp2k-0016",
    "word": "こと",
    "reading": "こと",
    "group": 1,
    "sourceRank": 16
  },
  {
    "id": "jp2k-0017",
    "word": "ね",
    "reading": "ね",
    "group": 1,
    "sourceRank": 17
  },
  {
    "id": "jp2k-0018",
    "word": "ある",
    "reading": "ある",
    "group": 1,
    "sourceRank": 18
  },
  {
    "id": "jp2k-0019",
    "word": "なる",
    "reading": "なる",
    "group": 1,
    "sourceRank": 19
  },
  {
    "id": "jp2k-0020",
    "word": "それ",
    "reading": "それ",
    "group": 1,
    "sourceRank": 20
  },
  {
    "id": "jp2k-0021",
    "word": "んだ",
    "reading": "んだ",
    "group": 1,
    "sourceRank": 21
  },
  {
    "id": "jp2k-0022",
    "word": "って",
    "reading": "って",
    "group": 1,
    "sourceRank": 22
  },
  {
    "id": "jp2k-0023",
    "word": "ん",
    "reading": "ん",
    "group": 1,
    "sourceRank": 23
  },
  {
    "id": "jp2k-0024",
    "word": "その",
    "reading": "その",
    "group": 1,
    "sourceRank": 24
  },
  {
    "id": "jp2k-0025",
    "word": "言う",
    "reading": "いう",
    "group": 1,
    "sourceRank": 25
  },
  {
    "id": "jp2k-0026",
    "word": "この",
    "reading": "この",
    "group": 1,
    "sourceRank": 26
  },
  {
    "id": "jp2k-0027",
    "word": "そう",
    "reading": "そう",
    "group": 1,
    "sourceRank": 27
  },
  {
    "id": "jp2k-0028",
    "word": "でも",
    "reading": "でも",
    "group": 1,
    "sourceRank": 28
  },
  {
    "id": "jp2k-0029",
    "word": "さん",
    "reading": "さん",
    "group": 1,
    "sourceRank": 29
  },
  {
    "id": "jp2k-0030",
    "word": "には",
    "reading": "には",
    "group": 1,
    "sourceRank": 30
  },
  {
    "id": "jp2k-0031",
    "word": "思う",
    "reading": "おもう",
    "group": 1,
    "sourceRank": 31
  },
  {
    "id": "jp2k-0032",
    "word": "私",
    "reading": "わたし",
    "group": 1,
    "sourceRank": 32
  },
  {
    "id": "jp2k-0033",
    "word": "いい",
    "reading": "いい",
    "group": 1,
    "sourceRank": 33
  },
  {
    "id": "jp2k-0034",
    "word": "これ",
    "reading": "これ",
    "group": 1,
    "sourceRank": 34
  },
  {
    "id": "jp2k-0035",
    "word": "ない",
    "reading": "ない",
    "group": 1,
    "sourceRank": 35
  },
  {
    "id": "jp2k-0036",
    "word": "だった",
    "reading": "だった",
    "group": 1,
    "sourceRank": 36
  },
  {
    "id": "jp2k-0037",
    "word": "いる",
    "reading": "いる",
    "group": 1,
    "sourceRank": 37
  },
  {
    "id": "jp2k-0038",
    "word": "だけ",
    "reading": "だけ",
    "group": 1,
    "sourceRank": 38
  },
  {
    "id": "jp2k-0039",
    "word": "見る",
    "reading": "みる",
    "group": 1,
    "sourceRank": 39
  },
  {
    "id": "jp2k-0040",
    "word": "そんな",
    "reading": "そんな",
    "group": 1,
    "sourceRank": 40
  },
  {
    "id": "jp2k-0041",
    "word": "けど",
    "reading": "けど",
    "group": 1,
    "sourceRank": 41
  },
  {
    "id": "jp2k-0042",
    "word": "もう",
    "reading": "もう",
    "group": 1,
    "sourceRank": 42
  },
  {
    "id": "jp2k-0043",
    "word": "まで",
    "reading": "まで",
    "group": 1,
    "sourceRank": 43
  },
  {
    "id": "jp2k-0044",
    "word": "し",
    "reading": "し",
    "group": 1,
    "sourceRank": 44
  },
  {
    "id": "jp2k-0045",
    "word": "お",
    "reading": "お",
    "group": 1,
    "sourceRank": 45
  },
  {
    "id": "jp2k-0046",
    "word": "ここ",
    "reading": "ここ",
    "group": 1,
    "sourceRank": 46
  },
  {
    "id": "jp2k-0047",
    "word": "じゃない",
    "reading": "じゃない",
    "group": 1,
    "sourceRank": 47
  },
  {
    "id": "jp2k-0048",
    "word": "だから",
    "reading": "だから",
    "group": 1,
    "sourceRank": 48
  },
  {
    "id": "jp2k-0049",
    "word": "行く",
    "reading": "いく",
    "group": 1,
    "sourceRank": 49
  },
  {
    "id": "jp2k-0050",
    "word": "だろう",
    "reading": "だろう",
    "group": 1,
    "sourceRank": 50
  },
  {
    "id": "jp2k-0051",
    "word": "なら",
    "reading": "なら",
    "group": 1,
    "sourceRank": 51
  },
  {
    "id": "jp2k-0052",
    "word": "何",
    "reading": "なに",
    "group": 1,
    "sourceRank": 52
  },
  {
    "id": "jp2k-0053",
    "word": "今",
    "reading": "いま",
    "group": 1,
    "sourceRank": 53
  },
  {
    "id": "jp2k-0054",
    "word": "俺",
    "reading": "おれ",
    "group": 1,
    "sourceRank": 54
  },
  {
    "id": "jp2k-0055",
    "word": "やる",
    "reading": "やる",
    "group": 1,
    "sourceRank": 55
  },
  {
    "id": "jp2k-0056",
    "word": "どう",
    "reading": "どう",
    "group": 1,
    "sourceRank": 56
  },
  {
    "id": "jp2k-0057",
    "word": "来る",
    "reading": "くる",
    "group": 1,
    "sourceRank": 57
  },
  {
    "id": "jp2k-0058",
    "word": "へ",
    "reading": "へ",
    "group": 1,
    "sourceRank": 58
  },
  {
    "id": "jp2k-0059",
    "word": "もの",
    "reading": "もの",
    "group": 1,
    "sourceRank": 59
  },
  {
    "id": "jp2k-0060",
    "word": "や",
    "reading": "や",
    "group": 1,
    "sourceRank": 60
  },
  {
    "id": "jp2k-0061",
    "word": "あの",
    "reading": "あの",
    "group": 1,
    "sourceRank": 61
  },
  {
    "id": "jp2k-0062",
    "word": "できる",
    "reading": "できる",
    "group": 1,
    "sourceRank": 62
  },
  {
    "id": "jp2k-0063",
    "word": "聞く",
    "reading": "きく",
    "group": 1,
    "sourceRank": 63
  },
  {
    "id": "jp2k-0064",
    "word": "人",
    "reading": "ひと",
    "group": 1,
    "sourceRank": 64
  },
  {
    "id": "jp2k-0065",
    "word": "自分",
    "reading": "じぶん",
    "group": 1,
    "sourceRank": 65
  },
  {
    "id": "jp2k-0066",
    "word": "はい",
    "reading": "はい",
    "group": 1,
    "sourceRank": 66
  },
  {
    "id": "jp2k-0067",
    "word": "知る",
    "reading": "しる",
    "group": 1,
    "sourceRank": 67
  },
  {
    "id": "jp2k-0068",
    "word": "んです",
    "reading": "んです",
    "group": 1,
    "sourceRank": 68
  },
  {
    "id": "jp2k-0069",
    "word": "こんな",
    "reading": "こんな",
    "group": 1,
    "sourceRank": 69
  },
  {
    "id": "jp2k-0070",
    "word": "ぞ",
    "reading": "ぞ",
    "group": 1,
    "sourceRank": 70
  },
  {
    "id": "jp2k-0071",
    "word": "前",
    "reading": "まえ",
    "group": 1,
    "sourceRank": 71
  },
  {
    "id": "jp2k-0072",
    "word": "なんて",
    "reading": "なんて",
    "group": 1,
    "sourceRank": 72
  },
  {
    "id": "jp2k-0073",
    "word": "あ",
    "reading": "あ",
    "group": 1,
    "sourceRank": 73
  },
  {
    "id": "jp2k-0074",
    "word": "ちょっと",
    "reading": "ちょっと",
    "group": 1,
    "sourceRank": 74
  },
  {
    "id": "jp2k-0075",
    "word": "また",
    "reading": "また",
    "group": 1,
    "sourceRank": 75
  },
  {
    "id": "jp2k-0076",
    "word": "出る",
    "reading": "でる",
    "group": 1,
    "sourceRank": 76
  },
  {
    "id": "jp2k-0077",
    "word": "まだ",
    "reading": "まだ",
    "group": 1,
    "sourceRank": 77
  },
  {
    "id": "jp2k-0078",
    "word": "という",
    "reading": "という",
    "group": 1,
    "sourceRank": 78
  },
  {
    "id": "jp2k-0079",
    "word": "では",
    "reading": "では",
    "group": 1,
    "sourceRank": 79
  },
  {
    "id": "jp2k-0080",
    "word": "いや",
    "reading": "いや",
    "group": 1,
    "sourceRank": 80
  },
  {
    "id": "jp2k-0081",
    "word": "ですか",
    "reading": "ですか",
    "group": 1,
    "sourceRank": 81
  },
  {
    "id": "jp2k-0082",
    "word": "待つ",
    "reading": "まつ",
    "group": 1,
    "sourceRank": 82
  },
  {
    "id": "jp2k-0083",
    "word": "とは",
    "reading": "とは",
    "group": 1,
    "sourceRank": 83
  },
  {
    "id": "jp2k-0084",
    "word": "だって",
    "reading": "だって",
    "group": 1,
    "sourceRank": 84
  },
  {
    "id": "jp2k-0085",
    "word": "ああ",
    "reading": "ああ",
    "group": 1,
    "sourceRank": 85
  },
  {
    "id": "jp2k-0086",
    "word": "中",
    "reading": "なか",
    "group": 1,
    "sourceRank": 86
  },
  {
    "id": "jp2k-0087",
    "word": "ように",
    "reading": "ように",
    "group": 1,
    "sourceRank": 87
  },
  {
    "id": "jp2k-0088",
    "word": "うん",
    "reading": "うん",
    "group": 1,
    "sourceRank": 88
  },
  {
    "id": "jp2k-0089",
    "word": "のに",
    "reading": "のに",
    "group": 1,
    "sourceRank": 89
  },
  {
    "id": "jp2k-0090",
    "word": "とか",
    "reading": "とか",
    "group": 1,
    "sourceRank": 90
  },
  {
    "id": "jp2k-0091",
    "word": "そこ",
    "reading": "そこ",
    "group": 1,
    "sourceRank": 91
  },
  {
    "id": "jp2k-0092",
    "word": "ような",
    "reading": "ような",
    "group": 1,
    "sourceRank": 92
  },
  {
    "id": "jp2k-0093",
    "word": "今日",
    "reading": "きょう",
    "group": 1,
    "sourceRank": 93
  },
  {
    "id": "jp2k-0094",
    "word": "より",
    "reading": "より",
    "group": 1,
    "sourceRank": 94
  },
  {
    "id": "jp2k-0095",
    "word": "みたい",
    "reading": "みたい",
    "group": 1,
    "sourceRank": 95
  },
  {
    "id": "jp2k-0096",
    "word": "話",
    "reading": "はなし",
    "group": 1,
    "sourceRank": 96
  },
  {
    "id": "jp2k-0097",
    "word": "考える",
    "reading": "かんがえる",
    "group": 1,
    "sourceRank": 97
  },
  {
    "id": "jp2k-0098",
    "word": "わ",
    "reading": "わ",
    "group": 1,
    "sourceRank": 98
  },
  {
    "id": "jp2k-0099",
    "word": "持つ",
    "reading": "もつ",
    "group": 1,
    "sourceRank": 99
  },
  {
    "id": "jp2k-0100",
    "word": "あれ",
    "reading": "あれ",
    "group": 1,
    "sourceRank": 100
  },
  {
    "id": "jp2k-0101",
    "word": "入る",
    "reading": "はいる",
    "group": 1,
    "sourceRank": 101
  },
  {
    "id": "jp2k-0102",
    "word": "なんだ",
    "reading": "なんだ",
    "group": 1,
    "sourceRank": 102
  },
  {
    "id": "jp2k-0103",
    "word": "大丈夫",
    "reading": "だいじょうぶ",
    "group": 1,
    "sourceRank": 103
  },
  {
    "id": "jp2k-0104",
    "word": "どこ",
    "reading": "どこ",
    "group": 1,
    "sourceRank": 104
  },
  {
    "id": "jp2k-0105",
    "word": "なん",
    "reading": "なん",
    "group": 1,
    "sourceRank": 105
  },
  {
    "id": "jp2k-0106",
    "word": "違う",
    "reading": "ちがう",
    "group": 1,
    "sourceRank": 106
  },
  {
    "id": "jp2k-0107",
    "word": "何か",
    "reading": "なにか",
    "group": 1,
    "sourceRank": 108
  },
  {
    "id": "jp2k-0108",
    "word": "かな",
    "reading": "かな",
    "group": 1,
    "sourceRank": 109
  },
  {
    "id": "jp2k-0109",
    "word": "え",
    "reading": "え",
    "group": 1,
    "sourceRank": 110
  },
  {
    "id": "jp2k-0110",
    "word": "として",
    "reading": "として",
    "group": 1,
    "sourceRank": 112
  },
  {
    "id": "jp2k-0111",
    "word": "顔",
    "reading": "かお",
    "group": 1,
    "sourceRank": 113
  },
  {
    "id": "jp2k-0112",
    "word": "帰る",
    "reading": "かえる",
    "group": 1,
    "sourceRank": 114
  },
  {
    "id": "jp2k-0113",
    "word": "お前",
    "reading": "おまえ",
    "group": 1,
    "sourceRank": 115
  },
  {
    "id": "jp2k-0114",
    "word": "みんな",
    "reading": "みんな",
    "group": 1,
    "sourceRank": 116
  },
  {
    "id": "jp2k-0115",
    "word": "あなた",
    "reading": "あなた",
    "group": 1,
    "sourceRank": 117
  },
  {
    "id": "jp2k-0116",
    "word": "よく",
    "reading": "よく",
    "group": 1,
    "sourceRank": 118
  },
  {
    "id": "jp2k-0117",
    "word": "少し",
    "reading": "すこし",
    "group": 1,
    "sourceRank": 119
  },
  {
    "id": "jp2k-0118",
    "word": "さ",
    "reading": "さ",
    "group": 1,
    "sourceRank": 120
  },
  {
    "id": "jp2k-0119",
    "word": "たち",
    "reading": "たち",
    "group": 1,
    "sourceRank": 121
  },
  {
    "id": "jp2k-0120",
    "word": "悪い",
    "reading": "わるい",
    "group": 1,
    "sourceRank": 122
  },
  {
    "id": "jp2k-0121",
    "word": "ために",
    "reading": "ために",
    "group": 1,
    "sourceRank": 123
  },
  {
    "id": "jp2k-0122",
    "word": "ただ",
    "reading": "ただ",
    "group": 1,
    "sourceRank": 124
  },
  {
    "id": "jp2k-0123",
    "word": "一緒に",
    "reading": "いっしょに",
    "group": 1,
    "sourceRank": 125
  },
  {
    "id": "jp2k-0124",
    "word": "じゃあ",
    "reading": "じゃあ",
    "group": 1,
    "sourceRank": 126
  },
  {
    "id": "jp2k-0125",
    "word": "同じ",
    "reading": "おなじ",
    "group": 1,
    "sourceRank": 127
  },
  {
    "id": "jp2k-0126",
    "word": "誰",
    "reading": "だれ",
    "group": 1,
    "sourceRank": 128
  },
  {
    "id": "jp2k-0127",
    "word": "ので",
    "reading": "ので",
    "group": 1,
    "sourceRank": 129
  },
  {
    "id": "jp2k-0128",
    "word": "よい",
    "reading": "よい",
    "group": 1,
    "sourceRank": 130
  },
  {
    "id": "jp2k-0129",
    "word": "あと",
    "reading": "あと",
    "group": 1,
    "sourceRank": 131
  },
  {
    "id": "jp2k-0130",
    "word": "もっと",
    "reading": "もっと",
    "group": 1,
    "sourceRank": 132
  },
  {
    "id": "jp2k-0131",
    "word": "会う",
    "reading": "あう",
    "group": 1,
    "sourceRank": 133
  },
  {
    "id": "jp2k-0132",
    "word": "やめる",
    "reading": "やめる",
    "group": 1,
    "sourceRank": 134
  },
  {
    "id": "jp2k-0133",
    "word": "見える",
    "reading": "みえる",
    "group": 1,
    "sourceRank": 135
  },
  {
    "id": "jp2k-0134",
    "word": "そして",
    "reading": "そして",
    "group": 1,
    "sourceRank": 136
  },
  {
    "id": "jp2k-0135",
    "word": "早く",
    "reading": "はやく",
    "group": 1,
    "sourceRank": 137
  },
  {
    "id": "jp2k-0136",
    "word": "好き",
    "reading": "すき",
    "group": 1,
    "sourceRank": 138
  },
  {
    "id": "jp2k-0137",
    "word": "うち",
    "reading": "うち",
    "group": 1,
    "sourceRank": 139
  },
  {
    "id": "jp2k-0138",
    "word": "そういう",
    "reading": "そういう",
    "group": 1,
    "sourceRank": 140
  },
  {
    "id": "jp2k-0139",
    "word": "こっち",
    "reading": "こっち",
    "group": 1,
    "sourceRank": 141
  },
  {
    "id": "jp2k-0140",
    "word": "出す",
    "reading": "だす",
    "group": 1,
    "sourceRank": 142
  },
  {
    "id": "jp2k-0141",
    "word": "らしい",
    "reading": "らしい",
    "group": 1,
    "sourceRank": 143
  },
  {
    "id": "jp2k-0142",
    "word": "ところ",
    "reading": "ところ",
    "group": 1,
    "sourceRank": 144
  },
  {
    "id": "jp2k-0143",
    "word": "使う",
    "reading": "つかう",
    "group": 1,
    "sourceRank": 145
  },
  {
    "id": "jp2k-0144",
    "word": "だろ",
    "reading": "だろ",
    "group": 1,
    "sourceRank": 146
  },
  {
    "id": "jp2k-0145",
    "word": "でしょう",
    "reading": "でしょう",
    "group": 1,
    "sourceRank": 147
  },
  {
    "id": "jp2k-0146",
    "word": "やっぱり",
    "reading": "やっぱり",
    "group": 1,
    "sourceRank": 148
  },
  {
    "id": "jp2k-0147",
    "word": "なの",
    "reading": "なの",
    "group": 1,
    "sourceRank": 149
  },
  {
    "id": "jp2k-0148",
    "word": "ええ",
    "reading": "ええ",
    "group": 1,
    "sourceRank": 150
  },
  {
    "id": "jp2k-0149",
    "word": "よう",
    "reading": "よう",
    "group": 1,
    "sourceRank": 151
  },
  {
    "id": "jp2k-0150",
    "word": "ちゃん",
    "reading": "ちゃん",
    "group": 1,
    "sourceRank": 152
  },
  {
    "id": "jp2k-0151",
    "word": "男",
    "reading": "おとこ",
    "group": 1,
    "sourceRank": 153
  },
  {
    "id": "jp2k-0152",
    "word": "ずっと",
    "reading": "ずっと",
    "group": 1,
    "sourceRank": 154
  },
  {
    "id": "jp2k-0153",
    "word": "手",
    "reading": "て",
    "group": 1,
    "sourceRank": 155
  },
  {
    "id": "jp2k-0154",
    "word": "方",
    "reading": "ほう",
    "group": 1,
    "sourceRank": 156
  },
  {
    "id": "jp2k-0155",
    "word": "だけど",
    "reading": "だけど",
    "group": 1,
    "sourceRank": 157
  },
  {
    "id": "jp2k-0156",
    "word": "本当に",
    "reading": "ほんとうに",
    "group": 1,
    "sourceRank": 158
  },
  {
    "id": "jp2k-0157",
    "word": "目",
    "reading": "め",
    "group": 1,
    "sourceRank": 159
  },
  {
    "id": "jp2k-0158",
    "word": "戻る",
    "reading": "もどる",
    "group": 1,
    "sourceRank": 160
  },
  {
    "id": "jp2k-0159",
    "word": "いつも",
    "reading": "いつも",
    "group": 1,
    "sourceRank": 161
  },
  {
    "id": "jp2k-0160",
    "word": "よね",
    "reading": "よね",
    "group": 1,
    "sourceRank": 162
  },
  {
    "id": "jp2k-0161",
    "word": "作る",
    "reading": "つくる",
    "group": 1,
    "sourceRank": 163
  },
  {
    "id": "jp2k-0162",
    "word": "時間",
    "reading": "じかん",
    "group": 1,
    "sourceRank": 164
  },
  {
    "id": "jp2k-0163",
    "word": "まあ",
    "reading": "まあ",
    "group": 1,
    "sourceRank": 165
  },
  {
    "id": "jp2k-0164",
    "word": "どんな",
    "reading": "どんな",
    "group": 1,
    "sourceRank": 166
  },
  {
    "id": "jp2k-0165",
    "word": "死ぬ",
    "reading": "しぬ",
    "group": 1,
    "sourceRank": 168
  },
  {
    "id": "jp2k-0166",
    "word": "話す",
    "reading": "はなす",
    "group": 1,
    "sourceRank": 169
  },
  {
    "id": "jp2k-0167",
    "word": "どうして",
    "reading": "どうして",
    "group": 1,
    "sourceRank": 170
  },
  {
    "id": "jp2k-0168",
    "word": "いう",
    "reading": "いう",
    "group": 1,
    "sourceRank": 171
  },
  {
    "id": "jp2k-0169",
    "word": "人間",
    "reading": "にんげん",
    "group": 1,
    "sourceRank": 172
  },
  {
    "id": "jp2k-0170",
    "word": "すごい",
    "reading": "すごい",
    "group": 1,
    "sourceRank": 173
  },
  {
    "id": "jp2k-0171",
    "word": "おい",
    "reading": "おい",
    "group": 1,
    "sourceRank": 174
  },
  {
    "id": "jp2k-0172",
    "word": "いく",
    "reading": "いく",
    "group": 1,
    "sourceRank": 175
  },
  {
    "id": "jp2k-0173",
    "word": "つもり",
    "reading": "つもり",
    "group": 1,
    "sourceRank": 176
  },
  {
    "id": "jp2k-0174",
    "word": "である",
    "reading": "である",
    "group": 1,
    "sourceRank": 177
  },
  {
    "id": "jp2k-0175",
    "word": "ほら",
    "reading": "ほら",
    "group": 1,
    "sourceRank": 178
  },
  {
    "id": "jp2k-0176",
    "word": "声",
    "reading": "こえ",
    "group": 1,
    "sourceRank": 179
  },
  {
    "id": "jp2k-0177",
    "word": "ありがとう",
    "reading": "ありがとう",
    "group": 1,
    "sourceRank": 180
  },
  {
    "id": "jp2k-0178",
    "word": "呼ぶ",
    "reading": "よぶ",
    "group": 1,
    "sourceRank": 181
  },
  {
    "id": "jp2k-0179",
    "word": "ちゃんと",
    "reading": "ちゃんと",
    "group": 1,
    "sourceRank": 182
  },
  {
    "id": "jp2k-0180",
    "word": "もん",
    "reading": "もん",
    "group": 1,
    "sourceRank": 183
  },
  {
    "id": "jp2k-0181",
    "word": "ため",
    "reading": "ため",
    "group": 1,
    "sourceRank": 185
  },
  {
    "id": "jp2k-0182",
    "word": "家",
    "reading": "いえ",
    "group": 1,
    "sourceRank": 186
  },
  {
    "id": "jp2k-0183",
    "word": "わけ",
    "reading": "わけ",
    "group": 1,
    "sourceRank": 187
  },
  {
    "id": "jp2k-0184",
    "word": "ほど",
    "reading": "ほど",
    "group": 1,
    "sourceRank": 188
  },
  {
    "id": "jp2k-0185",
    "word": "終わる",
    "reading": "おわる",
    "group": 1,
    "sourceRank": 189
  },
  {
    "id": "jp2k-0186",
    "word": "食べる",
    "reading": "たべる",
    "group": 1,
    "sourceRank": 190
  },
  {
    "id": "jp2k-0187",
    "word": "じゃないか",
    "reading": "じゃないか",
    "group": 1,
    "sourceRank": 191
  },
  {
    "id": "jp2k-0188",
    "word": "忘れる",
    "reading": "わすれる",
    "group": 1,
    "sourceRank": 192
  },
  {
    "id": "jp2k-0189",
    "word": "かもしれない",
    "reading": "かもしれない",
    "group": 1,
    "sourceRank": 193
  },
  {
    "id": "jp2k-0190",
    "word": "次",
    "reading": "つぎ",
    "group": 1,
    "sourceRank": 194
  },
  {
    "id": "jp2k-0191",
    "word": "あっ",
    "reading": "あっ",
    "group": 1,
    "sourceRank": 195
  },
  {
    "id": "jp2k-0192",
    "word": "しか",
    "reading": "しか",
    "group": 1,
    "sourceRank": 196
  },
  {
    "id": "jp2k-0193",
    "word": "ご",
    "reading": "ご",
    "group": 1,
    "sourceRank": 197
  },
  {
    "id": "jp2k-0194",
    "word": "僕",
    "reading": "ぼく",
    "group": 1,
    "sourceRank": 198
  },
  {
    "id": "jp2k-0195",
    "word": "教える",
    "reading": "おしえる",
    "group": 1,
    "sourceRank": 199
  },
  {
    "id": "jp2k-0196",
    "word": "えっ",
    "reading": "えっ",
    "group": 1,
    "sourceRank": 200
  },
  {
    "id": "jp2k-0197",
    "word": "年",
    "reading": "ねん",
    "group": 1,
    "sourceRank": 201
  },
  {
    "id": "jp2k-0198",
    "word": "きっと",
    "reading": "きっと",
    "group": 1,
    "sourceRank": 202
  },
  {
    "id": "jp2k-0199",
    "word": "頼む",
    "reading": "たのむ",
    "group": 1,
    "sourceRank": 203
  },
  {
    "id": "jp2k-0200",
    "word": "何も",
    "reading": "なにも",
    "group": 1,
    "sourceRank": 204
  },
  {
    "id": "jp2k-0201",
    "word": "仕事",
    "reading": "しごと",
    "group": 2,
    "sourceRank": 205
  },
  {
    "id": "jp2k-0202",
    "word": "今度",
    "reading": "こんど",
    "group": 2,
    "sourceRank": 206
  },
  {
    "id": "jp2k-0203",
    "word": "あんた",
    "reading": "あんた",
    "group": 2,
    "sourceRank": 207
  },
  {
    "id": "jp2k-0204",
    "word": "子",
    "reading": "こ",
    "group": 2,
    "sourceRank": 208
  },
  {
    "id": "jp2k-0205",
    "word": "心配",
    "reading": "しんぱい",
    "group": 2,
    "sourceRank": 209
  },
  {
    "id": "jp2k-0206",
    "word": "しかし",
    "reading": "しかし",
    "group": 2,
    "sourceRank": 210
  },
  {
    "id": "jp2k-0207",
    "word": "なんで",
    "reading": "なんで",
    "group": 2,
    "sourceRank": 211
  },
  {
    "id": "jp2k-0208",
    "word": "本当",
    "reading": "ほんとう",
    "group": 2,
    "sourceRank": 212
  },
  {
    "id": "jp2k-0209",
    "word": "だが",
    "reading": "だが",
    "group": 2,
    "sourceRank": 213
  },
  {
    "id": "jp2k-0210",
    "word": "時",
    "reading": "とき",
    "group": 2,
    "sourceRank": 214
  },
  {
    "id": "jp2k-0211",
    "word": "くらい",
    "reading": "くらい",
    "group": 2,
    "sourceRank": 215
  },
  {
    "id": "jp2k-0212",
    "word": "上",
    "reading": "うえ",
    "group": 2,
    "sourceRank": 216
  },
  {
    "id": "jp2k-0213",
    "word": "気持ち",
    "reading": "きもち",
    "group": 2,
    "sourceRank": 217
  },
  {
    "id": "jp2k-0214",
    "word": "生きる",
    "reading": "いきる",
    "group": 2,
    "sourceRank": 218
  },
  {
    "id": "jp2k-0215",
    "word": "見せる",
    "reading": "みせる",
    "group": 2,
    "sourceRank": 219
  },
  {
    "id": "jp2k-0216",
    "word": "相手",
    "reading": "あいて",
    "group": 2,
    "sourceRank": 220
  },
  {
    "id": "jp2k-0217",
    "word": "ではない",
    "reading": "ではない",
    "group": 2,
    "sourceRank": 221
  },
  {
    "id": "jp2k-0218",
    "word": "こう",
    "reading": "こう",
    "group": 2,
    "sourceRank": 222
  },
  {
    "id": "jp2k-0219",
    "word": "さっき",
    "reading": "さっき",
    "group": 2,
    "sourceRank": 223
  },
  {
    "id": "jp2k-0220",
    "word": "ごめん",
    "reading": "ごめん",
    "group": 2,
    "sourceRank": 224
  },
  {
    "id": "jp2k-0221",
    "word": "よし",
    "reading": "よし",
    "group": 2,
    "sourceRank": 225
  },
  {
    "id": "jp2k-0222",
    "word": "誰か",
    "reading": "だれか",
    "group": 2,
    "sourceRank": 226
  },
  {
    "id": "jp2k-0223",
    "word": "入れる",
    "reading": "いれる",
    "group": 2,
    "sourceRank": 227
  },
  {
    "id": "jp2k-0224",
    "word": "なんです",
    "reading": "なんです",
    "group": 2,
    "sourceRank": 228
  },
  {
    "id": "jp2k-0225",
    "word": "どういう",
    "reading": "どういう",
    "group": 2,
    "sourceRank": 229
  },
  {
    "id": "jp2k-0226",
    "word": "日",
    "reading": "ひ",
    "group": 2,
    "sourceRank": 230
  },
  {
    "id": "jp2k-0227",
    "word": "かける",
    "reading": "かける",
    "group": 2,
    "sourceRank": 231
  },
  {
    "id": "jp2k-0228",
    "word": "全部",
    "reading": "ぜんぶ",
    "group": 2,
    "sourceRank": 232
  },
  {
    "id": "jp2k-0229",
    "word": "君",
    "reading": "きみ",
    "group": 2,
    "sourceRank": 233
  },
  {
    "id": "jp2k-0230",
    "word": "こちら",
    "reading": "こちら",
    "group": 2,
    "sourceRank": 234
  },
  {
    "id": "jp2k-0231",
    "word": "場所",
    "reading": "ばしょ",
    "group": 2,
    "sourceRank": 235
  },
  {
    "id": "jp2k-0232",
    "word": "最後",
    "reading": "さいご",
    "group": 2,
    "sourceRank": 236
  },
  {
    "id": "jp2k-0233",
    "word": "変わる",
    "reading": "かわる",
    "group": 2,
    "sourceRank": 237
  },
  {
    "id": "jp2k-0234",
    "word": "っていう",
    "reading": "っていう",
    "group": 2,
    "sourceRank": 238
  },
  {
    "id": "jp2k-0235",
    "word": "強い",
    "reading": "つよい",
    "group": 2,
    "sourceRank": 239
  },
  {
    "id": "jp2k-0236",
    "word": "取る",
    "reading": "とる",
    "group": 2,
    "sourceRank": 240
  },
  {
    "id": "jp2k-0237",
    "word": "あんな",
    "reading": "あんな",
    "group": 2,
    "sourceRank": 241
  },
  {
    "id": "jp2k-0238",
    "word": "まさか",
    "reading": "まさか",
    "group": 2,
    "sourceRank": 242
  },
  {
    "id": "jp2k-0239",
    "word": "女",
    "reading": "おんな",
    "group": 2,
    "sourceRank": 243
  },
  {
    "id": "jp2k-0240",
    "word": "だったら",
    "reading": "だったら",
    "group": 2,
    "sourceRank": 244
  },
  {
    "id": "jp2k-0241",
    "word": "逃げる",
    "reading": "にげる",
    "group": 2,
    "sourceRank": 245
  },
  {
    "id": "jp2k-0242",
    "word": "言葉",
    "reading": "ことば",
    "group": 2,
    "sourceRank": 246
  },
  {
    "id": "jp2k-0243",
    "word": "必要",
    "reading": "ひつよう",
    "group": 2,
    "sourceRank": 247
  },
  {
    "id": "jp2k-0244",
    "word": "ねえ",
    "reading": "ねえ",
    "group": 2,
    "sourceRank": 248
  },
  {
    "id": "jp2k-0245",
    "word": "彼女",
    "reading": "かのじょ",
    "group": 2,
    "sourceRank": 249
  },
  {
    "id": "jp2k-0246",
    "word": "かも",
    "reading": "かも",
    "group": 2,
    "sourceRank": 250
  },
  {
    "id": "jp2k-0247",
    "word": "名前",
    "reading": "なまえ",
    "group": 2,
    "sourceRank": 251
  },
  {
    "id": "jp2k-0248",
    "word": "続ける",
    "reading": "つづける",
    "group": 2,
    "sourceRank": 252
  },
  {
    "id": "jp2k-0249",
    "word": "ことになる",
    "reading": "ことになる",
    "group": 2,
    "sourceRank": 253
  },
  {
    "id": "jp2k-0250",
    "word": "初めて",
    "reading": "はじめて",
    "group": 2,
    "sourceRank": 254
  },
  {
    "id": "jp2k-0251",
    "word": "気",
    "reading": "き",
    "group": 2,
    "sourceRank": 255
  },
  {
    "id": "jp2k-0252",
    "word": "いけない",
    "reading": "いけない",
    "group": 2,
    "sourceRank": 256
  },
  {
    "id": "jp2k-0253",
    "word": "はず",
    "reading": "はず",
    "group": 2,
    "sourceRank": 257
  },
  {
    "id": "jp2k-0254",
    "word": "いつ",
    "reading": "いつ",
    "group": 2,
    "sourceRank": 258
  },
  {
    "id": "jp2k-0255",
    "word": "無理",
    "reading": "むり",
    "group": 2,
    "sourceRank": 259
  },
  {
    "id": "jp2k-0256",
    "word": "動く",
    "reading": "うごく",
    "group": 2,
    "sourceRank": 260
  },
  {
    "id": "jp2k-0257",
    "word": "分かる",
    "reading": "わかる",
    "group": 2,
    "sourceRank": 261
  },
  {
    "id": "jp2k-0258",
    "word": "さあ",
    "reading": "さあ",
    "group": 2,
    "sourceRank": 262
  },
  {
    "id": "jp2k-0259",
    "word": "こそ",
    "reading": "こそ",
    "group": 2,
    "sourceRank": 263
  },
  {
    "id": "jp2k-0260",
    "word": "大変",
    "reading": "たいへん",
    "group": 2,
    "sourceRank": 264
  },
  {
    "id": "jp2k-0261",
    "word": "すぐ",
    "reading": "すぐ",
    "group": 2,
    "sourceRank": 265
  },
  {
    "id": "jp2k-0262",
    "word": "確かに",
    "reading": "たしかに",
    "group": 2,
    "sourceRank": 266
  },
  {
    "id": "jp2k-0263",
    "word": "体",
    "reading": "からだ",
    "group": 2,
    "sourceRank": 267
  },
  {
    "id": "jp2k-0264",
    "word": "まま",
    "reading": "まま",
    "group": 2,
    "sourceRank": 268
  },
  {
    "id": "jp2k-0265",
    "word": "もし",
    "reading": "もし",
    "group": 2,
    "sourceRank": 269
  },
  {
    "id": "jp2k-0266",
    "word": "覚える",
    "reading": "おぼえる",
    "group": 2,
    "sourceRank": 270
  },
  {
    "id": "jp2k-0267",
    "word": "怖い",
    "reading": "こわい",
    "group": 2,
    "sourceRank": 271
  },
  {
    "id": "jp2k-0268",
    "word": "部屋",
    "reading": "へや",
    "group": 2,
    "sourceRank": 272
  },
  {
    "id": "jp2k-0269",
    "word": "世界",
    "reading": "せかい",
    "group": 2,
    "sourceRank": 273
  },
  {
    "id": "jp2k-0270",
    "word": "など",
    "reading": "など",
    "group": 2,
    "sourceRank": 274
  },
  {
    "id": "jp2k-0271",
    "word": "あいつ",
    "reading": "あいつ",
    "group": 2,
    "sourceRank": 275
  },
  {
    "id": "jp2k-0272",
    "word": "頭",
    "reading": "あたま",
    "group": 2,
    "sourceRank": 276
  },
  {
    "id": "jp2k-0273",
    "word": "心",
    "reading": "こころ",
    "group": 2,
    "sourceRank": 277
  },
  {
    "id": "jp2k-0274",
    "word": "まず",
    "reading": "まず",
    "group": 2,
    "sourceRank": 278
  },
  {
    "id": "jp2k-0275",
    "word": "このまま",
    "reading": "このまま",
    "group": 2,
    "sourceRank": 279
  },
  {
    "id": "jp2k-0276",
    "word": "感じる",
    "reading": "かんじる",
    "group": 2,
    "sourceRank": 280
  },
  {
    "id": "jp2k-0277",
    "word": "意味",
    "reading": "いみ",
    "group": 2,
    "sourceRank": 281
  },
  {
    "id": "jp2k-0278",
    "word": "ぜ",
    "reading": "ぜ",
    "group": 2,
    "sourceRank": 282
  },
  {
    "id": "jp2k-0279",
    "word": "ことがある",
    "reading": "ことがある",
    "group": 2,
    "sourceRank": 283
  },
  {
    "id": "jp2k-0280",
    "word": "もちろん",
    "reading": "もちろん",
    "group": 2,
    "sourceRank": 284
  },
  {
    "id": "jp2k-0281",
    "word": "許す",
    "reading": "ゆるす",
    "group": 2,
    "sourceRank": 285
  },
  {
    "id": "jp2k-0282",
    "word": "力",
    "reading": "ちから",
    "group": 2,
    "sourceRank": 286
  },
  {
    "id": "jp2k-0283",
    "word": "なのに",
    "reading": "なのに",
    "group": 2,
    "sourceRank": 287
  },
  {
    "id": "jp2k-0284",
    "word": "ばかり",
    "reading": "ばかり",
    "group": 2,
    "sourceRank": 288
  },
  {
    "id": "jp2k-0285",
    "word": "買う",
    "reading": "かう",
    "group": 2,
    "sourceRank": 289
  },
  {
    "id": "jp2k-0286",
    "word": "どうぞ",
    "reading": "どうぞ",
    "group": 2,
    "sourceRank": 290
  },
  {
    "id": "jp2k-0287",
    "word": "信じる",
    "reading": "しんじる",
    "group": 2,
    "sourceRank": 291
  },
  {
    "id": "jp2k-0288",
    "word": "ほしい",
    "reading": "ほしい",
    "group": 2,
    "sourceRank": 292
  },
  {
    "id": "jp2k-0289",
    "word": "しかない",
    "reading": "しかない",
    "group": 2,
    "sourceRank": 293
  },
  {
    "id": "jp2k-0290",
    "word": "昔",
    "reading": "むかし",
    "group": 2,
    "sourceRank": 294
  },
  {
    "id": "jp2k-0291",
    "word": "決める",
    "reading": "きめる",
    "group": 2,
    "sourceRank": 295
  },
  {
    "id": "jp2k-0292",
    "word": "なあ",
    "reading": "なあ",
    "group": 2,
    "sourceRank": 296
  },
  {
    "id": "jp2k-0293",
    "word": "最初",
    "reading": "さいしょ",
    "group": 2,
    "sourceRank": 297
  },
  {
    "id": "jp2k-0294",
    "word": "始める",
    "reading": "はじめる",
    "group": 2,
    "sourceRank": 298
  },
  {
    "id": "jp2k-0295",
    "word": "くる",
    "reading": "くる",
    "group": 2,
    "sourceRank": 299
  },
  {
    "id": "jp2k-0296",
    "word": "飲む",
    "reading": "のむ",
    "group": 2,
    "sourceRank": 300
  },
  {
    "id": "jp2k-0297",
    "word": "間",
    "reading": "あいだ",
    "group": 2,
    "sourceRank": 301
  },
  {
    "id": "jp2k-0298",
    "word": "じゃ",
    "reading": "じゃ",
    "group": 2,
    "sourceRank": 302
  },
  {
    "id": "jp2k-0299",
    "word": "お願い",
    "reading": "おねがい",
    "group": 2,
    "sourceRank": 303
  },
  {
    "id": "jp2k-0300",
    "word": "言える",
    "reading": "いえる",
    "group": 2,
    "sourceRank": 304
  },
  {
    "id": "jp2k-0301",
    "word": "やつ",
    "reading": "やつ",
    "group": 2,
    "sourceRank": 305
  },
  {
    "id": "jp2k-0302",
    "word": "楽しい",
    "reading": "たのしい",
    "group": 2,
    "sourceRank": 306
  },
  {
    "id": "jp2k-0303",
    "word": "彼",
    "reading": "かれ",
    "group": 2,
    "sourceRank": 307
  },
  {
    "id": "jp2k-0304",
    "word": "守る",
    "reading": "まもる",
    "group": 2,
    "sourceRank": 308
  },
  {
    "id": "jp2k-0305",
    "word": "どうした",
    "reading": "どうした",
    "group": 2,
    "sourceRank": 309
  },
  {
    "id": "jp2k-0306",
    "word": "者",
    "reading": "もの",
    "group": 2,
    "sourceRank": 310
  },
  {
    "id": "jp2k-0307",
    "word": "書く",
    "reading": "かく",
    "group": 2,
    "sourceRank": 311
  },
  {
    "id": "jp2k-0308",
    "word": "別に",
    "reading": "べつに",
    "group": 2,
    "sourceRank": 312
  },
  {
    "id": "jp2k-0309",
    "word": "受ける",
    "reading": "うける",
    "group": 2,
    "sourceRank": 313
  },
  {
    "id": "jp2k-0310",
    "word": "すぐに",
    "reading": "すぐに",
    "group": 2,
    "sourceRank": 314
  },
  {
    "id": "jp2k-0311",
    "word": "以上",
    "reading": "いじょう",
    "group": 2,
    "sourceRank": 315
  },
  {
    "id": "jp2k-0312",
    "word": "助ける",
    "reading": "たすける",
    "group": 2,
    "sourceRank": 316
  },
  {
    "id": "jp2k-0313",
    "word": "置く",
    "reading": "おく",
    "group": 2,
    "sourceRank": 317
  },
  {
    "id": "jp2k-0314",
    "word": "起きる",
    "reading": "おきる",
    "group": 2,
    "sourceRank": 318
  },
  {
    "id": "jp2k-0315",
    "word": "笑う",
    "reading": "わらう",
    "group": 2,
    "sourceRank": 319
  },
  {
    "id": "jp2k-0316",
    "word": "ですから",
    "reading": "ですから",
    "group": 2,
    "sourceRank": 320
  },
  {
    "id": "jp2k-0317",
    "word": "残る",
    "reading": "のこる",
    "group": 2,
    "sourceRank": 321
  },
  {
    "id": "jp2k-0318",
    "word": "先生",
    "reading": "せんせい",
    "group": 2,
    "sourceRank": 322
  },
  {
    "id": "jp2k-0319",
    "word": "こういう",
    "reading": "こういう",
    "group": 2,
    "sourceRank": 323
  },
  {
    "id": "jp2k-0320",
    "word": "寝る",
    "reading": "ねる",
    "group": 2,
    "sourceRank": 324
  },
  {
    "id": "jp2k-0321",
    "word": "つける",
    "reading": "つける",
    "group": 2,
    "sourceRank": 325
  },
  {
    "id": "jp2k-0322",
    "word": "おかしい",
    "reading": "おかしい",
    "group": 2,
    "sourceRank": 326
  },
  {
    "id": "jp2k-0323",
    "word": "多い",
    "reading": "おおい",
    "group": 2,
    "sourceRank": 328
  },
  {
    "id": "jp2k-0324",
    "word": "とこ",
    "reading": "とこ",
    "group": 2,
    "sourceRank": 329
  },
  {
    "id": "jp2k-0325",
    "word": "変",
    "reading": "へん",
    "group": 2,
    "sourceRank": 330
  },
  {
    "id": "jp2k-0326",
    "word": "つく",
    "reading": "つく",
    "group": 2,
    "sourceRank": 331
  },
  {
    "id": "jp2k-0327",
    "word": "問題",
    "reading": "もんだい",
    "group": 2,
    "sourceRank": 332
  },
  {
    "id": "jp2k-0328",
    "word": "にとって",
    "reading": "にとって",
    "group": 2,
    "sourceRank": 333
  },
  {
    "id": "jp2k-0329",
    "word": "実は",
    "reading": "じつは",
    "group": 2,
    "sourceRank": 334
  },
  {
    "id": "jp2k-0330",
    "word": "こいつ",
    "reading": "こいつ",
    "group": 2,
    "sourceRank": 335
  },
  {
    "id": "jp2k-0331",
    "word": "それだけ",
    "reading": "それだけ",
    "group": 2,
    "sourceRank": 336
  },
  {
    "id": "jp2k-0332",
    "word": "誰も",
    "reading": "だれも",
    "group": 2,
    "sourceRank": 337
  },
  {
    "id": "jp2k-0333",
    "word": "見つける",
    "reading": "みつける",
    "group": 2,
    "sourceRank": 338
  },
  {
    "id": "jp2k-0334",
    "word": "外",
    "reading": "そと",
    "group": 2,
    "sourceRank": 339
  },
  {
    "id": "jp2k-0335",
    "word": "大事",
    "reading": "だいじ",
    "group": 2,
    "sourceRank": 340
  },
  {
    "id": "jp2k-0336",
    "word": "かかる",
    "reading": "かかる",
    "group": 2,
    "sourceRank": 341
  },
  {
    "id": "jp2k-0337",
    "word": "全然",
    "reading": "ぜんぜん",
    "group": 2,
    "sourceRank": 342
  },
  {
    "id": "jp2k-0338",
    "word": "絶対",
    "reading": "ぜったい",
    "group": 2,
    "sourceRank": 343
  },
  {
    "id": "jp2k-0339",
    "word": "一番",
    "reading": "いちばん",
    "group": 2,
    "sourceRank": 344
  },
  {
    "id": "jp2k-0340",
    "word": "夢",
    "reading": "ゆめ",
    "group": 2,
    "sourceRank": 345
  },
  {
    "id": "jp2k-0341",
    "word": "決まる",
    "reading": "きまる",
    "group": 2,
    "sourceRank": 346
  },
  {
    "id": "jp2k-0342",
    "word": "聞こえる",
    "reading": "きこえる",
    "group": 2,
    "sourceRank": 347
  },
  {
    "id": "jp2k-0343",
    "word": "元気",
    "reading": "げんき",
    "group": 2,
    "sourceRank": 348
  },
  {
    "id": "jp2k-0344",
    "word": "感じ",
    "reading": "かんじ",
    "group": 2,
    "sourceRank": 349
  },
  {
    "id": "jp2k-0345",
    "word": "先に",
    "reading": "さきに",
    "group": 2,
    "sourceRank": 350
  },
  {
    "id": "jp2k-0346",
    "word": "姿",
    "reading": "すがた",
    "group": 2,
    "sourceRank": 351
  },
  {
    "id": "jp2k-0347",
    "word": "とにかく",
    "reading": "とにかく",
    "group": 2,
    "sourceRank": 352
  },
  {
    "id": "jp2k-0348",
    "word": "欲しい",
    "reading": "ほしい",
    "group": 2,
    "sourceRank": 353
  },
  {
    "id": "jp2k-0349",
    "word": "ありがとうございます",
    "reading": "ありがとうございます",
    "group": 2,
    "sourceRank": 354
  },
  {
    "id": "jp2k-0350",
    "word": "遅い",
    "reading": "おそい",
    "group": 2,
    "sourceRank": 355
  },
  {
    "id": "jp2k-0351",
    "word": "そろそろ",
    "reading": "そろそろ",
    "group": 2,
    "sourceRank": 356
  },
  {
    "id": "jp2k-0352",
    "word": "夜",
    "reading": "よる",
    "group": 2,
    "sourceRank": 357
  },
  {
    "id": "jp2k-0353",
    "word": "とき",
    "reading": "とき",
    "group": 2,
    "sourceRank": 358
  },
  {
    "id": "jp2k-0354",
    "word": "しっかり",
    "reading": "しっかり",
    "group": 2,
    "sourceRank": 359
  },
  {
    "id": "jp2k-0355",
    "word": "新しい",
    "reading": "あたらしい",
    "group": 2,
    "sourceRank": 360
  },
  {
    "id": "jp2k-0356",
    "word": "一度",
    "reading": "いちど",
    "group": 2,
    "sourceRank": 361
  },
  {
    "id": "jp2k-0357",
    "word": "について",
    "reading": "について",
    "group": 2,
    "sourceRank": 362
  },
  {
    "id": "jp2k-0358",
    "word": "それでも",
    "reading": "それでも",
    "group": 2,
    "sourceRank": 363
  },
  {
    "id": "jp2k-0359",
    "word": "うーん",
    "reading": "うーん",
    "group": 2,
    "sourceRank": 364
  },
  {
    "id": "jp2k-0360",
    "word": "なくなる",
    "reading": "なくなる",
    "group": 2,
    "sourceRank": 365
  },
  {
    "id": "jp2k-0361",
    "word": "ごめんなさい",
    "reading": "ごめんなさい",
    "group": 2,
    "sourceRank": 366
  },
  {
    "id": "jp2k-0362",
    "word": "高い",
    "reading": "たかい",
    "group": 2,
    "sourceRank": 367
  },
  {
    "id": "jp2k-0363",
    "word": "痛い",
    "reading": "いたい",
    "group": 2,
    "sourceRank": 368
  },
  {
    "id": "jp2k-0364",
    "word": "せい",
    "reading": "せい",
    "group": 2,
    "sourceRank": 369
  },
  {
    "id": "jp2k-0365",
    "word": "困る",
    "reading": "こまる",
    "group": 2,
    "sourceRank": 370
  },
  {
    "id": "jp2k-0366",
    "word": "黙る",
    "reading": "だまる",
    "group": 2,
    "sourceRank": 371
  },
  {
    "id": "jp2k-0367",
    "word": "送る",
    "reading": "おくる",
    "group": 2,
    "sourceRank": 372
  },
  {
    "id": "jp2k-0368",
    "word": "理由",
    "reading": "りゆう",
    "group": 2,
    "sourceRank": 373
  },
  {
    "id": "jp2k-0369",
    "word": "怒る",
    "reading": "おこる",
    "group": 2,
    "sourceRank": 374
  },
  {
    "id": "jp2k-0370",
    "word": "思い出す",
    "reading": "おもいだす",
    "group": 2,
    "sourceRank": 375
  },
  {
    "id": "jp2k-0371",
    "word": "昨日",
    "reading": "きのう",
    "group": 2,
    "sourceRank": 376
  },
  {
    "id": "jp2k-0372",
    "word": "長い",
    "reading": "ながい",
    "group": 2,
    "sourceRank": 377
  },
  {
    "id": "jp2k-0373",
    "word": "何",
    "reading": "なん",
    "group": 2,
    "sourceRank": 378
  },
  {
    "id": "jp2k-0374",
    "word": "ください",
    "reading": "ください",
    "group": 2,
    "sourceRank": 379
  },
  {
    "id": "jp2k-0375",
    "word": "明日",
    "reading": "あした",
    "group": 2,
    "sourceRank": 380
  },
  {
    "id": "jp2k-0376",
    "word": "ところで",
    "reading": "ところで",
    "group": 2,
    "sourceRank": 381
  },
  {
    "id": "jp2k-0377",
    "word": "なるほど",
    "reading": "なるほど",
    "group": 2,
    "sourceRank": 382
  },
  {
    "id": "jp2k-0378",
    "word": "乗る",
    "reading": "のる",
    "group": 2,
    "sourceRank": 383
  },
  {
    "id": "jp2k-0379",
    "word": "ほう",
    "reading": "ほう",
    "group": 2,
    "sourceRank": 384
  },
  {
    "id": "jp2k-0380",
    "word": "他",
    "reading": "ほか",
    "group": 2,
    "sourceRank": 385
  },
  {
    "id": "jp2k-0381",
    "word": "普通",
    "reading": "ふつう",
    "group": 2,
    "sourceRank": 386
  },
  {
    "id": "jp2k-0382",
    "word": "止める",
    "reading": "とめる",
    "group": 2,
    "sourceRank": 387
  },
  {
    "id": "jp2k-0383",
    "word": "伝える",
    "reading": "つたえる",
    "group": 2,
    "sourceRank": 388
  },
  {
    "id": "jp2k-0384",
    "word": "もらう",
    "reading": "もらう",
    "group": 2,
    "sourceRank": 389
  },
  {
    "id": "jp2k-0385",
    "word": "て",
    "reading": "て",
    "group": 2,
    "sourceRank": 390
  },
  {
    "id": "jp2k-0386",
    "word": "今まで",
    "reading": "いままで",
    "group": 2,
    "sourceRank": 391
  },
  {
    "id": "jp2k-0387",
    "word": "向かう",
    "reading": "むかう",
    "group": 2,
    "sourceRank": 392
  },
  {
    "id": "jp2k-0388",
    "word": "最近",
    "reading": "さいきん",
    "group": 2,
    "sourceRank": 393
  },
  {
    "id": "jp2k-0389",
    "word": "中",
    "reading": "ちゅう",
    "group": 2,
    "sourceRank": 394
  },
  {
    "id": "jp2k-0390",
    "word": "探す",
    "reading": "さがす",
    "group": 2,
    "sourceRank": 395
  },
  {
    "id": "jp2k-0391",
    "word": "音",
    "reading": "おと",
    "group": 2,
    "sourceRank": 396
  },
  {
    "id": "jp2k-0392",
    "word": "連れる",
    "reading": "つれる",
    "group": 2,
    "sourceRank": 397
  },
  {
    "id": "jp2k-0393",
    "word": "頑張る",
    "reading": "がんばる",
    "group": 2,
    "sourceRank": 398
  },
  {
    "id": "jp2k-0394",
    "word": "歩く",
    "reading": "あるく",
    "group": 2,
    "sourceRank": 399
  },
  {
    "id": "jp2k-0395",
    "word": "大きい",
    "reading": "おおきい",
    "group": 2,
    "sourceRank": 400
  },
  {
    "id": "jp2k-0396",
    "word": "なぜ",
    "reading": "なぜ",
    "group": 2,
    "sourceRank": 401
  },
  {
    "id": "jp2k-0397",
    "word": "殺す",
    "reading": "ころす",
    "group": 2,
    "sourceRank": 402
  },
  {
    "id": "jp2k-0398",
    "word": "口",
    "reading": "くち",
    "group": 2,
    "sourceRank": 403
  },
  {
    "id": "jp2k-0399",
    "word": "うまい",
    "reading": "うまい",
    "group": 2,
    "sourceRank": 404
  },
  {
    "id": "jp2k-0400",
    "word": "嫌",
    "reading": "いや",
    "group": 2,
    "sourceRank": 405
  },
  {
    "id": "jp2k-0401",
    "word": "ダメ",
    "reading": "ダメ",
    "group": 3,
    "sourceRank": 406
  },
  {
    "id": "jp2k-0402",
    "word": "落ちる",
    "reading": "おちる",
    "group": 3,
    "sourceRank": 407
  },
  {
    "id": "jp2k-0403",
    "word": "なれる",
    "reading": "なれる",
    "group": 3,
    "sourceRank": 408
  },
  {
    "id": "jp2k-0404",
    "word": "返す",
    "reading": "かえす",
    "group": 3,
    "sourceRank": 409
  },
  {
    "id": "jp2k-0405",
    "word": "べき",
    "reading": "べき",
    "group": 3,
    "sourceRank": 410
  },
  {
    "id": "jp2k-0406",
    "word": "約束",
    "reading": "やくそく",
    "group": 3,
    "sourceRank": 411
  },
  {
    "id": "jp2k-0407",
    "word": "つまり",
    "reading": "つまり",
    "group": 3,
    "sourceRank": 412
  },
  {
    "id": "jp2k-0408",
    "word": "関係",
    "reading": "かんけい",
    "group": 3,
    "sourceRank": 413
  },
  {
    "id": "jp2k-0409",
    "word": "かい",
    "reading": "かい",
    "group": 3,
    "sourceRank": 414
  },
  {
    "id": "jp2k-0410",
    "word": "大きな",
    "reading": "おおきな",
    "group": 3,
    "sourceRank": 416
  },
  {
    "id": "jp2k-0411",
    "word": "泣く",
    "reading": "なく",
    "group": 3,
    "sourceRank": 417
  },
  {
    "id": "jp2k-0412",
    "word": "私たち",
    "reading": "わたしたち",
    "group": 3,
    "sourceRank": 418
  },
  {
    "id": "jp2k-0413",
    "word": "開く",
    "reading": "ひらく",
    "group": 3,
    "sourceRank": 419
  },
  {
    "id": "jp2k-0414",
    "word": "簡単",
    "reading": "かんたん",
    "group": 3,
    "sourceRank": 420
  },
  {
    "id": "jp2k-0415",
    "word": "どうしたの",
    "reading": "どうしたの",
    "group": 3,
    "sourceRank": 421
  },
  {
    "id": "jp2k-0416",
    "word": "でしょうか",
    "reading": "でしょうか",
    "group": 3,
    "sourceRank": 422
  },
  {
    "id": "jp2k-0417",
    "word": "離れる",
    "reading": "はなれる",
    "group": 3,
    "sourceRank": 423
  },
  {
    "id": "jp2k-0418",
    "word": "続く",
    "reading": "つづく",
    "group": 3,
    "sourceRank": 424
  },
  {
    "id": "jp2k-0419",
    "word": "早い",
    "reading": "はやい",
    "group": 3,
    "sourceRank": 425
  },
  {
    "id": "jp2k-0420",
    "word": "ようになる",
    "reading": "ようになる",
    "group": 3,
    "sourceRank": 426
  },
  {
    "id": "jp2k-0421",
    "word": "先",
    "reading": "さき",
    "group": 3,
    "sourceRank": 427
  },
  {
    "id": "jp2k-0422",
    "word": "消える",
    "reading": "きえる",
    "group": 3,
    "sourceRank": 428
  },
  {
    "id": "jp2k-0423",
    "word": "以外",
    "reading": "いがい",
    "group": 3,
    "sourceRank": 429
  },
  {
    "id": "jp2k-0424",
    "word": "必ず",
    "reading": "かならず",
    "group": 3,
    "sourceRank": 430
  },
  {
    "id": "jp2k-0425",
    "word": "君",
    "reading": "くん",
    "group": 3,
    "sourceRank": 431
  },
  {
    "id": "jp2k-0426",
    "word": "選ぶ",
    "reading": "えらぶ",
    "group": 3,
    "sourceRank": 432
  },
  {
    "id": "jp2k-0427",
    "word": "わよ",
    "reading": "わよ",
    "group": 3,
    "sourceRank": 433
  },
  {
    "id": "jp2k-0428",
    "word": "お願いします",
    "reading": "おねがいします",
    "group": 3,
    "sourceRank": 434
  },
  {
    "id": "jp2k-0429",
    "word": "急に",
    "reading": "きゅうに",
    "group": 3,
    "sourceRank": 435
  },
  {
    "id": "jp2k-0430",
    "word": "どこか",
    "reading": "どこか",
    "group": 3,
    "sourceRank": 436
  },
  {
    "id": "jp2k-0431",
    "word": "結構",
    "reading": "けっこう",
    "group": 3,
    "sourceRank": 437
  },
  {
    "id": "jp2k-0432",
    "word": "気になる",
    "reading": "きになる",
    "group": 3,
    "sourceRank": 438
  },
  {
    "id": "jp2k-0433",
    "word": "開ける",
    "reading": "あける",
    "group": 3,
    "sourceRank": 439
  },
  {
    "id": "jp2k-0434",
    "word": "ゆっくり",
    "reading": "ゆっくり",
    "group": 3,
    "sourceRank": 440
  },
  {
    "id": "jp2k-0435",
    "word": "とても",
    "reading": "とても",
    "group": 3,
    "sourceRank": 441
  },
  {
    "id": "jp2k-0436",
    "word": "絶対に",
    "reading": "ぜったいに",
    "group": 3,
    "sourceRank": 442
  },
  {
    "id": "jp2k-0437",
    "word": "今回",
    "reading": "こんかい",
    "group": 3,
    "sourceRank": 443
  },
  {
    "id": "jp2k-0438",
    "word": "近く",
    "reading": "ちかく",
    "group": 3,
    "sourceRank": 444
  },
  {
    "id": "jp2k-0439",
    "word": "下",
    "reading": "した",
    "group": 3,
    "sourceRank": 445
  },
  {
    "id": "jp2k-0440",
    "word": "始まる",
    "reading": "はじまる",
    "group": 3,
    "sourceRank": 446
  },
  {
    "id": "jp2k-0441",
    "word": "様",
    "reading": "さま",
    "group": 3,
    "sourceRank": 447
  },
  {
    "id": "jp2k-0442",
    "word": "立つ",
    "reading": "たつ",
    "group": 3,
    "sourceRank": 448
  },
  {
    "id": "jp2k-0443",
    "word": "道",
    "reading": "みち",
    "group": 3,
    "sourceRank": 449
  },
  {
    "id": "jp2k-0444",
    "word": "そのまま",
    "reading": "そのまま",
    "group": 3,
    "sourceRank": 450
  },
  {
    "id": "jp2k-0445",
    "word": "はあ",
    "reading": "はあ",
    "group": 3,
    "sourceRank": 451
  },
  {
    "id": "jp2k-0446",
    "word": "あー",
    "reading": "あー",
    "group": 3,
    "sourceRank": 452
  },
  {
    "id": "jp2k-0447",
    "word": "とする",
    "reading": "とする",
    "group": 3,
    "sourceRank": 453
  },
  {
    "id": "jp2k-0448",
    "word": "安心",
    "reading": "あんしん",
    "group": 3,
    "sourceRank": 454
  },
  {
    "id": "jp2k-0449",
    "word": "変える",
    "reading": "かえる",
    "group": 3,
    "sourceRank": 455
  },
  {
    "id": "jp2k-0450",
    "word": "せっかく",
    "reading": "せっかく",
    "group": 3,
    "sourceRank": 456
  },
  {
    "id": "jp2k-0451",
    "word": "幸せ",
    "reading": "しあわせ",
    "group": 3,
    "sourceRank": 457
  },
  {
    "id": "jp2k-0452",
    "word": "えー",
    "reading": "えー",
    "group": 3,
    "sourceRank": 458
  },
  {
    "id": "jp2k-0453",
    "word": "場合",
    "reading": "ばあい",
    "group": 3,
    "sourceRank": 459
  },
  {
    "id": "jp2k-0454",
    "word": "勝手に",
    "reading": "かってに",
    "group": 3,
    "sourceRank": 460
  },
  {
    "id": "jp2k-0455",
    "word": "落ち着く",
    "reading": "おちつく",
    "group": 3,
    "sourceRank": 461
  },
  {
    "id": "jp2k-0456",
    "word": "いただく",
    "reading": "いただく",
    "group": 3,
    "sourceRank": 462
  },
  {
    "id": "jp2k-0457",
    "word": "優しい",
    "reading": "やさしい",
    "group": 3,
    "sourceRank": 463
  },
  {
    "id": "jp2k-0458",
    "word": "読む",
    "reading": "よむ",
    "group": 3,
    "sourceRank": 464
  },
  {
    "id": "jp2k-0459",
    "word": "たくさん",
    "reading": "たくさん",
    "group": 3,
    "sourceRank": 465
  },
  {
    "id": "jp2k-0460",
    "word": "結局",
    "reading": "けっきょく",
    "group": 3,
    "sourceRank": 466
  },
  {
    "id": "jp2k-0461",
    "word": "まるで",
    "reading": "まるで",
    "group": 3,
    "sourceRank": 467
  },
  {
    "id": "jp2k-0462",
    "word": "それも",
    "reading": "それも",
    "group": 3,
    "sourceRank": 468
  },
  {
    "id": "jp2k-0463",
    "word": "ことはない",
    "reading": "ことはない",
    "group": 3,
    "sourceRank": 469
  },
  {
    "id": "jp2k-0464",
    "word": "そっち",
    "reading": "そっち",
    "group": 3,
    "sourceRank": 470
  },
  {
    "id": "jp2k-0465",
    "word": "ひどい",
    "reading": "ひどい",
    "group": 3,
    "sourceRank": 471
  },
  {
    "id": "jp2k-0466",
    "word": "あそこ",
    "reading": "あそこ",
    "group": 3,
    "sourceRank": 472
  },
  {
    "id": "jp2k-0467",
    "word": "朝",
    "reading": "あさ",
    "group": 3,
    "sourceRank": 473
  },
  {
    "id": "jp2k-0468",
    "word": "いっぱい",
    "reading": "いっぱい",
    "group": 3,
    "sourceRank": 474
  },
  {
    "id": "jp2k-0469",
    "word": "でもない",
    "reading": "でもない",
    "group": 3,
    "sourceRank": 475
  },
  {
    "id": "jp2k-0470",
    "word": "上がる",
    "reading": "あがる",
    "group": 3,
    "sourceRank": 476
  },
  {
    "id": "jp2k-0471",
    "word": "なかなか",
    "reading": "なかなか",
    "group": 3,
    "sourceRank": 477
  },
  {
    "id": "jp2k-0472",
    "word": "別",
    "reading": "べつ",
    "group": 3,
    "sourceRank": 478
  },
  {
    "id": "jp2k-0473",
    "word": "ぐらい",
    "reading": "ぐらい",
    "group": 3,
    "sourceRank": 479
  },
  {
    "id": "jp2k-0474",
    "word": "存在",
    "reading": "そんざい",
    "group": 3,
    "sourceRank": 480
  },
  {
    "id": "jp2k-0475",
    "word": "負ける",
    "reading": "まける",
    "group": 3,
    "sourceRank": 481
  },
  {
    "id": "jp2k-0476",
    "word": "渡す",
    "reading": "わたす",
    "group": 3,
    "sourceRank": 482
  },
  {
    "id": "jp2k-0477",
    "word": "ことができる",
    "reading": "ことができる",
    "group": 3,
    "sourceRank": 483
  },
  {
    "id": "jp2k-0478",
    "word": "気がする",
    "reading": "きがする",
    "group": 3,
    "sourceRank": 484
  },
  {
    "id": "jp2k-0479",
    "word": "さすが",
    "reading": "さすが",
    "group": 3,
    "sourceRank": 485
  },
  {
    "id": "jp2k-0480",
    "word": "しかも",
    "reading": "しかも",
    "group": 3,
    "sourceRank": 486
  },
  {
    "id": "jp2k-0481",
    "word": "見つかる",
    "reading": "みつかる",
    "group": 3,
    "sourceRank": 487
  },
  {
    "id": "jp2k-0482",
    "word": "準備",
    "reading": "じゅんび",
    "group": 3,
    "sourceRank": 488
  },
  {
    "id": "jp2k-0483",
    "word": "隠す",
    "reading": "かくす",
    "group": 3,
    "sourceRank": 489
  },
  {
    "id": "jp2k-0484",
    "word": "バカ",
    "reading": "バカ",
    "group": 3,
    "sourceRank": 490
  },
  {
    "id": "jp2k-0485",
    "word": "似る",
    "reading": "にる",
    "group": 3,
    "sourceRank": 491
  },
  {
    "id": "jp2k-0486",
    "word": "捨てる",
    "reading": "すてる",
    "group": 3,
    "sourceRank": 492
  },
  {
    "id": "jp2k-0487",
    "word": "危ない",
    "reading": "あぶない",
    "group": 3,
    "sourceRank": 493
  },
  {
    "id": "jp2k-0488",
    "word": "足",
    "reading": "あし",
    "group": 3,
    "sourceRank": 494
  },
  {
    "id": "jp2k-0489",
    "word": "いくら",
    "reading": "いくら",
    "group": 3,
    "sourceRank": 495
  },
  {
    "id": "jp2k-0490",
    "word": "いつか",
    "reading": "いつか",
    "group": 3,
    "sourceRank": 496
  },
  {
    "id": "jp2k-0491",
    "word": "よろしく",
    "reading": "よろしく",
    "group": 3,
    "sourceRank": 497
  },
  {
    "id": "jp2k-0492",
    "word": "はずだ",
    "reading": "はずだ",
    "group": 3,
    "sourceRank": 498
  },
  {
    "id": "jp2k-0493",
    "word": "やっと",
    "reading": "やっと",
    "group": 3,
    "sourceRank": 499
  },
  {
    "id": "jp2k-0494",
    "word": "驚く",
    "reading": "おどろく",
    "group": 3,
    "sourceRank": 500
  },
  {
    "id": "jp2k-0495",
    "word": "しばらく",
    "reading": "しばらく",
    "group": 3,
    "sourceRank": 501
  },
  {
    "id": "jp2k-0496",
    "word": "分",
    "reading": "ぶん",
    "group": 3,
    "sourceRank": 502
  },
  {
    "id": "jp2k-0497",
    "word": "そりゃ",
    "reading": "そりゃ",
    "group": 3,
    "sourceRank": 503
  },
  {
    "id": "jp2k-0498",
    "word": "用",
    "reading": "よう",
    "group": 3,
    "sourceRank": 504
  },
  {
    "id": "jp2k-0499",
    "word": "子供",
    "reading": "こども",
    "group": 3,
    "sourceRank": 505
  },
  {
    "id": "jp2k-0500",
    "word": "終わり",
    "reading": "おわり",
    "group": 3,
    "sourceRank": 506
  },
  {
    "id": "jp2k-0501",
    "word": "任せる",
    "reading": "まかせる",
    "group": 3,
    "sourceRank": 507
  },
  {
    "id": "jp2k-0502",
    "word": "あまり",
    "reading": "あまり",
    "group": 3,
    "sourceRank": 508
  },
  {
    "id": "jp2k-0503",
    "word": "すみません",
    "reading": "すみません",
    "group": 3,
    "sourceRank": 509
  },
  {
    "id": "jp2k-0504",
    "word": "わね",
    "reading": "わね",
    "group": 3,
    "sourceRank": 510
  },
  {
    "id": "jp2k-0505",
    "word": "走る",
    "reading": "はしる",
    "group": 3,
    "sourceRank": 511
  },
  {
    "id": "jp2k-0506",
    "word": "そうする",
    "reading": "そうする",
    "group": 3,
    "sourceRank": 512
  },
  {
    "id": "jp2k-0507",
    "word": "思える",
    "reading": "おもえる",
    "group": 3,
    "sourceRank": 513
  },
  {
    "id": "jp2k-0508",
    "word": "連絡",
    "reading": "れんらく",
    "group": 3,
    "sourceRank": 514
  },
  {
    "id": "jp2k-0509",
    "word": "邪魔",
    "reading": "じゃま",
    "group": 3,
    "sourceRank": 515
  },
  {
    "id": "jp2k-0510",
    "word": "一緒",
    "reading": "いっしょ",
    "group": 3,
    "sourceRank": 516
  },
  {
    "id": "jp2k-0511",
    "word": "もしかして",
    "reading": "もしかして",
    "group": 3,
    "sourceRank": 517
  },
  {
    "id": "jp2k-0512",
    "word": "確認",
    "reading": "かくにん",
    "group": 3,
    "sourceRank": 518
  },
  {
    "id": "jp2k-0513",
    "word": "やがる",
    "reading": "やがる",
    "group": 3,
    "sourceRank": 519
  },
  {
    "id": "jp2k-0514",
    "word": "説明",
    "reading": "せつめい",
    "group": 3,
    "sourceRank": 520
  },
  {
    "id": "jp2k-0515",
    "word": "面白い",
    "reading": "おもしろい",
    "group": 3,
    "sourceRank": 521
  },
  {
    "id": "jp2k-0516",
    "word": "くれる",
    "reading": "くれる",
    "group": 3,
    "sourceRank": 522
  },
  {
    "id": "jp2k-0517",
    "word": "用意",
    "reading": "ようい",
    "group": 3,
    "sourceRank": 523
  },
  {
    "id": "jp2k-0518",
    "word": "友達",
    "reading": "ともだち",
    "group": 3,
    "sourceRank": 524
  },
  {
    "id": "jp2k-0519",
    "word": "状況",
    "reading": "じょうきょう",
    "group": 3,
    "sourceRank": 525
  },
  {
    "id": "jp2k-0520",
    "word": "あの人",
    "reading": "あのひと",
    "group": 3,
    "sourceRank": 526
  },
  {
    "id": "jp2k-0521",
    "word": "働く",
    "reading": "はたらく",
    "group": 3,
    "sourceRank": 527
  },
  {
    "id": "jp2k-0522",
    "word": "生まれる",
    "reading": "うまれる",
    "group": 3,
    "sourceRank": 528
  },
  {
    "id": "jp2k-0523",
    "word": "遊ぶ",
    "reading": "あそぶ",
    "group": 3,
    "sourceRank": 529
  },
  {
    "id": "jp2k-0524",
    "word": "向こう",
    "reading": "むこう",
    "group": 3,
    "sourceRank": 530
  },
  {
    "id": "jp2k-0525",
    "word": "家族",
    "reading": "かぞく",
    "group": 3,
    "sourceRank": 531
  },
  {
    "id": "jp2k-0526",
    "word": "座る",
    "reading": "すわる",
    "group": 3,
    "sourceRank": 532
  },
  {
    "id": "jp2k-0527",
    "word": "わけじゃない",
    "reading": "わけじゃない",
    "group": 3,
    "sourceRank": 533
  },
  {
    "id": "jp2k-0528",
    "word": "助かる",
    "reading": "たすかる",
    "group": 3,
    "sourceRank": 534
  },
  {
    "id": "jp2k-0529",
    "word": "勝つ",
    "reading": "かつ",
    "group": 3,
    "sourceRank": 535
  },
  {
    "id": "jp2k-0530",
    "word": "何の",
    "reading": "なんの",
    "group": 3,
    "sourceRank": 536
  },
  {
    "id": "jp2k-0531",
    "word": "わけない",
    "reading": "わけない",
    "group": 3,
    "sourceRank": 537
  },
  {
    "id": "jp2k-0532",
    "word": "娘",
    "reading": "むすめ",
    "group": 3,
    "sourceRank": 538
  },
  {
    "id": "jp2k-0533",
    "word": "水",
    "reading": "みず",
    "group": 3,
    "sourceRank": 539
  },
  {
    "id": "jp2k-0534",
    "word": "となる",
    "reading": "となる",
    "group": 3,
    "sourceRank": 540
  },
  {
    "id": "jp2k-0535",
    "word": "残す",
    "reading": "のこす",
    "group": 3,
    "sourceRank": 541
  },
  {
    "id": "jp2k-0536",
    "word": "難しい",
    "reading": "むずかしい",
    "group": 3,
    "sourceRank": 542
  },
  {
    "id": "jp2k-0537",
    "word": "もう一度",
    "reading": "もういちど",
    "group": 3,
    "sourceRank": 543
  },
  {
    "id": "jp2k-0538",
    "word": "所",
    "reading": "ところ",
    "group": 3,
    "sourceRank": 544
  },
  {
    "id": "jp2k-0539",
    "word": "止まる",
    "reading": "とまる",
    "group": 3,
    "sourceRank": 546
  },
  {
    "id": "jp2k-0540",
    "word": "毎日",
    "reading": "まいにち",
    "group": 3,
    "sourceRank": 547
  },
  {
    "id": "jp2k-0541",
    "word": "喜ぶ",
    "reading": "よろこぶ",
    "group": 3,
    "sourceRank": 548
  },
  {
    "id": "jp2k-0542",
    "word": "失礼",
    "reading": "しつれい",
    "group": 3,
    "sourceRank": 549
  },
  {
    "id": "jp2k-0543",
    "word": "あんまり",
    "reading": "あんまり",
    "group": 3,
    "sourceRank": 550
  },
  {
    "id": "jp2k-0544",
    "word": "どうせ",
    "reading": "どうせ",
    "group": 3,
    "sourceRank": 551
  },
  {
    "id": "jp2k-0545",
    "word": "どうしても",
    "reading": "どうしても",
    "group": 3,
    "sourceRank": 552
  },
  {
    "id": "jp2k-0546",
    "word": "そういえば",
    "reading": "そういえば",
    "group": 3,
    "sourceRank": 553
  },
  {
    "id": "jp2k-0547",
    "word": "手伝う",
    "reading": "てつだう",
    "group": 3,
    "sourceRank": 554
  },
  {
    "id": "jp2k-0548",
    "word": "さえ",
    "reading": "さえ",
    "group": 3,
    "sourceRank": 555
  },
  {
    "id": "jp2k-0549",
    "word": "かわいい",
    "reading": "かわいい",
    "group": 3,
    "sourceRank": 556
  },
  {
    "id": "jp2k-0550",
    "word": "関係ない",
    "reading": "かんけいない",
    "group": 3,
    "sourceRank": 557
  },
  {
    "id": "jp2k-0551",
    "word": "俺たち",
    "reading": "おれたち",
    "group": 3,
    "sourceRank": 558
  },
  {
    "id": "jp2k-0552",
    "word": "これ以上",
    "reading": "これいじょう",
    "group": 3,
    "sourceRank": 559
  },
  {
    "id": "jp2k-0553",
    "word": "答える",
    "reading": "こたえる",
    "group": 3,
    "sourceRank": 560
  },
  {
    "id": "jp2k-0554",
    "word": "本",
    "reading": "ほん",
    "group": 3,
    "sourceRank": 561
  },
  {
    "id": "jp2k-0555",
    "word": "どっち",
    "reading": "どっち",
    "group": 3,
    "sourceRank": 562
  },
  {
    "id": "jp2k-0556",
    "word": "後",
    "reading": "あと",
    "group": 3,
    "sourceRank": 563
  },
  {
    "id": "jp2k-0557",
    "word": "命",
    "reading": "いのち",
    "group": 3,
    "sourceRank": 564
  },
  {
    "id": "jp2k-0558",
    "word": "あら",
    "reading": "あら",
    "group": 3,
    "sourceRank": 565
  },
  {
    "id": "jp2k-0559",
    "word": "認める",
    "reading": "みとめる",
    "group": 3,
    "sourceRank": 566
  },
  {
    "id": "jp2k-0560",
    "word": "人生",
    "reading": "じんせい",
    "group": 3,
    "sourceRank": 567
  },
  {
    "id": "jp2k-0561",
    "word": "まったく",
    "reading": "まったく",
    "group": 3,
    "sourceRank": 568
  },
  {
    "id": "jp2k-0562",
    "word": "仲間",
    "reading": "なかま",
    "group": 3,
    "sourceRank": 569
  },
  {
    "id": "jp2k-0563",
    "word": "食う",
    "reading": "くう",
    "group": 3,
    "sourceRank": 570
  },
  {
    "id": "jp2k-0564",
    "word": "様子",
    "reading": "ようす",
    "group": 3,
    "sourceRank": 571
  },
  {
    "id": "jp2k-0565",
    "word": "元",
    "reading": "もと",
    "group": 3,
    "sourceRank": 572
  },
  {
    "id": "jp2k-0566",
    "word": "うるさい",
    "reading": "うるさい",
    "group": 3,
    "sourceRank": 573
  },
  {
    "id": "jp2k-0567",
    "word": "調べる",
    "reading": "しらべる",
    "group": 3,
    "sourceRank": 574
  },
  {
    "id": "jp2k-0568",
    "word": "全員",
    "reading": "ぜんいん",
    "group": 3,
    "sourceRank": 575
  },
  {
    "id": "jp2k-0569",
    "word": "物",
    "reading": "もの",
    "group": 3,
    "sourceRank": 576
  },
  {
    "id": "jp2k-0570",
    "word": "何度",
    "reading": "なんど",
    "group": 3,
    "sourceRank": 577
  },
  {
    "id": "jp2k-0571",
    "word": "いろいろ",
    "reading": "いろいろ",
    "group": 3,
    "sourceRank": 578
  },
  {
    "id": "jp2k-0572",
    "word": "おる",
    "reading": "おる",
    "group": 3,
    "sourceRank": 579
  },
  {
    "id": "jp2k-0573",
    "word": "切る",
    "reading": "きる",
    "group": 3,
    "sourceRank": 580
  },
  {
    "id": "jp2k-0574",
    "word": "完全",
    "reading": "かんぜん",
    "group": 3,
    "sourceRank": 581
  },
  {
    "id": "jp2k-0575",
    "word": "特に",
    "reading": "とくに",
    "group": 3,
    "sourceRank": 582
  },
  {
    "id": "jp2k-0576",
    "word": "本気",
    "reading": "ほんき",
    "group": 3,
    "sourceRank": 583
  },
  {
    "id": "jp2k-0577",
    "word": "当然",
    "reading": "とうぜん",
    "group": 3,
    "sourceRank": 584
  },
  {
    "id": "jp2k-0578",
    "word": "女の子",
    "reading": "おんなのこ",
    "group": 3,
    "sourceRank": 585
  },
  {
    "id": "jp2k-0579",
    "word": "あの子",
    "reading": "あのこ",
    "group": 3,
    "sourceRank": 586
  },
  {
    "id": "jp2k-0580",
    "word": "一体",
    "reading": "いったい",
    "group": 3,
    "sourceRank": 587
  },
  {
    "id": "jp2k-0581",
    "word": "かどうか",
    "reading": "かどうか",
    "group": 3,
    "sourceRank": 588
  },
  {
    "id": "jp2k-0582",
    "word": "一人",
    "reading": "ひとり",
    "group": 3,
    "sourceRank": 589
  },
  {
    "id": "jp2k-0583",
    "word": "小さい",
    "reading": "ちいさい",
    "group": 3,
    "sourceRank": 590
  },
  {
    "id": "jp2k-0584",
    "word": "女性",
    "reading": "じょせい",
    "group": 3,
    "sourceRank": 591
  },
  {
    "id": "jp2k-0585",
    "word": "なので",
    "reading": "なので",
    "group": 3,
    "sourceRank": 592
  },
  {
    "id": "jp2k-0586",
    "word": "休む",
    "reading": "やすむ",
    "group": 3,
    "sourceRank": 593
  },
  {
    "id": "jp2k-0587",
    "word": "進む",
    "reading": "すすむ",
    "group": 3,
    "sourceRank": 594
  },
  {
    "id": "jp2k-0588",
    "word": "十分",
    "reading": "じゅうぶん",
    "group": 3,
    "sourceRank": 595
  },
  {
    "id": "jp2k-0589",
    "word": "いきなり",
    "reading": "いきなり",
    "group": 3,
    "sourceRank": 596
  },
  {
    "id": "jp2k-0590",
    "word": "おかげで",
    "reading": "おかげで",
    "group": 3,
    "sourceRank": 597
  },
  {
    "id": "jp2k-0591",
    "word": "確か",
    "reading": "たしか",
    "group": 3,
    "sourceRank": 598
  },
  {
    "id": "jp2k-0592",
    "word": "やはり",
    "reading": "やはり",
    "group": 3,
    "sourceRank": 599
  },
  {
    "id": "jp2k-0593",
    "word": "それで",
    "reading": "それで",
    "group": 3,
    "sourceRank": 600
  },
  {
    "id": "jp2k-0594",
    "word": "突然",
    "reading": "とつぜん",
    "group": 3,
    "sourceRank": 601
  },
  {
    "id": "jp2k-0595",
    "word": "若い",
    "reading": "わかい",
    "group": 3,
    "sourceRank": 602
  },
  {
    "id": "jp2k-0596",
    "word": "恥ずかしい",
    "reading": "はずかしい",
    "group": 3,
    "sourceRank": 603
  },
  {
    "id": "jp2k-0597",
    "word": "済む",
    "reading": "すむ",
    "group": 3,
    "sourceRank": 604
  },
  {
    "id": "jp2k-0598",
    "word": "近い",
    "reading": "ちかい",
    "group": 3,
    "sourceRank": 605
  },
  {
    "id": "jp2k-0599",
    "word": "でもある",
    "reading": "でもある",
    "group": 3,
    "sourceRank": 606
  },
  {
    "id": "jp2k-0600",
    "word": "あげる",
    "reading": "あげる",
    "group": 3,
    "sourceRank": 607
  },
  {
    "id": "jp2k-0601",
    "word": "嫌い",
    "reading": "きらい",
    "group": 4,
    "sourceRank": 609
  },
  {
    "id": "jp2k-0602",
    "word": "合う",
    "reading": "あう",
    "group": 4,
    "sourceRank": 611
  },
  {
    "id": "jp2k-0603",
    "word": "胸",
    "reading": "むね",
    "group": 4,
    "sourceRank": 612
  },
  {
    "id": "jp2k-0604",
    "word": "起こす",
    "reading": "おこす",
    "group": 4,
    "sourceRank": 613
  },
  {
    "id": "jp2k-0605",
    "word": "大切",
    "reading": "たいせつ",
    "group": 4,
    "sourceRank": 614
  },
  {
    "id": "jp2k-0606",
    "word": "正直",
    "reading": "しょうじき",
    "group": 4,
    "sourceRank": 615
  },
  {
    "id": "jp2k-0607",
    "word": "住む",
    "reading": "すむ",
    "group": 4,
    "sourceRank": 616
  },
  {
    "id": "jp2k-0608",
    "word": "楽しむ",
    "reading": "たのしむ",
    "group": 4,
    "sourceRank": 617
  },
  {
    "id": "jp2k-0609",
    "word": "いやいや",
    "reading": "いやいや",
    "group": 4,
    "sourceRank": 618
  },
  {
    "id": "jp2k-0610",
    "word": "２人",
    "reading": "ふたり",
    "group": 4,
    "sourceRank": 619
  },
  {
    "id": "jp2k-0611",
    "word": "お母さん",
    "reading": "おかあさん",
    "group": 4,
    "sourceRank": 620
  },
  {
    "id": "jp2k-0612",
    "word": "かなり",
    "reading": "かなり",
    "group": 4,
    "sourceRank": 621
  },
  {
    "id": "jp2k-0613",
    "word": "んっ",
    "reading": "んっ",
    "group": 4,
    "sourceRank": 622
  },
  {
    "id": "jp2k-0614",
    "word": "どうやって",
    "reading": "どうやって",
    "group": 4,
    "sourceRank": 623
  },
  {
    "id": "jp2k-0615",
    "word": "わざわざ",
    "reading": "わざわざ",
    "group": 4,
    "sourceRank": 624
  },
  {
    "id": "jp2k-0616",
    "word": "届く",
    "reading": "とどく",
    "group": 4,
    "sourceRank": 625
  },
  {
    "id": "jp2k-0617",
    "word": "結果",
    "reading": "けっか",
    "group": 4,
    "sourceRank": 626
  },
  {
    "id": "jp2k-0618",
    "word": "過ぎる",
    "reading": "すぎる",
    "group": 4,
    "sourceRank": 627
  },
  {
    "id": "jp2k-0619",
    "word": "この人",
    "reading": "このひと",
    "group": 4,
    "sourceRank": 628
  },
  {
    "id": "jp2k-0620",
    "word": "なに",
    "reading": "なに",
    "group": 4,
    "sourceRank": 629
  },
  {
    "id": "jp2k-0621",
    "word": "ばっかり",
    "reading": "ばっかり",
    "group": 4,
    "sourceRank": 630
  },
  {
    "id": "jp2k-0622",
    "word": "忙しい",
    "reading": "いそがしい",
    "group": 4,
    "sourceRank": 631
  },
  {
    "id": "jp2k-0623",
    "word": "最高",
    "reading": "さいこう",
    "group": 4,
    "sourceRank": 632
  },
  {
    "id": "jp2k-0624",
    "word": "うっ",
    "reading": "うっ",
    "group": 4,
    "sourceRank": 633
  },
  {
    "id": "jp2k-0625",
    "word": "皆さん",
    "reading": "みなさん",
    "group": 4,
    "sourceRank": 634
  },
  {
    "id": "jp2k-0626",
    "word": "によって",
    "reading": "によって",
    "group": 4,
    "sourceRank": 635
  },
  {
    "id": "jp2k-0627",
    "word": "謝る",
    "reading": "あやまる",
    "group": 4,
    "sourceRank": 636
  },
  {
    "id": "jp2k-0628",
    "word": "じゃねえ",
    "reading": "じゃねえ",
    "group": 4,
    "sourceRank": 637
  },
  {
    "id": "jp2k-0629",
    "word": "状態",
    "reading": "じょうたい",
    "group": 4,
    "sourceRank": 638
  },
  {
    "id": "jp2k-0630",
    "word": "それとも",
    "reading": "それとも",
    "group": 4,
    "sourceRank": 639
  },
  {
    "id": "jp2k-0631",
    "word": "諦める",
    "reading": "あきらめる",
    "group": 4,
    "sourceRank": 640
  },
  {
    "id": "jp2k-0632",
    "word": "名",
    "reading": "な",
    "group": 4,
    "sourceRank": 641
  },
  {
    "id": "jp2k-0633",
    "word": "方法",
    "reading": "ほうほう",
    "group": 4,
    "sourceRank": 642
  },
  {
    "id": "jp2k-0634",
    "word": "気分",
    "reading": "きぶん",
    "group": 4,
    "sourceRank": 643
  },
  {
    "id": "jp2k-0635",
    "word": "とりあえず",
    "reading": "とりあえず",
    "group": 4,
    "sourceRank": 644
  },
  {
    "id": "jp2k-0636",
    "word": "冗談",
    "reading": "じょうだん",
    "group": 4,
    "sourceRank": 645
  },
  {
    "id": "jp2k-0637",
    "word": "情報",
    "reading": "じょうほう",
    "group": 4,
    "sourceRank": 646
  },
  {
    "id": "jp2k-0638",
    "word": "気にする",
    "reading": "きにする",
    "group": 4,
    "sourceRank": 647
  },
  {
    "id": "jp2k-0639",
    "word": "そっか",
    "reading": "そっか",
    "group": 4,
    "sourceRank": 648
  },
  {
    "id": "jp2k-0640",
    "word": "うわっ",
    "reading": "うわっ",
    "group": 4,
    "sourceRank": 649
  },
  {
    "id": "jp2k-0641",
    "word": "すぎる",
    "reading": "すぎる",
    "group": 4,
    "sourceRank": 650
  },
  {
    "id": "jp2k-0642",
    "word": "失う",
    "reading": "うしなう",
    "group": 4,
    "sourceRank": 651
  },
  {
    "id": "jp2k-0643",
    "word": "店",
    "reading": "みせ",
    "group": 4,
    "sourceRank": 652
  },
  {
    "id": "jp2k-0644",
    "word": "こうする",
    "reading": "こうする",
    "group": 4,
    "sourceRank": 653
  },
  {
    "id": "jp2k-0645",
    "word": "それでは",
    "reading": "それでは",
    "group": 4,
    "sourceRank": 654
  },
  {
    "id": "jp2k-0646",
    "word": "学校",
    "reading": "がっこう",
    "group": 4,
    "sourceRank": 655
  },
  {
    "id": "jp2k-0647",
    "word": "おいしい",
    "reading": "おいしい",
    "group": 4,
    "sourceRank": 656
  },
  {
    "id": "jp2k-0648",
    "word": "腕",
    "reading": "うで",
    "group": 4,
    "sourceRank": 657
  },
  {
    "id": "jp2k-0649",
    "word": "当たる",
    "reading": "あたる",
    "group": 4,
    "sourceRank": 658
  },
  {
    "id": "jp2k-0650",
    "word": "無事",
    "reading": "ぶじ",
    "group": 4,
    "sourceRank": 659
  },
  {
    "id": "jp2k-0651",
    "word": "現れる",
    "reading": "あらわれる",
    "group": 4,
    "sourceRank": 660
  },
  {
    "id": "jp2k-0652",
    "word": "求める",
    "reading": "もとめる",
    "group": 4,
    "sourceRank": 661
  },
  {
    "id": "jp2k-0653",
    "word": "不思議",
    "reading": "ふしぎ",
    "group": 4,
    "sourceRank": 662
  },
  {
    "id": "jp2k-0654",
    "word": "残念",
    "reading": "ざんねん",
    "group": 4,
    "sourceRank": 663
  },
  {
    "id": "jp2k-0655",
    "word": "形",
    "reading": "かたち",
    "group": 4,
    "sourceRank": 664
  },
  {
    "id": "jp2k-0656",
    "word": "ようにする",
    "reading": "ようにする",
    "group": 4,
    "sourceRank": 665
  },
  {
    "id": "jp2k-0657",
    "word": "近づく",
    "reading": "ちかづく",
    "group": 4,
    "sourceRank": 666
  },
  {
    "id": "jp2k-0658",
    "word": "足りる",
    "reading": "たりる",
    "group": 4,
    "sourceRank": 667
  },
  {
    "id": "jp2k-0659",
    "word": "大好き",
    "reading": "だいすき",
    "group": 4,
    "sourceRank": 668
  },
  {
    "id": "jp2k-0660",
    "word": "さて",
    "reading": "さて",
    "group": 4,
    "sourceRank": 669
  },
  {
    "id": "jp2k-0661",
    "word": "じゃん",
    "reading": "じゃん",
    "group": 4,
    "sourceRank": 670
  },
  {
    "id": "jp2k-0662",
    "word": "着る",
    "reading": "きる",
    "group": 4,
    "sourceRank": 671
  },
  {
    "id": "jp2k-0663",
    "word": "お父さん",
    "reading": "おとうさん",
    "group": 4,
    "sourceRank": 672
  },
  {
    "id": "jp2k-0664",
    "word": "そうそう",
    "reading": "そうそう",
    "group": 4,
    "sourceRank": 673
  },
  {
    "id": "jp2k-0665",
    "word": "可能性",
    "reading": "かのうせい",
    "group": 4,
    "sourceRank": 674
  },
  {
    "id": "jp2k-0666",
    "word": "ありがとうございました",
    "reading": "ありがとうございました",
    "group": 4,
    "sourceRank": 675
  },
  {
    "id": "jp2k-0667",
    "word": "途中",
    "reading": "とちゅう",
    "group": 4,
    "sourceRank": 676
  },
  {
    "id": "jp2k-0668",
    "word": "理解",
    "reading": "りかい",
    "group": 4,
    "sourceRank": 677
  },
  {
    "id": "jp2k-0669",
    "word": "特別",
    "reading": "とくべつ",
    "group": 4,
    "sourceRank": 678
  },
  {
    "id": "jp2k-0670",
    "word": "ううん",
    "reading": "ううん",
    "group": 4,
    "sourceRank": 679
  },
  {
    "id": "jp2k-0671",
    "word": "としても",
    "reading": "としても",
    "group": 4,
    "sourceRank": 680
  },
  {
    "id": "jp2k-0672",
    "word": "深い",
    "reading": "ふかい",
    "group": 4,
    "sourceRank": 681
  },
  {
    "id": "jp2k-0673",
    "word": "生活",
    "reading": "せいかつ",
    "group": 4,
    "sourceRank": 682
  },
  {
    "id": "jp2k-0674",
    "word": "くせに",
    "reading": "くせに",
    "group": 4,
    "sourceRank": 683
  },
  {
    "id": "jp2k-0675",
    "word": "わあ",
    "reading": "わあ",
    "group": 4,
    "sourceRank": 684
  },
  {
    "id": "jp2k-0676",
    "word": "おく",
    "reading": "おく",
    "group": 4,
    "sourceRank": 685
  },
  {
    "id": "jp2k-0677",
    "word": "感謝",
    "reading": "かんしゃ",
    "group": 4,
    "sourceRank": 686
  },
  {
    "id": "jp2k-0678",
    "word": "なし",
    "reading": "なし",
    "group": 4,
    "sourceRank": 687
  },
  {
    "id": "jp2k-0679",
    "word": "集まる",
    "reading": "あつまる",
    "group": 4,
    "sourceRank": 688
  },
  {
    "id": "jp2k-0680",
    "word": "うわ",
    "reading": "うわ",
    "group": 4,
    "sourceRank": 689
  },
  {
    "id": "jp2k-0681",
    "word": "行う",
    "reading": "おこなう",
    "group": 4,
    "sourceRank": 690
  },
  {
    "id": "jp2k-0682",
    "word": "二人",
    "reading": "ふたり",
    "group": 4,
    "sourceRank": 691
  },
  {
    "id": "jp2k-0683",
    "word": "上げる",
    "reading": "あげる",
    "group": 4,
    "sourceRank": 692
  },
  {
    "id": "jp2k-0684",
    "word": "与える",
    "reading": "あたえる",
    "group": 4,
    "sourceRank": 693
  },
  {
    "id": "jp2k-0685",
    "word": "お金",
    "reading": "おかね",
    "group": 4,
    "sourceRank": 694
  },
  {
    "id": "jp2k-0686",
    "word": "親",
    "reading": "おや",
    "group": 4,
    "sourceRank": 695
  },
  {
    "id": "jp2k-0687",
    "word": "急ぐ",
    "reading": "いそぐ",
    "group": 4,
    "sourceRank": 696
  },
  {
    "id": "jp2k-0688",
    "word": "電話",
    "reading": "でんわ",
    "group": 4,
    "sourceRank": 697
  },
  {
    "id": "jp2k-0689",
    "word": "そもそも",
    "reading": "そもそも",
    "group": 4,
    "sourceRank": 698
  },
  {
    "id": "jp2k-0690",
    "word": "当たり前",
    "reading": "あたりまえ",
    "group": 4,
    "sourceRank": 699
  },
  {
    "id": "jp2k-0691",
    "word": "期待",
    "reading": "きたい",
    "group": 4,
    "sourceRank": 700
  },
  {
    "id": "jp2k-0692",
    "word": "後",
    "reading": "ご",
    "group": 4,
    "sourceRank": 701
  },
  {
    "id": "jp2k-0693",
    "word": "ことにする",
    "reading": "ことにする",
    "group": 4,
    "sourceRank": 702
  },
  {
    "id": "jp2k-0694",
    "word": "だよね",
    "reading": "だよね",
    "group": 4,
    "sourceRank": 703
  },
  {
    "id": "jp2k-0695",
    "word": "出会う",
    "reading": "であう",
    "group": 4,
    "sourceRank": 704
  },
  {
    "id": "jp2k-0696",
    "word": "後ろ",
    "reading": "うしろ",
    "group": 4,
    "sourceRank": 705
  },
  {
    "id": "jp2k-0697",
    "word": "どうしよう",
    "reading": "どうしよう",
    "group": 4,
    "sourceRank": 706
  },
  {
    "id": "jp2k-0698",
    "word": "いたす",
    "reading": "いたす",
    "group": 4,
    "sourceRank": 707
  },
  {
    "id": "jp2k-0699",
    "word": "回る",
    "reading": "まわる",
    "group": 4,
    "sourceRank": 709
  },
  {
    "id": "jp2k-0700",
    "word": "方",
    "reading": "かた",
    "group": 4,
    "sourceRank": 710
  },
  {
    "id": "jp2k-0701",
    "word": "珍しい",
    "reading": "めずらしい",
    "group": 4,
    "sourceRank": 711
  },
  {
    "id": "jp2k-0702",
    "word": "それじゃ",
    "reading": "それじゃ",
    "group": 4,
    "sourceRank": 712
  },
  {
    "id": "jp2k-0703",
    "word": "甘い",
    "reading": "あまい",
    "group": 4,
    "sourceRank": 713
  },
  {
    "id": "jp2k-0704",
    "word": "狙う",
    "reading": "ねらう",
    "group": 4,
    "sourceRank": 714
  },
  {
    "id": "jp2k-0705",
    "word": "疲れる",
    "reading": "つかれる",
    "group": 4,
    "sourceRank": 715
  },
  {
    "id": "jp2k-0706",
    "word": "わかる",
    "reading": "わかる",
    "group": 4,
    "sourceRank": 716
  },
  {
    "id": "jp2k-0707",
    "word": "というのは",
    "reading": "というのは",
    "group": 4,
    "sourceRank": 717
  },
  {
    "id": "jp2k-0708",
    "word": "くん",
    "reading": "くん",
    "group": 4,
    "sourceRank": 719
  },
  {
    "id": "jp2k-0709",
    "word": "思い",
    "reading": "おもい",
    "group": 4,
    "sourceRank": 720
  },
  {
    "id": "jp2k-0710",
    "word": "借りる",
    "reading": "かりる",
    "group": 4,
    "sourceRank": 721
  },
  {
    "id": "jp2k-0711",
    "word": "相談",
    "reading": "そうだん",
    "group": 4,
    "sourceRank": 722
  },
  {
    "id": "jp2k-0712",
    "word": "意外",
    "reading": "いがい",
    "group": 4,
    "sourceRank": 723
  },
  {
    "id": "jp2k-0713",
    "word": "とる",
    "reading": "とる",
    "group": 4,
    "sourceRank": 724
  },
  {
    "id": "jp2k-0714",
    "word": "知らない",
    "reading": "しらない",
    "group": 4,
    "sourceRank": 725
  },
  {
    "id": "jp2k-0715",
    "word": "目的",
    "reading": "もくてき",
    "group": 4,
    "sourceRank": 726
  },
  {
    "id": "jp2k-0716",
    "word": "頃",
    "reading": "ころ",
    "group": 4,
    "sourceRank": 727
  },
  {
    "id": "jp2k-0717",
    "word": "覚悟",
    "reading": "かくご",
    "group": 4,
    "sourceRank": 728
  },
  {
    "id": "jp2k-0718",
    "word": "ほとんど",
    "reading": "ほとんど",
    "group": 4,
    "sourceRank": 730
  },
  {
    "id": "jp2k-0719",
    "word": "全て",
    "reading": "すべて",
    "group": 4,
    "sourceRank": 731
  },
  {
    "id": "jp2k-0720",
    "word": "けれど",
    "reading": "けれど",
    "group": 4,
    "sourceRank": 732
  },
  {
    "id": "jp2k-0721",
    "word": "周り",
    "reading": "まわり",
    "group": 4,
    "sourceRank": 733
  },
  {
    "id": "jp2k-0722",
    "word": "目の前",
    "reading": "めのまえ",
    "group": 4,
    "sourceRank": 734
  },
  {
    "id": "jp2k-0723",
    "word": "ら",
    "reading": "ら",
    "group": 4,
    "sourceRank": 735
  },
  {
    "id": "jp2k-0724",
    "word": "使える",
    "reading": "つかえる",
    "group": 4,
    "sourceRank": 736
  },
  {
    "id": "jp2k-0725",
    "word": "失敗",
    "reading": "しっぱい",
    "group": 4,
    "sourceRank": 737
  },
  {
    "id": "jp2k-0726",
    "word": "いつでも",
    "reading": "いつでも",
    "group": 4,
    "sourceRank": 738
  },
  {
    "id": "jp2k-0727",
    "word": "服",
    "reading": "ふく",
    "group": 4,
    "sourceRank": 740
  },
  {
    "id": "jp2k-0728",
    "word": "敵",
    "reading": "てき",
    "group": 4,
    "sourceRank": 741
  },
  {
    "id": "jp2k-0729",
    "word": "瞬間",
    "reading": "しゅんかん",
    "group": 4,
    "sourceRank": 742
  },
  {
    "id": "jp2k-0730",
    "word": "落とす",
    "reading": "おとす",
    "group": 4,
    "sourceRank": 743
  },
  {
    "id": "jp2k-0731",
    "word": "隣",
    "reading": "となり",
    "group": 4,
    "sourceRank": 744
  },
  {
    "id": "jp2k-0732",
    "word": "想像",
    "reading": "そうぞう",
    "group": 4,
    "sourceRank": 745
  },
  {
    "id": "jp2k-0733",
    "word": "不安",
    "reading": "ふあん",
    "group": 4,
    "sourceRank": 746
  },
  {
    "id": "jp2k-0734",
    "word": "えっと",
    "reading": "えっと",
    "group": 4,
    "sourceRank": 747
  },
  {
    "id": "jp2k-0735",
    "word": "危険",
    "reading": "きけん",
    "group": 4,
    "sourceRank": 748
  },
  {
    "id": "jp2k-0736",
    "word": "増える",
    "reading": "ふえる",
    "group": 4,
    "sourceRank": 749
  },
  {
    "id": "jp2k-0737",
    "word": "考え",
    "reading": "かんがえ",
    "group": 4,
    "sourceRank": 750
  },
  {
    "id": "jp2k-0738",
    "word": "いらっしゃる",
    "reading": "いらっしゃる",
    "group": 4,
    "sourceRank": 751
  },
  {
    "id": "jp2k-0739",
    "word": "一応",
    "reading": "いちおう",
    "group": 4,
    "sourceRank": 752
  },
  {
    "id": "jp2k-0740",
    "word": "飛ぶ",
    "reading": "とぶ",
    "group": 4,
    "sourceRank": 753
  },
  {
    "id": "jp2k-0741",
    "word": "起こる",
    "reading": "おこる",
    "group": 4,
    "sourceRank": 754
  },
  {
    "id": "jp2k-0742",
    "word": "小さな",
    "reading": "ちいさな",
    "group": 4,
    "sourceRank": 755
  },
  {
    "id": "jp2k-0743",
    "word": "大",
    "reading": "だい",
    "group": 4,
    "sourceRank": 756
  },
  {
    "id": "jp2k-0744",
    "word": "奥",
    "reading": "おく",
    "group": 4,
    "sourceRank": 757
  },
  {
    "id": "jp2k-0745",
    "word": "どれ",
    "reading": "どれ",
    "group": 4,
    "sourceRank": 758
  },
  {
    "id": "jp2k-0746",
    "word": "時代",
    "reading": "じだい",
    "group": 4,
    "sourceRank": 759
  },
  {
    "id": "jp2k-0747",
    "word": "どんどん",
    "reading": "どんどん",
    "group": 4,
    "sourceRank": 760
  },
  {
    "id": "jp2k-0748",
    "word": "余計",
    "reading": "よけい",
    "group": 4,
    "sourceRank": 761
  },
  {
    "id": "jp2k-0749",
    "word": "つい",
    "reading": "つい",
    "group": 4,
    "sourceRank": 762
  },
  {
    "id": "jp2k-0750",
    "word": "暮らす",
    "reading": "くらす",
    "group": 4,
    "sourceRank": 763
  },
  {
    "id": "jp2k-0751",
    "word": "たまに",
    "reading": "たまに",
    "group": 4,
    "sourceRank": 764
  },
  {
    "id": "jp2k-0752",
    "word": "ようだ",
    "reading": "ようだ",
    "group": 4,
    "sourceRank": 765
  },
  {
    "id": "jp2k-0753",
    "word": "久しぶり",
    "reading": "ひさしぶり",
    "group": 4,
    "sourceRank": 766
  },
  {
    "id": "jp2k-0754",
    "word": "自由",
    "reading": "じゆう",
    "group": 4,
    "sourceRank": 767
  },
  {
    "id": "jp2k-0755",
    "word": "得る",
    "reading": "える",
    "group": 4,
    "sourceRank": 768
  },
  {
    "id": "jp2k-0756",
    "word": "取れる",
    "reading": "とれる",
    "group": 4,
    "sourceRank": 769
  },
  {
    "id": "jp2k-0757",
    "word": "勉強",
    "reading": "べんきょう",
    "group": 4,
    "sourceRank": 770
  },
  {
    "id": "jp2k-0758",
    "word": "貸す",
    "reading": "かす",
    "group": 4,
    "sourceRank": 771
  },
  {
    "id": "jp2k-0759",
    "word": "あっち",
    "reading": "あっち",
    "group": 4,
    "sourceRank": 772
  },
  {
    "id": "jp2k-0760",
    "word": "勝手",
    "reading": "かって",
    "group": 4,
    "sourceRank": 773
  },
  {
    "id": "jp2k-0761",
    "word": "売る",
    "reading": "うる",
    "group": 4,
    "sourceRank": 774
  },
  {
    "id": "jp2k-0762",
    "word": "断る",
    "reading": "ことわる",
    "group": 4,
    "sourceRank": 775
  },
  {
    "id": "jp2k-0763",
    "word": "いいえ",
    "reading": "いいえ",
    "group": 4,
    "sourceRank": 776
  },
  {
    "id": "jp2k-0764",
    "word": "追う",
    "reading": "おう",
    "group": 4,
    "sourceRank": 777
  },
  {
    "id": "jp2k-0765",
    "word": "まだまだ",
    "reading": "まだまだ",
    "group": 4,
    "sourceRank": 778
  },
  {
    "id": "jp2k-0766",
    "word": "なさる",
    "reading": "なさる",
    "group": 4,
    "sourceRank": 779
  },
  {
    "id": "jp2k-0767",
    "word": "一つ",
    "reading": "ひとつ",
    "group": 4,
    "sourceRank": 780
  },
  {
    "id": "jp2k-0768",
    "word": "いただきます",
    "reading": "いただきます",
    "group": 4,
    "sourceRank": 781
  },
  {
    "id": "jp2k-0769",
    "word": "空",
    "reading": "そら",
    "group": 4,
    "sourceRank": 782
  },
  {
    "id": "jp2k-0770",
    "word": "マジ",
    "reading": "マジ",
    "group": 4,
    "sourceRank": 783
  },
  {
    "id": "jp2k-0771",
    "word": "願う",
    "reading": "ねがう",
    "group": 4,
    "sourceRank": 784
  },
  {
    "id": "jp2k-0772",
    "word": "もうすぐ",
    "reading": "もうすぐ",
    "group": 4,
    "sourceRank": 785
  },
  {
    "id": "jp2k-0773",
    "word": "二度と",
    "reading": "にどと",
    "group": 4,
    "sourceRank": 786
  },
  {
    "id": "jp2k-0774",
    "word": "救う",
    "reading": "すくう",
    "group": 4,
    "sourceRank": 787
  },
  {
    "id": "jp2k-0775",
    "word": "先輩",
    "reading": "せんぱい",
    "group": 4,
    "sourceRank": 788
  },
  {
    "id": "jp2k-0776",
    "word": "結婚",
    "reading": "けっこん",
    "group": 4,
    "sourceRank": 789
  },
  {
    "id": "jp2k-0777",
    "word": "熱い",
    "reading": "あつい",
    "group": 4,
    "sourceRank": 790
  },
  {
    "id": "jp2k-0778",
    "word": "慣れる",
    "reading": "なれる",
    "group": 4,
    "sourceRank": 791
  },
  {
    "id": "jp2k-0779",
    "word": "ようです",
    "reading": "ようです",
    "group": 4,
    "sourceRank": 792
  },
  {
    "id": "jp2k-0780",
    "word": "海",
    "reading": "うみ",
    "group": 4,
    "sourceRank": 793
  },
  {
    "id": "jp2k-0781",
    "word": "はっ",
    "reading": "はっ",
    "group": 4,
    "sourceRank": 794
  },
  {
    "id": "jp2k-0782",
    "word": "件",
    "reading": "けん",
    "group": 4,
    "sourceRank": 795
  },
  {
    "id": "jp2k-0783",
    "word": "血",
    "reading": "ち",
    "group": 4,
    "sourceRank": 796
  },
  {
    "id": "jp2k-0784",
    "word": "そうですね",
    "reading": "そうですね",
    "group": 4,
    "sourceRank": 797
  },
  {
    "id": "jp2k-0785",
    "word": "間違う",
    "reading": "まちがう",
    "group": 4,
    "sourceRank": 798
  },
  {
    "id": "jp2k-0786",
    "word": "へえ",
    "reading": "へえ",
    "group": 4,
    "sourceRank": 799
  },
  {
    "id": "jp2k-0787",
    "word": "軽い",
    "reading": "かるい",
    "group": 4,
    "sourceRank": 800
  },
  {
    "id": "jp2k-0788",
    "word": "による",
    "reading": "による",
    "group": 4,
    "sourceRank": 801
  },
  {
    "id": "jp2k-0789",
    "word": "ハッ",
    "reading": "ハッ",
    "group": 4,
    "sourceRank": 802
  },
  {
    "id": "jp2k-0790",
    "word": "行動",
    "reading": "こうどう",
    "group": 4,
    "sourceRank": 803
  },
  {
    "id": "jp2k-0791",
    "word": "戦う",
    "reading": "たたかう",
    "group": 4,
    "sourceRank": 804
  },
  {
    "id": "jp2k-0792",
    "word": "写真",
    "reading": "しゃしん",
    "group": 4,
    "sourceRank": 805
  },
  {
    "id": "jp2k-0793",
    "word": "動き",
    "reading": "うごき",
    "group": 4,
    "sourceRank": 806
  },
  {
    "id": "jp2k-0794",
    "word": "一",
    "reading": "いち",
    "group": 4,
    "sourceRank": 807
  },
  {
    "id": "jp2k-0795",
    "word": "ふーん",
    "reading": "ふーん",
    "group": 4,
    "sourceRank": 808
  },
  {
    "id": "jp2k-0796",
    "word": "我慢",
    "reading": "がまん",
    "group": 4,
    "sourceRank": 809
  },
  {
    "id": "jp2k-0797",
    "word": "気に入る",
    "reading": "きにいる",
    "group": 4,
    "sourceRank": 810
  },
  {
    "id": "jp2k-0798",
    "word": "ただいま",
    "reading": "ただいま",
    "group": 4,
    "sourceRank": 811
  },
  {
    "id": "jp2k-0799",
    "word": "予定",
    "reading": "よてい",
    "group": 4,
    "sourceRank": 812
  },
  {
    "id": "jp2k-0800",
    "word": "記憶",
    "reading": "きおく",
    "group": 4,
    "sourceRank": 813
  },
  {
    "id": "jp2k-0801",
    "word": "愛する",
    "reading": "あいする",
    "group": 5,
    "sourceRank": 814
  },
  {
    "id": "jp2k-0802",
    "word": "通る",
    "reading": "とおる",
    "group": 5,
    "sourceRank": 815
  },
  {
    "id": "jp2k-0803",
    "word": "運ぶ",
    "reading": "はこぶ",
    "group": 5,
    "sourceRank": 816
  },
  {
    "id": "jp2k-0804",
    "word": "引く",
    "reading": "ひく",
    "group": 5,
    "sourceRank": 817
  },
  {
    "id": "jp2k-0805",
    "word": "奪う",
    "reading": "うばう",
    "group": 5,
    "sourceRank": 818
  },
  {
    "id": "jp2k-0806",
    "word": "やっぱ",
    "reading": "やっぱ",
    "group": 5,
    "sourceRank": 819
  },
  {
    "id": "jp2k-0807",
    "word": "重い",
    "reading": "おもい",
    "group": 5,
    "sourceRank": 820
  },
  {
    "id": "jp2k-0808",
    "word": "誰にも",
    "reading": "だれにも",
    "group": 5,
    "sourceRank": 821
  },
  {
    "id": "jp2k-0809",
    "word": "誘う",
    "reading": "さそう",
    "group": 5,
    "sourceRank": 822
  },
  {
    "id": "jp2k-0810",
    "word": "触る",
    "reading": "さわる",
    "group": 5,
    "sourceRank": 823
  },
  {
    "id": "jp2k-0811",
    "word": "光",
    "reading": "ひかり",
    "group": 5,
    "sourceRank": 824
  },
  {
    "id": "jp2k-0812",
    "word": "自信",
    "reading": "じしん",
    "group": 5,
    "sourceRank": 825
  },
  {
    "id": "jp2k-0813",
    "word": "集める",
    "reading": "あつめる",
    "group": 5,
    "sourceRank": 826
  },
  {
    "id": "jp2k-0814",
    "word": "代わり",
    "reading": "かわり",
    "group": 5,
    "sourceRank": 827
  },
  {
    "id": "jp2k-0815",
    "word": "ホント",
    "reading": "ホント",
    "group": 5,
    "sourceRank": 828
  },
  {
    "id": "jp2k-0816",
    "word": "かもしれません",
    "reading": "かもしれません",
    "group": 5,
    "sourceRank": 829
  },
  {
    "id": "jp2k-0817",
    "word": "気づく",
    "reading": "きづく",
    "group": 5,
    "sourceRank": 830
  },
  {
    "id": "jp2k-0818",
    "word": "相変わらず",
    "reading": "あいかわらず",
    "group": 5,
    "sourceRank": 831
  },
  {
    "id": "jp2k-0819",
    "word": "紹介",
    "reading": "しょうかい",
    "group": 5,
    "sourceRank": 832
  },
  {
    "id": "jp2k-0820",
    "word": "着く",
    "reading": "つく",
    "group": 5,
    "sourceRank": 833
  },
  {
    "id": "jp2k-0821",
    "word": "弱い",
    "reading": "よわい",
    "group": 5,
    "sourceRank": 834
  },
  {
    "id": "jp2k-0822",
    "word": "色",
    "reading": "いろ",
    "group": 5,
    "sourceRank": 835
  },
  {
    "id": "jp2k-0823",
    "word": "以前",
    "reading": "いぜん",
    "group": 5,
    "sourceRank": 836
  },
  {
    "id": "jp2k-0824",
    "word": "詳しい",
    "reading": "くわしい",
    "group": 5,
    "sourceRank": 837
  },
  {
    "id": "jp2k-0825",
    "word": "報告",
    "reading": "ほうこく",
    "group": 5,
    "sourceRank": 838
  },
  {
    "id": "jp2k-0826",
    "word": "向ける",
    "reading": "むける",
    "group": 5,
    "sourceRank": 839
  },
  {
    "id": "jp2k-0827",
    "word": "ちょうど",
    "reading": "ちょうど",
    "group": 5,
    "sourceRank": 840
  },
  {
    "id": "jp2k-0828",
    "word": "としたら",
    "reading": "としたら",
    "group": 5,
    "sourceRank": 841
  },
  {
    "id": "jp2k-0829",
    "word": "倒れる",
    "reading": "たおれる",
    "group": 5,
    "sourceRank": 842
  },
  {
    "id": "jp2k-0830",
    "word": "未来",
    "reading": "みらい",
    "group": 5,
    "sourceRank": 843
  },
  {
    "id": "jp2k-0831",
    "word": "金",
    "reading": "かね",
    "group": 5,
    "sourceRank": 844
  },
  {
    "id": "jp2k-0832",
    "word": "さっさと",
    "reading": "さっさと",
    "group": 5,
    "sourceRank": 845
  },
  {
    "id": "jp2k-0833",
    "word": "意識",
    "reading": "いしき",
    "group": 5,
    "sourceRank": 846
  },
  {
    "id": "jp2k-0834",
    "word": "笑顔",
    "reading": "えがお",
    "group": 5,
    "sourceRank": 847
  },
  {
    "id": "jp2k-0835",
    "word": "我々",
    "reading": "われわれ",
    "group": 5,
    "sourceRank": 848
  },
  {
    "id": "jp2k-0836",
    "word": "本人",
    "reading": "ほんにん",
    "group": 5,
    "sourceRank": 849
  },
  {
    "id": "jp2k-0837",
    "word": "協力",
    "reading": "きょうりょく",
    "group": 5,
    "sourceRank": 850
  },
  {
    "id": "jp2k-0838",
    "word": "っけ",
    "reading": "っけ",
    "group": 5,
    "sourceRank": 851
  },
  {
    "id": "jp2k-0839",
    "word": "触れる",
    "reading": "ふれる",
    "group": 5,
    "sourceRank": 852
  },
  {
    "id": "jp2k-0840",
    "word": "風",
    "reading": "かぜ",
    "group": 5,
    "sourceRank": 853
  },
  {
    "id": "jp2k-0841",
    "word": "過ごす",
    "reading": "すごす",
    "group": 5,
    "sourceRank": 854
  },
  {
    "id": "jp2k-0842",
    "word": "いなくなる",
    "reading": "いなくなる",
    "group": 5,
    "sourceRank": 855
  },
  {
    "id": "jp2k-0843",
    "word": "お互い",
    "reading": "おたがい",
    "group": 5,
    "sourceRank": 856
  },
  {
    "id": "jp2k-0844",
    "word": "決して",
    "reading": "けっして",
    "group": 5,
    "sourceRank": 857
  },
  {
    "id": "jp2k-0845",
    "word": "迷惑",
    "reading": "めいわく",
    "group": 5,
    "sourceRank": 858
  },
  {
    "id": "jp2k-0846",
    "word": "的",
    "reading": "てき",
    "group": 5,
    "sourceRank": 859
  },
  {
    "id": "jp2k-0847",
    "word": "事件",
    "reading": "じけん",
    "group": 5,
    "sourceRank": 860
  },
  {
    "id": "jp2k-0848",
    "word": "国",
    "reading": "くに",
    "group": 5,
    "sourceRank": 861
  },
  {
    "id": "jp2k-0849",
    "word": "事実",
    "reading": "じじつ",
    "group": 5,
    "sourceRank": 862
  },
  {
    "id": "jp2k-0850",
    "word": "持ってくる",
    "reading": "もってくる",
    "group": 5,
    "sourceRank": 863
  },
  {
    "id": "jp2k-0851",
    "word": "興味",
    "reading": "きょうみ",
    "group": 5,
    "sourceRank": 864
  },
  {
    "id": "jp2k-0852",
    "word": "うれしい",
    "reading": "うれしい",
    "group": 5,
    "sourceRank": 865
  },
  {
    "id": "jp2k-0853",
    "word": "事",
    "reading": "こと",
    "group": 5,
    "sourceRank": 866
  },
  {
    "id": "jp2k-0854",
    "word": "楽",
    "reading": "らく",
    "group": 5,
    "sourceRank": 867
  },
  {
    "id": "jp2k-0855",
    "word": "一生",
    "reading": "いっしょう",
    "group": 5,
    "sourceRank": 868
  },
  {
    "id": "jp2k-0856",
    "word": "返事",
    "reading": "へんじ",
    "group": 5,
    "sourceRank": 869
  },
  {
    "id": "jp2k-0857",
    "word": "身",
    "reading": "み",
    "group": 5,
    "sourceRank": 870
  },
  {
    "id": "jp2k-0858",
    "word": "良い",
    "reading": "よい",
    "group": 5,
    "sourceRank": 871
  },
  {
    "id": "jp2k-0859",
    "word": "むしろ",
    "reading": "むしろ",
    "group": 5,
    "sourceRank": 872
  },
  {
    "id": "jp2k-0860",
    "word": "本物",
    "reading": "ほんもの",
    "group": 5,
    "sourceRank": 873
  },
  {
    "id": "jp2k-0861",
    "word": "みせる",
    "reading": "みせる",
    "group": 5,
    "sourceRank": 874
  },
  {
    "id": "jp2k-0862",
    "word": "車",
    "reading": "くるま",
    "group": 5,
    "sourceRank": 875
  },
  {
    "id": "jp2k-0863",
    "word": "離す",
    "reading": "はなす",
    "group": 5,
    "sourceRank": 876
  },
  {
    "id": "jp2k-0864",
    "word": "望む",
    "reading": "のぞむ",
    "group": 5,
    "sourceRank": 877
  },
  {
    "id": "jp2k-0865",
    "word": "一瞬",
    "reading": "いっしゅん",
    "group": 5,
    "sourceRank": 878
  },
  {
    "id": "jp2k-0866",
    "word": "その後",
    "reading": "そのあと",
    "group": 5,
    "sourceRank": 879
  },
  {
    "id": "jp2k-0867",
    "word": "日本",
    "reading": "にほん",
    "group": 5,
    "sourceRank": 880
  },
  {
    "id": "jp2k-0868",
    "word": "フッ",
    "reading": "フッ",
    "group": 5,
    "sourceRank": 881
  },
  {
    "id": "jp2k-0869",
    "word": "立派",
    "reading": "りっぱ",
    "group": 5,
    "sourceRank": 882
  },
  {
    "id": "jp2k-0870",
    "word": "冷たい",
    "reading": "つめたい",
    "group": 5,
    "sourceRank": 883
  },
  {
    "id": "jp2k-0871",
    "word": "のせいで",
    "reading": "のせいで",
    "group": 5,
    "sourceRank": 884
  },
  {
    "id": "jp2k-0872",
    "word": "空気",
    "reading": "くうき",
    "group": 5,
    "sourceRank": 885
  },
  {
    "id": "jp2k-0873",
    "word": "反応",
    "reading": "はんのう",
    "group": 5,
    "sourceRank": 886
  },
  {
    "id": "jp2k-0874",
    "word": "必死",
    "reading": "ひっし",
    "group": 5,
    "sourceRank": 887
  },
  {
    "id": "jp2k-0875",
    "word": "向く",
    "reading": "むく",
    "group": 5,
    "sourceRank": 888
  },
  {
    "id": "jp2k-0876",
    "word": "これまで",
    "reading": "これまで",
    "group": 5,
    "sourceRank": 889
  },
  {
    "id": "jp2k-0877",
    "word": "父",
    "reading": "ちち",
    "group": 5,
    "sourceRank": 890
  },
  {
    "id": "jp2k-0878",
    "word": "どの",
    "reading": "どの",
    "group": 5,
    "sourceRank": 891
  },
  {
    "id": "jp2k-0879",
    "word": "自身",
    "reading": "じしん",
    "group": 5,
    "sourceRank": 892
  },
  {
    "id": "jp2k-0880",
    "word": "直接",
    "reading": "ちょくせつ",
    "group": 5,
    "sourceRank": 893
  },
  {
    "id": "jp2k-0881",
    "word": "はーい",
    "reading": "はーい",
    "group": 5,
    "sourceRank": 894
  },
  {
    "id": "jp2k-0882",
    "word": "程度",
    "reading": "ていど",
    "group": 5,
    "sourceRank": 895
  },
  {
    "id": "jp2k-0883",
    "word": "１人",
    "reading": "ひとり",
    "group": 5,
    "sourceRank": 896
  },
  {
    "id": "jp2k-0884",
    "word": "少ない",
    "reading": "すくない",
    "group": 5,
    "sourceRank": 897
  },
  {
    "id": "jp2k-0885",
    "word": "おいおい",
    "reading": "おいおい",
    "group": 5,
    "sourceRank": 898
  },
  {
    "id": "jp2k-0886",
    "word": "美しい",
    "reading": "うつくしい",
    "group": 5,
    "sourceRank": 899
  },
  {
    "id": "jp2k-0887",
    "word": "そいつ",
    "reading": "そいつ",
    "group": 5,
    "sourceRank": 900
  },
  {
    "id": "jp2k-0888",
    "word": "どうやら",
    "reading": "どうやら",
    "group": 5,
    "sourceRank": 901
  },
  {
    "id": "jp2k-0889",
    "word": "失礼します",
    "reading": "しつれいします",
    "group": 5,
    "sourceRank": 902
  },
  {
    "id": "jp2k-0890",
    "word": "過去",
    "reading": "かこ",
    "group": 5,
    "sourceRank": 903
  },
  {
    "id": "jp2k-0891",
    "word": "利用",
    "reading": "りよう",
    "group": 5,
    "sourceRank": 904
  },
  {
    "id": "jp2k-0892",
    "word": "それより",
    "reading": "それより",
    "group": 5,
    "sourceRank": 905
  },
  {
    "id": "jp2k-0893",
    "word": "大人",
    "reading": "おとな",
    "group": 5,
    "sourceRank": 906
  },
  {
    "id": "jp2k-0894",
    "word": "抜ける",
    "reading": "ぬける",
    "group": 5,
    "sourceRank": 907
  },
  {
    "id": "jp2k-0895",
    "word": "消す",
    "reading": "けす",
    "group": 5,
    "sourceRank": 908
  },
  {
    "id": "jp2k-0896",
    "word": "受け取る",
    "reading": "うけとる",
    "group": 5,
    "sourceRank": 909
  },
  {
    "id": "jp2k-0897",
    "word": "合わせる",
    "reading": "あわせる",
    "group": 5,
    "sourceRank": 910
  },
  {
    "id": "jp2k-0898",
    "word": "責任",
    "reading": "せきにん",
    "group": 5,
    "sourceRank": 911
  },
  {
    "id": "jp2k-0899",
    "word": "食事",
    "reading": "しょくじ",
    "group": 5,
    "sourceRank": 912
  },
  {
    "id": "jp2k-0900",
    "word": "楽しみ",
    "reading": "たのしみ",
    "group": 5,
    "sourceRank": 913
  },
  {
    "id": "jp2k-0901",
    "word": "間違いない",
    "reading": "まちがいない",
    "group": 5,
    "sourceRank": 914
  },
  {
    "id": "jp2k-0902",
    "word": "話をする",
    "reading": "はなしをする",
    "group": 5,
    "sourceRank": 915
  },
  {
    "id": "jp2k-0903",
    "word": "寂しい",
    "reading": "さびしい",
    "group": 5,
    "sourceRank": 916
  },
  {
    "id": "jp2k-0904",
    "word": "料理",
    "reading": "りょうり",
    "group": 5,
    "sourceRank": 917
  },
  {
    "id": "jp2k-0905",
    "word": "ございます",
    "reading": "ございます",
    "group": 5,
    "sourceRank": 918
  },
  {
    "id": "jp2k-0906",
    "word": "だっけ",
    "reading": "だっけ",
    "group": 5,
    "sourceRank": 919
  },
  {
    "id": "jp2k-0907",
    "word": "気をつける",
    "reading": "きをつける",
    "group": 5,
    "sourceRank": 920
  },
  {
    "id": "jp2k-0908",
    "word": "お話",
    "reading": "おはなし",
    "group": 5,
    "sourceRank": 921
  },
  {
    "id": "jp2k-0909",
    "word": "行ける",
    "reading": "いける",
    "group": 5,
    "sourceRank": 922
  },
  {
    "id": "jp2k-0910",
    "word": "今夜",
    "reading": "こんや",
    "group": 5,
    "sourceRank": 923
  },
  {
    "id": "jp2k-0911",
    "word": "秘密",
    "reading": "ひみつ",
    "group": 5,
    "sourceRank": 924
  },
  {
    "id": "jp2k-0912",
    "word": "正しい",
    "reading": "ただしい",
    "group": 5,
    "sourceRank": 925
  },
  {
    "id": "jp2k-0913",
    "word": "平気",
    "reading": "へいき",
    "group": 5,
    "sourceRank": 926
  },
  {
    "id": "jp2k-0914",
    "word": "厳しい",
    "reading": "きびしい",
    "group": 5,
    "sourceRank": 927
  },
  {
    "id": "jp2k-0915",
    "word": "実際",
    "reading": "じっさい",
    "group": 5,
    "sourceRank": 928
  },
  {
    "id": "jp2k-0916",
    "word": "よろしくお願いします",
    "reading": "よろしくおねがいします",
    "group": 5,
    "sourceRank": 929
  },
  {
    "id": "jp2k-0917",
    "word": "ど",
    "reading": "ど",
    "group": 5,
    "sourceRank": 930
  },
  {
    "id": "jp2k-0918",
    "word": "彼ら",
    "reading": "かれら",
    "group": 5,
    "sourceRank": 931
  },
  {
    "id": "jp2k-0919",
    "word": "人たち",
    "reading": "ひとたち",
    "group": 5,
    "sourceRank": 932
  },
  {
    "id": "jp2k-0920",
    "word": "まずい",
    "reading": "まずい",
    "group": 5,
    "sourceRank": 933
  },
  {
    "id": "jp2k-0921",
    "word": "素直",
    "reading": "すなお",
    "group": 5,
    "sourceRank": 934
  },
  {
    "id": "jp2k-0922",
    "word": "何だ",
    "reading": "なんだ",
    "group": 5,
    "sourceRank": 935
  },
  {
    "id": "jp2k-0923",
    "word": "すべて",
    "reading": "すべて",
    "group": 5,
    "sourceRank": 936
  },
  {
    "id": "jp2k-0924",
    "word": "なんと",
    "reading": "なんと",
    "group": 5,
    "sourceRank": 937
  },
  {
    "id": "jp2k-0925",
    "word": "さすがに",
    "reading": "さすがに",
    "group": 5,
    "sourceRank": 938
  },
  {
    "id": "jp2k-0926",
    "word": "ようやく",
    "reading": "ようやく",
    "group": 5,
    "sourceRank": 939
  },
  {
    "id": "jp2k-0927",
    "word": "似合う",
    "reading": "にあう",
    "group": 5,
    "sourceRank": 940
  },
  {
    "id": "jp2k-0928",
    "word": "側",
    "reading": "がわ",
    "group": 5,
    "sourceRank": 941
  },
  {
    "id": "jp2k-0929",
    "word": "答え",
    "reading": "こたえ",
    "group": 5,
    "sourceRank": 942
  },
  {
    "id": "jp2k-0930",
    "word": "知り合い",
    "reading": "しりあい",
    "group": 5,
    "sourceRank": 943
  },
  {
    "id": "jp2k-0931",
    "word": "事情",
    "reading": "じじょう",
    "group": 5,
    "sourceRank": 945
  },
  {
    "id": "jp2k-0932",
    "word": "はっきり",
    "reading": "はっきり",
    "group": 5,
    "sourceRank": 946
  },
  {
    "id": "jp2k-0933",
    "word": "そうだね",
    "reading": "そうだね",
    "group": 5,
    "sourceRank": 947
  },
  {
    "id": "jp2k-0934",
    "word": "眠る",
    "reading": "ねむる",
    "group": 5,
    "sourceRank": 948
  },
  {
    "id": "jp2k-0935",
    "word": "納得",
    "reading": "なっとく",
    "group": 5,
    "sourceRank": 949
  },
  {
    "id": "jp2k-0936",
    "word": "流れる",
    "reading": "ながれる",
    "group": 5,
    "sourceRank": 950
  },
  {
    "id": "jp2k-0937",
    "word": "立てる",
    "reading": "たてる",
    "group": 5,
    "sourceRank": 951
  },
  {
    "id": "jp2k-0938",
    "word": "母",
    "reading": "はは",
    "group": 5,
    "sourceRank": 952
  },
  {
    "id": "jp2k-0939",
    "word": "すら",
    "reading": "すら",
    "group": 5,
    "sourceRank": 953
  },
  {
    "id": "jp2k-0940",
    "word": "たとえ",
    "reading": "たとえ",
    "group": 5,
    "sourceRank": 954
  },
  {
    "id": "jp2k-0941",
    "word": "払う",
    "reading": "はらう",
    "group": 5,
    "sourceRank": 955
  },
  {
    "id": "jp2k-0942",
    "word": "せめて",
    "reading": "せめて",
    "group": 5,
    "sourceRank": 956
  },
  {
    "id": "jp2k-0943",
    "word": "遠く",
    "reading": "とおく",
    "group": 5,
    "sourceRank": 957
  },
  {
    "id": "jp2k-0944",
    "word": "何で",
    "reading": "なんで",
    "group": 5,
    "sourceRank": 958
  },
  {
    "id": "jp2k-0945",
    "word": "間に合う",
    "reading": "まにあう",
    "group": 5,
    "sourceRank": 959
  },
  {
    "id": "jp2k-0946",
    "word": "裏",
    "reading": "うら",
    "group": 5,
    "sourceRank": 960
  },
  {
    "id": "jp2k-0947",
    "word": "そしたら",
    "reading": "そしたら",
    "group": 5,
    "sourceRank": 961
  },
  {
    "id": "jp2k-0948",
    "word": "お前ら",
    "reading": "おまえら",
    "group": 5,
    "sourceRank": 962
  },
  {
    "id": "jp2k-0949",
    "word": "やだ",
    "reading": "やだ",
    "group": 5,
    "sourceRank": 963
  },
  {
    "id": "jp2k-0950",
    "word": "苦しい",
    "reading": "くるしい",
    "group": 5,
    "sourceRank": 964
  },
  {
    "id": "jp2k-0951",
    "word": "ありがと",
    "reading": "ありがと",
    "group": 5,
    "sourceRank": 965
  },
  {
    "id": "jp2k-0952",
    "word": "山",
    "reading": "やま",
    "group": 5,
    "sourceRank": 966
  },
  {
    "id": "jp2k-0953",
    "word": "他人",
    "reading": "たにん",
    "group": 5,
    "sourceRank": 967
  },
  {
    "id": "jp2k-0954",
    "word": "おはよう",
    "reading": "おはよう",
    "group": 5,
    "sourceRank": 968
  },
  {
    "id": "jp2k-0955",
    "word": "ほうがいい",
    "reading": "ほうがいい",
    "group": 5,
    "sourceRank": 969
  },
  {
    "id": "jp2k-0956",
    "word": "なぁ",
    "reading": "なぁ",
    "group": 5,
    "sourceRank": 970
  },
  {
    "id": "jp2k-0957",
    "word": "描く",
    "reading": "えがく",
    "group": 5,
    "sourceRank": 971
  },
  {
    "id": "jp2k-0958",
    "word": "暇",
    "reading": "ひま",
    "group": 5,
    "sourceRank": 972
  },
  {
    "id": "jp2k-0959",
    "word": "お礼",
    "reading": "おれい",
    "group": 5,
    "sourceRank": 973
  },
  {
    "id": "jp2k-0960",
    "word": "ついに",
    "reading": "ついに",
    "group": 5,
    "sourceRank": 974
  },
  {
    "id": "jp2k-0961",
    "word": "隠れる",
    "reading": "かくれる",
    "group": 5,
    "sourceRank": 975
  },
  {
    "id": "jp2k-0962",
    "word": "成功",
    "reading": "せいこう",
    "group": 5,
    "sourceRank": 976
  },
  {
    "id": "jp2k-0963",
    "word": "おう",
    "reading": "おう",
    "group": 5,
    "sourceRank": 977
  },
  {
    "id": "jp2k-0964",
    "word": "打つ",
    "reading": "うつ",
    "group": 5,
    "sourceRank": 978
  },
  {
    "id": "jp2k-0965",
    "word": "よろしい",
    "reading": "よろしい",
    "group": 5,
    "sourceRank": 979
  },
  {
    "id": "jp2k-0966",
    "word": "どうも",
    "reading": "どうも",
    "group": 5,
    "sourceRank": 980
  },
  {
    "id": "jp2k-0967",
    "word": "どちら",
    "reading": "どちら",
    "group": 5,
    "sourceRank": 981
  },
  {
    "id": "jp2k-0968",
    "word": "原因",
    "reading": "げんいん",
    "group": 5,
    "sourceRank": 982
  },
  {
    "id": "jp2k-0969",
    "word": "と言った",
    "reading": "といった",
    "group": 5,
    "sourceRank": 983
  },
  {
    "id": "jp2k-0970",
    "word": "に対して",
    "reading": "にたいして",
    "group": 5,
    "sourceRank": 984
  },
  {
    "id": "jp2k-0971",
    "word": "調子",
    "reading": "ちょうし",
    "group": 5,
    "sourceRank": 985
  },
  {
    "id": "jp2k-0972",
    "word": "首",
    "reading": "くび",
    "group": 5,
    "sourceRank": 986
  },
  {
    "id": "jp2k-0973",
    "word": "切れる",
    "reading": "きれる",
    "group": 5,
    "sourceRank": 987
  },
  {
    "id": "jp2k-0974",
    "word": "愛",
    "reading": "あい",
    "group": 5,
    "sourceRank": 988
  },
  {
    "id": "jp2k-0975",
    "word": "押す",
    "reading": "おす",
    "group": 5,
    "sourceRank": 989
  },
  {
    "id": "jp2k-0976",
    "word": "それぞれ",
    "reading": "それぞれ",
    "group": 5,
    "sourceRank": 990
  },
  {
    "id": "jp2k-0977",
    "word": "遅れる",
    "reading": "おくれる",
    "group": 5,
    "sourceRank": 991
  },
  {
    "id": "jp2k-0978",
    "word": "ちょ",
    "reading": "ちょ",
    "group": 5,
    "sourceRank": 992
  },
  {
    "id": "jp2k-0979",
    "word": "すっかり",
    "reading": "すっかり",
    "group": 5,
    "sourceRank": 993
  },
  {
    "id": "jp2k-0980",
    "word": "おっ",
    "reading": "おっ",
    "group": 5,
    "sourceRank": 994
  },
  {
    "id": "jp2k-0981",
    "word": "きれい",
    "reading": "きれい",
    "group": 5,
    "sourceRank": 995
  },
  {
    "id": "jp2k-0982",
    "word": "迷う",
    "reading": "まよう",
    "group": 5,
    "sourceRank": 996
  },
  {
    "id": "jp2k-0983",
    "word": "悲しい",
    "reading": "かなしい",
    "group": 5,
    "sourceRank": 997
  },
  {
    "id": "jp2k-0984",
    "word": "後悔",
    "reading": "こうかい",
    "group": 5,
    "sourceRank": 998
  },
  {
    "id": "jp2k-0985",
    "word": "味",
    "reading": "あじ",
    "group": 5,
    "sourceRank": 999
  },
  {
    "id": "jp2k-0986",
    "word": "円",
    "reading": "えん",
    "group": 5,
    "sourceRank": 1000
  },
  {
    "id": "jp2k-0987",
    "word": "目指す",
    "reading": "めざす",
    "group": 5,
    "sourceRank": 1001
  },
  {
    "id": "jp2k-0988",
    "word": "赤い",
    "reading": "あかい",
    "group": 5,
    "sourceRank": 1002
  },
  {
    "id": "jp2k-0989",
    "word": "暗い",
    "reading": "くらい",
    "group": 5,
    "sourceRank": 1003
  },
  {
    "id": "jp2k-0990",
    "word": "現実",
    "reading": "げんじつ",
    "group": 5,
    "sourceRank": 1004
  },
  {
    "id": "jp2k-0991",
    "word": "質問",
    "reading": "しつもん",
    "group": 5,
    "sourceRank": 1005
  },
  {
    "id": "jp2k-0992",
    "word": "経験",
    "reading": "けいけん",
    "group": 5,
    "sourceRank": 1006
  },
  {
    "id": "jp2k-0993",
    "word": "手に入れる",
    "reading": "てにいれる",
    "group": 5,
    "sourceRank": 1007
  },
  {
    "id": "jp2k-0994",
    "word": "緊張",
    "reading": "きんちょう",
    "group": 5,
    "sourceRank": 1008
  },
  {
    "id": "jp2k-0995",
    "word": "外す",
    "reading": "はずす",
    "group": 5,
    "sourceRank": 1009
  },
  {
    "id": "jp2k-0996",
    "word": "何でも",
    "reading": "なんでも",
    "group": 5,
    "sourceRank": 1010
  },
  {
    "id": "jp2k-0997",
    "word": "指",
    "reading": "ゆび",
    "group": 5,
    "sourceRank": 1011
  },
  {
    "id": "jp2k-0998",
    "word": "希望",
    "reading": "きぼう",
    "group": 5,
    "sourceRank": 1012
  },
  {
    "id": "jp2k-0999",
    "word": "余裕",
    "reading": "よゆう",
    "group": 5,
    "sourceRank": 1013
  },
  {
    "id": "jp2k-1000",
    "word": "わけにはいかない",
    "reading": "わけにはいかない",
    "group": 5,
    "sourceRank": 1014
  },
  {
    "id": "jp2k-1001",
    "word": "それにしても",
    "reading": "それにしても",
    "group": 6,
    "sourceRank": 1015
  },
  {
    "id": "jp2k-1002",
    "word": "こんにちは",
    "reading": "こんにちは",
    "group": 6,
    "sourceRank": 1016
  },
  {
    "id": "jp2k-1003",
    "word": "襲う",
    "reading": "おそう",
    "group": 6,
    "sourceRank": 1017
  },
  {
    "id": "jp2k-1004",
    "word": "証拠",
    "reading": "しょうこ",
    "group": 6,
    "sourceRank": 1018
  },
  {
    "id": "jp2k-1005",
    "word": "とはいえ",
    "reading": "とはいえ",
    "group": 6,
    "sourceRank": 1019
  },
  {
    "id": "jp2k-1006",
    "word": "動かす",
    "reading": "うごかす",
    "group": 6,
    "sourceRank": 1020
  },
  {
    "id": "jp2k-1007",
    "word": "いつまでも",
    "reading": "いつまでも",
    "group": 6,
    "sourceRank": 1021
  },
  {
    "id": "jp2k-1008",
    "word": "ってのは",
    "reading": "ってのは",
    "group": 6,
    "sourceRank": 1022
  },
  {
    "id": "jp2k-1009",
    "word": "点",
    "reading": "てん",
    "group": 6,
    "sourceRank": 1023
  },
  {
    "id": "jp2k-1010",
    "word": "やすい",
    "reading": "やすい",
    "group": 6,
    "sourceRank": 1024
  },
  {
    "id": "jp2k-1011",
    "word": "番",
    "reading": "ばん",
    "group": 6,
    "sourceRank": 1025
  },
  {
    "id": "jp2k-1012",
    "word": "妙",
    "reading": "みょう",
    "group": 6,
    "sourceRank": 1026
  },
  {
    "id": "jp2k-1013",
    "word": "おお",
    "reading": "おお",
    "group": 6,
    "sourceRank": 1027
  },
  {
    "id": "jp2k-1014",
    "word": "それなら",
    "reading": "それなら",
    "group": 6,
    "sourceRank": 1028
  },
  {
    "id": "jp2k-1015",
    "word": "すいません",
    "reading": "すいません",
    "group": 6,
    "sourceRank": 1029
  },
  {
    "id": "jp2k-1016",
    "word": "母親",
    "reading": "ははおや",
    "group": 6,
    "sourceRank": 1030
  },
  {
    "id": "jp2k-1017",
    "word": "一人で",
    "reading": "ひとりで",
    "group": 6,
    "sourceRank": 1031
  },
  {
    "id": "jp2k-1018",
    "word": "壁",
    "reading": "かべ",
    "group": 6,
    "sourceRank": 1032
  },
  {
    "id": "jp2k-1019",
    "word": "はぁ",
    "reading": "はぁ",
    "group": 6,
    "sourceRank": 1033
  },
  {
    "id": "jp2k-1020",
    "word": "対する",
    "reading": "たいする",
    "group": 6,
    "sourceRank": 1034
  },
  {
    "id": "jp2k-1021",
    "word": "しょうがない",
    "reading": "しょうがない",
    "group": 6,
    "sourceRank": 1035
  },
  {
    "id": "jp2k-1022",
    "word": "になると",
    "reading": "になると",
    "group": 6,
    "sourceRank": 1036
  },
  {
    "id": "jp2k-1023",
    "word": "進める",
    "reading": "すすめる",
    "group": 6,
    "sourceRank": 1037
  },
  {
    "id": "jp2k-1024",
    "word": "背中",
    "reading": "せなか",
    "group": 6,
    "sourceRank": 1038
  },
  {
    "id": "jp2k-1025",
    "word": "遠い",
    "reading": "とおい",
    "group": 6,
    "sourceRank": 1039
  },
  {
    "id": "jp2k-1026",
    "word": "んー",
    "reading": "んー",
    "group": 6,
    "sourceRank": 1040
  },
  {
    "id": "jp2k-1027",
    "word": "客",
    "reading": "きゃく",
    "group": 6,
    "sourceRank": 1041
  },
  {
    "id": "jp2k-1028",
    "word": "なんだか",
    "reading": "なんだか",
    "group": 6,
    "sourceRank": 1042
  },
  {
    "id": "jp2k-1029",
    "word": "髪",
    "reading": "かみ",
    "group": 6,
    "sourceRank": 1043
  },
  {
    "id": "jp2k-1030",
    "word": "なー",
    "reading": "なー",
    "group": 6,
    "sourceRank": 1044
  },
  {
    "id": "jp2k-1031",
    "word": "判断",
    "reading": "はんだん",
    "group": 6,
    "sourceRank": 1045
  },
  {
    "id": "jp2k-1032",
    "word": "下がる",
    "reading": "さがる",
    "group": 6,
    "sourceRank": 1046
  },
  {
    "id": "jp2k-1033",
    "word": "苦手",
    "reading": "にがて",
    "group": 6,
    "sourceRank": 1047
  },
  {
    "id": "jp2k-1034",
    "word": "広い",
    "reading": "ひろい",
    "group": 6,
    "sourceRank": 1049
  },
  {
    "id": "jp2k-1035",
    "word": "死",
    "reading": "し",
    "group": 6,
    "sourceRank": 1050
  },
  {
    "id": "jp2k-1036",
    "word": "半分",
    "reading": "はんぶん",
    "group": 6,
    "sourceRank": 1051
  },
  {
    "id": "jp2k-1037",
    "word": "おかげ",
    "reading": "おかげ",
    "group": 6,
    "sourceRank": 1052
  },
  {
    "id": "jp2k-1038",
    "word": "花",
    "reading": "はな",
    "group": 6,
    "sourceRank": 1053
  },
  {
    "id": "jp2k-1039",
    "word": "場",
    "reading": "ば",
    "group": 6,
    "sourceRank": 1054
  },
  {
    "id": "jp2k-1040",
    "word": "逆に",
    "reading": "ぎゃくに",
    "group": 6,
    "sourceRank": 1055
  },
  {
    "id": "jp2k-1041",
    "word": "伝わる",
    "reading": "つたわる",
    "group": 6,
    "sourceRank": 1056
  },
  {
    "id": "jp2k-1042",
    "word": "妹",
    "reading": "いもうと",
    "group": 6,
    "sourceRank": 1057
  },
  {
    "id": "jp2k-1043",
    "word": "別れる",
    "reading": "わかれる",
    "group": 6,
    "sourceRank": 1058
  },
  {
    "id": "jp2k-1044",
    "word": "そうね",
    "reading": "そうね",
    "group": 6,
    "sourceRank": 1059
  },
  {
    "id": "jp2k-1045",
    "word": "面倒",
    "reading": "めんどう",
    "group": 6,
    "sourceRank": 1060
  },
  {
    "id": "jp2k-1046",
    "word": "勝負",
    "reading": "しょうぶ",
    "group": 6,
    "sourceRank": 1061
  },
  {
    "id": "jp2k-1047",
    "word": "てる",
    "reading": "てる",
    "group": 6,
    "sourceRank": 1062
  },
  {
    "id": "jp2k-1048",
    "word": "感情",
    "reading": "かんじょう",
    "group": 6,
    "sourceRank": 1063
  },
  {
    "id": "jp2k-1049",
    "word": "偶然",
    "reading": "ぐうぜん",
    "group": 6,
    "sourceRank": 1064
  },
  {
    "id": "jp2k-1050",
    "word": "ひとつ",
    "reading": "ひとつ",
    "group": 6,
    "sourceRank": 1065
  },
  {
    "id": "jp2k-1051",
    "word": "みる",
    "reading": "みる",
    "group": 6,
    "sourceRank": 1066
  },
  {
    "id": "jp2k-1052",
    "word": "悩む",
    "reading": "なやむ",
    "group": 6,
    "sourceRank": 1067
  },
  {
    "id": "jp2k-1053",
    "word": "格好",
    "reading": "かっこう",
    "group": 6,
    "sourceRank": 1068
  },
  {
    "id": "jp2k-1054",
    "word": "そば",
    "reading": "そば",
    "group": 6,
    "sourceRank": 1069
  },
  {
    "id": "jp2k-1055",
    "word": "もしかしたら",
    "reading": "もしかしたら",
    "group": 6,
    "sourceRank": 1070
  },
  {
    "id": "jp2k-1056",
    "word": "無駄",
    "reading": "むだ",
    "group": 6,
    "sourceRank": 1071
  },
  {
    "id": "jp2k-1057",
    "word": "街",
    "reading": "まち",
    "group": 6,
    "sourceRank": 1072
  },
  {
    "id": "jp2k-1058",
    "word": "自然",
    "reading": "しぜん",
    "group": 6,
    "sourceRank": 1073
  },
  {
    "id": "jp2k-1059",
    "word": "さらに",
    "reading": "さらに",
    "group": 6,
    "sourceRank": 1074
  },
  {
    "id": "jp2k-1060",
    "word": "いいよ",
    "reading": "いいよ",
    "group": 6,
    "sourceRank": 1075
  },
  {
    "id": "jp2k-1061",
    "word": "たった",
    "reading": "たった",
    "group": 6,
    "sourceRank": 1076
  },
  {
    "id": "jp2k-1062",
    "word": "どっか",
    "reading": "どっか",
    "group": 6,
    "sourceRank": 1077
  },
  {
    "id": "jp2k-1063",
    "word": "避ける",
    "reading": "さける",
    "group": 6,
    "sourceRank": 1078
  },
  {
    "id": "jp2k-1064",
    "word": "もういい",
    "reading": "もういい",
    "group": 6,
    "sourceRank": 1079
  },
  {
    "id": "jp2k-1065",
    "word": "流す",
    "reading": "ながす",
    "group": 6,
    "sourceRank": 1080
  },
  {
    "id": "jp2k-1066",
    "word": "現在",
    "reading": "げんざい",
    "group": 6,
    "sourceRank": 1081
  },
  {
    "id": "jp2k-1067",
    "word": "ならば",
    "reading": "ならば",
    "group": 6,
    "sourceRank": 1082
  },
  {
    "id": "jp2k-1068",
    "word": "傷",
    "reading": "きず",
    "group": 6,
    "sourceRank": 1083
  },
  {
    "id": "jp2k-1069",
    "word": "連中",
    "reading": "れんちゅう",
    "group": 6,
    "sourceRank": 1084
  },
  {
    "id": "jp2k-1070",
    "word": "立場",
    "reading": "たちば",
    "group": 6,
    "sourceRank": 1085
  },
  {
    "id": "jp2k-1071",
    "word": "降りる",
    "reading": "おりる",
    "group": 6,
    "sourceRank": 1086
  },
  {
    "id": "jp2k-1072",
    "word": "その人",
    "reading": "そのひと",
    "group": 6,
    "sourceRank": 1087
  },
  {
    "id": "jp2k-1073",
    "word": "ものがある",
    "reading": "ものがある",
    "group": 6,
    "sourceRank": 1088
  },
  {
    "id": "jp2k-1074",
    "word": "何もない",
    "reading": "なにもない",
    "group": 6,
    "sourceRank": 1089
  },
  {
    "id": "jp2k-1075",
    "word": "今すぐ",
    "reading": "いますぐ",
    "group": 6,
    "sourceRank": 1090
  },
  {
    "id": "jp2k-1076",
    "word": "父親",
    "reading": "ちちおや",
    "group": 6,
    "sourceRank": 1091
  },
  {
    "id": "jp2k-1077",
    "word": "頼る",
    "reading": "たよる",
    "group": 6,
    "sourceRank": 1092
  },
  {
    "id": "jp2k-1078",
    "word": "ということは",
    "reading": "ということは",
    "group": 6,
    "sourceRank": 1093
  },
  {
    "id": "jp2k-1079",
    "word": "皆",
    "reading": "みな",
    "group": 6,
    "sourceRank": 1094
  },
  {
    "id": "jp2k-1080",
    "word": "苦労",
    "reading": "くろう",
    "group": 6,
    "sourceRank": 1095
  },
  {
    "id": "jp2k-1081",
    "word": "内容",
    "reading": "ないよう",
    "group": 6,
    "sourceRank": 1096
  },
  {
    "id": "jp2k-1082",
    "word": "静か",
    "reading": "しずか",
    "group": 6,
    "sourceRank": 1097
  },
  {
    "id": "jp2k-1083",
    "word": "通す",
    "reading": "とおす",
    "group": 6,
    "sourceRank": 1098
  },
  {
    "id": "jp2k-1084",
    "word": "歳",
    "reading": "さい",
    "group": 6,
    "sourceRank": 1099
  },
  {
    "id": "jp2k-1085",
    "word": "出来る",
    "reading": "できる",
    "group": 6,
    "sourceRank": 1100
  },
  {
    "id": "jp2k-1086",
    "word": "勘違い",
    "reading": "かんちがい",
    "group": 6,
    "sourceRank": 1101
  },
  {
    "id": "jp2k-1087",
    "word": "耐える",
    "reading": "たえる",
    "group": 6,
    "sourceRank": 1102
  },
  {
    "id": "jp2k-1088",
    "word": "いろんな",
    "reading": "いろんな",
    "group": 6,
    "sourceRank": 1103
  },
  {
    "id": "jp2k-1089",
    "word": "寄る",
    "reading": "よる",
    "group": 6,
    "sourceRank": 1104
  },
  {
    "id": "jp2k-1090",
    "word": "どうでもいい",
    "reading": "どうでもいい",
    "group": 6,
    "sourceRank": 1105
  },
  {
    "id": "jp2k-1091",
    "word": "ってことは",
    "reading": "ってことは",
    "group": 6,
    "sourceRank": 1106
  },
  {
    "id": "jp2k-1092",
    "word": "機会",
    "reading": "きかい",
    "group": 6,
    "sourceRank": 1107
  },
  {
    "id": "jp2k-1093",
    "word": "白い",
    "reading": "しろい",
    "group": 6,
    "sourceRank": 1108
  },
  {
    "id": "jp2k-1094",
    "word": "バレる",
    "reading": "バレる",
    "group": 6,
    "sourceRank": 1109
  },
  {
    "id": "jp2k-1095",
    "word": "耳",
    "reading": "みみ",
    "group": 6,
    "sourceRank": 1110
  },
  {
    "id": "jp2k-1096",
    "word": "つらい",
    "reading": "つらい",
    "group": 6,
    "sourceRank": 1111
  },
  {
    "id": "jp2k-1097",
    "word": "今後",
    "reading": "こんご",
    "group": 6,
    "sourceRank": 1112
  },
  {
    "id": "jp2k-1098",
    "word": "激しい",
    "reading": "はげしい",
    "group": 6,
    "sourceRank": 1113
  },
  {
    "id": "jp2k-1099",
    "word": "その時",
    "reading": "そのとき",
    "group": 6,
    "sourceRank": 1114
  },
  {
    "id": "jp2k-1100",
    "word": "雰囲気",
    "reading": "ふんいき",
    "group": 6,
    "sourceRank": 1115
  },
  {
    "id": "jp2k-1101",
    "word": "なんだって",
    "reading": "なんだって",
    "group": 6,
    "sourceRank": 1116
  },
  {
    "id": "jp2k-1102",
    "word": "参加",
    "reading": "さんか",
    "group": 6,
    "sourceRank": 1117
  },
  {
    "id": "jp2k-1103",
    "word": "申す",
    "reading": "もうす",
    "group": 6,
    "sourceRank": 1118
  },
  {
    "id": "jp2k-1104",
    "word": "まさに",
    "reading": "まさに",
    "group": 6,
    "sourceRank": 1119
  },
  {
    "id": "jp2k-1105",
    "word": "だからこそ",
    "reading": "だからこそ",
    "group": 6,
    "sourceRank": 1120
  },
  {
    "id": "jp2k-1106",
    "word": "間違い",
    "reading": "まちがい",
    "group": 6,
    "sourceRank": 1121
  },
  {
    "id": "jp2k-1107",
    "word": "腹",
    "reading": "はら",
    "group": 6,
    "sourceRank": 1122
  },
  {
    "id": "jp2k-1108",
    "word": "みたいな",
    "reading": "みたいな",
    "group": 6,
    "sourceRank": 1123
  },
  {
    "id": "jp2k-1109",
    "word": "すむ",
    "reading": "すむ",
    "group": 6,
    "sourceRank": 1124
  },
  {
    "id": "jp2k-1110",
    "word": "数",
    "reading": "かず",
    "group": 6,
    "sourceRank": 1125
  },
  {
    "id": "jp2k-1111",
    "word": "捜す",
    "reading": "さがす",
    "group": 6,
    "sourceRank": 1126
  },
  {
    "id": "jp2k-1112",
    "word": "間違える",
    "reading": "まちがえる",
    "group": 6,
    "sourceRank": 1127
  },
  {
    "id": "jp2k-1113",
    "word": "言い方",
    "reading": "いいかた",
    "group": 6,
    "sourceRank": 1128
  },
  {
    "id": "jp2k-1114",
    "word": "今から",
    "reading": "いまから",
    "group": 6,
    "sourceRank": 1129
  },
  {
    "id": "jp2k-1115",
    "word": "席",
    "reading": "せき",
    "group": 6,
    "sourceRank": 1130
  },
  {
    "id": "jp2k-1116",
    "word": "古い",
    "reading": "ふるい",
    "group": 6,
    "sourceRank": 1131
  },
  {
    "id": "jp2k-1117",
    "word": "こら",
    "reading": "こら",
    "group": 6,
    "sourceRank": 1132
  },
  {
    "id": "jp2k-1118",
    "word": "全く",
    "reading": "まったく",
    "group": 6,
    "sourceRank": 1133
  },
  {
    "id": "jp2k-1119",
    "word": "関わる",
    "reading": "かかわる",
    "group": 6,
    "sourceRank": 1134
  },
  {
    "id": "jp2k-1120",
    "word": "相当",
    "reading": "そうとう",
    "group": 6,
    "sourceRank": 1135
  },
  {
    "id": "jp2k-1121",
    "word": "減る",
    "reading": "へる",
    "group": 6,
    "sourceRank": 1136
  },
  {
    "id": "jp2k-1122",
    "word": "自ら",
    "reading": "みずから",
    "group": 6,
    "sourceRank": 1137
  },
  {
    "id": "jp2k-1123",
    "word": "多く",
    "reading": "おおく",
    "group": 6,
    "sourceRank": 1138
  },
  {
    "id": "jp2k-1124",
    "word": "壊れる",
    "reading": "こわれる",
    "group": 6,
    "sourceRank": 1139
  },
  {
    "id": "jp2k-1125",
    "word": "チャンス",
    "reading": "チャンス",
    "group": 6,
    "sourceRank": 1140
  },
  {
    "id": "jp2k-1126",
    "word": "タイプ",
    "reading": "タイプ",
    "group": 6,
    "sourceRank": 1141
  },
  {
    "id": "jp2k-1127",
    "word": "移動",
    "reading": "いどう",
    "group": 6,
    "sourceRank": 1142
  },
  {
    "id": "jp2k-1128",
    "word": "ドア",
    "reading": "ドア",
    "group": 6,
    "sourceRank": 1143
  },
  {
    "id": "jp2k-1129",
    "word": "通う",
    "reading": "かよう",
    "group": 6,
    "sourceRank": 1144
  },
  {
    "id": "jp2k-1130",
    "word": "抱く",
    "reading": "だく",
    "group": 6,
    "sourceRank": 1145
  },
  {
    "id": "jp2k-1131",
    "word": "明るい",
    "reading": "あかるい",
    "group": 6,
    "sourceRank": 1146
  },
  {
    "id": "jp2k-1132",
    "word": "戻す",
    "reading": "もどす",
    "group": 6,
    "sourceRank": 1147
  },
  {
    "id": "jp2k-1133",
    "word": "もしもし",
    "reading": "もしもし",
    "group": 6,
    "sourceRank": 1148
  },
  {
    "id": "jp2k-1134",
    "word": "迎える",
    "reading": "むかえる",
    "group": 6,
    "sourceRank": 1149
  },
  {
    "id": "jp2k-1135",
    "word": "部分",
    "reading": "ぶぶん",
    "group": 6,
    "sourceRank": 1150
  },
  {
    "id": "jp2k-1136",
    "word": "この前",
    "reading": "このまえ",
    "group": 6,
    "sourceRank": 1151
  },
  {
    "id": "jp2k-1137",
    "word": "発見",
    "reading": "はっけん",
    "group": 6,
    "sourceRank": 1152
  },
  {
    "id": "jp2k-1138",
    "word": "無視",
    "reading": "むし",
    "group": 6,
    "sourceRank": 1153
  },
  {
    "id": "jp2k-1139",
    "word": "超える",
    "reading": "こえる",
    "group": 6,
    "sourceRank": 1154
  },
  {
    "id": "jp2k-1140",
    "word": "受け入れる",
    "reading": "うけいれる",
    "group": 6,
    "sourceRank": 1155
  },
  {
    "id": "jp2k-1141",
    "word": "息子",
    "reading": "むすこ",
    "group": 6,
    "sourceRank": 1156
  },
  {
    "id": "jp2k-1142",
    "word": "運命",
    "reading": "うんめい",
    "group": 6,
    "sourceRank": 1157
  },
  {
    "id": "jp2k-1143",
    "word": "態度",
    "reading": "たいど",
    "group": 6,
    "sourceRank": 1159
  },
  {
    "id": "jp2k-1144",
    "word": "とんでもない",
    "reading": "とんでもない",
    "group": 6,
    "sourceRank": 1160
  },
  {
    "id": "jp2k-1145",
    "word": "疑う",
    "reading": "うたがう",
    "group": 6,
    "sourceRank": 1161
  },
  {
    "id": "jp2k-1146",
    "word": "比べる",
    "reading": "くらべる",
    "group": 6,
    "sourceRank": 1162
  },
  {
    "id": "jp2k-1147",
    "word": "倒す",
    "reading": "たおす",
    "group": 6,
    "sourceRank": 1163
  },
  {
    "id": "jp2k-1148",
    "word": "からって",
    "reading": "からって",
    "group": 6,
    "sourceRank": 1164
  },
  {
    "id": "jp2k-1149",
    "word": "こうやって",
    "reading": "こうやって",
    "group": 6,
    "sourceRank": 1165
  },
  {
    "id": "jp2k-1150",
    "word": "遠慮",
    "reading": "えんりょ",
    "group": 6,
    "sourceRank": 1166
  },
  {
    "id": "jp2k-1151",
    "word": "のみ",
    "reading": "のみ",
    "group": 6,
    "sourceRank": 1167
  },
  {
    "id": "jp2k-1152",
    "word": "病院",
    "reading": "びょういん",
    "group": 6,
    "sourceRank": 1168
  },
  {
    "id": "jp2k-1153",
    "word": "静かに",
    "reading": "しずかに",
    "group": 6,
    "sourceRank": 1169
  },
  {
    "id": "jp2k-1154",
    "word": "すでに",
    "reading": "すでに",
    "group": 6,
    "sourceRank": 1170
  },
  {
    "id": "jp2k-1155",
    "word": "実",
    "reading": "じつ",
    "group": 6,
    "sourceRank": 1171
  },
  {
    "id": "jp2k-1156",
    "word": "神",
    "reading": "かみ",
    "group": 6,
    "sourceRank": 1172
  },
  {
    "id": "jp2k-1157",
    "word": "応援",
    "reading": "おうえん",
    "group": 6,
    "sourceRank": 1173
  },
  {
    "id": "jp2k-1158",
    "word": "荷物",
    "reading": "にもつ",
    "group": 6,
    "sourceRank": 1174
  },
  {
    "id": "jp2k-1159",
    "word": "確かめる",
    "reading": "たしかめる",
    "group": 6,
    "sourceRank": 1175
  },
  {
    "id": "jp2k-1160",
    "word": "ずつ",
    "reading": "ずつ",
    "group": 6,
    "sourceRank": 1176
  },
  {
    "id": "jp2k-1161",
    "word": "ではないか",
    "reading": "ではないか",
    "group": 6,
    "sourceRank": 1177
  },
  {
    "id": "jp2k-1162",
    "word": "壊す",
    "reading": "こわす",
    "group": 6,
    "sourceRank": 1178
  },
  {
    "id": "jp2k-1163",
    "word": "巻き込む",
    "reading": "まきこむ",
    "group": 6,
    "sourceRank": 1179
  },
  {
    "id": "jp2k-1164",
    "word": "申し訳ない",
    "reading": "もうしわけない",
    "group": 6,
    "sourceRank": 1180
  },
  {
    "id": "jp2k-1165",
    "word": "練習",
    "reading": "れんしゅう",
    "group": 6,
    "sourceRank": 1181
  },
  {
    "id": "jp2k-1166",
    "word": "試す",
    "reading": "ためす",
    "group": 6,
    "sourceRank": 1182
  },
  {
    "id": "jp2k-1167",
    "word": "会話",
    "reading": "かいわ",
    "group": 6,
    "sourceRank": 1183
  },
  {
    "id": "jp2k-1168",
    "word": "再び",
    "reading": "ふたたび",
    "group": 6,
    "sourceRank": 1184
  },
  {
    "id": "jp2k-1169",
    "word": "嫌う",
    "reading": "きらう",
    "group": 6,
    "sourceRank": 1185
  },
  {
    "id": "jp2k-1170",
    "word": "集中",
    "reading": "しゅうちゅう",
    "group": 6,
    "sourceRank": 1186
  },
  {
    "id": "jp2k-1171",
    "word": "真面目",
    "reading": "まじめ",
    "group": 6,
    "sourceRank": 1187
  },
  {
    "id": "jp2k-1172",
    "word": "得意",
    "reading": "とくい",
    "group": 6,
    "sourceRank": 1188
  },
  {
    "id": "jp2k-1173",
    "word": "拾う",
    "reading": "ひろう",
    "group": 6,
    "sourceRank": 1189
  },
  {
    "id": "jp2k-1174",
    "word": "というわけ",
    "reading": "というわけ",
    "group": 6,
    "sourceRank": 1190
  },
  {
    "id": "jp2k-1175",
    "word": "残り",
    "reading": "のこり",
    "group": 6,
    "sourceRank": 1191
  },
  {
    "id": "jp2k-1176",
    "word": "慌てる",
    "reading": "あわてる",
    "group": 6,
    "sourceRank": 1192
  },
  {
    "id": "jp2k-1177",
    "word": "超",
    "reading": "ちょう",
    "group": 6,
    "sourceRank": 1193
  },
  {
    "id": "jp2k-1178",
    "word": "本日",
    "reading": "ほんじつ",
    "group": 6,
    "sourceRank": 1194
  },
  {
    "id": "jp2k-1179",
    "word": "ような気がする",
    "reading": "ようなきがする",
    "group": 6,
    "sourceRank": 1195
  },
  {
    "id": "jp2k-1180",
    "word": "有名",
    "reading": "ゆうめい",
    "group": 6,
    "sourceRank": 1196
  },
  {
    "id": "jp2k-1181",
    "word": "同士",
    "reading": "どうし",
    "group": 6,
    "sourceRank": 1197
  },
  {
    "id": "jp2k-1182",
    "word": "そうやって",
    "reading": "そうやって",
    "group": 6,
    "sourceRank": 1198
  },
  {
    "id": "jp2k-1183",
    "word": "どれだけ",
    "reading": "どれだけ",
    "group": 6,
    "sourceRank": 1199
  },
  {
    "id": "jp2k-1184",
    "word": "繰り返す",
    "reading": "くりかえす",
    "group": 6,
    "sourceRank": 1200
  },
  {
    "id": "jp2k-1185",
    "word": "んな",
    "reading": "んな",
    "group": 6,
    "sourceRank": 1201
  },
  {
    "id": "jp2k-1186",
    "word": "焦る",
    "reading": "あせる",
    "group": 6,
    "sourceRank": 1202
  },
  {
    "id": "jp2k-1187",
    "word": "お茶",
    "reading": "おちゃ",
    "group": 6,
    "sourceRank": 1203
  },
  {
    "id": "jp2k-1188",
    "word": "一部",
    "reading": "いちぶ",
    "group": 6,
    "sourceRank": 1204
  },
  {
    "id": "jp2k-1189",
    "word": "雨",
    "reading": "あめ",
    "group": 6,
    "sourceRank": 1205
  },
  {
    "id": "jp2k-1190",
    "word": "限界",
    "reading": "げんかい",
    "group": 6,
    "sourceRank": 1206
  },
  {
    "id": "jp2k-1191",
    "word": "同時",
    "reading": "どうじ",
    "group": 6,
    "sourceRank": 1207
  },
  {
    "id": "jp2k-1192",
    "word": "まとめる",
    "reading": "まとめる",
    "group": 6,
    "sourceRank": 1208
  },
  {
    "id": "jp2k-1193",
    "word": "肩",
    "reading": "かた",
    "group": 6,
    "sourceRank": 1209
  },
  {
    "id": "jp2k-1194",
    "word": "努力",
    "reading": "どりょく",
    "group": 6,
    "sourceRank": 1210
  },
  {
    "id": "jp2k-1195",
    "word": "つつ",
    "reading": "つつ",
    "group": 6,
    "sourceRank": 1211
  },
  {
    "id": "jp2k-1196",
    "word": "改めて",
    "reading": "あらためて",
    "group": 6,
    "sourceRank": 1212
  },
  {
    "id": "jp2k-1197",
    "word": "涙",
    "reading": "なみだ",
    "group": 6,
    "sourceRank": 1213
  },
  {
    "id": "jp2k-1198",
    "word": "ふざける",
    "reading": "ふざける",
    "group": 6,
    "sourceRank": 1214
  },
  {
    "id": "jp2k-1199",
    "word": "急いで",
    "reading": "いそいで",
    "group": 6,
    "sourceRank": 1215
  },
  {
    "id": "jp2k-1200",
    "word": "いよいよ",
    "reading": "いよいよ",
    "group": 6,
    "sourceRank": 1216
  },
  {
    "id": "jp2k-1201",
    "word": "さっきから",
    "reading": "さっきから",
    "group": 7,
    "sourceRank": 1217
  },
  {
    "id": "jp2k-1202",
    "word": "大した",
    "reading": "たいした",
    "group": 7,
    "sourceRank": 1218
  },
  {
    "id": "jp2k-1203",
    "word": "抱える",
    "reading": "かかえる",
    "group": 7,
    "sourceRank": 1219
  },
  {
    "id": "jp2k-1204",
    "word": "何度も",
    "reading": "なんども",
    "group": 7,
    "sourceRank": 1220
  },
  {
    "id": "jp2k-1205",
    "word": "でよ",
    "reading": "でよ",
    "group": 7,
    "sourceRank": 1221
  },
  {
    "id": "jp2k-1206",
    "word": "頑張って",
    "reading": "がんばって",
    "group": 7,
    "sourceRank": 1222
  },
  {
    "id": "jp2k-1207",
    "word": "回す",
    "reading": "まわす",
    "group": 7,
    "sourceRank": 1223
  },
  {
    "id": "jp2k-1208",
    "word": "取り戻す",
    "reading": "とりもどす",
    "group": 7,
    "sourceRank": 1224
  },
  {
    "id": "jp2k-1209",
    "word": "どうか",
    "reading": "どうか",
    "group": 7,
    "sourceRank": 1225
  },
  {
    "id": "jp2k-1210",
    "word": "息",
    "reading": "いき",
    "group": 7,
    "sourceRank": 1226
  },
  {
    "id": "jp2k-1211",
    "word": "帰り",
    "reading": "かえり",
    "group": 7,
    "sourceRank": 1227
  },
  {
    "id": "jp2k-1212",
    "word": "すっごい",
    "reading": "すっごい",
    "group": 7,
    "sourceRank": 1228
  },
  {
    "id": "jp2k-1213",
    "word": "まあまあ",
    "reading": "まあまあ",
    "group": 7,
    "sourceRank": 1229
  },
  {
    "id": "jp2k-1214",
    "word": "肉",
    "reading": "にく",
    "group": 7,
    "sourceRank": 1230
  },
  {
    "id": "jp2k-1215",
    "word": "大きくなる",
    "reading": "おおきくなる",
    "group": 7,
    "sourceRank": 1231
  },
  {
    "id": "jp2k-1216",
    "word": "完璧",
    "reading": "かんぺき",
    "group": 7,
    "sourceRank": 1232
  },
  {
    "id": "jp2k-1217",
    "word": "お客さん",
    "reading": "おきゃくさん",
    "group": 7,
    "sourceRank": 1233
  },
  {
    "id": "jp2k-1218",
    "word": "世の中",
    "reading": "よのなか",
    "group": 7,
    "sourceRank": 1234
  },
  {
    "id": "jp2k-1219",
    "word": "解決",
    "reading": "かいけつ",
    "group": 7,
    "sourceRank": 1235
  },
  {
    "id": "jp2k-1220",
    "word": "挨拶",
    "reading": "あいさつ",
    "group": 7,
    "sourceRank": 1236
  },
  {
    "id": "jp2k-1221",
    "word": "最悪",
    "reading": "さいあく",
    "group": 7,
    "sourceRank": 1237
  },
  {
    "id": "jp2k-1222",
    "word": "並ぶ",
    "reading": "ならぶ",
    "group": 7,
    "sourceRank": 1238
  },
  {
    "id": "jp2k-1223",
    "word": "かなう",
    "reading": "かなう",
    "group": 7,
    "sourceRank": 1239
  },
  {
    "id": "jp2k-1224",
    "word": "鍵",
    "reading": "かぎ",
    "group": 7,
    "sourceRank": 1240
  },
  {
    "id": "jp2k-1225",
    "word": "表情",
    "reading": "ひょうじょう",
    "group": 7,
    "sourceRank": 1241
  },
  {
    "id": "jp2k-1226",
    "word": "そちら",
    "reading": "そちら",
    "group": 7,
    "sourceRank": 1242
  },
  {
    "id": "jp2k-1227",
    "word": "気付く",
    "reading": "きづく",
    "group": 7,
    "sourceRank": 1243
  },
  {
    "id": "jp2k-1228",
    "word": "警察",
    "reading": "けいさつ",
    "group": 7,
    "sourceRank": 1244
  },
  {
    "id": "jp2k-1229",
    "word": "いやー",
    "reading": "いやー",
    "group": 7,
    "sourceRank": 1245
  },
  {
    "id": "jp2k-1230",
    "word": "今年",
    "reading": "ことし",
    "group": 7,
    "sourceRank": 1246
  },
  {
    "id": "jp2k-1231",
    "word": "きれる",
    "reading": "きれる",
    "group": 7,
    "sourceRank": 1247
  },
  {
    "id": "jp2k-1232",
    "word": "それ以上",
    "reading": "それいじょう",
    "group": 7,
    "sourceRank": 1248
  },
  {
    "id": "jp2k-1233",
    "word": "仕方ない",
    "reading": "しかたない",
    "group": 7,
    "sourceRank": 1249
  },
  {
    "id": "jp2k-1234",
    "word": "育てる",
    "reading": "そだてる",
    "group": 7,
    "sourceRank": 1250
  },
  {
    "id": "jp2k-1235",
    "word": "怪しい",
    "reading": "あやしい",
    "group": 7,
    "sourceRank": 1251
  },
  {
    "id": "jp2k-1236",
    "word": "うまくいく",
    "reading": "うまくいく",
    "group": 7,
    "sourceRank": 1252
  },
  {
    "id": "jp2k-1237",
    "word": "そのうち",
    "reading": "そのうち",
    "group": 7,
    "sourceRank": 1253
  },
  {
    "id": "jp2k-1238",
    "word": "新た",
    "reading": "あらた",
    "group": 7,
    "sourceRank": 1254
  },
  {
    "id": "jp2k-1239",
    "word": "恐ろしい",
    "reading": "おそろしい",
    "group": 7,
    "sourceRank": 1255
  },
  {
    "id": "jp2k-1240",
    "word": "そのこと",
    "reading": "そのこと",
    "group": 7,
    "sourceRank": 1256
  },
  {
    "id": "jp2k-1241",
    "word": "へー",
    "reading": "へー",
    "group": 7,
    "sourceRank": 1257
  },
  {
    "id": "jp2k-1242",
    "word": "成長",
    "reading": "せいちょう",
    "group": 7,
    "sourceRank": 1258
  },
  {
    "id": "jp2k-1243",
    "word": "抜く",
    "reading": "ぬく",
    "group": 7,
    "sourceRank": 1259
  },
  {
    "id": "jp2k-1244",
    "word": "しゃべる",
    "reading": "しゃべる",
    "group": 7,
    "sourceRank": 1260
  },
  {
    "id": "jp2k-1245",
    "word": "直す",
    "reading": "なおす",
    "group": 7,
    "sourceRank": 1261
  },
  {
    "id": "jp2k-1246",
    "word": "重要",
    "reading": "じゅうよう",
    "group": 7,
    "sourceRank": 1262
  },
  {
    "id": "jp2k-1247",
    "word": "いかが",
    "reading": "いかが",
    "group": 7,
    "sourceRank": 1263
  },
  {
    "id": "jp2k-1248",
    "word": "影響",
    "reading": "えいきょう",
    "group": 7,
    "sourceRank": 1264
  },
  {
    "id": "jp2k-1249",
    "word": "いいこと",
    "reading": "いいこと",
    "group": 7,
    "sourceRank": 1265
  },
  {
    "id": "jp2k-1250",
    "word": "従う",
    "reading": "したがう",
    "group": 7,
    "sourceRank": 1266
  },
  {
    "id": "jp2k-1251",
    "word": "距離",
    "reading": "きょり",
    "group": 7,
    "sourceRank": 1267
  },
  {
    "id": "jp2k-1252",
    "word": "短い",
    "reading": "みじかい",
    "group": 7,
    "sourceRank": 1268
  },
  {
    "id": "jp2k-1253",
    "word": "適当",
    "reading": "てきとう",
    "group": 7,
    "sourceRank": 1269
  },
  {
    "id": "jp2k-1254",
    "word": "人",
    "reading": "にん",
    "group": 7,
    "sourceRank": 1270
  },
  {
    "id": "jp2k-1255",
    "word": "例の",
    "reading": "れいの",
    "group": 7,
    "sourceRank": 1271
  },
  {
    "id": "jp2k-1256",
    "word": "低い",
    "reading": "ひくい",
    "group": 7,
    "sourceRank": 1272
  },
  {
    "id": "jp2k-1257",
    "word": "あいつら",
    "reading": "あいつら",
    "group": 7,
    "sourceRank": 1273
  },
  {
    "id": "jp2k-1258",
    "word": "３人",
    "reading": "さんにん",
    "group": 7,
    "sourceRank": 1274
  },
  {
    "id": "jp2k-1259",
    "word": "思い出",
    "reading": "おもいで",
    "group": 7,
    "sourceRank": 1275
  },
  {
    "id": "jp2k-1260",
    "word": "寒い",
    "reading": "さむい",
    "group": 7,
    "sourceRank": 1276
  },
  {
    "id": "jp2k-1261",
    "word": "この先",
    "reading": "このさき",
    "group": 7,
    "sourceRank": 1277
  },
  {
    "id": "jp2k-1262",
    "word": "意見",
    "reading": "いけん",
    "group": 7,
    "sourceRank": 1278
  },
  {
    "id": "jp2k-1263",
    "word": "褒める",
    "reading": "ほめる",
    "group": 7,
    "sourceRank": 1279
  },
  {
    "id": "jp2k-1264",
    "word": "だからって",
    "reading": "だからって",
    "group": 7,
    "sourceRank": 1280
  },
  {
    "id": "jp2k-1265",
    "word": "趣味",
    "reading": "しゅみ",
    "group": 7,
    "sourceRank": 1281
  },
  {
    "id": "jp2k-1266",
    "word": "関する",
    "reading": "かんする",
    "group": 7,
    "sourceRank": 1282
  },
  {
    "id": "jp2k-1267",
    "word": "おーい",
    "reading": "おーい",
    "group": 7,
    "sourceRank": 1283
  },
  {
    "id": "jp2k-1268",
    "word": "確実",
    "reading": "かくじつ",
    "group": 7,
    "sourceRank": 1284
  },
  {
    "id": "jp2k-1269",
    "word": "ありがたい",
    "reading": "ありがたい",
    "group": 7,
    "sourceRank": 1285
  },
  {
    "id": "jp2k-1270",
    "word": "により",
    "reading": "により",
    "group": 7,
    "sourceRank": 1286
  },
  {
    "id": "jp2k-1271",
    "word": "その日",
    "reading": "そのひ",
    "group": 7,
    "sourceRank": 1287
  },
  {
    "id": "jp2k-1272",
    "word": "懐かしい",
    "reading": "なつかしい",
    "group": 7,
    "sourceRank": 1288
  },
  {
    "id": "jp2k-1273",
    "word": "男性",
    "reading": "だんせい",
    "group": 7,
    "sourceRank": 1289
  },
  {
    "id": "jp2k-1274",
    "word": "満足",
    "reading": "まんぞく",
    "group": 7,
    "sourceRank": 1290
  },
  {
    "id": "jp2k-1275",
    "word": "語る",
    "reading": "かたる",
    "group": 7,
    "sourceRank": 1291
  },
  {
    "id": "jp2k-1276",
    "word": "味方",
    "reading": "みかた",
    "group": 7,
    "sourceRank": 1292
  },
  {
    "id": "jp2k-1277",
    "word": "こうして",
    "reading": "こうして",
    "group": 7,
    "sourceRank": 1293
  },
  {
    "id": "jp2k-1278",
    "word": "この世",
    "reading": "このよ",
    "group": 7,
    "sourceRank": 1294
  },
  {
    "id": "jp2k-1279",
    "word": "お店",
    "reading": "おみせ",
    "group": 7,
    "sourceRank": 1295
  },
  {
    "id": "jp2k-1280",
    "word": "担当",
    "reading": "たんとう",
    "group": 7,
    "sourceRank": 1296
  },
  {
    "id": "jp2k-1281",
    "word": "それじゃあ",
    "reading": "それじゃあ",
    "group": 7,
    "sourceRank": 1297
  },
  {
    "id": "jp2k-1282",
    "word": "っぽい",
    "reading": "っぽい",
    "group": 7,
    "sourceRank": 1298
  },
  {
    "id": "jp2k-1283",
    "word": "犬",
    "reading": "いぬ",
    "group": 7,
    "sourceRank": 1299
  },
  {
    "id": "jp2k-1284",
    "word": "熱",
    "reading": "ねつ",
    "group": 7,
    "sourceRank": 1300
  },
  {
    "id": "jp2k-1285",
    "word": "握る",
    "reading": "にぎる",
    "group": 7,
    "sourceRank": 1301
  },
  {
    "id": "jp2k-1286",
    "word": "ことがない",
    "reading": "ことがない",
    "group": 7,
    "sourceRank": 1302
  },
  {
    "id": "jp2k-1287",
    "word": "できれば",
    "reading": "できれば",
    "group": 7,
    "sourceRank": 1303
  },
  {
    "id": "jp2k-1288",
    "word": "付き合う",
    "reading": "つきあう",
    "group": 7,
    "sourceRank": 1304
  },
  {
    "id": "jp2k-1289",
    "word": "ほんと",
    "reading": "ほんと",
    "group": 7,
    "sourceRank": 1305
  },
  {
    "id": "jp2k-1290",
    "word": "火",
    "reading": "ひ",
    "group": 7,
    "sourceRank": 1306
  },
  {
    "id": "jp2k-1291",
    "word": "罪",
    "reading": "つみ",
    "group": 7,
    "sourceRank": 1307
  },
  {
    "id": "jp2k-1292",
    "word": "タイミング",
    "reading": "タイミング",
    "group": 7,
    "sourceRank": 1308
  },
  {
    "id": "jp2k-1293",
    "word": "会社",
    "reading": "かいしゃ",
    "group": 7,
    "sourceRank": 1309
  },
  {
    "id": "jp2k-1294",
    "word": "撮る",
    "reading": "とる",
    "group": 7,
    "sourceRank": 1310
  },
  {
    "id": "jp2k-1295",
    "word": "日々",
    "reading": "ひび",
    "group": 7,
    "sourceRank": 1311
  },
  {
    "id": "jp2k-1296",
    "word": "ねぇ",
    "reading": "ねぇ",
    "group": 7,
    "sourceRank": 1312
  },
  {
    "id": "jp2k-1297",
    "word": "とっても",
    "reading": "とっても",
    "group": 7,
    "sourceRank": 1313
  },
  {
    "id": "jp2k-1298",
    "word": "例えば",
    "reading": "たとえば",
    "group": 7,
    "sourceRank": 1314
  },
  {
    "id": "jp2k-1299",
    "word": "たぶん",
    "reading": "たぶん",
    "group": 7,
    "sourceRank": 1315
  },
  {
    "id": "jp2k-1300",
    "word": "裏切る",
    "reading": "うらぎる",
    "group": 7,
    "sourceRank": 1316
  },
  {
    "id": "jp2k-1301",
    "word": "際",
    "reading": "さい",
    "group": 7,
    "sourceRank": 1317
  },
  {
    "id": "jp2k-1302",
    "word": "だいぶ",
    "reading": "だいぶ",
    "group": 7,
    "sourceRank": 1318
  },
  {
    "id": "jp2k-1303",
    "word": "うわー",
    "reading": "うわー",
    "group": 7,
    "sourceRank": 1319
  },
  {
    "id": "jp2k-1304",
    "word": "内",
    "reading": "ない",
    "group": 7,
    "sourceRank": 1320
  },
  {
    "id": "jp2k-1305",
    "word": "一切",
    "reading": "いっさい",
    "group": 7,
    "sourceRank": 1321
  },
  {
    "id": "jp2k-1306",
    "word": "窓",
    "reading": "まど",
    "group": 7,
    "sourceRank": 1322
  },
  {
    "id": "jp2k-1307",
    "word": "文句",
    "reading": "もんく",
    "group": 7,
    "sourceRank": 1323
  },
  {
    "id": "jp2k-1308",
    "word": "というか",
    "reading": "というか",
    "group": 7,
    "sourceRank": 1324
  },
  {
    "id": "jp2k-1309",
    "word": "右",
    "reading": "みぎ",
    "group": 7,
    "sourceRank": 1325
  },
  {
    "id": "jp2k-1310",
    "word": "洗う",
    "reading": "あらう",
    "group": 7,
    "sourceRank": 1326
  },
  {
    "id": "jp2k-1311",
    "word": "流れ",
    "reading": "ながれ",
    "group": 7,
    "sourceRank": 1328
  },
  {
    "id": "jp2k-1312",
    "word": "振る",
    "reading": "ふる",
    "group": 7,
    "sourceRank": 1329
  },
  {
    "id": "jp2k-1313",
    "word": "わざと",
    "reading": "わざと",
    "group": 7,
    "sourceRank": 1331
  },
  {
    "id": "jp2k-1314",
    "word": "多分",
    "reading": "たぶん",
    "group": 7,
    "sourceRank": 1332
  },
  {
    "id": "jp2k-1315",
    "word": "とも",
    "reading": "とも",
    "group": 7,
    "sourceRank": 1333
  },
  {
    "id": "jp2k-1316",
    "word": "おはようございます",
    "reading": "おはようございます",
    "group": 7,
    "sourceRank": 1334
  },
  {
    "id": "jp2k-1317",
    "word": "殴る",
    "reading": "なぐる",
    "group": 7,
    "sourceRank": 1335
  },
  {
    "id": "jp2k-1318",
    "word": "月",
    "reading": "つき",
    "group": 7,
    "sourceRank": 1336
  },
  {
    "id": "jp2k-1319",
    "word": "捕まえる",
    "reading": "つかまえる",
    "group": 7,
    "sourceRank": 1337
  },
  {
    "id": "jp2k-1320",
    "word": "腰",
    "reading": "こし",
    "group": 7,
    "sourceRank": 1338
  },
  {
    "id": "jp2k-1321",
    "word": "悔しい",
    "reading": "くやしい",
    "group": 7,
    "sourceRank": 1339
  },
  {
    "id": "jp2k-1322",
    "word": "いやあ",
    "reading": "いやあ",
    "group": 7,
    "sourceRank": 1340
  },
  {
    "id": "jp2k-1323",
    "word": "へと",
    "reading": "へと",
    "group": 7,
    "sourceRank": 1341
  },
  {
    "id": "jp2k-1324",
    "word": "あんなに",
    "reading": "あんなに",
    "group": 7,
    "sourceRank": 1342
  },
  {
    "id": "jp2k-1325",
    "word": "部",
    "reading": "ぶ",
    "group": 7,
    "sourceRank": 1343
  },
  {
    "id": "jp2k-1326",
    "word": "感覚",
    "reading": "かんかく",
    "group": 7,
    "sourceRank": 1344
  },
  {
    "id": "jp2k-1327",
    "word": "町",
    "reading": "まち",
    "group": 7,
    "sourceRank": 1345
  },
  {
    "id": "jp2k-1328",
    "word": "傷つける",
    "reading": "きずつける",
    "group": 7,
    "sourceRank": 1346
  },
  {
    "id": "jp2k-1329",
    "word": "人物",
    "reading": "じんぶつ",
    "group": 7,
    "sourceRank": 1347
  },
  {
    "id": "jp2k-1330",
    "word": "出かける",
    "reading": "でかける",
    "group": 7,
    "sourceRank": 1348
  },
  {
    "id": "jp2k-1331",
    "word": "早速",
    "reading": "さっそく",
    "group": 7,
    "sourceRank": 1349
  },
  {
    "id": "jp2k-1332",
    "word": "通じる",
    "reading": "つうじる",
    "group": 7,
    "sourceRank": 1350
  },
  {
    "id": "jp2k-1333",
    "word": "星",
    "reading": "ほし",
    "group": 7,
    "sourceRank": 1351
  },
  {
    "id": "jp2k-1334",
    "word": "性格",
    "reading": "せいかく",
    "group": 7,
    "sourceRank": 1352
  },
  {
    "id": "jp2k-1335",
    "word": "攻撃",
    "reading": "こうげき",
    "group": 7,
    "sourceRank": 1353
  },
  {
    "id": "jp2k-1336",
    "word": "やら",
    "reading": "やら",
    "group": 7,
    "sourceRank": 1354
  },
  {
    "id": "jp2k-1337",
    "word": "広がる",
    "reading": "ひろがる",
    "group": 7,
    "sourceRank": 1355
  },
  {
    "id": "jp2k-1338",
    "word": "三",
    "reading": "さん",
    "group": 7,
    "sourceRank": 1356
  },
  {
    "id": "jp2k-1339",
    "word": "こんなに",
    "reading": "こんなに",
    "group": 7,
    "sourceRank": 1357
  },
  {
    "id": "jp2k-1340",
    "word": "二",
    "reading": "に",
    "group": 7,
    "sourceRank": 1358
  },
  {
    "id": "jp2k-1341",
    "word": "支える",
    "reading": "ささえる",
    "group": 7,
    "sourceRank": 1359
  },
  {
    "id": "jp2k-1342",
    "word": "方向",
    "reading": "ほうこう",
    "group": 7,
    "sourceRank": 1360
  },
  {
    "id": "jp2k-1343",
    "word": "戦い",
    "reading": "たたかい",
    "group": 7,
    "sourceRank": 1361
  },
  {
    "id": "jp2k-1344",
    "word": "追いかける",
    "reading": "おいかける",
    "group": 7,
    "sourceRank": 1362
  },
  {
    "id": "jp2k-1345",
    "word": "示す",
    "reading": "しめす",
    "group": 7,
    "sourceRank": 1363
  },
  {
    "id": "jp2k-1346",
    "word": "というもの",
    "reading": "というもの",
    "group": 7,
    "sourceRank": 1364
  },
  {
    "id": "jp2k-1347",
    "word": "以来",
    "reading": "いらい",
    "group": 7,
    "sourceRank": 1365
  },
  {
    "id": "jp2k-1348",
    "word": "もともと",
    "reading": "もともと",
    "group": 7,
    "sourceRank": 1366
  },
  {
    "id": "jp2k-1349",
    "word": "１つ",
    "reading": "ひとつ",
    "group": 7,
    "sourceRank": 1367
  },
  {
    "id": "jp2k-1350",
    "word": "扉",
    "reading": "とびら",
    "group": 7,
    "sourceRank": 1368
  },
  {
    "id": "jp2k-1351",
    "word": "勢い",
    "reading": "いきおい",
    "group": 7,
    "sourceRank": 1369
  },
  {
    "id": "jp2k-1352",
    "word": "役",
    "reading": "やく",
    "group": 7,
    "sourceRank": 1370
  },
  {
    "id": "jp2k-1353",
    "word": "時期",
    "reading": "じき",
    "group": 7,
    "sourceRank": 1371
  },
  {
    "id": "jp2k-1354",
    "word": "条件",
    "reading": "じょうけん",
    "group": 7,
    "sourceRank": 1372
  },
  {
    "id": "jp2k-1355",
    "word": "お世話になる",
    "reading": "おせわになる",
    "group": 7,
    "sourceRank": 1373
  },
  {
    "id": "jp2k-1356",
    "word": "なのだ",
    "reading": "なのだ",
    "group": 7,
    "sourceRank": 1374
  },
  {
    "id": "jp2k-1357",
    "word": "ヤツ",
    "reading": "ヤツ",
    "group": 7,
    "sourceRank": 1375
  },
  {
    "id": "jp2k-1358",
    "word": "一日",
    "reading": "いちにち",
    "group": 7,
    "sourceRank": 1376
  },
  {
    "id": "jp2k-1359",
    "word": "変化",
    "reading": "へんか",
    "group": 7,
    "sourceRank": 1377
  },
  {
    "id": "jp2k-1360",
    "word": "だろうか",
    "reading": "だろうか",
    "group": 7,
    "sourceRank": 1378
  },
  {
    "id": "jp2k-1361",
    "word": "ちなみに",
    "reading": "ちなみに",
    "group": 7,
    "sourceRank": 1379
  },
  {
    "id": "jp2k-1362",
    "word": "ただし",
    "reading": "ただし",
    "group": 7,
    "sourceRank": 1380
  },
  {
    "id": "jp2k-1363",
    "word": "吸う",
    "reading": "すう",
    "group": 7,
    "sourceRank": 1381
  },
  {
    "id": "jp2k-1364",
    "word": "注意",
    "reading": "ちゅうい",
    "group": 7,
    "sourceRank": 1382
  },
  {
    "id": "jp2k-1365",
    "word": "あのね",
    "reading": "あのね",
    "group": 7,
    "sourceRank": 1383
  },
  {
    "id": "jp2k-1366",
    "word": "否定",
    "reading": "ひてい",
    "group": 7,
    "sourceRank": 1384
  },
  {
    "id": "jp2k-1367",
    "word": "そんなもの",
    "reading": "そんなもの",
    "group": 7,
    "sourceRank": 1385
  },
  {
    "id": "jp2k-1368",
    "word": "じっと",
    "reading": "じっと",
    "group": 7,
    "sourceRank": 1386
  },
  {
    "id": "jp2k-1369",
    "word": "必要ない",
    "reading": "ひつようない",
    "group": 7,
    "sourceRank": 1387
  },
  {
    "id": "jp2k-1370",
    "word": "野郎",
    "reading": "やろう",
    "group": 7,
    "sourceRank": 1388
  },
  {
    "id": "jp2k-1371",
    "word": "夏",
    "reading": "なつ",
    "group": 7,
    "sourceRank": 1389
  },
  {
    "id": "jp2k-1372",
    "word": "反対",
    "reading": "はんたい",
    "group": 7,
    "sourceRank": 1390
  },
  {
    "id": "jp2k-1373",
    "word": "計画",
    "reading": "けいかく",
    "group": 7,
    "sourceRank": 1391
  },
  {
    "id": "jp2k-1374",
    "word": "やあ",
    "reading": "やあ",
    "group": 7,
    "sourceRank": 1392
  },
  {
    "id": "jp2k-1375",
    "word": "おっと",
    "reading": "おっと",
    "group": 7,
    "sourceRank": 1393
  },
  {
    "id": "jp2k-1376",
    "word": "限り",
    "reading": "かぎり",
    "group": 7,
    "sourceRank": 1394
  },
  {
    "id": "jp2k-1377",
    "word": "っす",
    "reading": "っす",
    "group": 7,
    "sourceRank": 1395
  },
  {
    "id": "jp2k-1378",
    "word": "当時",
    "reading": "とうじ",
    "group": 7,
    "sourceRank": 1396
  },
  {
    "id": "jp2k-1379",
    "word": "後で",
    "reading": "あとで",
    "group": 7,
    "sourceRank": 1397
  },
  {
    "id": "jp2k-1380",
    "word": "大体",
    "reading": "だいたい",
    "group": 7,
    "sourceRank": 1398
  },
  {
    "id": "jp2k-1381",
    "word": "乗せる",
    "reading": "のせる",
    "group": 7,
    "sourceRank": 1399
  },
  {
    "id": "jp2k-1382",
    "word": "嬉しい",
    "reading": "うれしい",
    "group": 7,
    "sourceRank": 1400
  },
  {
    "id": "jp2k-1383",
    "word": "友人",
    "reading": "ゆうじん",
    "group": 7,
    "sourceRank": 1401
  },
  {
    "id": "jp2k-1384",
    "word": "了解",
    "reading": "りょうかい",
    "group": 7,
    "sourceRank": 1402
  },
  {
    "id": "jp2k-1385",
    "word": "見事",
    "reading": "みごと",
    "group": 7,
    "sourceRank": 1403
  },
  {
    "id": "jp2k-1386",
    "word": "びっくり",
    "reading": "びっくり",
    "group": 7,
    "sourceRank": 1404
  },
  {
    "id": "jp2k-1387",
    "word": "病気",
    "reading": "びょうき",
    "group": 7,
    "sourceRank": 1405
  },
  {
    "id": "jp2k-1388",
    "word": "はずです",
    "reading": "はずです",
    "group": 7,
    "sourceRank": 1406
  },
  {
    "id": "jp2k-1389",
    "word": "着替える",
    "reading": "きがえる",
    "group": 7,
    "sourceRank": 1407
  },
  {
    "id": "jp2k-1390",
    "word": "唯一",
    "reading": "ゆいいつ",
    "group": 7,
    "sourceRank": 1408
  },
  {
    "id": "jp2k-1391",
    "word": "黒い",
    "reading": "くろい",
    "group": 7,
    "sourceRank": 1409
  },
  {
    "id": "jp2k-1392",
    "word": "常に",
    "reading": "つねに",
    "group": 7,
    "sourceRank": 1410
  },
  {
    "id": "jp2k-1393",
    "word": "本来",
    "reading": "ほんらい",
    "group": 7,
    "sourceRank": 1411
  },
  {
    "id": "jp2k-1394",
    "word": "命令",
    "reading": "めいれい",
    "group": 7,
    "sourceRank": 1412
  },
  {
    "id": "jp2k-1395",
    "word": "限る",
    "reading": "かぎる",
    "group": 7,
    "sourceRank": 1413
  },
  {
    "id": "jp2k-1396",
    "word": "ふん",
    "reading": "ふん",
    "group": 7,
    "sourceRank": 1414
  },
  {
    "id": "jp2k-1397",
    "word": "薬",
    "reading": "くすり",
    "group": 7,
    "sourceRank": 1415
  },
  {
    "id": "jp2k-1398",
    "word": "完成",
    "reading": "かんせい",
    "group": 7,
    "sourceRank": 1416
  },
  {
    "id": "jp2k-1399",
    "word": "たる",
    "reading": "たる",
    "group": 7,
    "sourceRank": 1417
  },
  {
    "id": "jp2k-1400",
    "word": "逆",
    "reading": "ぎゃく",
    "group": 7,
    "sourceRank": 1418
  },
  {
    "id": "jp2k-1401",
    "word": "仲良く",
    "reading": "なかよく",
    "group": 8,
    "sourceRank": 1419
  },
  {
    "id": "jp2k-1402",
    "word": "恋人",
    "reading": "こいびと",
    "group": 8,
    "sourceRank": 1420
  },
  {
    "id": "jp2k-1403",
    "word": "おめでとう",
    "reading": "おめでとう",
    "group": 8,
    "sourceRank": 1421
  },
  {
    "id": "jp2k-1404",
    "word": "何とか",
    "reading": "なんとか",
    "group": 8,
    "sourceRank": 1422
  },
  {
    "id": "jp2k-1405",
    "word": "人々",
    "reading": "ひとびと",
    "group": 8,
    "sourceRank": 1423
  },
  {
    "id": "jp2k-1406",
    "word": "仲",
    "reading": "なか",
    "group": 8,
    "sourceRank": 1424
  },
  {
    "id": "jp2k-1407",
    "word": "少女",
    "reading": "しょうじょ",
    "group": 8,
    "sourceRank": 1425
  },
  {
    "id": "jp2k-1408",
    "word": "ゲーム",
    "reading": "ゲーム",
    "group": 8,
    "sourceRank": 1426
  },
  {
    "id": "jp2k-1409",
    "word": "扱い",
    "reading": "あつかい",
    "group": 8,
    "sourceRank": 1427
  },
  {
    "id": "jp2k-1410",
    "word": "酒",
    "reading": "さけ",
    "group": 8,
    "sourceRank": 1428
  },
  {
    "id": "jp2k-1411",
    "word": "随分",
    "reading": "ずいぶん",
    "group": 8,
    "sourceRank": 1429
  },
  {
    "id": "jp2k-1412",
    "word": "とおり",
    "reading": "とおり",
    "group": 8,
    "sourceRank": 1430
  },
  {
    "id": "jp2k-1413",
    "word": "中身",
    "reading": "なかみ",
    "group": 8,
    "sourceRank": 1431
  },
  {
    "id": "jp2k-1414",
    "word": "あああ",
    "reading": "あああ",
    "group": 8,
    "sourceRank": 1432
  },
  {
    "id": "jp2k-1415",
    "word": "やり方",
    "reading": "やりかた",
    "group": 8,
    "sourceRank": 1433
  },
  {
    "id": "jp2k-1416",
    "word": "亡くなる",
    "reading": "なくなる",
    "group": 8,
    "sourceRank": 1434
  },
  {
    "id": "jp2k-1417",
    "word": "能力",
    "reading": "のうりょく",
    "group": 8,
    "sourceRank": 1435
  },
  {
    "id": "jp2k-1418",
    "word": "誤解",
    "reading": "ごかい",
    "group": 8,
    "sourceRank": 1436
  },
  {
    "id": "jp2k-1419",
    "word": "価値",
    "reading": "かち",
    "group": 8,
    "sourceRank": 1437
  },
  {
    "id": "jp2k-1420",
    "word": "大学",
    "reading": "だいがく",
    "group": 8,
    "sourceRank": 1438
  },
  {
    "id": "jp2k-1421",
    "word": "っていうか",
    "reading": "っていうか",
    "group": 8,
    "sourceRank": 1439
  },
  {
    "id": "jp2k-1422",
    "word": "左",
    "reading": "ひだり",
    "group": 8,
    "sourceRank": 1440
  },
  {
    "id": "jp2k-1423",
    "word": "回",
    "reading": "かい",
    "group": 8,
    "sourceRank": 1441
  },
  {
    "id": "jp2k-1424",
    "word": "開始",
    "reading": "かいし",
    "group": 8,
    "sourceRank": 1442
  },
  {
    "id": "jp2k-1425",
    "word": "少なくとも",
    "reading": "すくなくとも",
    "group": 8,
    "sourceRank": 1443
  },
  {
    "id": "jp2k-1426",
    "word": "両親",
    "reading": "りょうしん",
    "group": 8,
    "sourceRank": 1444
  },
  {
    "id": "jp2k-1427",
    "word": "たまたま",
    "reading": "たまたま",
    "group": 8,
    "sourceRank": 1445
  },
  {
    "id": "jp2k-1428",
    "word": "時",
    "reading": "じ",
    "group": 8,
    "sourceRank": 1446
  },
  {
    "id": "jp2k-1429",
    "word": "匂い",
    "reading": "におい",
    "group": 8,
    "sourceRank": 1447
  },
  {
    "id": "jp2k-1430",
    "word": "助け",
    "reading": "たすけ",
    "group": 8,
    "sourceRank": 1448
  },
  {
    "id": "jp2k-1431",
    "word": "つかむ",
    "reading": "つかむ",
    "group": 8,
    "sourceRank": 1449
  },
  {
    "id": "jp2k-1432",
    "word": "掃除",
    "reading": "そうじ",
    "group": 8,
    "sourceRank": 1450
  },
  {
    "id": "jp2k-1433",
    "word": "預かる",
    "reading": "あずかる",
    "group": 8,
    "sourceRank": 1451
  },
  {
    "id": "jp2k-1434",
    "word": "そのもの",
    "reading": "そのもの",
    "group": 8,
    "sourceRank": 1452
  },
  {
    "id": "jp2k-1435",
    "word": "奴",
    "reading": "やつ",
    "group": 8,
    "sourceRank": 1453
  },
  {
    "id": "jp2k-1436",
    "word": "もらえる",
    "reading": "もらえる",
    "group": 8,
    "sourceRank": 1454
  },
  {
    "id": "jp2k-1437",
    "word": "届ける",
    "reading": "とどける",
    "group": 8,
    "sourceRank": 1455
  },
  {
    "id": "jp2k-1438",
    "word": "先ほど",
    "reading": "さきほど",
    "group": 8,
    "sourceRank": 1456
  },
  {
    "id": "jp2k-1439",
    "word": "よーし",
    "reading": "よーし",
    "group": 8,
    "sourceRank": 1457
  },
  {
    "id": "jp2k-1440",
    "word": "噂",
    "reading": "うわさ",
    "group": 8,
    "sourceRank": 1458
  },
  {
    "id": "jp2k-1441",
    "word": "人気",
    "reading": "にんき",
    "group": 8,
    "sourceRank": 1459
  },
  {
    "id": "jp2k-1442",
    "word": "ほぼ",
    "reading": "ほぼ",
    "group": 8,
    "sourceRank": 1460
  },
  {
    "id": "jp2k-1443",
    "word": "それに",
    "reading": "それに",
    "group": 8,
    "sourceRank": 1461
  },
  {
    "id": "jp2k-1444",
    "word": "怒り",
    "reading": "いかり",
    "group": 8,
    "sourceRank": 1462
  },
  {
    "id": "jp2k-1445",
    "word": "まとも",
    "reading": "まとも",
    "group": 8,
    "sourceRank": 1463
  },
  {
    "id": "jp2k-1446",
    "word": "当てる",
    "reading": "あてる",
    "group": 8,
    "sourceRank": 1464
  },
  {
    "id": "jp2k-1447",
    "word": "木",
    "reading": "き",
    "group": 8,
    "sourceRank": 1465
  },
  {
    "id": "jp2k-1448",
    "word": "おっしゃる",
    "reading": "おっしゃる",
    "group": 8,
    "sourceRank": 1466
  },
  {
    "id": "jp2k-1449",
    "word": "方がいい",
    "reading": "ほうがいい",
    "group": 8,
    "sourceRank": 1467
  },
  {
    "id": "jp2k-1450",
    "word": "鳴る",
    "reading": "なる",
    "group": 8,
    "sourceRank": 1468
  },
  {
    "id": "jp2k-1451",
    "word": "レベル",
    "reading": "レベル",
    "group": 8,
    "sourceRank": 1469
  },
  {
    "id": "jp2k-1452",
    "word": "終える",
    "reading": "おえる",
    "group": 8,
    "sourceRank": 1470
  },
  {
    "id": "jp2k-1453",
    "word": "震える",
    "reading": "ふるえる",
    "group": 8,
    "sourceRank": 1471
  },
  {
    "id": "jp2k-1454",
    "word": "違い",
    "reading": "ちがい",
    "group": 8,
    "sourceRank": 1472
  },
  {
    "id": "jp2k-1455",
    "word": "案内",
    "reading": "あんない",
    "group": 8,
    "sourceRank": 1473
  },
  {
    "id": "jp2k-1456",
    "word": "金",
    "reading": "きん",
    "group": 8,
    "sourceRank": 1474
  },
  {
    "id": "jp2k-1457",
    "word": "問題ない",
    "reading": "もんだいない",
    "group": 8,
    "sourceRank": 1475
  },
  {
    "id": "jp2k-1458",
    "word": "横",
    "reading": "よこ",
    "group": 8,
    "sourceRank": 1476
  },
  {
    "id": "jp2k-1459",
    "word": "事故",
    "reading": "じこ",
    "group": 8,
    "sourceRank": 1477
  },
  {
    "id": "jp2k-1460",
    "word": "役に立つ",
    "reading": "やくにたつ",
    "group": 8,
    "sourceRank": 1478
  },
  {
    "id": "jp2k-1461",
    "word": "申し訳ありません",
    "reading": "もうしわけありません",
    "group": 8,
    "sourceRank": 1479
  },
  {
    "id": "jp2k-1462",
    "word": "上",
    "reading": "じょう",
    "group": 8,
    "sourceRank": 1480
  },
  {
    "id": "jp2k-1463",
    "word": "ちょうだい",
    "reading": "ちょうだい",
    "group": 8,
    "sourceRank": 1481
  },
  {
    "id": "jp2k-1464",
    "word": "謎",
    "reading": "なぞ",
    "group": 8,
    "sourceRank": 1482
  },
  {
    "id": "jp2k-1465",
    "word": "扱う",
    "reading": "あつかう",
    "group": 8,
    "sourceRank": 1483
  },
  {
    "id": "jp2k-1466",
    "word": "去る",
    "reading": "さる",
    "group": 8,
    "sourceRank": 1484
  },
  {
    "id": "jp2k-1467",
    "word": "真剣",
    "reading": "しんけん",
    "group": 8,
    "sourceRank": 1485
  },
  {
    "id": "jp2k-1468",
    "word": "ごと",
    "reading": "ごと",
    "group": 8,
    "sourceRank": 1486
  },
  {
    "id": "jp2k-1469",
    "word": "め",
    "reading": "め",
    "group": 8,
    "sourceRank": 1487
  },
  {
    "id": "jp2k-1470",
    "word": "騒ぐ",
    "reading": "さわぐ",
    "group": 8,
    "sourceRank": 1488
  },
  {
    "id": "jp2k-1471",
    "word": "目立つ",
    "reading": "めだつ",
    "group": 8,
    "sourceRank": 1489
  },
  {
    "id": "jp2k-1472",
    "word": "叫ぶ",
    "reading": "さけぶ",
    "group": 8,
    "sourceRank": 1490
  },
  {
    "id": "jp2k-1473",
    "word": "明らか",
    "reading": "あきらか",
    "group": 8,
    "sourceRank": 1491
  },
  {
    "id": "jp2k-1474",
    "word": "第一",
    "reading": "だいいち",
    "group": 8,
    "sourceRank": 1492
  },
  {
    "id": "jp2k-1475",
    "word": "クラス",
    "reading": "クラス",
    "group": 8,
    "sourceRank": 1493
  },
  {
    "id": "jp2k-1476",
    "word": "現場",
    "reading": "げんば",
    "group": 8,
    "sourceRank": 1494
  },
  {
    "id": "jp2k-1477",
    "word": "捕まる",
    "reading": "つかまる",
    "group": 8,
    "sourceRank": 1495
  },
  {
    "id": "jp2k-1478",
    "word": "痛み",
    "reading": "いたみ",
    "group": 8,
    "sourceRank": 1496
  },
  {
    "id": "jp2k-1479",
    "word": "かって",
    "reading": "かって",
    "group": 8,
    "sourceRank": 1497
  },
  {
    "id": "jp2k-1480",
    "word": "作戦",
    "reading": "さくせん",
    "group": 8,
    "sourceRank": 1498
  },
  {
    "id": "jp2k-1481",
    "word": "いずれ",
    "reading": "いずれ",
    "group": 8,
    "sourceRank": 1499
  },
  {
    "id": "jp2k-1482",
    "word": "ベッド",
    "reading": "ベッド",
    "group": 8,
    "sourceRank": 1500
  },
  {
    "id": "jp2k-1483",
    "word": "待たせる",
    "reading": "またせる",
    "group": 8,
    "sourceRank": 1501
  },
  {
    "id": "jp2k-1484",
    "word": "ついでに",
    "reading": "ついでに",
    "group": 8,
    "sourceRank": 1502
  },
  {
    "id": "jp2k-1485",
    "word": "信じられない",
    "reading": "しんじられない",
    "group": 8,
    "sourceRank": 1503
  },
  {
    "id": "jp2k-1486",
    "word": "イメージ",
    "reading": "イメージ",
    "group": 8,
    "sourceRank": 1504
  },
  {
    "id": "jp2k-1487",
    "word": "数",
    "reading": "すう",
    "group": 8,
    "sourceRank": 1505
  },
  {
    "id": "jp2k-1488",
    "word": "焼く",
    "reading": "やく",
    "group": 8,
    "sourceRank": 1506
  },
  {
    "id": "jp2k-1489",
    "word": "狭い",
    "reading": "せまい",
    "group": 8,
    "sourceRank": 1507
  },
  {
    "id": "jp2k-1490",
    "word": "具合",
    "reading": "ぐあい",
    "group": 8,
    "sourceRank": 1508
  },
  {
    "id": "jp2k-1491",
    "word": "いいぞ",
    "reading": "いいぞ",
    "group": 8,
    "sourceRank": 1509
  },
  {
    "id": "jp2k-1492",
    "word": "位置",
    "reading": "いち",
    "group": 8,
    "sourceRank": 1510
  },
  {
    "id": "jp2k-1493",
    "word": "今も",
    "reading": "いまも",
    "group": 8,
    "sourceRank": 1511
  },
  {
    "id": "jp2k-1494",
    "word": "おいで",
    "reading": "おいで",
    "group": 8,
    "sourceRank": 1512
  },
  {
    "id": "jp2k-1495",
    "word": "もはや",
    "reading": "もはや",
    "group": 8,
    "sourceRank": 1513
  },
  {
    "id": "jp2k-1496",
    "word": "にしても",
    "reading": "にしても",
    "group": 8,
    "sourceRank": 1514
  },
  {
    "id": "jp2k-1497",
    "word": "量",
    "reading": "りょう",
    "group": 8,
    "sourceRank": 1515
  },
  {
    "id": "jp2k-1498",
    "word": "困った",
    "reading": "こまった",
    "group": 8,
    "sourceRank": 1516
  },
  {
    "id": "jp2k-1499",
    "word": "ほんの",
    "reading": "ほんの",
    "group": 8,
    "sourceRank": 1517
  },
  {
    "id": "jp2k-1500",
    "word": "効く",
    "reading": "きく",
    "group": 8,
    "sourceRank": 1518
  },
  {
    "id": "jp2k-1501",
    "word": "正解",
    "reading": "せいかい",
    "group": 8,
    "sourceRank": 1519
  },
  {
    "id": "jp2k-1502",
    "word": "ぶり",
    "reading": "ぶり",
    "group": 8,
    "sourceRank": 1520
  },
  {
    "id": "jp2k-1503",
    "word": "安全",
    "reading": "あんぜん",
    "group": 8,
    "sourceRank": 1521
  },
  {
    "id": "jp2k-1504",
    "word": "手紙",
    "reading": "てがみ",
    "group": 8,
    "sourceRank": 1522
  },
  {
    "id": "jp2k-1505",
    "word": "好きになる",
    "reading": "すきになる",
    "group": 8,
    "sourceRank": 1523
  },
  {
    "id": "jp2k-1506",
    "word": "迫る",
    "reading": "せまる",
    "group": 8,
    "sourceRank": 1524
  },
  {
    "id": "jp2k-1507",
    "word": "話せる",
    "reading": "はなせる",
    "group": 8,
    "sourceRank": 1525
  },
  {
    "id": "jp2k-1508",
    "word": "指示",
    "reading": "しじ",
    "group": 8,
    "sourceRank": 1526
  },
  {
    "id": "jp2k-1509",
    "word": "猫",
    "reading": "ねこ",
    "group": 8,
    "sourceRank": 1527
  },
  {
    "id": "jp2k-1510",
    "word": "真実",
    "reading": "しんじつ",
    "group": 8,
    "sourceRank": 1528
  },
  {
    "id": "jp2k-1511",
    "word": "輝く",
    "reading": "かがやく",
    "group": 8,
    "sourceRank": 1529
  },
  {
    "id": "jp2k-1512",
    "word": "呼び出す",
    "reading": "よびだす",
    "group": 8,
    "sourceRank": 1530
  },
  {
    "id": "jp2k-1513",
    "word": "正体",
    "reading": "しょうたい",
    "group": 8,
    "sourceRank": 1531
  },
  {
    "id": "jp2k-1514",
    "word": "しようとする",
    "reading": "しようとする",
    "group": 8,
    "sourceRank": 1532
  },
  {
    "id": "jp2k-1515",
    "word": "空く",
    "reading": "あく",
    "group": 8,
    "sourceRank": 1533
  },
  {
    "id": "jp2k-1516",
    "word": "テレビ",
    "reading": "テレビ",
    "group": 8,
    "sourceRank": 1534
  },
  {
    "id": "jp2k-1517",
    "word": "もったいない",
    "reading": "もったいない",
    "group": 8,
    "sourceRank": 1535
  },
  {
    "id": "jp2k-1518",
    "word": "下手",
    "reading": "へた",
    "group": 8,
    "sourceRank": 1536
  },
  {
    "id": "jp2k-1519",
    "word": "続き",
    "reading": "つづき",
    "group": 8,
    "sourceRank": 1537
  },
  {
    "id": "jp2k-1520",
    "word": "わけではない",
    "reading": "わけではない",
    "group": 8,
    "sourceRank": 1538
  },
  {
    "id": "jp2k-1521",
    "word": "今朝",
    "reading": "けさ",
    "group": 8,
    "sourceRank": 1539
  },
  {
    "id": "jp2k-1522",
    "word": "なお",
    "reading": "なお",
    "group": 8,
    "sourceRank": 1540
  },
  {
    "id": "jp2k-1523",
    "word": "情けない",
    "reading": "なさけない",
    "group": 8,
    "sourceRank": 1541
  },
  {
    "id": "jp2k-1524",
    "word": "何年",
    "reading": "なんねん",
    "group": 8,
    "sourceRank": 1543
  },
  {
    "id": "jp2k-1525",
    "word": "思いつく",
    "reading": "おもいつく",
    "group": 8,
    "sourceRank": 1544
  },
  {
    "id": "jp2k-1526",
    "word": "可能",
    "reading": "かのう",
    "group": 8,
    "sourceRank": 1545
  },
  {
    "id": "jp2k-1527",
    "word": "かつて",
    "reading": "かつて",
    "group": 8,
    "sourceRank": 1546
  },
  {
    "id": "jp2k-1528",
    "word": "恋",
    "reading": "こい",
    "group": 8,
    "sourceRank": 1547
  },
  {
    "id": "jp2k-1529",
    "word": "将来",
    "reading": "しょうらい",
    "group": 8,
    "sourceRank": 1548
  },
  {
    "id": "jp2k-1530",
    "word": "最低",
    "reading": "さいてい",
    "group": 8,
    "sourceRank": 1549
  },
  {
    "id": "jp2k-1531",
    "word": "許可",
    "reading": "きょか",
    "group": 8,
    "sourceRank": 1550
  },
  {
    "id": "jp2k-1532",
    "word": "どうしたん",
    "reading": "どうしたん",
    "group": 8,
    "sourceRank": 1551
  },
  {
    "id": "jp2k-1533",
    "word": "男の子",
    "reading": "おとこのこ",
    "group": 8,
    "sourceRank": 1552
  },
  {
    "id": "jp2k-1534",
    "word": "なぜか",
    "reading": "なぜか",
    "group": 8,
    "sourceRank": 1553
  },
  {
    "id": "jp2k-1535",
    "word": "育つ",
    "reading": "そだつ",
    "group": 8,
    "sourceRank": 1554
  },
  {
    "id": "jp2k-1536",
    "word": "信用",
    "reading": "しんよう",
    "group": 8,
    "sourceRank": 1555
  },
  {
    "id": "jp2k-1537",
    "word": "心臓",
    "reading": "しんぞう",
    "group": 8,
    "sourceRank": 1556
  },
  {
    "id": "jp2k-1538",
    "word": "分",
    "reading": "ふん",
    "group": 8,
    "sourceRank": 1557
  },
  {
    "id": "jp2k-1539",
    "word": "参る",
    "reading": "まいる",
    "group": 8,
    "sourceRank": 1558
  },
  {
    "id": "jp2k-1540",
    "word": "なければ",
    "reading": "なければ",
    "group": 8,
    "sourceRank": 1559
  },
  {
    "id": "jp2k-1541",
    "word": "ござる",
    "reading": "ござる",
    "group": 8,
    "sourceRank": 1560
  },
  {
    "id": "jp2k-1542",
    "word": "すべき",
    "reading": "すべき",
    "group": 8,
    "sourceRank": 1561
  },
  {
    "id": "jp2k-1543",
    "word": "味わう",
    "reading": "あじわう",
    "group": 8,
    "sourceRank": 1562
  },
  {
    "id": "jp2k-1544",
    "word": "到着",
    "reading": "とうちゃく",
    "group": 8,
    "sourceRank": 1563
  },
  {
    "id": "jp2k-1545",
    "word": "女子",
    "reading": "じょし",
    "group": 8,
    "sourceRank": 1564
  },
  {
    "id": "jp2k-1546",
    "word": "効果",
    "reading": "こうか",
    "group": 8,
    "sourceRank": 1565
  },
  {
    "id": "jp2k-1547",
    "word": "とっくに",
    "reading": "とっくに",
    "group": 8,
    "sourceRank": 1566
  },
  {
    "id": "jp2k-1548",
    "word": "次第",
    "reading": "しだい",
    "group": 8,
    "sourceRank": 1567
  },
  {
    "id": "jp2k-1549",
    "word": "ぶつかる",
    "reading": "ぶつかる",
    "group": 8,
    "sourceRank": 1568
  },
  {
    "id": "jp2k-1550",
    "word": "だらけ",
    "reading": "だらけ",
    "group": 8,
    "sourceRank": 1569
  },
  {
    "id": "jp2k-1551",
    "word": "張る",
    "reading": "はる",
    "group": 8,
    "sourceRank": 1570
  },
  {
    "id": "jp2k-1552",
    "word": "脱ぐ",
    "reading": "ぬぐ",
    "group": 8,
    "sourceRank": 1571
  },
  {
    "id": "jp2k-1553",
    "word": "解放",
    "reading": "かいほう",
    "group": 8,
    "sourceRank": 1572
  },
  {
    "id": "jp2k-1554",
    "word": "最も",
    "reading": "もっとも",
    "group": 8,
    "sourceRank": 1573
  },
  {
    "id": "jp2k-1555",
    "word": "訪れる",
    "reading": "おとずれる",
    "group": 8,
    "sourceRank": 1574
  },
  {
    "id": "jp2k-1556",
    "word": "どうかな",
    "reading": "どうかな",
    "group": 8,
    "sourceRank": 1575
  },
  {
    "id": "jp2k-1557",
    "word": "クソ",
    "reading": "クソ",
    "group": 8,
    "sourceRank": 1576
  },
  {
    "id": "jp2k-1558",
    "word": "普段",
    "reading": "ふだん",
    "group": 8,
    "sourceRank": 1577
  },
  {
    "id": "jp2k-1559",
    "word": "いくつ",
    "reading": "いくつ",
    "group": 8,
    "sourceRank": 1578
  },
  {
    "id": "jp2k-1560",
    "word": "引っ張る",
    "reading": "ひっぱる",
    "group": 8,
    "sourceRank": 1579
  },
  {
    "id": "jp2k-1561",
    "word": "安い",
    "reading": "やすい",
    "group": 8,
    "sourceRank": 1580
  },
  {
    "id": "jp2k-1562",
    "word": "組む",
    "reading": "くむ",
    "group": 8,
    "sourceRank": 1581
  },
  {
    "id": "jp2k-1563",
    "word": "吐く",
    "reading": "はく",
    "group": 8,
    "sourceRank": 1582
  },
  {
    "id": "jp2k-1564",
    "word": "構う",
    "reading": "かまう",
    "group": 8,
    "sourceRank": 1583
  },
  {
    "id": "jp2k-1565",
    "word": "作業",
    "reading": "さぎょう",
    "group": 8,
    "sourceRank": 1584
  },
  {
    "id": "jp2k-1566",
    "word": "何人",
    "reading": "なんにん",
    "group": 8,
    "sourceRank": 1585
  },
  {
    "id": "jp2k-1567",
    "word": "のように",
    "reading": "のように",
    "group": 8,
    "sourceRank": 1586
  },
  {
    "id": "jp2k-1568",
    "word": "苦しむ",
    "reading": "くるしむ",
    "group": 8,
    "sourceRank": 1587
  },
  {
    "id": "jp2k-1569",
    "word": "ずいぶん",
    "reading": "ずいぶん",
    "group": 8,
    "sourceRank": 1588
  },
  {
    "id": "jp2k-1570",
    "word": "単純",
    "reading": "たんじゅん",
    "group": 8,
    "sourceRank": 1589
  },
  {
    "id": "jp2k-1571",
    "word": "勇気",
    "reading": "ゆうき",
    "group": 8,
    "sourceRank": 1590
  },
  {
    "id": "jp2k-1572",
    "word": "妻",
    "reading": "つま",
    "group": 8,
    "sourceRank": 1591
  },
  {
    "id": "jp2k-1573",
    "word": "トイレ",
    "reading": "トイレ",
    "group": 8,
    "sourceRank": 1592
  },
  {
    "id": "jp2k-1574",
    "word": "辞める",
    "reading": "やめる",
    "group": 8,
    "sourceRank": 1593
  },
  {
    "id": "jp2k-1575",
    "word": "ウソ",
    "reading": "ウソ",
    "group": 8,
    "sourceRank": 1594
  },
  {
    "id": "jp2k-1576",
    "word": "その中",
    "reading": "そのなか",
    "group": 8,
    "sourceRank": 1595
  },
  {
    "id": "jp2k-1577",
    "word": "見つめる",
    "reading": "みつめる",
    "group": 8,
    "sourceRank": 1596
  },
  {
    "id": "jp2k-1578",
    "word": "歌う",
    "reading": "うたう",
    "group": 8,
    "sourceRank": 1597
  },
  {
    "id": "jp2k-1579",
    "word": "全",
    "reading": "ぜん",
    "group": 8,
    "sourceRank": 1598
  },
  {
    "id": "jp2k-1580",
    "word": "付ける",
    "reading": "つける",
    "group": 8,
    "sourceRank": 1599
  },
  {
    "id": "jp2k-1581",
    "word": "全体",
    "reading": "ぜんたい",
    "group": 8,
    "sourceRank": 1600
  },
  {
    "id": "jp2k-1582",
    "word": "代わりに",
    "reading": "かわりに",
    "group": 8,
    "sourceRank": 1601
  },
  {
    "id": "jp2k-1583",
    "word": "証明",
    "reading": "しょうめい",
    "group": 8,
    "sourceRank": 1602
  },
  {
    "id": "jp2k-1584",
    "word": "永遠",
    "reading": "えいえん",
    "group": 8,
    "sourceRank": 1603
  },
  {
    "id": "jp2k-1585",
    "word": "ども",
    "reading": "ども",
    "group": 8,
    "sourceRank": 1605
  },
  {
    "id": "jp2k-1586",
    "word": "闇",
    "reading": "やみ",
    "group": 8,
    "sourceRank": 1606
  },
  {
    "id": "jp2k-1587",
    "word": "用事",
    "reading": "ようじ",
    "group": 8,
    "sourceRank": 1607
  },
  {
    "id": "jp2k-1588",
    "word": "伸びる",
    "reading": "のびる",
    "group": 8,
    "sourceRank": 1608
  },
  {
    "id": "jp2k-1589",
    "word": "傷つく",
    "reading": "きずつく",
    "group": 8,
    "sourceRank": 1609
  },
  {
    "id": "jp2k-1590",
    "word": "つながる",
    "reading": "つながる",
    "group": 8,
    "sourceRank": 1610
  },
  {
    "id": "jp2k-1591",
    "word": "浮かぶ",
    "reading": "うかぶ",
    "group": 8,
    "sourceRank": 1611
  },
  {
    "id": "jp2k-1592",
    "word": "上手",
    "reading": "じょうず",
    "group": 8,
    "sourceRank": 1612
  },
  {
    "id": "jp2k-1593",
    "word": "一歩",
    "reading": "いっぽ",
    "group": 8,
    "sourceRank": 1613
  },
  {
    "id": "jp2k-1594",
    "word": "魂",
    "reading": "たましい",
    "group": 8,
    "sourceRank": 1614
  },
  {
    "id": "jp2k-1595",
    "word": "もつ",
    "reading": "もつ",
    "group": 8,
    "sourceRank": 1615
  },
  {
    "id": "jp2k-1596",
    "word": "全力",
    "reading": "ぜんりょく",
    "group": 8,
    "sourceRank": 1616
  },
  {
    "id": "jp2k-1597",
    "word": "午後",
    "reading": "ごご",
    "group": 8,
    "sourceRank": 1617
  },
  {
    "id": "jp2k-1598",
    "word": "先日",
    "reading": "せんじつ",
    "group": 8,
    "sourceRank": 1618
  },
  {
    "id": "jp2k-1599",
    "word": "ご飯",
    "reading": "ごはん",
    "group": 8,
    "sourceRank": 1619
  },
  {
    "id": "jp2k-1600",
    "word": "こりゃ",
    "reading": "こりゃ",
    "group": 8,
    "sourceRank": 1620
  },
  {
    "id": "jp2k-1601",
    "word": "飛び出す",
    "reading": "とびだす",
    "group": 9,
    "sourceRank": 1621
  },
  {
    "id": "jp2k-1602",
    "word": "抑える",
    "reading": "おさえる",
    "group": 9,
    "sourceRank": 1622
  },
  {
    "id": "jp2k-1603",
    "word": "間違いなく",
    "reading": "まちがいなく",
    "group": 9,
    "sourceRank": 1623
  },
  {
    "id": "jp2k-1604",
    "word": "中心",
    "reading": "ちゅうしん",
    "group": 9,
    "sourceRank": 1624
  },
  {
    "id": "jp2k-1605",
    "word": "我が",
    "reading": "わが",
    "group": 9,
    "sourceRank": 1625
  },
  {
    "id": "jp2k-1606",
    "word": "この間",
    "reading": "このあいだ",
    "group": 9,
    "sourceRank": 1626
  },
  {
    "id": "jp2k-1607",
    "word": "背負う",
    "reading": "せおう",
    "group": 9,
    "sourceRank": 1627
  },
  {
    "id": "jp2k-1608",
    "word": "いつの間にか",
    "reading": "いつのまにか",
    "group": 9,
    "sourceRank": 1628
  },
  {
    "id": "jp2k-1609",
    "word": "展開",
    "reading": "てんかい",
    "group": 9,
    "sourceRank": 1629
  },
  {
    "id": "jp2k-1610",
    "word": "系",
    "reading": "けい",
    "group": 9,
    "sourceRank": 1630
  },
  {
    "id": "jp2k-1611",
    "word": "東京",
    "reading": "とうきょう",
    "group": 9,
    "sourceRank": 1632
  },
  {
    "id": "jp2k-1612",
    "word": "信頼",
    "reading": "しんらい",
    "group": 9,
    "sourceRank": 1633
  },
  {
    "id": "jp2k-1613",
    "word": "久しぶりに",
    "reading": "ひさしぶりに",
    "group": 9,
    "sourceRank": 1634
  },
  {
    "id": "jp2k-1614",
    "word": "にも",
    "reading": "にも",
    "group": 9,
    "sourceRank": 1635
  },
  {
    "id": "jp2k-1615",
    "word": "プレゼント",
    "reading": "プレゼント",
    "group": 9,
    "sourceRank": 1636
  },
  {
    "id": "jp2k-1616",
    "word": "絵",
    "reading": "え",
    "group": 9,
    "sourceRank": 1637
  },
  {
    "id": "jp2k-1617",
    "word": "見かける",
    "reading": "みかける",
    "group": 9,
    "sourceRank": 1638
  },
  {
    "id": "jp2k-1618",
    "word": "肌",
    "reading": "はだ",
    "group": 9,
    "sourceRank": 1639
  },
  {
    "id": "jp2k-1619",
    "word": "気配",
    "reading": "けはい",
    "group": 9,
    "sourceRank": 1640
  },
  {
    "id": "jp2k-1620",
    "word": "楽しみにする",
    "reading": "たのしみにする",
    "group": 9,
    "sourceRank": 1641
  },
  {
    "id": "jp2k-1621",
    "word": "ああいう",
    "reading": "ああいう",
    "group": 9,
    "sourceRank": 1642
  },
  {
    "id": "jp2k-1622",
    "word": "秒",
    "reading": "びょう",
    "group": 9,
    "sourceRank": 1643
  },
  {
    "id": "jp2k-1623",
    "word": "周囲",
    "reading": "しゅうい",
    "group": 9,
    "sourceRank": 1644
  },
  {
    "id": "jp2k-1624",
    "word": "弟",
    "reading": "おとうと",
    "group": 9,
    "sourceRank": 1645
  },
  {
    "id": "jp2k-1625",
    "word": "話しかける",
    "reading": "はなしかける",
    "group": 9,
    "sourceRank": 1646
  },
  {
    "id": "jp2k-1626",
    "word": "言い訳",
    "reading": "いいわけ",
    "group": 9,
    "sourceRank": 1647
  },
  {
    "id": "jp2k-1627",
    "word": "地",
    "reading": "ち",
    "group": 9,
    "sourceRank": 1648
  },
  {
    "id": "jp2k-1628",
    "word": "きっかけ",
    "reading": "きっかけ",
    "group": 9,
    "sourceRank": 1649
  },
  {
    "id": "jp2k-1629",
    "word": "犯人",
    "reading": "はんにん",
    "group": 9,
    "sourceRank": 1650
  },
  {
    "id": "jp2k-1630",
    "word": "責める",
    "reading": "せめる",
    "group": 9,
    "sourceRank": 1651
  },
  {
    "id": "jp2k-1631",
    "word": "少年",
    "reading": "しょうねん",
    "group": 9,
    "sourceRank": 1652
  },
  {
    "id": "jp2k-1632",
    "word": "終了",
    "reading": "しゅうりょう",
    "group": 9,
    "sourceRank": 1653
  },
  {
    "id": "jp2k-1633",
    "word": "冷静",
    "reading": "れいせい",
    "group": 9,
    "sourceRank": 1654
  },
  {
    "id": "jp2k-1634",
    "word": "床",
    "reading": "ゆか",
    "group": 9,
    "sourceRank": 1655
  },
  {
    "id": "jp2k-1635",
    "word": "ぜひ",
    "reading": "ぜひ",
    "group": 9,
    "sourceRank": 1656
  },
  {
    "id": "jp2k-1636",
    "word": "あたし",
    "reading": "あたし",
    "group": 9,
    "sourceRank": 1657
  },
  {
    "id": "jp2k-1637",
    "word": "興奮",
    "reading": "こうふん",
    "group": 9,
    "sourceRank": 1658
  },
  {
    "id": "jp2k-1638",
    "word": "行為",
    "reading": "こうい",
    "group": 9,
    "sourceRank": 1659
  },
  {
    "id": "jp2k-1639",
    "word": "何て",
    "reading": "なんて",
    "group": 9,
    "sourceRank": 1660
  },
  {
    "id": "jp2k-1640",
    "word": "一気",
    "reading": "いっき",
    "group": 9,
    "sourceRank": 1661
  },
  {
    "id": "jp2k-1641",
    "word": "異常",
    "reading": "いじょう",
    "group": 9,
    "sourceRank": 1662
  },
  {
    "id": "jp2k-1642",
    "word": "それと",
    "reading": "それと",
    "group": 9,
    "sourceRank": 1663
  },
  {
    "id": "jp2k-1643",
    "word": "承知",
    "reading": "しょうち",
    "group": 9,
    "sourceRank": 1664
  },
  {
    "id": "jp2k-1644",
    "word": "影",
    "reading": "かげ",
    "group": 9,
    "sourceRank": 1665
  },
  {
    "id": "jp2k-1645",
    "word": "穴",
    "reading": "あな",
    "group": 9,
    "sourceRank": 1666
  },
  {
    "id": "jp2k-1646",
    "word": "全身",
    "reading": "ぜんしん",
    "group": 9,
    "sourceRank": 1667
  },
  {
    "id": "jp2k-1647",
    "word": "兄",
    "reading": "あに",
    "group": 9,
    "sourceRank": 1668
  },
  {
    "id": "jp2k-1648",
    "word": "自体",
    "reading": "じたい",
    "group": 9,
    "sourceRank": 1669
  },
  {
    "id": "jp2k-1649",
    "word": "重ねる",
    "reading": "かさねる",
    "group": 9,
    "sourceRank": 1670
  },
  {
    "id": "jp2k-1650",
    "word": "映画",
    "reading": "えいが",
    "group": 9,
    "sourceRank": 1671
  },
  {
    "id": "jp2k-1651",
    "word": "予想",
    "reading": "よそう",
    "group": 9,
    "sourceRank": 1672
  },
  {
    "id": "jp2k-1652",
    "word": "やった",
    "reading": "やった",
    "group": 9,
    "sourceRank": 1673
  },
  {
    "id": "jp2k-1653",
    "word": "提案",
    "reading": "ていあん",
    "group": 9,
    "sourceRank": 1674
  },
  {
    "id": "jp2k-1654",
    "word": "おかえり",
    "reading": "おかえり",
    "group": 9,
    "sourceRank": 1675
  },
  {
    "id": "jp2k-1655",
    "word": "放つ",
    "reading": "はなつ",
    "group": 9,
    "sourceRank": 1676
  },
  {
    "id": "jp2k-1656",
    "word": "少々",
    "reading": "しょうしょう",
    "group": 9,
    "sourceRank": 1677
  },
  {
    "id": "jp2k-1657",
    "word": "代わる",
    "reading": "かわる",
    "group": 9,
    "sourceRank": 1678
  },
  {
    "id": "jp2k-1658",
    "word": "降る",
    "reading": "ふる",
    "group": 9,
    "sourceRank": 1679
  },
  {
    "id": "jp2k-1659",
    "word": "見た目",
    "reading": "みため",
    "group": 9,
    "sourceRank": 1680
  },
  {
    "id": "jp2k-1660",
    "word": "違いない",
    "reading": "ちがいない",
    "group": 9,
    "sourceRank": 1681
  },
  {
    "id": "jp2k-1661",
    "word": "包む",
    "reading": "つつむ",
    "group": 9,
    "sourceRank": 1682
  },
  {
    "id": "jp2k-1662",
    "word": "薄い",
    "reading": "うすい",
    "group": 9,
    "sourceRank": 1683
  },
  {
    "id": "jp2k-1663",
    "word": "恐れる",
    "reading": "おそれる",
    "group": 9,
    "sourceRank": 1684
  },
  {
    "id": "jp2k-1664",
    "word": "デート",
    "reading": "デート",
    "group": 9,
    "sourceRank": 1685
  },
  {
    "id": "jp2k-1665",
    "word": "武器",
    "reading": "ぶき",
    "group": 9,
    "sourceRank": 1686
  },
  {
    "id": "jp2k-1666",
    "word": "そっと",
    "reading": "そっと",
    "group": 9,
    "sourceRank": 1687
  },
  {
    "id": "jp2k-1667",
    "word": "なさそう",
    "reading": "なさそう",
    "group": 9,
    "sourceRank": 1688
  },
  {
    "id": "jp2k-1668",
    "word": "視線",
    "reading": "しせん",
    "group": 9,
    "sourceRank": 1689
  },
  {
    "id": "jp2k-1669",
    "word": "かわいそう",
    "reading": "かわいそう",
    "group": 9,
    "sourceRank": 1690
  },
  {
    "id": "jp2k-1670",
    "word": "ついてくる",
    "reading": "ついてくる",
    "group": 9,
    "sourceRank": 1691
  },
  {
    "id": "jp2k-1671",
    "word": "抵抗",
    "reading": "ていこう",
    "group": 9,
    "sourceRank": 1693
  },
  {
    "id": "jp2k-1672",
    "word": "おじさん",
    "reading": "おじさん",
    "group": 9,
    "sourceRank": 1694
  },
  {
    "id": "jp2k-1673",
    "word": "地獄",
    "reading": "じごく",
    "group": 9,
    "sourceRank": 1695
  },
  {
    "id": "jp2k-1674",
    "word": "もうちょっと",
    "reading": "もうちょっと",
    "group": 9,
    "sourceRank": 1696
  },
  {
    "id": "jp2k-1675",
    "word": "一方",
    "reading": "いっぽう",
    "group": 9,
    "sourceRank": 1697
  },
  {
    "id": "jp2k-1676",
    "word": "祈る",
    "reading": "いのる",
    "group": 9,
    "sourceRank": 1698
  },
  {
    "id": "jp2k-1677",
    "word": "才能",
    "reading": "さいのう",
    "group": 9,
    "sourceRank": 1699
  },
  {
    "id": "jp2k-1678",
    "word": "大量",
    "reading": "たいりょう",
    "group": 9,
    "sourceRank": 1700
  },
  {
    "id": "jp2k-1679",
    "word": "ねー",
    "reading": "ねー",
    "group": 9,
    "sourceRank": 1701
  },
  {
    "id": "jp2k-1680",
    "word": "あぁ",
    "reading": "あぁ",
    "group": 9,
    "sourceRank": 1702
  },
  {
    "id": "jp2k-1681",
    "word": "気持ちいい",
    "reading": "きもちいい",
    "group": 9,
    "sourceRank": 1703
  },
  {
    "id": "jp2k-1682",
    "word": "その場",
    "reading": "そのば",
    "group": 9,
    "sourceRank": 1704
  },
  {
    "id": "jp2k-1683",
    "word": "ってば",
    "reading": "ってば",
    "group": 9,
    "sourceRank": 1705
  },
  {
    "id": "jp2k-1684",
    "word": "結ぶ",
    "reading": "むすぶ",
    "group": 9,
    "sourceRank": 1706
  },
  {
    "id": "jp2k-1685",
    "word": "混乱",
    "reading": "こんらん",
    "group": 9,
    "sourceRank": 1707
  },
  {
    "id": "jp2k-1686",
    "word": "それこそ",
    "reading": "それこそ",
    "group": 9,
    "sourceRank": 1708
  },
  {
    "id": "jp2k-1687",
    "word": "汗",
    "reading": "あせ",
    "group": 9,
    "sourceRank": 1709
  },
  {
    "id": "jp2k-1688",
    "word": "にしては",
    "reading": "にしては",
    "group": 9,
    "sourceRank": 1710
  },
  {
    "id": "jp2k-1689",
    "word": "どうかした",
    "reading": "どうかした",
    "group": 9,
    "sourceRank": 1711
  },
  {
    "id": "jp2k-1690",
    "word": "対応",
    "reading": "たいおう",
    "group": 9,
    "sourceRank": 1712
  },
  {
    "id": "jp2k-1691",
    "word": "しまった",
    "reading": "しまった",
    "group": 9,
    "sourceRank": 1713
  },
  {
    "id": "jp2k-1692",
    "word": "君たち",
    "reading": "きみたち",
    "group": 9,
    "sourceRank": 1714
  },
  {
    "id": "jp2k-1693",
    "word": "すまん",
    "reading": "すまん",
    "group": 9,
    "sourceRank": 1715
  },
  {
    "id": "jp2k-1694",
    "word": "たって",
    "reading": "たって",
    "group": 9,
    "sourceRank": 1716
  },
  {
    "id": "jp2k-1695",
    "word": "よくなる",
    "reading": "よくなる",
    "group": 9,
    "sourceRank": 1717
  },
  {
    "id": "jp2k-1696",
    "word": "しまう",
    "reading": "しまう",
    "group": 9,
    "sourceRank": 1718
  },
  {
    "id": "jp2k-1697",
    "word": "まいる",
    "reading": "まいる",
    "group": 9,
    "sourceRank": 1719
  },
  {
    "id": "jp2k-1698",
    "word": "願い",
    "reading": "ねがい",
    "group": 9,
    "sourceRank": 1720
  },
  {
    "id": "jp2k-1699",
    "word": "うわあ",
    "reading": "うわあ",
    "group": 9,
    "sourceRank": 1721
  },
  {
    "id": "jp2k-1700",
    "word": "と思ったら",
    "reading": "とおもったら",
    "group": 9,
    "sourceRank": 1722
  },
  {
    "id": "jp2k-1701",
    "word": "他にも",
    "reading": "ほかにも",
    "group": 9,
    "sourceRank": 1723
  },
  {
    "id": "jp2k-1702",
    "word": "恐怖",
    "reading": "きょうふ",
    "group": 9,
    "sourceRank": 1725
  },
  {
    "id": "jp2k-1703",
    "word": "貴様",
    "reading": "きさま",
    "group": 9,
    "sourceRank": 1726
  },
  {
    "id": "jp2k-1704",
    "word": "やる気",
    "reading": "やるき",
    "group": 9,
    "sourceRank": 1727
  },
  {
    "id": "jp2k-1705",
    "word": "何者",
    "reading": "なにもの",
    "group": 9,
    "sourceRank": 1728
  },
  {
    "id": "jp2k-1706",
    "word": "さま",
    "reading": "さま",
    "group": 9,
    "sourceRank": 1729
  },
  {
    "id": "jp2k-1707",
    "word": "と共に",
    "reading": "とともに",
    "group": 9,
    "sourceRank": 1730
  },
  {
    "id": "jp2k-1708",
    "word": "見守る",
    "reading": "みまもる",
    "group": 9,
    "sourceRank": 1731
  },
  {
    "id": "jp2k-1709",
    "word": "ヤバい",
    "reading": "ヤバい",
    "group": 9,
    "sourceRank": 1732
  },
  {
    "id": "jp2k-1710",
    "word": "逃がす",
    "reading": "にがす",
    "group": 9,
    "sourceRank": 1733
  },
  {
    "id": "jp2k-1711",
    "word": "ショック",
    "reading": "ショック",
    "group": 9,
    "sourceRank": 1734
  },
  {
    "id": "jp2k-1712",
    "word": "おー",
    "reading": "おー",
    "group": 9,
    "sourceRank": 1735
  },
  {
    "id": "jp2k-1713",
    "word": "生徒",
    "reading": "せいと",
    "group": 9,
    "sourceRank": 1736
  },
  {
    "id": "jp2k-1714",
    "word": "学ぶ",
    "reading": "まなぶ",
    "group": 9,
    "sourceRank": 1737
  },
  {
    "id": "jp2k-1715",
    "word": "おとなしい",
    "reading": "おとなしい",
    "group": 9,
    "sourceRank": 1738
  },
  {
    "id": "jp2k-1716",
    "word": "治る",
    "reading": "なおる",
    "group": 9,
    "sourceRank": 1739
  },
  {
    "id": "jp2k-1717",
    "word": "なんてこと",
    "reading": "なんてこと",
    "group": 9,
    "sourceRank": 1740
  },
  {
    "id": "jp2k-1718",
    "word": "だめ",
    "reading": "だめ",
    "group": 9,
    "sourceRank": 1741
  },
  {
    "id": "jp2k-1719",
    "word": "屋",
    "reading": "や",
    "group": 9,
    "sourceRank": 1742
  },
  {
    "id": "jp2k-1720",
    "word": "思わず",
    "reading": "おもわず",
    "group": 9,
    "sourceRank": 1743
  },
  {
    "id": "jp2k-1721",
    "word": "きちんと",
    "reading": "きちんと",
    "group": 9,
    "sourceRank": 1744
  },
  {
    "id": "jp2k-1722",
    "word": "優秀",
    "reading": "ゆうしゅう",
    "group": 9,
    "sourceRank": 1745
  },
  {
    "id": "jp2k-1723",
    "word": "ますます",
    "reading": "ますます",
    "group": 9,
    "sourceRank": 1746
  },
  {
    "id": "jp2k-1724",
    "word": "燃える",
    "reading": "もえる",
    "group": 9,
    "sourceRank": 1747
  },
  {
    "id": "jp2k-1725",
    "word": "派手",
    "reading": "はで",
    "group": 9,
    "sourceRank": 1748
  },
  {
    "id": "jp2k-1726",
    "word": "道具",
    "reading": "どうぐ",
    "group": 9,
    "sourceRank": 1749
  },
  {
    "id": "jp2k-1727",
    "word": "嘘",
    "reading": "うそ",
    "group": 9,
    "sourceRank": 1750
  },
  {
    "id": "jp2k-1728",
    "word": "時々",
    "reading": "ときどき",
    "group": 9,
    "sourceRank": 1751
  },
  {
    "id": "jp2k-1729",
    "word": "ハハハ",
    "reading": "ハハハ",
    "group": 9,
    "sourceRank": 1752
  },
  {
    "id": "jp2k-1730",
    "word": "たっぷり",
    "reading": "たっぷり",
    "group": 9,
    "sourceRank": 1753
  },
  {
    "id": "jp2k-1731",
    "word": "果たす",
    "reading": "はたす",
    "group": 9,
    "sourceRank": 1754
  },
  {
    "id": "jp2k-1732",
    "word": "たり",
    "reading": "たり",
    "group": 9,
    "sourceRank": 1755
  },
  {
    "id": "jp2k-1733",
    "word": "自慢",
    "reading": "じまん",
    "group": 9,
    "sourceRank": 1756
  },
  {
    "id": "jp2k-1734",
    "word": "預ける",
    "reading": "あずける",
    "group": 9,
    "sourceRank": 1757
  },
  {
    "id": "jp2k-1735",
    "word": "目覚める",
    "reading": "めざめる",
    "group": 9,
    "sourceRank": 1758
  },
  {
    "id": "jp2k-1736",
    "word": "買い物",
    "reading": "かいもの",
    "group": 9,
    "sourceRank": 1759
  },
  {
    "id": "jp2k-1737",
    "word": "ともかく",
    "reading": "ともかく",
    "group": 9,
    "sourceRank": 1760
  },
  {
    "id": "jp2k-1738",
    "word": "声をかける",
    "reading": "こえをかける",
    "group": 9,
    "sourceRank": 1761
  },
  {
    "id": "jp2k-1739",
    "word": "居場所",
    "reading": "いばしょ",
    "group": 9,
    "sourceRank": 1762
  },
  {
    "id": "jp2k-1740",
    "word": "いちいち",
    "reading": "いちいち",
    "group": 9,
    "sourceRank": 1763
  },
  {
    "id": "jp2k-1741",
    "word": "ハ",
    "reading": "ハ",
    "group": 9,
    "sourceRank": 1765
  },
  {
    "id": "jp2k-1742",
    "word": "勘弁",
    "reading": "かんべん",
    "group": 9,
    "sourceRank": 1766
  },
  {
    "id": "jp2k-1743",
    "word": "くそ",
    "reading": "くそ",
    "group": 9,
    "sourceRank": 1767
  },
  {
    "id": "jp2k-1744",
    "word": "卒業",
    "reading": "そつぎょう",
    "group": 9,
    "sourceRank": 1768
  },
  {
    "id": "jp2k-1745",
    "word": "響く",
    "reading": "ひびく",
    "group": 9,
    "sourceRank": 1769
  },
  {
    "id": "jp2k-1746",
    "word": "そりゃあ",
    "reading": "そりゃあ",
    "group": 9,
    "sourceRank": 1770
  },
  {
    "id": "jp2k-1747",
    "word": "囲む",
    "reading": "かこむ",
    "group": 9,
    "sourceRank": 1771
  },
  {
    "id": "jp2k-1748",
    "word": "不可能",
    "reading": "ふかのう",
    "group": 9,
    "sourceRank": 1772
  },
  {
    "id": "jp2k-1749",
    "word": "正確",
    "reading": "せいかく",
    "group": 9,
    "sourceRank": 1773
  },
  {
    "id": "jp2k-1750",
    "word": "歌",
    "reading": "うた",
    "group": 9,
    "sourceRank": 1774
  },
  {
    "id": "jp2k-1751",
    "word": "外れる",
    "reading": "はずれる",
    "group": 9,
    "sourceRank": 1775
  },
  {
    "id": "jp2k-1752",
    "word": "それまで",
    "reading": "それまで",
    "group": 9,
    "sourceRank": 1776
  },
  {
    "id": "jp2k-1753",
    "word": "飛ばす",
    "reading": "とばす",
    "group": 9,
    "sourceRank": 1777
  },
  {
    "id": "jp2k-1754",
    "word": "しつこい",
    "reading": "しつこい",
    "group": 9,
    "sourceRank": 1778
  },
  {
    "id": "jp2k-1755",
    "word": "ガキ",
    "reading": "ガキ",
    "group": 9,
    "sourceRank": 1779
  },
  {
    "id": "jp2k-1756",
    "word": "読める",
    "reading": "よめる",
    "group": 9,
    "sourceRank": 1780
  },
  {
    "id": "jp2k-1757",
    "word": "帰ってくる",
    "reading": "かえってくる",
    "group": 9,
    "sourceRank": 1781
  },
  {
    "id": "jp2k-1758",
    "word": "ほか",
    "reading": "ほか",
    "group": 9,
    "sourceRank": 1782
  },
  {
    "id": "jp2k-1759",
    "word": "まつ",
    "reading": "まつ",
    "group": 9,
    "sourceRank": 1783
  },
  {
    "id": "jp2k-1760",
    "word": "分ける",
    "reading": "わける",
    "group": 9,
    "sourceRank": 1784
  },
  {
    "id": "jp2k-1761",
    "word": "くっ",
    "reading": "くっ",
    "group": 9,
    "sourceRank": 1785
  },
  {
    "id": "jp2k-1762",
    "word": "押さえる",
    "reading": "おさえる",
    "group": 9,
    "sourceRank": 1786
  },
  {
    "id": "jp2k-1763",
    "word": "選択",
    "reading": "せんたく",
    "group": 9,
    "sourceRank": 1787
  },
  {
    "id": "jp2k-1764",
    "word": "潰す",
    "reading": "つぶす",
    "group": 9,
    "sourceRank": 1788
  },
  {
    "id": "jp2k-1765",
    "word": "予感",
    "reading": "よかん",
    "group": 9,
    "sourceRank": 1789
  },
  {
    "id": "jp2k-1766",
    "word": "お疲れ",
    "reading": "おつかれ",
    "group": 9,
    "sourceRank": 1790
  },
  {
    "id": "jp2k-1767",
    "word": "面",
    "reading": "めん",
    "group": 9,
    "sourceRank": 1791
  },
  {
    "id": "jp2k-1768",
    "word": "そのとき",
    "reading": "そのとき",
    "group": 9,
    "sourceRank": 1792
  },
  {
    "id": "jp2k-1769",
    "word": "頂く",
    "reading": "いただく",
    "group": 9,
    "sourceRank": 1793
  },
  {
    "id": "jp2k-1770",
    "word": "含める",
    "reading": "ふくめる",
    "group": 9,
    "sourceRank": 1794
  },
  {
    "id": "jp2k-1771",
    "word": "春",
    "reading": "はる",
    "group": 9,
    "sourceRank": 1795
  },
  {
    "id": "jp2k-1772",
    "word": "多少",
    "reading": "たしょう",
    "group": 9,
    "sourceRank": 1796
  },
  {
    "id": "jp2k-1773",
    "word": "感動",
    "reading": "かんどう",
    "group": 9,
    "sourceRank": 1797
  },
  {
    "id": "jp2k-1774",
    "word": "休み",
    "reading": "やすみ",
    "group": 9,
    "sourceRank": 1798
  },
  {
    "id": "jp2k-1775",
    "word": "どうしようもない",
    "reading": "どうしようもない",
    "group": 9,
    "sourceRank": 1799
  },
  {
    "id": "jp2k-1776",
    "word": "手を出す",
    "reading": "てをだす",
    "group": 9,
    "sourceRank": 1800
  },
  {
    "id": "jp2k-1777",
    "word": "やがて",
    "reading": "やがて",
    "group": 9,
    "sourceRank": 1801
  },
  {
    "id": "jp2k-1778",
    "word": "きつい",
    "reading": "きつい",
    "group": 9,
    "sourceRank": 1802
  },
  {
    "id": "jp2k-1779",
    "word": "口にする",
    "reading": "くちにする",
    "group": 9,
    "sourceRank": 1803
  },
  {
    "id": "jp2k-1780",
    "word": "記録",
    "reading": "きろく",
    "group": 9,
    "sourceRank": 1804
  },
  {
    "id": "jp2k-1781",
    "word": "探る",
    "reading": "さぐる",
    "group": 9,
    "sourceRank": 1805
  },
  {
    "id": "jp2k-1782",
    "word": "映る",
    "reading": "うつる",
    "group": 9,
    "sourceRank": 1806
  },
  {
    "id": "jp2k-1783",
    "word": "甘える",
    "reading": "あまえる",
    "group": 9,
    "sourceRank": 1807
  },
  {
    "id": "jp2k-1784",
    "word": "いったい",
    "reading": "いったい",
    "group": 9,
    "sourceRank": 1808
  },
  {
    "id": "jp2k-1785",
    "word": "よいしょ",
    "reading": "よいしょ",
    "group": 9,
    "sourceRank": 1809
  },
  {
    "id": "jp2k-1786",
    "word": "ばっか",
    "reading": "ばっか",
    "group": 9,
    "sourceRank": 1810
  },
  {
    "id": "jp2k-1787",
    "word": "下げる",
    "reading": "さげる",
    "group": 9,
    "sourceRank": 1811
  },
  {
    "id": "jp2k-1788",
    "word": "汚い",
    "reading": "きたない",
    "group": 9,
    "sourceRank": 1812
  },
  {
    "id": "jp2k-1789",
    "word": "黒",
    "reading": "くろ",
    "group": 9,
    "sourceRank": 1813
  },
  {
    "id": "jp2k-1790",
    "word": "付く",
    "reading": "つく",
    "group": 9,
    "sourceRank": 1814
  },
  {
    "id": "jp2k-1791",
    "word": "活動",
    "reading": "かつどう",
    "group": 9,
    "sourceRank": 1815
  },
  {
    "id": "jp2k-1792",
    "word": "魚",
    "reading": "さかな",
    "group": 9,
    "sourceRank": 1816
  },
  {
    "id": "jp2k-1793",
    "word": "一本",
    "reading": "いっぽん",
    "group": 9,
    "sourceRank": 1817
  },
  {
    "id": "jp2k-1794",
    "word": "そうすれば",
    "reading": "そうすれば",
    "group": 9,
    "sourceRank": 1819
  },
  {
    "id": "jp2k-1795",
    "word": "あくまで",
    "reading": "あくまで",
    "group": 9,
    "sourceRank": 1820
  },
  {
    "id": "jp2k-1796",
    "word": "立ち上がる",
    "reading": "たちあがる",
    "group": 9,
    "sourceRank": 1821
  },
  {
    "id": "jp2k-1797",
    "word": "２つ",
    "reading": "ふたつ",
    "group": 9,
    "sourceRank": 1823
  },
  {
    "id": "jp2k-1798",
    "word": "物語",
    "reading": "ものがたり",
    "group": 9,
    "sourceRank": 1824
  },
  {
    "id": "jp2k-1799",
    "word": "逃げ出す",
    "reading": "にげだす",
    "group": 9,
    "sourceRank": 1825
  },
  {
    "id": "jp2k-1800",
    "word": "何もかも",
    "reading": "なにもかも",
    "group": 9,
    "sourceRank": 1826
  },
  {
    "id": "jp2k-1801",
    "word": "偉い",
    "reading": "えらい",
    "group": 10,
    "sourceRank": 1827
  },
  {
    "id": "jp2k-1802",
    "word": "風",
    "reading": "ふう",
    "group": 10,
    "sourceRank": 1828
  },
  {
    "id": "jp2k-1803",
    "word": "閉める",
    "reading": "しめる",
    "group": 10,
    "sourceRank": 1829
  },
  {
    "id": "jp2k-1804",
    "word": "通り",
    "reading": "とおり",
    "group": 10,
    "sourceRank": 1830
  },
  {
    "id": "jp2k-1805",
    "word": "年間",
    "reading": "ねんかん",
    "group": 10,
    "sourceRank": 1831
  },
  {
    "id": "jp2k-1806",
    "word": "広げる",
    "reading": "ひろげる",
    "group": 10,
    "sourceRank": 1832
  },
  {
    "id": "jp2k-1807",
    "word": "こいつら",
    "reading": "こいつら",
    "group": 10,
    "sourceRank": 1833
  },
  {
    "id": "jp2k-1808",
    "word": "差",
    "reading": "さ",
    "group": 10,
    "sourceRank": 1834
  },
  {
    "id": "jp2k-1809",
    "word": "その間",
    "reading": "そのあいだ",
    "group": 10,
    "sourceRank": 1835
  },
  {
    "id": "jp2k-1810",
    "word": "めちゃくちゃ",
    "reading": "めちゃくちゃ",
    "group": 10,
    "sourceRank": 1836
  },
  {
    "id": "jp2k-1811",
    "word": "何でもない",
    "reading": "なんでもない",
    "group": 10,
    "sourceRank": 1837
  },
  {
    "id": "jp2k-1812",
    "word": "授業",
    "reading": "じゅぎょう",
    "group": 10,
    "sourceRank": 1838
  },
  {
    "id": "jp2k-1813",
    "word": "事態",
    "reading": "じたい",
    "group": 10,
    "sourceRank": 1839
  },
  {
    "id": "jp2k-1814",
    "word": "まくる",
    "reading": "まくる",
    "group": 10,
    "sourceRank": 1840
  },
  {
    "id": "jp2k-1815",
    "word": "同時に",
    "reading": "どうじに",
    "group": 10,
    "sourceRank": 1841
  },
  {
    "id": "jp2k-1816",
    "word": "禁止",
    "reading": "きんし",
    "group": 10,
    "sourceRank": 1843
  },
  {
    "id": "jp2k-1817",
    "word": "お客様",
    "reading": "おきゃくさま",
    "group": 10,
    "sourceRank": 1844
  },
  {
    "id": "jp2k-1818",
    "word": "突っ込む",
    "reading": "つっこむ",
    "group": 10,
    "sourceRank": 1845
  },
  {
    "id": "jp2k-1819",
    "word": "最大",
    "reading": "さいだい",
    "group": 10,
    "sourceRank": 1846
  },
  {
    "id": "jp2k-1820",
    "word": "喜んで",
    "reading": "よろこんで",
    "group": 10,
    "sourceRank": 1847
  },
  {
    "id": "jp2k-1821",
    "word": "どころ",
    "reading": "どころ",
    "group": 10,
    "sourceRank": 1848
  },
  {
    "id": "jp2k-1822",
    "word": "投げる",
    "reading": "なげる",
    "group": 10,
    "sourceRank": 1849
  },
  {
    "id": "jp2k-1823",
    "word": "不満",
    "reading": "ふまん",
    "group": 10,
    "sourceRank": 1850
  },
  {
    "id": "jp2k-1824",
    "word": "眠れる",
    "reading": "ねむれる",
    "group": 10,
    "sourceRank": 1851
  },
  {
    "id": "jp2k-1825",
    "word": "複雑",
    "reading": "ふくざつ",
    "group": 10,
    "sourceRank": 1852
  },
  {
    "id": "jp2k-1826",
    "word": "告白",
    "reading": "こくはく",
    "group": 10,
    "sourceRank": 1853
  },
  {
    "id": "jp2k-1827",
    "word": "発生",
    "reading": "はっせい",
    "group": 10,
    "sourceRank": 1854
  },
  {
    "id": "jp2k-1828",
    "word": "文字",
    "reading": "もじ",
    "group": 10,
    "sourceRank": 1855
  },
  {
    "id": "jp2k-1829",
    "word": "越える",
    "reading": "こえる",
    "group": 10,
    "sourceRank": 1856
  },
  {
    "id": "jp2k-1830",
    "word": "ふー",
    "reading": "ふー",
    "group": 10,
    "sourceRank": 1857
  },
  {
    "id": "jp2k-1831",
    "word": "泊まる",
    "reading": "とまる",
    "group": 10,
    "sourceRank": 1858
  },
  {
    "id": "jp2k-1832",
    "word": "一生懸命",
    "reading": "いっしょうけんめい",
    "group": 10,
    "sourceRank": 1859
  },
  {
    "id": "jp2k-1833",
    "word": "石",
    "reading": "いし",
    "group": 10,
    "sourceRank": 1860
  },
  {
    "id": "jp2k-1834",
    "word": "あなたたち",
    "reading": "あなたたち",
    "group": 10,
    "sourceRank": 1861
  },
  {
    "id": "jp2k-1835",
    "word": "増やす",
    "reading": "ふやす",
    "group": 10,
    "sourceRank": 1862
  },
  {
    "id": "jp2k-1836",
    "word": "そっくり",
    "reading": "そっくり",
    "group": 10,
    "sourceRank": 1863
  },
  {
    "id": "jp2k-1837",
    "word": "技術",
    "reading": "ぎじゅつ",
    "group": 10,
    "sourceRank": 1864
  },
  {
    "id": "jp2k-1838",
    "word": "眺める",
    "reading": "ながめる",
    "group": 10,
    "sourceRank": 1865
  },
  {
    "id": "jp2k-1839",
    "word": "母さん",
    "reading": "かあさん",
    "group": 10,
    "sourceRank": 1866
  },
  {
    "id": "jp2k-1840",
    "word": "わけがない",
    "reading": "わけがない",
    "group": 10,
    "sourceRank": 1867
  },
  {
    "id": "jp2k-1841",
    "word": "キス",
    "reading": "キス",
    "group": 10,
    "sourceRank": 1868
  },
  {
    "id": "jp2k-1842",
    "word": "お前たち",
    "reading": "おまえたち",
    "group": 10,
    "sourceRank": 1869
  },
  {
    "id": "jp2k-1843",
    "word": "代",
    "reading": "だい",
    "group": 10,
    "sourceRank": 1870
  },
  {
    "id": "jp2k-1844",
    "word": "この辺",
    "reading": "このへん",
    "group": 10,
    "sourceRank": 1871
  },
  {
    "id": "jp2k-1845",
    "word": "よっぽど",
    "reading": "よっぽど",
    "group": 10,
    "sourceRank": 1872
  },
  {
    "id": "jp2k-1846",
    "word": "時点",
    "reading": "じてん",
    "group": 10,
    "sourceRank": 1873
  },
  {
    "id": "jp2k-1847",
    "word": "お仕事",
    "reading": "おしごと",
    "group": 10,
    "sourceRank": 1874
  },
  {
    "id": "jp2k-1848",
    "word": "ったく",
    "reading": "ったく",
    "group": 10,
    "sourceRank": 1875
  },
  {
    "id": "jp2k-1849",
    "word": "破る",
    "reading": "やぶる",
    "group": 10,
    "sourceRank": 1876
  },
  {
    "id": "jp2k-1850",
    "word": "知れる",
    "reading": "しれる",
    "group": 10,
    "sourceRank": 1877
  },
  {
    "id": "jp2k-1851",
    "word": "ころ",
    "reading": "ころ",
    "group": 10,
    "sourceRank": 1878
  },
  {
    "id": "jp2k-1852",
    "word": "大勢",
    "reading": "おおぜい",
    "group": 10,
    "sourceRank": 1879
  },
  {
    "id": "jp2k-1853",
    "word": "衝撃",
    "reading": "しょうげき",
    "group": 10,
    "sourceRank": 1880
  },
  {
    "id": "jp2k-1854",
    "word": "森",
    "reading": "もり",
    "group": 10,
    "sourceRank": 1881
  },
  {
    "id": "jp2k-1855",
    "word": "決定",
    "reading": "けってい",
    "group": 10,
    "sourceRank": 1882
  },
  {
    "id": "jp2k-1856",
    "word": "揺れる",
    "reading": "ゆれる",
    "group": 10,
    "sourceRank": 1883
  },
  {
    "id": "jp2k-1857",
    "word": "刺激",
    "reading": "しげき",
    "group": 10,
    "sourceRank": 1884
  },
  {
    "id": "jp2k-1858",
    "word": "目標",
    "reading": "もくひょう",
    "group": 10,
    "sourceRank": 1885
  },
  {
    "id": "jp2k-1859",
    "word": "爆発",
    "reading": "ばくはつ",
    "group": 10,
    "sourceRank": 1886
  },
  {
    "id": "jp2k-1860",
    "word": "速い",
    "reading": "はやい",
    "group": 10,
    "sourceRank": 1887
  },
  {
    "id": "jp2k-1861",
    "word": "巨大",
    "reading": "きょだい",
    "group": 10,
    "sourceRank": 1888
  },
  {
    "id": "jp2k-1862",
    "word": "呼ばれる",
    "reading": "よばれる",
    "group": 10,
    "sourceRank": 1889
  },
  {
    "id": "jp2k-1863",
    "word": "フフッ",
    "reading": "フフッ",
    "group": 10,
    "sourceRank": 1890
  },
  {
    "id": "jp2k-1864",
    "word": "疲れた",
    "reading": "つかれた",
    "group": 10,
    "sourceRank": 1891
  },
  {
    "id": "jp2k-1865",
    "word": "解く",
    "reading": "とく",
    "group": 10,
    "sourceRank": 1892
  },
  {
    "id": "jp2k-1866",
    "word": "放っておく",
    "reading": "ほうっておく",
    "group": 10,
    "sourceRank": 1893
  },
  {
    "id": "jp2k-1867",
    "word": "都合",
    "reading": "つごう",
    "group": 10,
    "sourceRank": 1894
  },
  {
    "id": "jp2k-1868",
    "word": "踏む",
    "reading": "ふむ",
    "group": 10,
    "sourceRank": 1895
  },
  {
    "id": "jp2k-1869",
    "word": "作品",
    "reading": "さくひん",
    "group": 10,
    "sourceRank": 1896
  },
  {
    "id": "jp2k-1870",
    "word": "非常",
    "reading": "ひじょう",
    "group": 10,
    "sourceRank": 1897
  },
  {
    "id": "jp2k-1871",
    "word": "学生",
    "reading": "がくせい",
    "group": 10,
    "sourceRank": 1898
  },
  {
    "id": "jp2k-1872",
    "word": "ふと",
    "reading": "ふと",
    "group": 10,
    "sourceRank": 1899
  },
  {
    "id": "jp2k-1873",
    "word": "お兄ちゃん",
    "reading": "おにいちゃん",
    "group": 10,
    "sourceRank": 1900
  },
  {
    "id": "jp2k-1874",
    "word": "あるいは",
    "reading": "あるいは",
    "group": 10,
    "sourceRank": 1901
  },
  {
    "id": "jp2k-1875",
    "word": "お疲れさま",
    "reading": "おつかれさま",
    "group": 10,
    "sourceRank": 1902
  },
  {
    "id": "jp2k-1876",
    "word": "なんでもない",
    "reading": "なんでもない",
    "group": 10,
    "sourceRank": 1903
  },
  {
    "id": "jp2k-1877",
    "word": "わたし",
    "reading": "わたし",
    "group": 10,
    "sourceRank": 1904
  },
  {
    "id": "jp2k-1878",
    "word": "高校",
    "reading": "こうこう",
    "group": 10,
    "sourceRank": 1905
  },
  {
    "id": "jp2k-1879",
    "word": "なくす",
    "reading": "なくす",
    "group": 10,
    "sourceRank": 1906
  },
  {
    "id": "jp2k-1880",
    "word": "さっぱり",
    "reading": "さっぱり",
    "group": 10,
    "sourceRank": 1907
  },
  {
    "id": "jp2k-1881",
    "word": "なめる",
    "reading": "なめる",
    "group": 10,
    "sourceRank": 1908
  },
  {
    "id": "jp2k-1882",
    "word": "刺す",
    "reading": "さす",
    "group": 10,
    "sourceRank": 1909
  },
  {
    "id": "jp2k-1883",
    "word": "はずがない",
    "reading": "はずがない",
    "group": 10,
    "sourceRank": 1910
  },
  {
    "id": "jp2k-1884",
    "word": "なり",
    "reading": "なり",
    "group": 10,
    "sourceRank": 1911
  },
  {
    "id": "jp2k-1885",
    "word": "ながら",
    "reading": "ながら",
    "group": 10,
    "sourceRank": 1912
  },
  {
    "id": "jp2k-1886",
    "word": "まぁ",
    "reading": "まぁ",
    "group": 10,
    "sourceRank": 1913
  },
  {
    "id": "jp2k-1887",
    "word": "と同じように",
    "reading": "とおなじように",
    "group": 10,
    "sourceRank": 1914
  },
  {
    "id": "jp2k-1888",
    "word": "おそらく",
    "reading": "おそらく",
    "group": 10,
    "sourceRank": 1915
  },
  {
    "id": "jp2k-1889",
    "word": "名",
    "reading": "めい",
    "group": 10,
    "sourceRank": 1916
  },
  {
    "id": "jp2k-1890",
    "word": "話題",
    "reading": "わだい",
    "group": 10,
    "sourceRank": 1917
  },
  {
    "id": "jp2k-1891",
    "word": "たまる",
    "reading": "たまる",
    "group": 10,
    "sourceRank": 1918
  },
  {
    "id": "jp2k-1892",
    "word": "盛り上がる",
    "reading": "もりあがる",
    "group": 10,
    "sourceRank": 1919
  },
  {
    "id": "jp2k-1893",
    "word": "その手",
    "reading": "そのて",
    "group": 10,
    "sourceRank": 1920
  },
  {
    "id": "jp2k-1894",
    "word": "回復",
    "reading": "かいふく",
    "group": 10,
    "sourceRank": 1921
  },
  {
    "id": "jp2k-1895",
    "word": "すまない",
    "reading": "すまない",
    "group": 10,
    "sourceRank": 1922
  },
  {
    "id": "jp2k-1896",
    "word": "でかい",
    "reading": "でかい",
    "group": 10,
    "sourceRank": 1923
  },
  {
    "id": "jp2k-1897",
    "word": "騒ぎ",
    "reading": "さわぎ",
    "group": 10,
    "sourceRank": 1924
  },
  {
    "id": "jp2k-1898",
    "word": "何より",
    "reading": "なにより",
    "group": 10,
    "sourceRank": 1925
  },
  {
    "id": "jp2k-1899",
    "word": "歴史",
    "reading": "れきし",
    "group": 10,
    "sourceRank": 1926
  },
  {
    "id": "jp2k-1900",
    "word": "平和",
    "reading": "へいわ",
    "group": 10,
    "sourceRank": 1927
  },
  {
    "id": "jp2k-1901",
    "word": "暑い",
    "reading": "あつい",
    "group": 10,
    "sourceRank": 1928
  },
  {
    "id": "jp2k-1902",
    "word": "暴れる",
    "reading": "あばれる",
    "group": 10,
    "sourceRank": 1929
  },
  {
    "id": "jp2k-1903",
    "word": "光る",
    "reading": "ひかる",
    "group": 10,
    "sourceRank": 1930
  },
  {
    "id": "jp2k-1904",
    "word": "神様",
    "reading": "かみさま",
    "group": 10,
    "sourceRank": 1931
  },
  {
    "id": "jp2k-1905",
    "word": "１回",
    "reading": "いっかい",
    "group": 10,
    "sourceRank": 1932
  },
  {
    "id": "jp2k-1906",
    "word": "建物",
    "reading": "たてもの",
    "group": 10,
    "sourceRank": 1933
  },
  {
    "id": "jp2k-1907",
    "word": "あたり",
    "reading": "あたり",
    "group": 10,
    "sourceRank": 1934
  },
  {
    "id": "jp2k-1908",
    "word": "瞳",
    "reading": "ひとみ",
    "group": 10,
    "sourceRank": 1935
  },
  {
    "id": "jp2k-1909",
    "word": "研究",
    "reading": "けんきゅう",
    "group": 10,
    "sourceRank": 1936
  },
  {
    "id": "jp2k-1910",
    "word": "ルール",
    "reading": "ルール",
    "group": 10,
    "sourceRank": 1937
  },
  {
    "id": "jp2k-1911",
    "word": "伸ばす",
    "reading": "のばす",
    "group": 10,
    "sourceRank": 1938
  },
  {
    "id": "jp2k-1912",
    "word": "美人",
    "reading": "びじん",
    "group": 10,
    "sourceRank": 1939
  },
  {
    "id": "jp2k-1913",
    "word": "可愛い",
    "reading": "かわいい",
    "group": 10,
    "sourceRank": 1940
  },
  {
    "id": "jp2k-1914",
    "word": "最後まで",
    "reading": "さいごまで",
    "group": 10,
    "sourceRank": 1941
  },
  {
    "id": "jp2k-1915",
    "word": "まっすぐ",
    "reading": "まっすぐ",
    "group": 10,
    "sourceRank": 1942
  },
  {
    "id": "jp2k-1916",
    "word": "人",
    "reading": "じん",
    "group": 10,
    "sourceRank": 1943
  },
  {
    "id": "jp2k-1917",
    "word": "油断",
    "reading": "ゆだん",
    "group": 10,
    "sourceRank": 1944
  },
  {
    "id": "jp2k-1918",
    "word": "警戒",
    "reading": "けいかい",
    "group": 10,
    "sourceRank": 1945
  },
  {
    "id": "jp2k-1919",
    "word": "みたいです",
    "reading": "みたいです",
    "group": 10,
    "sourceRank": 1946
  },
  {
    "id": "jp2k-1920",
    "word": "応える",
    "reading": "こたえる",
    "group": 10,
    "sourceRank": 1947
  },
  {
    "id": "jp2k-1921",
    "word": "新",
    "reading": "しん",
    "group": 10,
    "sourceRank": 1948
  },
  {
    "id": "jp2k-1922",
    "word": "きり",
    "reading": "きり",
    "group": 10,
    "sourceRank": 1949
  },
  {
    "id": "jp2k-1923",
    "word": "ついてる",
    "reading": "ついてる",
    "group": 10,
    "sourceRank": 1950
  },
  {
    "id": "jp2k-1924",
    "word": "名乗る",
    "reading": "なのる",
    "group": 10,
    "sourceRank": 1951
  },
  {
    "id": "jp2k-1925",
    "word": "いけません",
    "reading": "いけません",
    "group": 10,
    "sourceRank": 1952
  },
  {
    "id": "jp2k-1926",
    "word": "気がつく",
    "reading": "きがつく",
    "group": 10,
    "sourceRank": 1953
  },
  {
    "id": "jp2k-1927",
    "word": "ぶつける",
    "reading": "ぶつける",
    "group": 10,
    "sourceRank": 1954
  },
  {
    "id": "jp2k-1928",
    "word": "休憩",
    "reading": "きゅうけい",
    "group": 10,
    "sourceRank": 1955
  },
  {
    "id": "jp2k-1929",
    "word": "机",
    "reading": "つくえ",
    "group": 10,
    "sourceRank": 1956
  },
  {
    "id": "jp2k-1930",
    "word": "う",
    "reading": "う",
    "group": 10,
    "sourceRank": 1957
  },
  {
    "id": "jp2k-1931",
    "word": "どこにも",
    "reading": "どこにも",
    "group": 10,
    "sourceRank": 1958
  },
  {
    "id": "jp2k-1932",
    "word": "気持ち悪い",
    "reading": "きもちわるい",
    "group": 10,
    "sourceRank": 1959
  },
  {
    "id": "jp2k-1933",
    "word": "青い",
    "reading": "あおい",
    "group": 10,
    "sourceRank": 1960
  },
  {
    "id": "jp2k-1934",
    "word": "隙",
    "reading": "すき",
    "group": 10,
    "sourceRank": 1961
  },
  {
    "id": "jp2k-1935",
    "word": "教室",
    "reading": "きょうしつ",
    "group": 10,
    "sourceRank": 1962
  },
  {
    "id": "jp2k-1936",
    "word": "共に",
    "reading": "ともに",
    "group": 10,
    "sourceRank": 1963
  },
  {
    "id": "jp2k-1937",
    "word": "僕たち",
    "reading": "ぼくたち",
    "group": 10,
    "sourceRank": 1964
  },
  {
    "id": "jp2k-1938",
    "word": "閉じる",
    "reading": "とじる",
    "group": 10,
    "sourceRank": 1965
  },
  {
    "id": "jp2k-1939",
    "word": "経つ",
    "reading": "たつ",
    "group": 10,
    "sourceRank": 1966
  },
  {
    "id": "jp2k-1940",
    "word": "パパ",
    "reading": "パパ",
    "group": 10,
    "sourceRank": 1967
  },
  {
    "id": "jp2k-1941",
    "word": "来てる",
    "reading": "きてる",
    "group": 10,
    "sourceRank": 1968
  },
  {
    "id": "jp2k-1942",
    "word": "なんとなく",
    "reading": "なんとなく",
    "group": 10,
    "sourceRank": 1969
  },
  {
    "id": "jp2k-1943",
    "word": "いえいえ",
    "reading": "いえいえ",
    "group": 10,
    "sourceRank": 1970
  },
  {
    "id": "jp2k-1944",
    "word": "感",
    "reading": "かん",
    "group": 10,
    "sourceRank": 1971
  },
  {
    "id": "jp2k-1945",
    "word": "登場",
    "reading": "とうじょう",
    "group": 10,
    "sourceRank": 1972
  },
  {
    "id": "jp2k-1946",
    "word": "保つ",
    "reading": "たもつ",
    "group": 10,
    "sourceRank": 1973
  },
  {
    "id": "jp2k-1947",
    "word": "廊下",
    "reading": "ろうか",
    "group": 10,
    "sourceRank": 1974
  },
  {
    "id": "jp2k-1948",
    "word": "箱",
    "reading": "はこ",
    "group": 10,
    "sourceRank": 1975
  },
  {
    "id": "jp2k-1949",
    "word": "譲る",
    "reading": "ゆずる",
    "group": 10,
    "sourceRank": 1976
  },
  {
    "id": "jp2k-1950",
    "word": "出来事",
    "reading": "できごと",
    "group": 10,
    "sourceRank": 1977
  },
  {
    "id": "jp2k-1951",
    "word": "振り返る",
    "reading": "ふりかえる",
    "group": 10,
    "sourceRank": 1978
  },
  {
    "id": "jp2k-1952",
    "word": "役目",
    "reading": "やくめ",
    "group": 10,
    "sourceRank": 1979
  },
  {
    "id": "jp2k-1953",
    "word": "階段",
    "reading": "かいだん",
    "group": 10,
    "sourceRank": 1980
  },
  {
    "id": "jp2k-1954",
    "word": "よかったら",
    "reading": "よかったら",
    "group": 10,
    "sourceRank": 1981
  },
  {
    "id": "jp2k-1955",
    "word": "それなのに",
    "reading": "それなのに",
    "group": 10,
    "sourceRank": 1982
  },
  {
    "id": "jp2k-1956",
    "word": "空間",
    "reading": "くうかん",
    "group": 10,
    "sourceRank": 1983
  },
  {
    "id": "jp2k-1957",
    "word": "知識",
    "reading": "ちしき",
    "group": 10,
    "sourceRank": 1984
  },
  {
    "id": "jp2k-1958",
    "word": "なんとか",
    "reading": "なんとか",
    "group": 10,
    "sourceRank": 1985
  },
  {
    "id": "jp2k-1959",
    "word": "追いつく",
    "reading": "おいつく",
    "group": 10,
    "sourceRank": 1986
  },
  {
    "id": "jp2k-1960",
    "word": "鼻",
    "reading": "はな",
    "group": 10,
    "sourceRank": 1987
  },
  {
    "id": "jp2k-1961",
    "word": "白",
    "reading": "しろ",
    "group": 10,
    "sourceRank": 1988
  },
  {
    "id": "jp2k-1962",
    "word": "びっくりした",
    "reading": "びっくりした",
    "group": 10,
    "sourceRank": 1989
  },
  {
    "id": "jp2k-1963",
    "word": "埋める",
    "reading": "うめる",
    "group": 10,
    "sourceRank": 1990
  },
  {
    "id": "jp2k-1964",
    "word": "放す",
    "reading": "はなす",
    "group": 10,
    "sourceRank": 1991
  },
  {
    "id": "jp2k-1965",
    "word": "自覚",
    "reading": "じかく",
    "group": 10,
    "sourceRank": 1992
  },
  {
    "id": "jp2k-1966",
    "word": "確信",
    "reading": "かくしん",
    "group": 10,
    "sourceRank": 1993
  },
  {
    "id": "jp2k-1967",
    "word": "ついて",
    "reading": "ついて",
    "group": 10,
    "sourceRank": 1994
  },
  {
    "id": "jp2k-1968",
    "word": "遊び",
    "reading": "あそび",
    "group": 10,
    "sourceRank": 1995
  },
  {
    "id": "jp2k-1969",
    "word": "悪くなる",
    "reading": "わるくなる",
    "group": 10,
    "sourceRank": 1996
  },
  {
    "id": "jp2k-1970",
    "word": "ちょっとした",
    "reading": "ちょっとした",
    "group": 10,
    "sourceRank": 1997
  },
  {
    "id": "jp2k-1971",
    "word": "今頃",
    "reading": "いまごろ",
    "group": 10,
    "sourceRank": 1998
  },
  {
    "id": "jp2k-1972",
    "word": "香り",
    "reading": "かおり",
    "group": 10,
    "sourceRank": 1999
  },
  {
    "id": "jp2k-1973",
    "word": "色々",
    "reading": "いろいろ",
    "group": 10,
    "sourceRank": 2000
  },
  {
    "id": "jp2k-1974",
    "word": "者",
    "reading": "しゃ",
    "group": 10,
    "sourceRank": 2001
  },
  {
    "id": "jp2k-1975",
    "word": "発表",
    "reading": "はっぴょう",
    "group": 10,
    "sourceRank": 2002
  },
  {
    "id": "jp2k-1976",
    "word": "急",
    "reading": "きゅう",
    "group": 10,
    "sourceRank": 2003
  },
  {
    "id": "jp2k-1977",
    "word": "夢中",
    "reading": "むちゅう",
    "group": 10,
    "sourceRank": 2004
  },
  {
    "id": "jp2k-1978",
    "word": "かもしれん",
    "reading": "かもしれん",
    "group": 10,
    "sourceRank": 2005
  },
  {
    "id": "jp2k-1979",
    "word": "となると",
    "reading": "となると",
    "group": 10,
    "sourceRank": 2006
  },
  {
    "id": "jp2k-1980",
    "word": "地面",
    "reading": "じめん",
    "group": 10,
    "sourceRank": 2007
  },
  {
    "id": "jp2k-1981",
    "word": "自分でも",
    "reading": "じぶんでも",
    "group": 10,
    "sourceRank": 2008
  },
  {
    "id": "jp2k-1982",
    "word": "にて",
    "reading": "にて",
    "group": 10,
    "sourceRank": 2009
  },
  {
    "id": "jp2k-1983",
    "word": "手に入る",
    "reading": "てにはいる",
    "group": 10,
    "sourceRank": 2010
  },
  {
    "id": "jp2k-1984",
    "word": "にくい",
    "reading": "にくい",
    "group": 10,
    "sourceRank": 2011
  },
  {
    "id": "jp2k-1985",
    "word": "撃つ",
    "reading": "うつ",
    "group": 10,
    "sourceRank": 2013
  },
  {
    "id": "jp2k-1986",
    "word": "沈む",
    "reading": "しずむ",
    "group": 10,
    "sourceRank": 2014
  },
  {
    "id": "jp2k-1987",
    "word": "言うとおり",
    "reading": "いうとおり",
    "group": 10,
    "sourceRank": 2015
  },
  {
    "id": "jp2k-1988",
    "word": "そんなもん",
    "reading": "そんなもん",
    "group": 10,
    "sourceRank": 2016
  },
  {
    "id": "jp2k-1989",
    "word": "見逃す",
    "reading": "みのがす",
    "group": 10,
    "sourceRank": 2017
  },
  {
    "id": "jp2k-1990",
    "word": "赤",
    "reading": "あか",
    "group": 10,
    "sourceRank": 2018
  },
  {
    "id": "jp2k-1991",
    "word": "たまらない",
    "reading": "たまらない",
    "group": 10,
    "sourceRank": 2019
  },
  {
    "id": "jp2k-1992",
    "word": "からかう",
    "reading": "からかう",
    "group": 10,
    "sourceRank": 2020
  },
  {
    "id": "jp2k-1993",
    "word": "景色",
    "reading": "けしき",
    "group": 10,
    "sourceRank": 2021
  },
  {
    "id": "jp2k-1994",
    "word": "フン",
    "reading": "フン",
    "group": 10,
    "sourceRank": 2022
  },
  {
    "id": "jp2k-1995",
    "word": "去年",
    "reading": "きょねん",
    "group": 10,
    "sourceRank": 2023
  },
  {
    "id": "jp2k-1996",
    "word": "残念ながら",
    "reading": "ざんねんながら",
    "group": 10,
    "sourceRank": 2024
  },
  {
    "id": "jp2k-1997",
    "word": "受け止める",
    "reading": "うけとめる",
    "group": 10,
    "sourceRank": 2025
  },
  {
    "id": "jp2k-1998",
    "word": "手段",
    "reading": "しゅだん",
    "group": 10,
    "sourceRank": 2026
  },
  {
    "id": "jp2k-1999",
    "word": "両手",
    "reading": "りょうて",
    "group": 10,
    "sourceRank": 2027
  },
  {
    "id": "jp2k-2000",
    "word": "魔法",
    "reading": "まほう",
    "group": 10,
    "sourceRank": 2028
  }
];
