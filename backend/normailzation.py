import csv
import os
from sklearn.preprocessing import normalize
import itertools
import json
import pandas as pd

df = pd.read_csv(CAR_DATA)


cars = df["MODEL"].tolist()
price = df["PRICE"].tolist()
bmw = {}

print(price)

max_price = max(price)

# Normalize the price list against the maximum value
norm = [round(p / max_price, 3) for p in price]

for i in range(len(norm)):
    bmw[cars[i]] = norm[i]


print("Price")
print(bmw)

sales = df["SALES"].tolist()
bmw.clear()

max_sales = max(sales)

# Normalize the sales list against the max value
norm_sales = [round(e / max_sales, 3) for e in sales]

for i in range(len(norm_sales)):
    bmw[cars[i]] = norm_sales[i]

print("Sales")
print(bmw)


bmw.clear()

leg = df["LEG"].tolist()
trunk_1 = df["TRUNK_1"].tolist()
trunk_2 = df["TRUNK_2"].tolist()

sum_space = []
for elem1, elem2, elem3 in zip(trunk_1, trunk_2, leg):
    sum_space.append(elem1 + elem2 + elem3)

max_space = max(sum_space)
norm_space = [round(e / max_space, 3) for e in sum_space]

for i in range(len(sum_space)):
    bmw[cars[i]] = norm_space[i]

print("Space")
print(bmw)


bmw.clear()

performance = df["ENGINE_2"].tolist()
max_performance = max(performance)

norm_performance = [round(e / max_performance, 3) for e in performance]

for i in range(len(norm_performance)):
    bmw[cars[i]] = norm_performance[i]

print("Performance")
print(bmw)

# Print or use the normalized_price_list as needed
# print(norm)

bmw.clear()

fuel = df["FE_2"].tolist()
max_fuel = max(fuel)

norm_fuel = [round(e / max_fuel, 3) for e in fuel]

# print(norm_fuel)

for i in range(len(norm_fuel)):
    bmw[cars[i]] = round(1- norm_fuel[i],3)

print("Fuel Efficiency")
print(bmw)

bmw.clear()

print("Cost per 100km")
for i in range(len(fuel)):
    bmw[cars[i]] = round(1- fuel[i], 3)

print(bmw)
bmw.clear()

weight = df["WEIGHT"].tolist()

for i in range(len(weight)):
    bmw[cars[i]] = weight[i]
print("WEIGHT")
print(bmw)

hp = df["ENGINE_2"].tolist()

for i in range(len(hp)):
    bmw[cars[i]] = hp[i]
print("Horse power")
print(bmw)

bmw.clear()
fuelefficiency = df["FE_1"].tolist()

for i in range(len(fuelefficiency)):
    bmw[cars[i]] = fuelefficiency[i]

print("Fuel Efficiency")
print(bmw)
bmw.clear()

# lwh = df["LWH"].tolist()

# for i in range(len(lwh)):
#     bmw[cars[i]] = lwh[i]
# print("LWH")
# print(bmw)
# bmw.clear()

legroom = df["LEG"].tolist()

for i in range(len(legroom)):
    bmw[cars[i]] = legroom[i]
print("Legroom")
print(bmw)
bmw.clear()

