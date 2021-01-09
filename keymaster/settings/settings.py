from functools import wraps
from flask import g, request, redirect, url_for


def settings_required(f):
    """settings required redirects to the settings page if no settings are configured"""
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if g.settings is None:
            return redirect(url_for("settings", next=request.url))
        return f(*args, **kwargs)
    return decorated_function
