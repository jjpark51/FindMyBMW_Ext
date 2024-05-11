# Import flask and datetime module for showing date and time
from flask import Flask, jsonify, render_template, url_for, json, request
from flask_cors import CORS
import csv
import os
import pandas as pd
from sklearn.preprocessing import normalize
import itertools
import json

import datetime
 
x = datetime.datetime.now()

# Initializing flask app
app = Flask(__name__)
# CORS(app, resources={r"/test": {"origins": "http://localhost:3000"}, r"/data": {"origins": "http://localhost:3000"}})
CORS(app, resources={r"/api/": {"origins": "*"},r"/api/test": {"origins": "*"}, r"/api/data": {"origins": "*"}, r"/api/price": {"origins": "*"}, r"/api/reset": {"origins": "*"}})

recommend = []
price_limit = []
bmw_result = []
price_data = {}
price_range = []
result_dict = {}
result_list = []

@app.route("/api/")
def hello():
    return "Hello world"

@app.route('/api/price', methods=['POST'])
def get_price():
    global price_range  # Declare price_data as a global variable
    price_range.clear()
    price_range = request.get_json()
    print(price_range)
    
    return jsonify(price_range)

# @app.route("/test", methods=['GET','POST'])
@app.route("/api/test", methods=['GET', 'POST'])
def handle_json():
    recommend.clear()
    price_limit.clear()
    result_dict.clear()

    # Here we recieve the data, as a list
    q_data = request.get_json()

    print(q_data)
    # print(price_range)

    df = pd.read_csv('BMW_DATA_1116.csv')

    # print(df)

     # Step 2. Save columns into a list (array)
    cars = df["MODEL"].tolist()
    ukl = df["UKL"].tolist()
    kkl = df["KKL"].tolist()
    mkl = df["MKL"].tolist()
    gkl = df["GKL"].tolist()
    mseries = df["M_SERIES"].tolist()
    legroom = df["LEG"]
    wagon = df["WG"].tolist()
    hatchback = df["HB"].tolist()
    coupe = df["CP"].tolist()
    sedan = df["SD"].tolist()
    suv = df["SUV"].tolist()
    luxury = df["LUXURY"].tolist()
    trunk_2 = df["TRUNK_2"].tolist()
    # design = df["DESIGN"].tolist()
    convertible = df["CV"].tolist()
    gasoline = df["Gasoline"].tolist()
    diesel = df["Diesel"].tolist()
    phev = df["PHEV"].tolist()
    ev = df["EV"].tolist()
    price = df["PRICE"].tolist()
    sound = df["SOUND"].tolist()
    light = df["LIGHT"].tolist()
    led_kidney = df["LED_K"].tolist()
    entertainment = df["ENTER_P"].tolist()
    design = df["DESIGN"].tolist()
    fe_2 = df["FE_2"].tolist()  
    performance = df["ENGINE_2"].tolist()
    sales = df["SALES"].tolist()
    price = df["PRICE"].tolist()
    trunk_1 = df["TRUNK_1"].tolist()
    trunk_2 = df["TRUNK_2"].tolist()
    interior = df["COMFORTABLE_INTERIOR"].tolist()
    assistance = df["DRIVING_ASSISTANCE"].tolist()
    xdrive = df["XDRIVE"].tolist()
    # sdrive = df["SDRIVE"].tolist()

    # print("Printing Assistance")
    # print(assistance)


    # Here we will normalize the lists
    max_price = max(price)
    norm_price = [round(p / max_price, 3) for p in price]

    max_sales = max(sales)
    norm_sales = [round(e / max_sales, 3) for e in sales]

    max_performance = max(performance)
    norm_performance = [round(e / max_performance, 3) for e in performance]

    max_fuel = max(fe_2)
    norm_fuel = [round(e / max_fuel, 3) for e in fe_2]

    max_design = max(design)
    norm_design = [round(e / max_design, 3) for e in design]

    max_legroom = max(legroom)
    norm_legroom = [round(e / max_legroom, 3) for e in legroom]

    max_trunk2 = max(trunk_2)
    norm_trunk2 = [round(e / max_trunk2, 3 ) for e in trunk_2]

    sum_space = []
    for elem1, elem2, elem3 in zip(trunk_1, trunk_2, legroom):
        sum_space.append(elem1 + elem2 + elem3)

    max_space = max(sum_space)
    norm_space = [round(e / max_space, 3) for e in sum_space]
    # Step 4. Define and initialize list
    result = {}
    sum = [0] * 75
    # print("Printing sum")
    # print(sum)
    # print(len(sum))

    for car in cars:
        result[car] = 0

    # print(cars)

    # print("Printing q_data")
    # print(q_data)

    for i in range(len(q_data)):
        for j in range(len(q_data[i])):

            #Question 2              
            if i == 1:
                #보기 1
                if q_data[1][0] == 1:
                    print("gasoline")
                    for k in range(len(gasoline)):
                        if k < len(sum):
                            sum[k] += (gasoline[k] * 10)
                #보기 2
                if q_data[1][1] == 1:
                    print("diesel")
                    for k in range(len(diesel)):
                        if k < len(sum):
                            sum[k] += (diesel[k] * 10)
                #보기 3
                if q_data[1][2] == 1:
                    print("phev")
                    for k in range(len(phev)):
                        if k < len(sum):
                            sum[k] += (phev[k] * 10)
                #보기 4
                if q_data[1][3] == 1:
                    print("ev")
                    for k in range(len(ev)):
                        if k < len(sum):
                            sum[k] += (ev[k] * 10)
                # 보기 5
                if q_data[1][4] == 1:
                    print("idk")
                    # for i in :
                    #     sum.append(i)
            # Question 3
            if i == 2:
                # 보기 1
                if q_data[2][0] == 1:
                    print("Elegant & Reliable")
                    for k in range(len(sedan)):
                        if k < len(sum):
                            sum[k] += sedan[k]

                # 보기 2
                if q_data[2][1] == 1:
                    print("SUV, Station Wagon")
                    for k in range(len(suv)):
                        if k < len(sum):
                            sum[k] += suv[k]
                    for k in range(len(wagon)):
                        if k < len(sum):
                            sum[k] += wagon[k]
                # 보기 3
                if q_data[2][2] == 1:
                    print("Coupe, Convertible")
                    for k in range(len(coupe)):
                        if k < len(sum):
                            sum[k] += (coupe[k] * 0.5)
                        # How can we emphasize the inbetween sizes such as KKL & MKL
                    for k in range(len(convertible)):
                        if k < len(sum):
                            sum[k] += convertible[k]
                    for k in range(len(mseries)):
                        if k < len(sum):
                            sum[k] += mseries[k]

                # 보기 4
                if q_data[2][3] == 1:
                    print("Hatchback")
                    for k in range(len(hatchback)):
                        if k < len(sum):
                            sum[k] += hatchback[k]
            
            # Question 4
            elif i == 3:
                # 보기 1
                if q_data[3][0] == 1:
                    print("I am a new driver")
                    for k in range(len(suv)):
                        if k < len(sum):
                            sum[k] += (suv[k]* 0.5)
                    for k in range(len(ukl)):
                        if k < len(sum):
                            sum[k] += (ukl[k])
                    for k in range(len(kkl)):
                        if k < len(sum):
                            sum[k] += (kkl[k]* 0.5)
                    for k in range(len(mseries)):
                        if k < len(sum):
                            sum[k] += (mseries[k] * (-10))

                # 보기 2
                if q_data[3][1] == 1:
                    print("I like quiet / smooth driving")
                    for k in range(len(ev)):
                        if k < len(sum):
                            sum[k] += ev[k]
                    for k in range(len(phev)):
                        if k < len(sum):
                            sum[k] += phev[k]
                    for k in range(len(mseries)):
                        if k < len(sum):
                            sum[k] += (mseries[k] * (-2))
                # 보기 3
                if q_data[3][2] == 1:
                    print("I drive long distances")
                    for k in range(len(diesel)):   
                        if k < len(sum):
                            sum[k] += diesel[k]
                    for k in range(len(norm_fuel)):   
                        if k < len(sum):
                            sum[k] += norm_fuel[k]
                #보기 4
                if q_data[3][3] == 1:
                    print("I Like to enjoy speed")
                    for k in range(len(mseries)):
                        if k < len(sum):
                            sum[k] += mseries[k]
                #보기 5
                if q_data[3][4] == 1:
                    print("I drive on hazardous roads")
                    for k in range(len(xdrive)):
                        if k < len(sum):
                            sum[k] += xdrive[k]
                

            # Question 5
            elif i == 4:
                # 보기 1
                if q_data[4][0] == 1:
                    print("Daily City Commute")
                    for k in range(len(sedan)):
                        if k < len(sum):
                            sum[k] += sedan[k]
                    for k in range(len(ev)):
                        if k < len(sum):
                            sum[k] += (ev[k] * 0.5)
                    for k in range(len(phev)):
                        if k < len(sum):
                            sum[k] += (phev[k]*0.5)
                    for k in range(len(ukl)):
                        if k < len(sum):
                            sum[k] += (ukl[k])
                    for k in range(len(kkl)):
                        if k < len(sum):
                            sum[k] += (kkl[k]* 0.5)

                # 보기 2
                if q_data[4][1] == 1:
                    print("Outdoor Activities")
                    for k in range(len(suv)):
                        if k < len(sum):
                            sum[k] += suv[k]
                    for k in range(len(diesel)):
                        if k < len(sum):
                            sum[k] += (diesel[k]*0.5)
                    for k in range(len(mkl)):
                        if k < len(sum):
                            sum[k] += (mkl[k]*0.5)
                    for k in range(len(gkl)):
                        if k < len(sum):
                            sum[k] += (gkl[k])
                    for k in range(len(norm_trunk2)):
                        if k < len(sum):
                            sum[k] += (norm_trunk2[k] * 2)
                    for k in range(len(xdrive)):
                        if k < len(sum):
                            sum[k] += (xdrive[k])
                # 보기 3
                if q_data[4][2] == 1:
                    print("Traveling with Family")
                    for k in range(len(wagon)):
                        if k < len(sum):
                            sum[k] += wagon[k]
                    for k in range(len(norm_fuel)):
                        if k < len(sum):
                            sum[k] += norm_fuel[k]
                    for k in range(len(mkl)):
                        if k < len(sum):
                            sum[k] += (mkl[k] *0.5)
                    for k in range(len(gkl)):
                        if k < len(sum):
                            sum[k] += gkl[k]
                    for k in range(len(norm_legroom)):
                        if k < len(sum):
                            sum[k] += norm_legroom[k]
                    for k in range(len(norm_trunk2)):
                        if k < len(sum):
                            sum[k] += norm_trunk2[k]
                # 보기 4
                if q_data[4][3] == 1:
                    print("Going for drive")
                    for k in range(len(coupe)):
                        if k < len(sum):
                            sum[k] += (coupe[k] *0.5)
                    for k in range(len(convertible)):
                        if k < len(sum):
                            sum[k] += convertible[k]
                    for k in range(len(mseries)):
                        if k < len(sum):
                            sum[k] += (mseries[k])
                    # for k in range(len(sdrive)):
                    #     if k < len(sum):
                    #         sum[k] += sdrive[k]

            # Question 6
            elif i == 5:
                # 보기 1
                if q_data[5][0] == 1:
                    print("high sound quality")
                    for k in range(len(sound)):
                        if k < len(sum):
                            sum[k] += sound[k]
                # 보기 2
                if q_data[5][1] == 1:
                    print("Customization")
                    for k in range(len(norm_design)):
                        if k < len(sum):
                            sum[k] += norm_design[k]
                # 보기 3
                if q_data[5][2] == 1:
                    print("light")
                    for k in range(len(led_kidney)):
                        if k < len(sum):
                            sum[k] += led_kidney[k]
                # 보기 4
                if q_data[5][3] == 1:
                    print("entertainment ")
                    for k in range(len(entertainment)):
                        if k < len(sum):
                            sum[k] += entertainment[k]
                # 보기 5                            
                if q_data[5][4] == 1:
                    print("COMFORTABLE_INTERIOR")
                    for k in range(len(interior)):
                        if k < len(sum):
                            sum[k] += interior[k]
                # 보기 6
                if q_data[5][5] == 1:
                    print("driving assistance")
                    for k in range(len(assistance)):
                        if k < len(sum):
                            sum[k] += assistance[k]
                # 보기 7
                if q_data[5][6] == 1:
                    print("convertible")
                    for k in range(len(convertible)):
                        if k < len(sum):
                            sum[k] += (convertible[k] * 5)
 
            # Question 1
            elif i == 0:
                # 보기 1
                if q_data[0][0] == 5:
                    print("Customizability")
                    for k in range(len(norm_design)):
                        if k < len(sum):
                            sum[k] += (norm_design[k] * 3)
                # 보기 1
                if q_data[0][0] == 4:
                    print("Customizability")
                    for k in range(len(norm_design)):
                        if k < len(sum):
                            sum[k] += (norm_design[k] * 2)
                # 보기 1
                if q_data[0][0] == 3:
                    print("Customizability")
                    for k in range(len(norm_design)):
                        if k < len(sum):
                            sum[k] += (norm_design[k] * 1.5)
                # 보기 2
                if q_data[0][1] == 5:
                    print("Performance")
                    for k in range(len(norm_performance)):
                        if k < len(sum):
                            sum[k] += (norm_performance[k] * 3)
                if q_data[0][1] == 4:
                    print("Performance")
                    for k in range(len(norm_performance)):
                        if k < len(sum):
                            sum[k] += (norm_performance[k] *2)
                if q_data[0][1] == 3:
                    print("Performance")
                    for k in range(len(norm_performance)):
                        if k < len(sum):
                            sum[k] += (norm_performance[k] * 1.5)                
                # 보기 3
                if q_data[0][2] == 5:
                    print("Space")
                    for k in range(len(norm_space)):
                        if k < len(sum):
                            sum[k] += (norm_space[k]* 3)
                if q_data[0][2] == 4:
                    print("Space")
                    for k in range(len(norm_space)):
                        if k < len(sum):
                            sum[k] += (norm_space[k]* 2)
                if q_data[0][2] == 3:
                    print("Space")
                    for k in range(len(norm_space)):
                        if k < len(sum):
                            sum[k] += (norm_space[k]* 1.5)
                # 보기 4
                elif q_data[0][3] == 5:
                    print("Sales")
                    for k in range(len(norm_sales)):
                        if k < len(sum):
                            sum[k] += (norm_sales[k] *3)
                elif q_data[0][3] == 4:
                    print("Sales")
                    for k in range(len(norm_sales)):
                        if k < len(sum):
                            sum[k] += (norm_sales[k] *2)
                elif q_data[0][3] == 3:
                    print("Sales")
                    for k in range(len(norm_sales)):
                        if k < len(sum):
                            sum[k] += (norm_sales[k] *1.5)


            # 보기 5
                if q_data[0][4] == 5:
                    print("maintenance cost")
                    for k in range(len(norm_fuel)):
                        if k < len(sum):
                            sum[k] += (norm_fuel[k] * 3)

                elif q_data[0][4] == 4:
                    print("maintenance cost")
                    for k in range(len(norm_fuel)):
                        if k < len(sum):
                            sum[k] += (norm_fuel[k] * 2)

                elif q_data[0][4] == 3:
                    print("maintenance cost")
                    for k in range(len(norm_fuel)):
                        if k < len(sum):
                            sum[k] += (norm_fuel[k] * 1.5)      




    i = 0

    # print("Print out result")
    # print(sum)

    for car in cars:  

        result.update({car : sum[i]})

        if(i == len(sum) - 1):
            break

        i += 1

    sortedResult = sorted(result.items(), key = lambda x:x[1], reverse=True)

    # print(sortedResult)
    # print(type(sortedResult))

    # print("Most recommended")
    # print(sortedResult[0][0])
    # print(sortedResult[0][1])

    # print(type(sortedResult[0][0]))

    # print("Second recommended")
    # print(sortedResult[1][0])

    # print("Third Recommended")
    # print(sortedResult[2][0])

    print("Printing price")
    print(price_range)


    for i in range(len(price)):
        price_data[cars[i]] = price[i]
    # print("Printing price data")
    # print(price_data)
    

    for i in range(75):
        recommend.append(sortedResult[i][0])

    # print("Printin out recommend")
    # print(recommend)
    

    for i in range(len(recommend)):
        if price_data[recommend[i]] < price_range[1] and price_data[recommend[i]] > price_range[0]:
            # print(recommend[i])
            price_limit.append(recommend[i])
    print("Printing price limit recommendations")
    print(price_limit)

    # for i in range(len(sortedResult)):
    #     if price_data[sortedResult[i][0]] < price_range[1] and price_data[sortedResult[i][0]] > price_range[0]:
    #         # print(recommend[i])
    #         bmw_result.append(sortedResult[i])
    # print("Printing Result dict")
    # # print(bmw_result)
    # result_dict = dict(bmw_result)
    # print(result_dict)
    
    response_data = {"message": "Data received and processed"}

    return jsonify(price_limit)
    # return jsonify(result_dict)
# Route for seeing a data
@app.route('/api/data', methods=['GET'])
def get_time():
    print("Running /api/data")
    # print(price_limit)
    print("Top 3 Recommended")
    print(price_limit[0])
    print(price_limit[1])
    print(price_limit[2])
    # print(result_dict)
    return jsonify(price_limit)
    # return jsonify(result_dict)

@app.route('/api/reset', methods=['POST'])
def reset_price():
    print("Running reset price")
    global price_range  # Declare price_data as a global variable
    price_range.clear()
    price_range = request.get_json()
    print("Printing price range")
    print(price_range)

    # print("Printing price limit")
    # print(price_limit)
    price_limit.clear()

    # print("Printing recommend list")
    # print(recommend)

    for i in range(len(recommend)):
        if price_data[recommend[i]] < price_range[1] and price_data[recommend[i]] > price_range[0]:
            price_limit.append(recommend[i])
    print("Reset price limit")
    # print(price_limit)
    print("Top recommendations")
    print(price_limit[0])
    print(price_limit[1])
    print(price_limit[2])
    return jsonify(price_limit)
    






 
     
# Running app
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000,debug=True)