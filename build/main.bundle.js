/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("sequelize");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";




const app = __webpack_require__(3);
const debug = __webpack_require__(9)('team1:server');
const http = __webpack_require__(10);

let port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);

server.listen(port, function() {
    console.log('Server started on ' +  port);
});

server.on('error', onError);
server.on('listening', onListening);

function normalizePort(val) {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
}

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening() {
    let addr = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename, __dirname) {

const express = __webpack_require__(0);
const path = __webpack_require__(12);
const logger = __webpack_require__(11);
const cookieParser = __webpack_require__(8);
const bodyParser = __webpack_require__(7);
const remoteStatic = __webpack_require__(14);
// const React = require('react');
// const createStore = require('redux').createStore;
// const Provider = require('react-redux').Provider;
// const renderToString = require('react-dom/server');
//
// const counterApp = require('./views/redux/reducer/index');

const api = __webpack_require__(6);

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// **************

// app.use(handleRender);
//
//
// function handleRender(req, res) {
//     const store = createStore(counterApp);
//
//     const html = renderToString(
//         <Provider store={store}>
//             <App />
//         </Provider>
//     )
// }
// function renderFullPage(html, preloadedState) { /* ... */ }

// **************

app.use('/api', api);
console.log('path is: ' + __filename);
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));
app.use('/', process.env.NODE_ENV === 'production'
    ? remoteStatic('https://team1.surge.sh')
    : express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function (err, req, res) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;

/* WEBPACK VAR INJECTION */}.call(exports, "app.js", ""))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const Sequelize = __webpack_require__(1);
const initializeDb = __webpack_require__(5).init;

initializeDb(function (sequelize) {
    const quest = sequelize.define('quest', {
        id: {
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING,
            allowNull: true
        }
    });

    quest.sync({ force: true })
        .then(function () {
            quest.create({
                title: 'FirstQuest',
                description: 'no description'
            });
        })
        .then(function () {
            quest.create({
                title: 'SecondQuest',
                description: 'Lets play to this facking quest hahaha hahaha hahaha hahaha hahaha hahaha hahaha hahaha hahaha ................................ bla bla bla bla'
            });
        })
        .then(function () {
            quest.create({
                title: 'ThirdQuest',
                description: 'Lets play to this facking quest hahaha hahaha hahaha hahaha hahaha hahaha hahaha hahaha hahaha ................................ bla bla bla bla'
            });
        })
        .then(function () {
            quest.create({
                title: 'FourthQuest',
                description: 'Lets play to this facking quest hahaha hahaha hahaha hahaha hahaha hahaha hahaha hahaha hahaha ................................ bla bla bla bla'
            });
        })
        .then(function () {
            quest.create({
                title: 'FifthQuest',
                description: 'Lets play to this facking quest hahaha hahaha hahaha hahaha hahaha hahaha hahaha hahaha hahaha ................................ bla bla bla bla'
            });
        })
        .then(function () {
            quest.create({
                title: 'SixthQuest',
                description: 'Lets play to this facking quest hahaha hahaha hahaha hahaha hahaha hahaha hahaha hahaha hahaha ................................ bla bla bla bla'
            });
        })
        .catch(function (err) {
            throw err;
        });

    module.exports.Quest = quest;
});


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const Sequelize = __webpack_require__(1);
const pg = __webpack_require__(13);

function getSequelize(connectionString) {
    return new Sequelize(connectionString, {
        dialectOptions: { charset: 'utf8' }
    });
}

module.exports.init = function (callback) {
    const dbName = 'quest';
    const username = 'postgres';
    const password = 'qwer';
    const host = 'localhost';

    const connectionString = process.env.CONNECTION_STRING;
    if (connectionString) {
        callback(getSequelize(connectionString));
        return;
    }

    const connectToPostgres = `postgres://${username}:${password}@${host}/postgres`;
    const connectToDb = `postgres://${username}:${password}@${host}/${dbName}`;

    pg.connect(connectToPostgres, function (err, client, done) {
        client.query('CREATE DATABASE ' + dbName, function (err) {
            const sequelize = new Sequelize(connectToDb, {
                dialectOptions: {charset: 'utf8'}
            });

            callback(sequelize);
            client.end();
        });
    });
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const express = __webpack_require__(0);
const database = __webpack_require__(4);

const router = express.Router();

router.get('/quests', function (req, res) {
    database.Quest.findAll()
        .then(quests => res.json(quests));
});

router.get('/quests/id/:id', function (req, res) {
    const id = req.params.id;
    database.Quest.findById(id)
        .then(quest => res.json(quest));
});

router.get('/quests/name/:name', function (req, res) {
    const name = req.params.name;
    database.Quest.findAll()
        .then(quests => {
            res.json(quests.filter(quest => quest.title.toLowerCase().startsWith(name.toLowerCase())));
        });
});

module.exports = router;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("debug");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("pg");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("remote-static");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ })
/******/ ]);
//# sourceMappingURL=main.bundle.js.map