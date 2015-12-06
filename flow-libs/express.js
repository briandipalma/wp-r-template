// Type definitions for Express 4.x
// Project: http://expressjs.com
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "express" {
	declare class Send {
		(status: number, body?: any): Response;
		(body: any): Response;
	}

	declare class Request {

		/**
		 * Return request header.
		 *
		 * The `Referrer` header field is special-cased,
		 * both `Referrer` and `Referer` are interchangeable.
		 *
		 * Examples:
		 *
		 *     req.get('Content-Type');
		 *     // => "text/plain"
		 *
		 *     req.get('content-type');
		 *     // => "text/plain"
		 *
		 *     req.get('Something');
		 *     // => undefined
		 *
		 * Aliased as `req.header()`.
		 *
		 * @param name
		 */
		get (name: string): string;

		header(name: string): string;

		headers: { [key: string]: string; };

		/**
		 * Check if the given `type(s)` is acceptable, returning
		 * the best match when true, otherwise `undefined`, in which
		 * case you should respond with 406 "Not Acceptable".
		 *
		 * The `type` value may be a single mime type string
		 * such as "application/json", the extension name
		 * such as "json", a comma-delimted list such as "json, html, text/plain",
		 * or an array `["json", "html", "text/plain"]`. When a list
		 * or array is given the _best_ match, if any is returned.
		 *
		 * Examples:
		 *
		 *     // Accept: text/html
		 *     req.accepts('html');
		 *     // => "html"
		 *
		 *     // Accept: text/*, application/json
		 *     req.accepts('html');
		 *     // => "html"
		 *     req.accepts('text/html');
		 *     // => "text/html"
		 *     req.accepts('json, text');
		 *     // => "json"
		 *     req.accepts('application/json');
		 *     // => "application/json"
		 *
		 *     // Accept: text/*, application/json
		 *     req.accepts('image/png');
		 *     req.accepts('png');
		 *     // => undefined
		 *
		 *     // Accept: text/*;q=.5, application/json
		 *     req.accepts(['html', 'json']);
		 *     req.accepts('html, json');
		 *     // => "json"
		 */
		accepts(type: string): string;

		accepts(type: string[]): string;

		/**
		 * Check if the given `charset` is acceptable,
		 * otherwise you should respond with 406 "Not Acceptable".
		 *
		 * @param charset
		 */
		acceptsCharset(charset: string): boolean;

		/**
		 * Check if the given `lang` is acceptable,
		 * otherwise you should respond with 406 "Not Acceptable".
		 *
		 * @param lang
		 */
		acceptsLanguage(lang: string): boolean;

		/**
		 * Parse Range header field,
		 * capping to the given `size`.
		 *
		 * Unspecified ranges such as "0-" require
		 * knowledge of your resource length. In
		 * the case of a byte range this is of course
		 * the total number of bytes. If the Range
		 * header field is not given `null` is returned,
		 * `-1` when unsatisfiable, `-2` when syntactically invalid.
		 *
		 * NOTE: remember that ranges are inclusive, so
		 * for example "Range: users=0-3" should respond
		 * with 4 users when available, not 3.
		 *
		 * @param size
		 */
		range(size: number): any[];

		/**
		 * Return an array of Accepted languages
		 * ordered from highest quality to lowest.
		 *
		 * Examples:
		 *
		 *     Accept-Language: en;q=.5, en-us
		 *     ['en-us', 'en']
		 */
		acceptedLanguages: any[];

		/**
		 * Return an array of Accepted charsets
		 * ordered from highest quality to lowest.
		 *
		 * Examples:
		 *
		 *     Accept-Charset: iso-8859-5;q=.2, unicode-1-1;q=0.8
		 *     ['unicode-1-1', 'iso-8859-5']
		 */
		acceptedCharsets: any[];

		/**
		 * Return the value of param `name` when present or `defaultValue`.
		 *
		 *  - Checks route placeholders, ex: _/user/:id_
		 *  - Checks body params, ex: id=12, {"id":12}
		 *  - Checks query string params, ex: ?id=12
		 *
		 * To utilize request bodies, `req.body`
		 * should be an object. This can be done by using
		 * the `connect.bodyParser()` middleware.
		 *
		 * @param name
		 * @param defaultValue
		 */
		param(name: string, defaultValue?: any): string;

		/**
		 * Check if the incoming request contains the "Content-Type"
		 * header field, and it contains the give mime `type`.
		 *
		 * Examples:
		 *
		 *      // With Content-Type: text/html; charset=utf-8
		 *      req.is('html');
		 *      req.is('text/html');
		 *      req.is('text/*');
		 *      // => true
		 *
		 *      // When Content-Type is application/json
		 *      req.is('json');
		 *      req.is('application/json');
		 *      req.is('application/*');
		 *      // => true
		 *
		 *      req.is('html');
		 *      // => false
		 *
		 * @param type
		 */
		is(type: string): boolean;

		/**
		 * Return the protocol string "http" or "https"
		 * when requested with TLS. When the "trust proxy"
		 * setting is enabled the "X-Forwarded-Proto" header
		 * field will be trusted. If you're running behind
		 * a reverse proxy that supplies https for you this
		 * may be enabled.
		 */
		protocol: string;

		/**
		 * Short-hand for:
		 *
		 *    req.protocol == 'https'
		 */
		secure: boolean;

		/**
		 * Return the remote address, or when
		 * "trust proxy" is `true` return
		 * the upstream addr.
		 */
		ip: string;

		/**
		 * When "trust proxy" is `true`, parse
		 * the "X-Forwarded-For" ip address list.
		 *
		 * For example if the value were "client, proxy1, proxy2"
		 * you would receive the array `["client", "proxy1", "proxy2"]`
		 * where "proxy2" is the furthest down-stream.
		 */
		ips: string[];

		/**
		 * Return subdomains as an array.
		 *
		 * Subdomains are the dot-separated parts of the host before the main domain of
		 * the app. By default, the domain of the app is assumed to be the last two
		 * parts of the host. This can be changed by setting "subdomain offset".
		 *
		 * For example, if the domain is "tobi.ferrets.example.com":
		 * If "subdomain offset" is not set, req.subdomains is `["ferrets", "tobi"]`.
		 * If "subdomain offset" is 3, req.subdomains is `["tobi"]`.
		 */
		subdomains: string[];

		/**
		 * Short-hand for `url.parse(req.url).pathname`.
		 */
		path: string;

		/**
		 * Parse the "Host" header field hostname.
		 */
		hostname: string;

		/**
		 * @deprecated Use hostname instead.
		 */
		host: string;

		/**
		 * Check if the request is fresh, aka
		 * Last-Modified and/or the ETag
		 * still match.
		 */
		fresh: boolean;

		/**
		 * Check if the request is stale, aka
		 * "Last-Modified" and / or the "ETag" for the
		 * resource has changed.
		 */
		stale: boolean;

		/**
		 * Check if the request was an _XMLHttpRequest_.
		 */
		xhr: boolean;

		// body: { username: string; password: string; remember: boolean; title: string; };
		body: any;

		// cookies: { string; remember: boolean; };
		cookies: any;

		method: string;

		params: any;

		user: any;

		authenticatedUser: any;

		/**
		 * Clear cookie `name`.
		 *
		 * @param name
		 * @param options
		 */
		clearCookie(name: string, options?: any): Response;

		query: any;

		route: any;

		signedCookies: any;

		originalUrl: string;

		url: string;

		baseUrl: string;
	}

	declare class Response {

		/**
		 * Set status `code`.
		 *
		 * @param code
		 */
		status(code: number): Response;

		/**
		 * Set the response HTTP status code to `statusCode` and send its string representation as the
		 * response body.
		 * @link http://expressjs.com/4x/api.html#res.sendStatus
		 *
		 * Examples:
		 *
		 *    res.sendStatus(200); // equivalent to res.status(200).send('OK')
		 *    res.sendStatus(403); // equivalent to res.status(403).send('Forbidden')
		 *    res.sendStatus(404); // equivalent to res.status(404).send('Not Found')
		 *    res.sendStatus(500); // equivalent to res.status(500).send('Internal Server Error')
		 *
		 * @param code
		 */
		sendStatus(code: number): Response;

		/**
		 * Set Link header field with the given `links`.
		 *
		 * Examples:
		 *
		 *    res.links({
		 *      next: 'http://api.example.com/users?page=2',
		 *      last: 'http://api.example.com/users?page=5'
		 *    });
		 *
		 * @param links
		 */
		links(links: any): Response;

		/**
		 * Send a response.
		 *
		 * Examples:
		 *
		 *     res.send(new Buffer('wahoo'));
		 *     res.send({ some: 'json' });
		 *     res.send('<p>some html</p>');
		 *     res.send(404, 'Sorry, cant find that');
		 *     res.send(404);
		 */
		send: Send;

		/**
		 * Send JSON response.
		 *
		 * Examples:
		 *
		 *     res.json(null);
		 *     res.json({ user: 'tj' });
		 *     res.json(500, 'oh noes!');
		 *     res.json(404, 'I dont have that');
		 */
		json: Send;

		/**
		 * Send JSON response with JSONP callback support.
		 *
		 * Examples:
		 *
		 *     res.jsonp(null);
		 *     res.jsonp({ user: 'tj' });
		 *     res.jsonp(500, 'oh noes!');
		 *     res.jsonp(404, 'I dont have that');
		 */
		jsonp: Send;

		/**
		 * Transfer the file at the given `path`.
		 *
		 * Automatically sets the _Content-Type_ response header field.
		 * The callback `fn(err)` is invoked when the transfer is complete
		 * or when an error occurs. Be sure to check `res.sentHeader`
		 * if you wish to attempt responding, as the header and some data
		 * may have already been transferred.
		 *
		 * Options:
		 *
		 *   - `maxAge`   defaulting to 0 (can be string converted by `ms`)
		 *   - `root`     root directory for relative filenames
		 *   - `headers`  object of headers to serve with file
		 *   - `dotfiles` serve dotfiles, defaulting to false; can be `"allow"` to send them
		 *
		 * Other options are passed along to `send`.
		 *
		 * Examples:
		 *
		 *  The following example illustrates how `res.sendFile()` may
		 *  be used as an alternative for the `static()` middleware for
		 *  dynamic situations. The code backing `res.sendFile()` is actually
		 *  the same code, so HTTP cache support etc is identical.
		 *
		 *     app.get('/user/:uid/photos/:file', function(req, res){
		 *       var uid = req.params.uid
		 *         , file = req.params.file;
		 *
		 *       req.user.mayViewFilesFrom(uid, function(yes){
		 *         if (yes) {
		 *           res.sendFile('/uploads/' + uid + '/' + file);
		 *         } else {
		 *           res.send(403, 'Sorry! you cant see that.');
		 *         }
		 *       });
		 *     });
		 *
		 * @api public
		 */
		sendFile(path: string): void;
		sendFile(path: string, options: any): void;

		/**
		 * @deprecated Use sendFile instead.
		 */
		sendfile(path: string): void;

		/**
		 * @deprecated Use sendFile instead.
		 */

		sendfile(path: string, options: any): void;

		/**
		 * Transfer the file at the given `path` as an attachment.
		 *
		 * Optionally providing an alternate attachment `filename`,
		 * and optional callback `fn(err)`. The callback is invoked
		 * when the data transfer is complete, or when an error has
		 * ocurred. Be sure to check `res.headerSent` if you plan to respond.
		 *
		 * This method uses `res.sendfile()`.
		 */
		download(path: string): void;
		download(path: string, filename: string): void;

		/**
		 * Set _Content-Type_ response header with `type` through `mime.lookup()`
		 * when it does not contain "/", or set the Content-Type to `type` otherwise.
		 *
		 * Examples:
		 *
		 *     res.type('.html');
		 *     res.type('html');
		 *     res.type('json');
		 *     res.type('application/json');
		 *     res.type('png');
		 *
		 * @param type
		 */
		contentType(type: string): Response;

		/**
		 * Set _Content-Type_ response header with `type` through `mime.lookup()`
		 * when it does not contain "/", or set the Content-Type to `type` otherwise.
		 *
		 * Examples:
		 *
		 *     res.type('.html');
		 *     res.type('html');
		 *     res.type('json');
		 *     res.type('application/json');
		 *     res.type('png');
		 *
		 * @param type
		 */
		type(type: string): Response;

		/**
		 * Respond to the Acceptable formats using an `obj`
		 * of mime-type callbacks.
		 *
		 * This method uses `req.accepted`, an array of
		 * acceptable types ordered by their quality values.
		 * When "Accept" is not present the _first_ callback
		 * is invoked, otherwise the first match is used. When
		 * no match is performed the server responds with
		 * 406 "Not Acceptable".
		 *
		 * Content-Type is set for you, however if you choose
		 * you may alter this within the callback using `res.type()`
		 * or `res.set('Content-Type', ...)`.
		 *
		 *    res.format({
		 *      'text/plain': function(){
		 *        res.send('hey');
		 *      },
		 *
		 *      'text/html': function(){
		 *        res.send('<p>hey</p>');
		 *      },
		 *
		 *      'appliation/json': function(){
		 *        res.send({ message: 'hey' });
		 *      }
		 *    });
		 *
		 * In addition to canonicalized MIME types you may
		 * also use extnames mapped to these types:
		 *
		 *    res.format({
		 *      text: function(){
		 *        res.send('hey');
		 *      },
		 *
		 *      html: function(){
		 *        res.send('<p>hey</p>');
		 *      },
		 *
		 *      json: function(){
		 *        res.send({ message: 'hey' });
		 *      }
		 *    });
		 *
		 * By default Express passes an `Error`
		 * with a `.status` of 406 to `next(err)`
		 * if a match is not made. If you provide
		 * a `.default` callback it will be invoked
		 * instead.
		 *
		 * @param obj
		 */
		format(obj: any): Response;

		/**
		 * Set _Content-Disposition_ header to _attachment_ with optional `filename`.
		 *
		 * @param filename
		 */
		attachment(filename?: string): Response;

		/**
		 * Set header `field` to `val`, or pass
		 * an object of header fields.
		 *
		 * Examples:
		 *
		 *    res.set('Foo', ['bar', 'baz']);
		 *    res.set('Accept', 'application/json');
		 *    res.set({ Accept: 'text/plain', 'X-API-Key': 'tobi' });
		 *
		 * Aliased as `res.header()`.
		 */
		set(field: any): Response;
		set(field: string, value?: string): Response;

		header(field: any): Response;
		header(field: string, value?: string): Response;

		// Property indicating if HTTP headers has been sent for the response.
		headersSent: boolean;

		/**
		 * Get value for header `field`.
		 *
		 * @param field
		 */
		get (field: string): string;

		/**
		 * Clear cookie `name`.
		 *
		 * @param name
		 * @param options
		 */
		clearCookie(name: string, options?: any): Response;

		/**
		 * Set cookie `name` to `val`, with the given `options`.
		 *
		 * Options:
		 *
		 *    - `maxAge`   max-age in milliseconds, converted to `expires`
		 *    - `signed`   sign the cookie
		 *    - `path`     defaults to "/"
		 *
		 * Examples:
		 *
		 *    // "Remember Me" for 15 minutes
		 *    res.cookie('rememberme', '1', { expires: new Date(Date.now() + 900000), httpOnly: true });
		 *
		 *    // save as above
		 *    res.cookie('rememberme', '1', { maxAge: 900000, httpOnly: true })
		 */
		cookie(name: string, val: any): Response;

		/**
		 * Set the location header to `url`.
		 *
		 * The given `url` can also be the name of a mapped url, for
		 * example by default express supports "back" which redirects
		 * to the _Referrer_ or _Referer_ headers or "/".
		 *
		 * Examples:
		 *
		 *    res.location('/foo/bar').;
		 *    res.location('http://example.com');
		 *    res.location('../login'); // /blog/post/1 -> /blog/login
		 *
		 * Mounting:
		 *
		 *   When an application is mounted and `res.location()`
		 *   is given a path that does _not_ lead with "/" it becomes
		 *   relative to the mount-point. For example if the application
		 *   is mounted at "/blog", the following would become "/blog/login".
		 *
		 *      res.location('login');
		 *
		 *   While the leading slash would result in a location of "/login":
		 *
		 *      res.location('/login');
		 *
		 * @param url
		 */
		location(url: string): Response;

		/**
		 * Redirect to the given `url` with optional response `status`
		 * defaulting to 302.
		 *
		 * The resulting `url` is determined by `res.location()`, so
		 * it will play nicely with mounted apps, relative paths,
		 * `"back"` etc.
		 *
		 * Examples:
		 *
		 *    res.redirect('/foo/bar');
		 *    res.redirect('http://example.com');
		 *    res.redirect(301, 'http://example.com');
		 *    res.redirect('http://example.com', 301);
		 *    res.redirect('../login'); // /blog/post/1 -> /blog/login
		 */
		redirect(url: string): void;
		redirect(status: number, url: string): void;
		redirect(url: string, status: number): void;

		/**
		 * Render `view` with the given `options` and optional callback `fn`.
		 * When a callback function is given a response will _not_ be made
		 * automatically, otherwise a response of _200_ and _text/html_ is given.
		 *
		 * Options:
		 *
		 *  - `cache`     boolean hinting to the engine it should cache
		 *  - `filename`  filename of the view being rendered
		 */
		render(view: string, options?: Object, callback?: (err: Error, html: string) => void): void;
		render(view: string, callback?: (err: Error, html: string) => void): void;

		locals: any;

		charset: string;
	}
}
