import pandas as pd

iris = pd.read_csv("C:/Files/VS/Codes/Offline/Intro to ai and ml/iris.csv")

x = iris.drop(columns = "species")
y = iris["species"]

from sklearn.linear_model import LogisticRegression

model = LogisticRegression()

from sklearn.model_selection import train_test_split

x_train, x_test, y_train, y_test = train_test_split(x,y,test_size = 0.22)

model.fit(x_train, y_train)

pred = model.predict(x_test)

from sklearn.metrics import accuracy_score

acc = accuracy_score(y_test, pred) * 100

print(f"Accuray is {acc}")