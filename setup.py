from setuptools import setup

setup(
    name="guitarpi",
    packages=["keymaster"],
    include_package_data=True,
    install_requires=[
        "flask",
        "flask-wtf",
        "python-dotenv",
    ],
)
