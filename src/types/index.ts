// ===============================================
export type TTraining = {
  articles: Array<TArticle>
  trainers: Array<TTrainer>
}

export type TArticle = {
  title: string
  subtitle: string
  paragraph: string
  // image: string
}

export type TTrainer = {
  name: string
  age: string
  description: Array<string>
  image: string
}

// ===============================================
export type TIcon = {
  viewport: string
  path: JSX.Element
}

// ===============================================
export type TOpinions = {
  quotes: Array<TQuote>
  prices: Array<TPricing>
  pdf: TPDF
}

export type TQuote = {
  author: string
  age: string
  quote: string
}

export type TPricing = {
  title: string
  price: string
}

export type TPDF = {
  description: string
  fileTitle: string
  fileURL: string
}

// ===============================================