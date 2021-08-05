import Mock from 'mockjs';
import qs from 'querystring';
Mock.mock("/api/blogtype", 'get', {
    code: 0,
    msg: "",
    "data|10-20": [
        {
            "id|+1": 1,
            name: "分类@id",
            "articleCount|0-300": 0,
            "order|+1": 10,
        },
    ],
});

Mock.mock(/^\/api\/blog(\?.+)?$/, 'get', options => {
    const query  = qs.parse(options.url);
    console.log(query);
    return Mock.mock({
        code: 0,
        msg: '',
       data: {
            "total|2000-3000": 210,
            "rows|20": [{
            }]
        }
    })
})

