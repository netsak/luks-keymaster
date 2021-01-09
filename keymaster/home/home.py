"""
Blueprint for handline home
TODO: checkout the assets linked there

https://hackersandslackers.com/flask-blueprints
"""
from flask import Blueprint, render_template, send_from_directory, redirect, request
from flask import current_app as app
# from flask_blueprint_tutorial.api import fetch_products
from keymaster.disks import disks
from keymaster.settings.settings import settings_required
from dataclasses import dataclass
import shutil
import os


# Blueprint Configuration
home_bp = Blueprint(
    'home_bp', __name__,
    template_folder='templates',
    static_folder='static',
    static_url_path='',
)

def sizeof_fmt(num, suffix='B'):
    for unit in ['','Ki','Mi','Gi','Ti','Pi','Ei','Zi']:
        if abs(num) < 1024.0:
            return "%3.1f%s%s" % (num, unit, suffix)
        num /= 1024.0
    return "%.1f%s%s" % (num, 'Yi', suffix)

class Disk(object):


    def __init__(self, path):
        u = shutil.disk_usage(path)
        self.name = os.path.basename(path)
        self.total = sizeof_fmt(u.total)
        self.free = sizeof_fmt(u.free)
        self.used = sizeof_fmt(u.used)
        self.percent = u.used / u.total * 100



@home_bp.route('/', methods=['GET', "POST"])
def home():
    """Homepage."""

    disks = [
        Disk("/"),
        Disk("/run/media/borris/MANJARO_GNOME_2003"),
    ]

    print("fffffffff", )

    return render_template(
        'index-home.html',
        disks=disks,
    )
