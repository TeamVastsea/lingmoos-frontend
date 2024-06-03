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

export async function getGitlabFiles(page: number): Promise<Array<BlogInfo>> {
    const file = await GitlabClient.RepositoryFiles.showRaw(130, `index-${page}.json`, 'main').catch((e) => { throw e; });
    const res: BlogInfo[] = JSON.parse(file as string);
    return res.map((e) => new BlogInfo(e.filePath, e.label, e.cover, e.time));
}

export async function getGitlabPost(index: number): Promise<BlogInfo> {
    const page = index / 10;
    const postIndex = index % 10;

    const list = await getGitlabFiles(page);

    return list.at(postIndex)!;
}
