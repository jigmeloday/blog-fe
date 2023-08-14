import { UserModel } from '@/app/services/models/users.model';

export interface ArticleModel {
    title: string
    body: string
    comment_count: number
    created_at: string
    following: boolean
    id: number
    like_count: number
    liked_by_current_user: boolean
    owner: UserModel
}
