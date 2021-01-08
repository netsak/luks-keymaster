"""
Blueprint for handline home
TODO: checkout the assets linked there

https://hackersandslackers.com/flask-blueprints
"""
from flask import Blueprint, render_template, send_from_directory, redirect
from flask import current_app as app
# from flask_blueprint_tutorial.api import fetch_products


# Blueprint Configuration
home_bp = Blueprint(
    'home_bp', __name__,
    template_folder='templates',
    static_folder='static',
    static_url_path='',
)


@home_bp.route('/', methods=['GET'])
def home():
    """Homepage."""
    # products = fetch_products(app)
    return render_template(
        'index.jinja2',
        title='Flask Blueprint Demo',
        subtitle='Demonstration of Flask blueprints in action.',
        template='home-template',
        # products=products
    )
    # print("index")
    # return home_bp.send_static_file("index.html")
    # return send_from_directory("./static", "index.html")
    # return redirect("index.html") # this is also working
