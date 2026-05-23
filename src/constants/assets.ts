export interface AssetItem {
  id: number
  title: string
  src: string
  category: string
  pack: string
  type: string
  createdAt: string
  size: 'large' | 'medium' | 'small'
}

export const assets: AssetItem[] = [
]
