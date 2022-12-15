# Angular elements POC

## Build Instructions

### Build Setup

* Clone `angular-element-poc` inside your workspace dir.
* Install `nvm` for linux or mac from this [url](https://github.com/creationix/nvm#installation-and-update)
* Install this specific version of `nodejs` using `nvm` : `nvm install v16` 
* Check `nodejs` version by typing : `node -v`
* If multiple versions are installed use the correct version : `nvm use v16` for Mac/Linux.
* Remove `package-lock.json` and `node_modules` folders if they are exist in the directory
* Install dependencies : `npm install`
* Install gulp cli to streamline building of files: `npm install -g gulp-cli`
* Install http-server to serve the build files: `npm install -g http-server`
* Perform the following steps in the same order in 2 parallel terminals:
  > gulp watch

  > http-server --path=public --port=4200

* Use the below credentials to login. These are fake credentials that are available(https://reqres.in/)
```
  email: eve.holt@reqres.in
  password: cityslicka
```