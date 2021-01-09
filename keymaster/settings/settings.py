from functools import wraps
from flask import g, request, redirect, url_for
import  json
from flask import current_app as app
import os
from dataclasses import  dataclass, asdict

def settings_required(f):
    """settings required redirects to the settings page if no settings are configured"""
    @wraps(f)
    def decorated_function(*args, **kwargs):
        print("checking settings, app.setting", app.settings)
        if app.settings is None:
            print("no settings found redirecting")
            return redirect(url_for("settings", next=request.url))
        return f(*args, **kwargs)
    return decorated_function

class Settings(object):

    def __init__(self, filename):
        self.public_filename = filename
        self.disks = dict()
        if not os.path.exists(self.public_filename):
            self.save()
        self.load()
        print("init settings done", self.disks)

    def data(self):
        d = dict()
        d.update(self.disks)
        print("data", d)
        return d

    def update(self, data):
        for k, v in data.items():
            if k in self.disks:
                self.disks[k] = v

    def save(self):
        with open(self.public_filename, "wt") as f:
            json.dump(self.disks, f)

    def load(self):
        with open(self.public_filename, "rb") as f:
            self.disks = json.load(f)
            print(f"settings loaded {self.disks}")
