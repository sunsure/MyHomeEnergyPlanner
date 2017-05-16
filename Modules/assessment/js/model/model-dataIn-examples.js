var dataIn_model_r9 = {
    floors: [
        {height: 1, area: 1}
    ],
    use_custom_occupancy: false, // when set to false occupancy is calculated according to SAP
    custom_occupancy: 1,
    fabric: {
        elements: [
            {
                type: 'wall', // Wall, Floor, Roof, Loft, Roof_light, Hatch, Party_wall
                area: 1, // used if no l or h
                //l:1, 
                //h:1
                uvalue: 1,
                kvalue: 1,
                g: 0, // Windows, doors, doors and roof lights
                gl: 0, // Windows, doors, doors and roof lights
                ff: 0, // Windows, doors, doors and roof lights
                orientation: 4, // Windows, doors, doors and roof lights -> N = 0 __ SE/SW = 3||5 __ E/W = 6||2 __ NE/NW = 1||7 __ S = 4
                overshading: 3, // Windows, doors, doors and roof lights  ->  >80% = 0 __ 60%-80% = 1 __ 20%/60% = 2 __ <20% = 3
            }
        ],
        thermal_bridging_yvalue: 0.15,
        global_TMP: false,
        global_TMP_value: 100 // Low = 100, Medium = 250, High = 450
    },
    ventilation: {
        ventilation_type: 'IE', // NV, IE, DEV, MEV, MV, MVHR, PS
        dwelling_construction: 'timberframe', // 'masonry' || 'timberframe' || 
        suspended_wooden_floor: 'unsealed', // 'unsealed' || 'sealed' || 'solid'
        draught_lobby: false,
        percentage_draught_proofed: 100, // windows
        air_permeability_test: false, // when true: infiltration rate calculated from test (air_permeability_value), when false: infiltration rate calculated from building characteristics (dwelling_construction, suspended_wooden_floor, draught_lobby and percentage_draught_proofed)
        air_permeability_value: 15, // q50, cubic meters per hour per square meter of envelope area
        number_of_sides_sheltered: 1,
        system_air_change_rate: 0.5,
        balanced_heat_recovery_efficiency: 50, // for MVHR
        IVF: [//Intentional vents and flues (IVF: Chimneys, open flues and flueless gas fires)
            {
                type: "Intermittent fan", // not used in the model but handy to have
                ventilation_rate: 10,
            }
        ],
        EVP: [//Extract ventilation points
            {
                type: 'Chimney', // not used in the model but handy to have
                ventilation_rate: 80,
            }
        ]
    },
    temperature: {
        target: 21,
        living_area: 20
    },
    heating_systems: [// the lines with "//" are the ones that I haven't found as inputs yet so they may not be needed as inputs
        {
            "category": "Warm air systems", //
            "winter_efficiency": 90, //
            "summer_efficiency": 80, //
            "central_heating_pump": 120, //
            "fans_and_supply_pumps": null, //
            "responsiveness": 1, //Refer to Table 4d, p.209 SAP 9.92
            "combi_loss": "Instantaneous, without keep hot-facility", //
            "primary_circuit_loss": "No", //
            "id": 1, //
            "fuel": "Mains Gas", //
            "fraction_space": 1,
            "fraction_water_heating": 1,
            "main_space_heating_system": "mainHS1", // mainHS1 || mainHS2_whole_house || mainHS2_part_of_the_house
            "temperature_adjustment": 0, // Refer to SAP2012, table 4e, p.210
            "provides": "heating_and_water", // heating || water || heating_and_water
            "instantaneous_water_heating": false, //
            "heating_controls": 1, // 1|| 2 || 3  -  Refer to Table 4e, p.210 SAP 9.92
            "efficiency": 0.8573275245289163//
        }
    ],
    space_heating: { // to be  checked
        "use_utilfactor_forgains": true,
        "heating_off_summer": true,
        "delta_T": [9.542470751294395, 9.26530574371893, 8.245057352191182, 6.564548296240062, 4.396761680855882, 2.2528453690832038, 0.7156415381792769, 0.8095881942602325, 2.701244663529872, 5.219698371009519, 7.523897620607414, 9.626003799183117],
        "total_losses": [5631.398770687355, 5441.16119528443, 4818.273805496045, 3760.625089971889, 2506.1111172469095, 0, 0, 0, 0, 0, 4331.864835764924, 5597.5662622534865],
        "total_gains": [984.4991822711077, 1178.599183921032, 1374.450471072663, 1559.5126954366647, 1645.8645714951128, 0, 0, 0, 0, 0, 987.3846494406241, 933.7886994514747],
        "utilisation_factor": [0.9707352380223268, 0.9581552643030704, 0.9346244262618234, 0.8859049272832213, 0.7873548281229416, 1, 1, 1, 1, 1, 0.9556719249174421, 0.9736673851323124],
        "useful_gains": [955.6880480347297, 1129.2810125772394, 1284.5949829515805, 1381.579981048079, 1295.8794168031734, 0, 0, 0, 0, 0, 943.615788564855, 909.1996012610201],
        "heat_demand": [4675.710722652625, 4311.88018270719, 3533.6788225444643, 2379.04510892381, 1210.2317004437361, 0, 0, 0, 0, 0, 3388.2490472000686, 4688.366660992467],
        "cooling_demand": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "heat_demand_kwh": [3478.728777653553, 2897.583482779232, 2629.057043973082, 1712.9124784251433, 900.4123851301397, 0, 0, 0, 0, 0, 2439.5393139840494, 3488.1447957783953],
        "cooling_demand_kwh": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "annual_heating_demand": 17546.378277723594,
        "annual_cooling_demand": 0,
        "annual_heating_demand_m2": 149.9049831501375,
        "annual_cooling_demand_m2": 0
    }


}


// These are global outputs of some functions
// Sometimes they are also global inputs to some functions
// They don't need to be defined as inputs when we run the whole model because they are created before they are used
// but when running just a function of the model they may need to be defined as inputs.
// 
// For example TFA is a global output of calc.floors
// Imagine you want to know the occupancy according to SAP therefore you only run calc.occupancy
// If you use the example dataIn object above you will still get an error as data.TFA will be missing, therefore you would have to add it yourself
// As a general rule for running the whole model ensure that everything in the dataIn example object is defined, but if you are only running a specific function then you need to check the which are the globla and module inputs and ensure they are in the data object passed to the function as an argument

data.TFA
data.volume
data.num_of_floors
data.occupancy
data.TMP,
        data.losses_WK.fabric,
        data.gains_W.solar,
        data.GL
data.fabric_total_heat_loss_WK
data.losses_WK.ventilation
data.totalWK_monthly



// Differences with SAP2012
/*
 - calc.occupancy: SAP calculates occupancy from total floor area, we allow input of custom occupancy
 - calc.fabric: According to SAP2012 (p,26 note2) a solar access factor of 1.0 [...] should be used for roof lights, but we think that is not right (see issue 237: https://github.com/emoncms/MyHomeEnergyPlanner/issues/237 
 - calc.ventilation: ventilation loses in SAP is calculated from the loses due to infiltration and ventilation system (see calculation of 25m in worksheets). OpenBEM keeps those loses separated and calls them: ventilation loses (due to ventilation system) and infiltratioon loses 
 - calc.ventilation: despite SAP doesn't make a difference between ventilation and infiltration loses, the loses due to Extract Ventilation Points (intermittent fans and passive vents) is in the part of the formula that corresponds with "infiltration". OpenBEM considers them to be loses due to the ventilation system. GIT issue 177: https://github.com/emoncms/MyHomeEnergyPlanner/issues/177)
 - calc.ventilation: SAP does has a magnificient mistake when calculating the Infiltration Rate if a pressurisation test has been carried out. Formula 18 in worksheet adds q50 (cubic meters per hour per square meter of envelope area) with ACH (air changes per hour). In the case of using q50 we first convert it from cubic meter per... to ACH and then calculate the infiltration rate (ACH)
 - calc.ventilation: SAP only considers 4 type of ventilation systems:
 - a: Balanced mechanical ventilation with heat recovery (MVHR)
 - b: Balanced mechanical ventilation without heat recovery (MV)
 - c: Whole house extract ventilation or positive input ventilation from outside
 - d: Natural ventilation or whole house positive input ventilation from loft
 But OpenBEM considers 7
 - NV: natural ventilation (type 'd' in SAP)
 - IE: Intermittent Extract Ventilations (type 'd' in SAP)
 - PS: Passive Stack (type 'd' in SAP)
 - DEV: Decentralised continous mechanical extract ventilation (type 'c' in SAP)
 - MEV: Mechanical Continuous Extract Ventilation (type 'c' in SAP)
 - MV: Balanced Mechanical Ventilations without heat recovery (type 'b' in SAP)
 - MVHR: Balanced mechanical ventilation with heat recovery (type 'a' in SAP)
 - calc.temperature: SAP assumes specific periods with heating off in week or weekend days (table 9). OpenBEM allows the user to define the number and length of the periods
 
 */


data.temperature.hours_off.weekday = get_hours_off_weekday(data);
data.temperature.hours_off.weekend = get_hours_off_weekend(data);
