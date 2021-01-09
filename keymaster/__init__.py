from flask import Flask, send_from_directory, jsonify
from werkzeug.exceptions import InternalServerError


def create_app():
    """Initialize the core application."""
    # app = Flask(__name__, instance_relative_config=False, static_url_path='', static_folder='static',)
    app = Flask(__name__, instance_relative_config=False)
    app.config.from_object('config.Config')


    # @app.errorhandler(404)
    # def not_found(path):
    #     """Page not found."""
    #     print(path)
    #     return send_from_directory('static', path)
    #     # return make_response(render_template("404.html"), 404)

    # app.url_map.strict_slashes = False

    # Initialize Plugins
    # db.init_app(app)
    # r.init_app(app)

    with app.app_context():
        # from . import routes  # Import routes

        # Import parts of our application
        from .home import home
        from .settings.blueprint import settings_bp
        # from .artist import artist
        # from .exercise import exercise

        # Register Blueprints
        app.register_blueprint(settings_bp, url_prefix="/settings")
        app.register_blueprint(home.home_bp)
        # app.register_blueprint(artist.artist_bp, url_prefix="/api/artist")
        # app.register_blueprint(exercise.exercise_bp, url_prefix="/exercise")
        # app.register_blueprint(admin.admin_bp)

        # db.create_all()  # Create sql tables for our data models

        # @app.route('/<path:path>')
        # def static_file(path):
        #     """
        #     Catch-All route used to route all not-found pages to the index.html
        #     This is used for HTML5 routing
        #     """
        #     print(f"static_file={path}")
        #     return app.send_static_file("index.html")
        # @app.errorhandler(InternalServerError)
        # def handle_bad_request(ex):
        #     print(f"error {ex}")
        #     return jsonify(ex), 500

        print(app.url_map)
        print(app.config)

        return app

# from flask import Flask

# app = Flask(__name__)
# app.config.from_object('config.DevConfig')
# #app.config['SQLALCHEMY_DATABASE_URI'] = "mysql://baoMaster:baoMaster@127.0.0.1/guitar_pi"

# import guitarpi.views

# from guitarpi.simple_page import simple_page
# app.register_blueprint(simple_page, url_prefix='/pages')

# print(app.url_map)
# print(app.config)

# # from guitarpi.db import init_db
# # init_db()

