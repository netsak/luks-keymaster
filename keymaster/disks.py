


class Disk(object):

    def __init__(self, name):
        self.name = name

    def is_open(self):
        return False


disks = [
    Disk("nas1"),
    Disk("nas2"),
]