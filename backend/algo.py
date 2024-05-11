import pandas as pd
from sklearn.preprocessing import normalize
import itertools
import json


# Step 1. Read the CSV file
df = pd.read_csv(CAR_DATA)

print(df)


# Step 2. Save columns into a list (array)
cars = df["Car"].tolist()
hp = df["HP"].tolist()
distance = df["EVDistance"].tolist()
co2 = df["CO2Emission"].tolist()
weight = df["Weight"].tolist()
autho = df["Distance"].tolist()

# Step 3. Normalize lists -> This converts the list into a 2D list
norm_hp = normalize([hp])
norm_dis = normalize([distance])
norm_co2 = normalize([co2])
norm_weight = normalize([weight])
norm_autho = normalize([autho])

print(norm_weight)
print(norm_hp)
print(norm_dis)
print(norm_autho)
print(norm_co2)

# Step 4. Define and initialize dictionary (Hashmap)
result_dict = {}

for car in cars:
    result_dict[car] = 0

question1 = True
question2 = False
#norm_hp = [float(i) / sum(hp) for i in hp]
#print("Normalizing horse power",normalize([hp]))
#print("Normalizing distance", normalize([distance]))
#print("Print out dictionary for models")
#print(result)


sum = []

if(question1):
    for i in norm_hp:
        sum.append(i)
    
else:
    for i in norm_hp:
        sum.append(1 - i)


if(question2):
    for i in range(len(norm_dis)):
        sum[i] += norm_dis[i]
        
else:
    for i in range(len(norm_dis)):
        sum[i] += 1- norm_dis[i]

#print("Sum of list")



#print(sum)

i = 0

print("Print out result")
#print(type(sum[0][0]))

#result.update({car[0] : temp[0]})

for car in cars:

 #   print(i)
 #   print(car)

    result_dict.update({car : sum[0][i]})

    if(i == len(sum[0] ) - 1):
        break

    i += 1


# Here we sort the dictionary and the results are stored in a list
sortedResult = sorted(result_dict.items(), key = lambda x:x[1], reverse=True)

print(sortedResult)

print("Most recommended")
print(sortedResult[0][0])

print(type(sortedResult[0][0]))

print("Second recommended")
print(sortedResult[1][0])

print("Third Recommended")
print(sortedResult[2][0])\

result_rec = []


for i in range(3):
    result_rec.append(sortedResult[i][0])

print(result_rec)

#print(df.loc[df["Car"] == result_rec[0]] )

for i in range(2):
    print(df.loc[df["Car"] == result_rec[i]] )
    print(type(df.loc[df["Car"] == result_rec[i]] ))
#final_dict = df.loc[df["Car"] == result_rec[0]].to_json(orient='records')
#print(final_dict)
#print(type(final_dict))

#json_object = json.loads(final_dict)
#print(json_object)
#print(type(json_object))

#print(df.loc[df["Car"] == result_rec[0]])

#final_dict = df.loc[df["Car"] == result_rec[0]].to_json(orient = 'records')
#print(final_dict)


#print(type(final_dict))


#sorted_dict = dict((x,y) for x,y in sortedResult)

#print("The sorted dictionary is:", sorted_dict)

#print(sorted_dict[0])



#print("Most recommended Vehicle")
#print(sortedResult[0])
# We print the first 3 results
#print("Top 3 Selections")

#for e in range(3):
#    print(sortedResult[e])
























        