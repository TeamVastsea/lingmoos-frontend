import { Gitlab } from '@gitbeaker/rest';

const GitlabClient = new Gitlab({ host: 'https://git.lingmo.org', token: '' });

export class BlogInfo {
    public filePath: string;
    public label: string;
    public cover: string;

    constructor(filePath: string, label: string, cover: string) {
        this.filePath = filePath;
        this.label = label;
        this.cover = cover;
    }

    fetchContent(): Promise<string> {
        return GitlabClient.RepositoryFiles.showRaw(130, this.filePath, 'main') as Promise<string>;
    }

    fetchCover(): Promise<string> {
        return GitlabClient.RepositoryFiles.showRaw(130, this.cover, 'main') as Promise<string>;
    }
}

export async function getGitlabFiles(): Promise<Array<BlogInfo>> {
    const file = await GitlabClient.RepositoryFiles.showRaw(130, 'index.json', 'main');
    const res: BlogInfo[] = JSON.parse(file as string);
    return res.map((e) => new BlogInfo(e.filePath, e.label, e.cover));
}
