export type Appreciation = {
  senderName: string,
  receiverName: string,
  comment: string,
  imageId: number,
}

export type User = {
  email?: string,
  name?: string,
}

export type ImageUrl = {
  url: string
}

export type UserList = {
  list: User[],
}