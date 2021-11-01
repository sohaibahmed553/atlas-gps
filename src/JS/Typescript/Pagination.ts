export interface PaginationInfo {
    perPage: number;
    currentPage: number;
    total: number;
}
export interface PaginationInfoDetail extends PaginationInfo {
    startingItem?: number;
    endingItem?: number;
    totalPages?: number;
}

export interface PaginatedData<T> {
    data: T[];
    meta: {
        pagination: PaginationInfoDetail;
    };
}

export type WithPaginationParams<T> = {
    [K in keyof T]: T[K];
} & {
    page: number | string;
    perPage?: number | string;
};

export function paginate<T>(
    data: T[],
    paginationDef: PaginationInfo
): PaginatedData<T> {
    const start = (paginationDef.currentPage - 1) * paginationDef.perPage;
    return {
        data: data.slice(start, start + paginationDef.perPage),
        meta: {
            pagination: extractPaginationDetail(paginationDef),
        },
    };
}

export function extractPaginationDetail(
    info: PaginationInfo
): PaginationInfoDetail {
    return {
        ...info,
        startingItem: (info.currentPage - 1) * info.perPage + 1,
        endingItem: Math.min(
            (info.currentPage - 1) * info.perPage + info.perPage,
            info.total
        ),
        totalPages: parseInt(Math.ceil(info.total / info.perPage).toString()),
    };
}

export function getPagesRange(currentPage: number, endPage: number) {
    const pages: number[] = [];
    const lookup = 3;
    const tmpMin = Math.max(currentPage - lookup, 1);
    const tmpMax = Math.min(currentPage + lookup, endPage);
    const max = Math.min(
        currentPage + lookup + (lookup - (currentPage - tmpMin)),
        endPage
    );
    const min = Math.max(
        currentPage - lookup - (lookup - (tmpMax - currentPage)),
        1
    );
    for (let x = min; x <= max; ++x) {
        pages.push(x);
    }

    return pages.filter((page) => page >= 1 && page <= endPage);
}
