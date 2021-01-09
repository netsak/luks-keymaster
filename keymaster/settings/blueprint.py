"""
Blueprint for settings management
"""
from flask import Blueprint, render_template, send_from_directory, redirect, request, g
from flask import current_app as app
from flask_wtf import FlaskForm
from wtforms import StringField, TextField, SubmitField, FieldList, Form
from wtforms.validators import DataRequired, Length
from keymaster.settings import settings


# Blueprint Configuration
settings_bp = Blueprint(
    "settings_bp", __name__,
    template_folder="templates",
    static_folder="static",
    static_url_path="",
)


class SettingsForm(FlaskForm):
    disk1 = TextField("Disk1", default="/dev/sda1")
    mount1 = TextField("Mount1", default="/mnt/disk1")
    passphrase1 = TextField("Passphrase1")

    disk2 = TextField("Disk2")
    mount2 = TextField("Mount2")
    passphrase2 = TextField("Passphrase2")

    submit = SubmitField('Submit')



@settings_bp.route("/", methods=["GET", "POST"])
def create():
    """Create new settings if none are configured"""
    # products = fetch_products(app)
    # content = {
    #     "disk2": "/dev/sdb2",
    #     "mount2": "/mnt/disk2",
    #     "passphrase2": "aaaa.bbbb.ccc"
    # }
    form = SettingsForm(data=app.settings.data())
    # form.data.update(content)
    print("request.form", request.form, app.settings)
    if request.method == "POST":
        # form.populate_obj(request.form)
        app.settings.update(form.data)
        app.settings.save()
    print("form", form.data)
    
    return render_template(
        "index.html",
        form=form,
        public_filename=app.settings.public_filename,
        private_filename="none",
        title="Flask Blueprint Demo",
        subtitle="Demonstration of Flask blueprints in action.",
        template="home-template",
        # products=products
    )
    # print("index")
    # return home_bp.send_static_file("index.html")
    # return send_from_directory("./static", "index.html")
    # return redirect("index.html") # this is also working
