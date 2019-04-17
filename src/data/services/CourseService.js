import Request from 'superagent';
import PubSub from 'pubsub-js';

export let courselist = [];
export let coursecontent = [];

Request.get("http://162.241.222.49:8894/rest-api/courses").then(
    (res) => {
        for (let x in res.body) {
            courselist.push(res.body[x]);
            PubSub.publish('courseupdate', 'success');
        }

    }
).catch(
    () => console.log("Data not Loaded")
)

