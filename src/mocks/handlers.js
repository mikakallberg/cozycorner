import { rest } from "msw";

const baseURL = "https://moments-drf-api-app.herokuapp.com/";

export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
        return res(
            ctx.json({
                pk: 19,
                username: "Sean",
                email: "",
                first_name: "",
                last_name: "",
                profile_id: 19,
                profile_image: "https://res.cloudinary.com/mikakallberg/image/upload/v1/media/../default_profile_xx821h"
            })
        );
    }),
    rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
    }),
];