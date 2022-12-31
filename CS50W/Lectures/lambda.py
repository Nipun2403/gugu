name = [
    {"name": "jatin", "house": "green"},
    {"name": "bruno", "house": "red"},
    {"name": "draco", "house": "blue"}
]

# def n(name):
#     return name["house"]

    name.sort(key = lambda name: name["house"])

print(name)