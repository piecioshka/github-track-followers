export interface GithubUrlOptions {
    username: string;
    page: number;
}

export const perPage = 100;

export const defaultFormat = "plain";

export function githubUrl({ username, page }: GithubUrlOptions): string {
    return `https://api.github.com/users/${username}/followers?per_page=${perPage}&page=${page}`;
}
