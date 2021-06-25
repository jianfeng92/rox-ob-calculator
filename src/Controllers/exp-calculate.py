#const
odin_blessing_multiplier = 5

#variables
base_exp_per_mob = input("Please enter Mob Base Exp: ")
job_exp_per_mob = input("Please enter Mob Job Exp: ")
mob_size = input("Please enter Mob Size(s/m/l): ")
no_of_ob = input("Please enter number of OB: ")

def SetMobSizeOBRatio(mob_size):
    if(mob_size == "s"):
        return 1
    elif(mob_size == "m"):
        return 2
    elif(mob_size == "l"):
        return 3
    else:
        return 0

def CalculateTotalExp(exp_per_mob, no_of_ob):

    OBRatio = SetMobSizeOBRatio(mob_size)

    mob_exp_per_OB = exp_per_mob / OBRatio

    total_ob_exp = (mob_exp_per_OB * odin_blessing_multiplier) * no_of_ob

    return total_ob_exp


print("Total Base Exp: ", CalculateTotalExp(int(base_exp_per_mob), int(no_of_ob)))
print("Total Job Exp: ", CalculateTotalExp(int(job_exp_per_mob), int(no_of_ob)))