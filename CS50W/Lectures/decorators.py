def announce(f):
    def wrapper():
        print("About to Run the function")
        f()
        print("Done with function")
    return wrapper


@announce
def hello():
    print("Hello, World")

hello()