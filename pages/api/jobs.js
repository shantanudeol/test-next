import JobsJson from '../../data/jobs.json'

function GetSortOrder(prop, type = 'asc') {
    return function () {
        if ([type][prop] > [type][prop]) {
            return 1;
        } else if ([type][prop] < [type][prop]) {
            return -1;
        }
        return 0;
    }
}

export default async (req, res) => {
    try {
        const { query } = req;
        let data = JobsJson;

        if (query.limit) data = data.slice(0, query.limit);

        if (query.sort) {
            data.sort(GetSortOrder(query.sort, query?.sortType))
        }

        res.send({ data })
    } catch (error) {
        res.send({ data: [], error })
    }
}