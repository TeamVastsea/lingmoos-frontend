import { Gitlab } from '@gitbeaker/rest';

const GitlabClient = new Gitlab({ host: 'https://git.lingmo.org', token: '' });

export class BlogInfo {
    public filePath: string;
    public label: string;
    public cover: string;
    public time: Date;

    constructor(filePath: string, label: string, cover: string, time: Date) {
        this.filePath = filePath;
        this.label = label;
        this.cover = cover;
        this.time = time;
    }

    fetchContent(): Promise<string> {
        return GitlabClient.RepositoryFiles.showRaw(130, this.filePath, 'main') as Promise<string>;
    }

    fetchCover(): Promise<string> {
        return GitlabClient.RepositoryFiles.showRaw(130, this.cover, 'main').then((e) => {
            if (e instanceof Blob) {
                return URL.createObjectURL(e);
            }
            return e;
        }) as Promise<string>;
    }
}

export async function getGitlabFiles(): Promise<Array<BlogInfo>> {
    const file = await GitlabClient.RepositoryFiles.showRaw(130, 'index.json', 'main').catch((e) => { throw e; });
    const res: BlogInfo[] = JSON.parse(file as string);
    return res.map((e) => new BlogInfo(e.filePath, e.label, e.cover, e.time));
}
