
# Live News API

This is an app generated using the [Sails Framework](https://sailsjs.com/) and provide the data used by the [Live News Front](https://github.com/SoWellApp/live-news-front) app.
Once the app starts running, it generates Posts periodically until the generation is stopped manually.

The app consists exposes the following models:

- **User**:
```json
{
  pseudo: { type:  'string', unique:  true, required:  true },
  avatar: { type:  'string' },
  email: { type:  'string', required:  true, isEmail:  true },
  posts: {
    collection:  'post',
    via:  'author'
  }
}
```
- **Post**:
```json
{
  title: { type:  'string', required:  true },
  body: { type:  'string', required:  true },
  author: {
    model:  'user',
    required: true
  }
}
```

## Prerequisites

You will need node version ^19 to run the application on your local environment.
Install the sails CLI via the command:
```cmd
yarn global add sails
```

## Install the dependencies

```bash
yarn
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
yarn dev
```

## Endpoints
### Base URL
> http://localhost:1337/api
### User
| Action        | Endpoint      | Method | Response |
|---------------|---------------|--------|----------|
| Get ALL Users | /users        | GET    |User[]    |
| Get One User  | /user/:userId | GET    |User      |

### Post:
| Action        | Endpoint      | Method | Response | Params                                                                              |
|---------------|---------------|--------|----------|-------------------------------------------------------------------------------------|
| Get ALL Posts | /posts        | GET    |Post[]    |                                                                                     |
| Get One Post  | /post/:postId | GET    |Post      |                                                                                     |
| Find Posts  | /post/find      | GET    |Post[]    | [Details](https://sailsjs.com/documentation/reference/blueprint-api/find-where)     |
### Job
| Action    | Endpoint          | Method | Response |
|-----------|-------------------|--------|----------|
| Start Job | /posts/job/start  | POST   | boolean  |
| Stop Job  | /posts/job/stop   | POST   | boolean  |

## Notices
### Posts generation
Make sure to let the app generate enough Posts before stopping the generation job. You can restart the generation job if you still need to generate more Posts.
### Memory
The data generated will be saved as long as the server is running. If you restart the server, all the generated data will be lost.
