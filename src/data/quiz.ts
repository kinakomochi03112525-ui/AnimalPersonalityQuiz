export type AnimalId =
  | 'cat'
  | 'dog'
  | 'penguin'
  | 'redPanda'
  | 'otter'
  | 'owl'
  | 'rabbit'
  | 'dolphin'

export type Animal = {
  id: AnimalId
  name: string
  emoji: string
  tagline: string
  description: string
  traits: string[]
  shareLine: string
  accent: string
}

export type Option = {
  label: string
  scores: Partial<Record<AnimalId, number>>
}

export type Question = {
  id: string
  text: string
  options: Option[]
}

export const animals: Record<AnimalId, Animal> = {
  cat: {
    id: 'cat',
    name: 'ねこ',
    emoji: '🐱',
    tagline: 'マイペースなご主人さま',
    description:
      '自分のリズムを大切にしながら、すきな場所でぬくぬく。気ままに見えて、ちゃんと大事な人は見てます。',
    traits: ['ひとり時間だいすき', '直感で動く', '甘えんぼは選ばれた人だけ'],
    shareLine: 'わたしは【ねこ】タイプ。マイペースにぬくぬく生きてるよ。',
    accent: '#f4a261',
  },
  dog: {
    id: 'dog',
    name: 'いぬ',
    emoji: '🐶',
    tagline: '元気いっぱいの相棒',
    description:
      'だれかと一緒だとテンション上がるタイプ。素直でまっすぐ、たのしいことを見つけるのが上手。',
    traits: ['チームプレイ好き', 'ポジティブ全開', '信頼されると全力'],
    shareLine: 'わたしは【いぬ】タイプ。一緒にいると元気になれるよ！',
    accent: '#e76f51',
  },
  penguin: {
    id: 'penguin',
    name: 'ペンギン',
    emoji: '🐧',
    tagline: 'クールにまとまる計画派',
    description:
      '落ち着いていて、段取り上手。みんなと歩調を合わせつつ、自分のペースもキープできるバランス型。',
    traits: ['計画的', '仲間思い', '静かなユーモア'],
    shareLine: 'わたしは【ペンギン】タイプ。クールに、でも仲間と一緒に。',
    accent: '#2a9d8f',
  },
  redPanda: {
    id: 'redPanda',
    name: 'レッサーパンダ',
    emoji: '🐼',
    tagline: 'ゆるふわスローライフ',
    description:
      '急がなくてOK。おいしいもの・かわいいもの・のんびりが幸せの三原則。見た目以上に芯がある。',
    traits: ['スローライフ志向', '感性豊か', '意外と頑固'],
    shareLine: 'わたしは【レッサーパンダ】タイプ。ゆるふわに生きてます。',
    accent: '#e9c46a',
  },
  otter: {
    id: 'otter',
    name: 'カワウソ',
    emoji: '🦦',
    tagline: '好奇心いっぱいの冒険家',
    description:
      '新しいことにはとりあえず触ってみる。遊び心があって、まわりを笑顔にするムードメーカー。',
    traits: ['好奇心旺盛', '手を動かすのが好き', 'ノリがいい'],
    shareLine: 'わたしは【カワウソ】タイプ。今日も何かおもしろいこと探し中！',
    accent: '#457b9d',
  },
  owl: {
    id: 'owl',
    name: 'ふくろう',
    emoji: '🦉',
    tagline: '夜ふかし思索タイプ',
    description:
      '静かな時間にアイデアが湧く人。深く考えてから動くので、一言に重みがある。',
    traits: ['夜型気質', '観察上手', 'じっくり派'],
    shareLine: 'わたしは【ふくろう】タイプ。静かに考えて、ふっと動くよ。',
    accent: '#6d597a',
  },
  rabbit: {
    id: 'rabbit',
    name: 'うさぎ',
    emoji: '🐰',
    tagline: 'やさしく繊細なしっぽ',
    description:
      '空気を読んで、まわりをそっと気遣える。安心できる場所だと、びっくりするくらい素直でかわいい。',
    traits: ['共感力高め', '安心できる場所だいじ', '小さな幸せに敏感'],
    shareLine: 'わたしは【うさぎ】タイプ。やさしく、ときどきぴょんっ。',
    accent: '#f28482',
  },
  dolphin: {
    id: 'dolphin',
    name: 'イルカ',
    emoji: '🐬',
    tagline: 'きらめくコミュニケーション',
    description:
      '話すのも聞くのも上手。場を明るくしつつ、ちゃんと相手の気持ちにも寄せられるタレント気質。',
    traits: ['会話上手', '楽観的', 'つながりを大切に'],
    shareLine: 'わたしは【イルカ】タイプ。きらめきながらつながってるよ〜。',
    accent: '#4cc9f0',
  },
}

export const questions: Question[] = [
  {
    id: 'weekend',
    text: '休日の朝、いちばんしっくりくるのは？',
    options: [
      {
        label: '二度寝して、ゆるっと起きる',
        scores: { cat: 2, redPanda: 2, rabbit: 1 },
      },
      {
        label: '早起きして外に出かける',
        scores: { dog: 2, otter: 2, dolphin: 1 },
      },
      {
        label: '計画どおりに動く',
        scores: { penguin: 2, owl: 1 },
      },
      {
        label: '誰かと朝ごはん約束',
        scores: { dolphin: 2, dog: 1, penguin: 1 },
      },
    ],
  },
  {
    id: 'snack',
    text: 'おやつタイムの気分は？',
    options: [
      {
        label: 'ひとりで静かに味わう',
        scores: { cat: 2, owl: 2, rabbit: 1 },
      },
      {
        label: 'みんなでわいわいシェア',
        scores: { dog: 2, dolphin: 2, otter: 1 },
      },
      {
        label: 'かわいい見た目が大事',
        scores: { redPanda: 2, rabbit: 2 },
      },
      {
        label: '新しい味に挑戦！',
        scores: { otter: 2, dolphin: 1, penguin: 1 },
      },
    ],
  },
  {
    id: 'chat',
    text: '友だちとの連絡、どっち寄り？',
    options: [
      {
        label: '必要なときだけサクッと',
        scores: { cat: 2, owl: 2, penguin: 1 },
      },
      {
        label: 'こまめにスタンプ往復',
        scores: { dog: 2, dolphin: 2, rabbit: 1 },
      },
      {
        label: '長文でじっくり語る',
        scores: { owl: 2, rabbit: 1, dolphin: 1 },
      },
      {
        label: '会って話すのがいちばん',
        scores: { otter: 2, dog: 1, penguin: 1 },
      },
    ],
  },
  {
    id: 'room',
    text: '理想の自分のへやは？',
    options: [
      {
        label: 'ぬくぬく巣ごもり空間',
        scores: { cat: 2, redPanda: 2, rabbit: 1 },
      },
      {
        label: 'すっきり整ったミニマル',
        scores: { penguin: 2, owl: 1 },
      },
      {
        label: 'おもしろグッズがいっぱい',
        scores: { otter: 2, dog: 1, dolphin: 1 },
      },
      {
        label: 'いつでも人を呼べるリビング感',
        scores: { dolphin: 2, dog: 2 },
      },
    ],
  },
  {
    id: 'trouble',
    text: 'ちょっと困ったとき、どうする？',
    options: [
      {
        label: 'いったん距離をとって考える',
        scores: { cat: 2, owl: 2, redPanda: 1 },
      },
      {
        label: 'だれかに相談する',
        scores: { dog: 2, dolphin: 2, rabbit: 1 },
      },
      {
        label: '手順を書き出して整理',
        scores: { penguin: 2, owl: 1 },
      },
      {
        label: '手を動かして解決してみる',
        scores: { otter: 2, dog: 1 },
      },
    ],
  },
  {
    id: 'trip',
    text: '旅行するなら、どんなスタイル？',
    options: [
      {
        label: '温泉でぼーっと過ごす',
        scores: { redPanda: 2, cat: 2, rabbit: 1 },
      },
      {
        label: 'アクティビティ満載',
        scores: { otter: 2, dog: 2, dolphin: 1 },
      },
      {
        label: 'きちんと下調べして周遊',
        scores: { penguin: 2, owl: 1 },
      },
      {
        label: '現地の人と交流したい',
        scores: { dolphin: 2, dog: 1, otter: 1 },
      },
    ],
  },
  {
    id: 'night',
    text: '夜の過ごし方に近いのは？',
    options: [
      {
        label: '深夜まで趣味に没頭',
        scores: { owl: 3, cat: 1 },
      },
      {
        label: '早めに寝て翌日に備える',
        scores: { penguin: 2, rabbit: 1, redPanda: 1 },
      },
      {
        label: '友だちと夜ふかしトーク',
        scores: { dolphin: 2, dog: 1, otter: 1 },
      },
      {
        label: 'ゆるい動画を眺めながら寝る',
        scores: { redPanda: 2, cat: 1, rabbit: 1 },
      },
    ],
  },
  {
    id: 'music',
    text: 'いま聴きたい音楽は？',
    options: [
      {
        label: '落ち着いたインスト',
        scores: { owl: 2, penguin: 1, cat: 1 },
      },
      {
        label: 'アップテンポで元気が出る曲',
        scores: { dog: 2, otter: 2, dolphin: 1 },
      },
      {
        label: 'やさしいボサノバやLo-fi',
        scores: { redPanda: 2, rabbit: 2 },
      },
      {
        label: 'みんなが知ってるポップス',
        scores: { dolphin: 2, dog: 1, penguin: 1 },
      },
    ],
  },
  {
    id: 'gift',
    text: 'うれしいプレゼントは？',
    options: [
      {
        label: 'ひとりで使えるこだわりグッズ',
        scores: { cat: 2, owl: 2 },
      },
      {
        label: '一緒に使える体験チケット',
        scores: { dog: 2, dolphin: 2, otter: 1 },
      },
      {
        label: 'ふわふわ・かわいいもの',
        scores: { rabbit: 2, redPanda: 2 },
      },
      {
        label: '実用的でちゃんとしてるもの',
        scores: { penguin: 2, owl: 1 },
      },
    ],
  },
  {
    id: 'motto',
    text: 'いまの気分に近いモットーは？',
    options: [
      {
        label: '自分のペースがいちばん',
        scores: { cat: 2, redPanda: 2 },
      },
      {
        label: '笑顔は伝染する',
        scores: { dog: 2, dolphin: 2, otter: 1 },
      },
      {
        label: '準備が成功をつくる',
        scores: { penguin: 2, owl: 1 },
      },
      {
        label: '小さな優しさを大切に',
        scores: { rabbit: 3, dolphin: 1 },
      },
    ],
  },
]

export function scoreQuiz(answers: number[]): Animal {
  const totals: Record<AnimalId, number> = {
    cat: 0,
    dog: 0,
    penguin: 0,
    redPanda: 0,
    otter: 0,
    owl: 0,
    rabbit: 0,
    dolphin: 0,
  }

  answers.forEach((optionIndex, questionIndex) => {
    const question = questions[questionIndex]
    const option = question?.options[optionIndex]
    if (!option) return
    for (const [animalId, points] of Object.entries(option.scores)) {
      totals[animalId as AnimalId] += points ?? 0
    }
  })

  const ranked = (Object.keys(totals) as AnimalId[]).sort(
    (a, b) => totals[b] - totals[a] || a.localeCompare(b),
  )

  return animals[ranked[0]]
}
