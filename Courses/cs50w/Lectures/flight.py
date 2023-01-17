from sklearn.metrics import f1_score


class flight():
    def __init__(self, capacity):
        self.capacity = capacity
        self.passengers = []

    def add_pass(self,name):
        if len(self.passengers) <= self.capacity:
            self.passengers.append(name)
        else:
            print("Capacity Full")
    
    def open_seats(self):
        print(self.capacity - len(self.passengers))

f1 = flight(3)
