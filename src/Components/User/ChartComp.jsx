import React, { useEffect, useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import { ArcElement } from "chart.js";
import Chart from "chart.js/auto";

// const data = 
// {
//     "Cardiovascular and General": {
//         "Blood Circulation (Rakta Prasarana)": {
//             "symptoms": "Cold extremities (hands and feet)\nNumbness or tingling in the limbs\nFatigue and weakness\nPoor wound healing\nDizziness or lightheadedness\nPale skin or pallor\nChest pain (in severe cases)",
//             "remedyIngredients": [
//                 "Zingiber officinale (Shunthi) (Roots) - 20%",
//                 "Piper longum (Pippali) (Roots) - 10%",
//                 "Withania somnifera (Ashwagandha) (Roots) - 10%",
//                 "Phyllanthus emblica (Amalaki) (Fruits) - 10%",
//                 "Curcuma longa (Haridra) (Roots) - 10%",
//                 "Terminalia bellerica (Bibhitaki) (Fruits) - 10%",
//                 "Terminalia chebula (Haritaki) (Fruits) - 10%",
//                 "Ocimum sanctum (Tulsi) (Leaves) - 10%"
//             ],
//             "dosage": "Dosage: 4 grams of mixed powder should be given to the patient.\nFrequency: Twice daily with water."
//         },
//         "Cancer (Arbuda)": {
//             "dosage": "Dosage: 4 grams of mixed powder should be given to the patient.\nFrequency: Twice a day (morning and night).\nAdministration: Mix the powder with lukewarm honey for cancer cure.",
//             "symptoms": "Presence of a lump or mass in the affected area\nUnexplained weight loss\nFatigue and weakness\nChanges in the skin or appearance of moles\nPersistent pain or discomfort\nChanges in bowel or bladder habits\nChronic cough or difficulty in swallowing (depending on the location of cancer)",
//             "remedyIngredients": [
//                 "Azadirachta indica (Neem) (Bark) - 20%",
//                 "Bauhinia variegata (Kachnar) (Bark) - 15%",
//                 "Crataeva nurvala (Varuna) (Bark) - 15%",
//                 "Terminalia chebula (Haritaki) (Fruits) - 15%",
//                 "Terminalia bellerica (Bibhitaki) (Fruits) - 10%",
//                 "Holarrhena antidysenterica (Kutaja) (Bark) - 10%",
//                 "Tinospora cordifolia (Guduchi) (Stems) - 15%"
//             ]
//         },
//         "Chronic Fever (Jirna Jwara)": {
//             "dosage": "Dosage: 4 grams of mixed powder should be given to the patient.\nFrequency: Twice daily before meals with water.",
//             "remedyIngredients": [
//                 "Tinospora cordifolia (Guduchi) (Stems) - 15%",
//                 "Ocimum sanctum (Tulsi) (Leaves) - 15%",
//                 "Adhatoda vasica (Vasa) (Leaves) - 15%",
//                 "Azadirachta indica (Neem) (Leaves) - 15%",
//                 "Holarrhena antidysenterica (Kutaja) (Bark) - 10%",
//                 "Piper longum (Pippali) (Fruits) - 10%",
//                 "Zingiber officinale (Shunthi) (Roots) - 10%",
//                 "Terminalia bellerica (Bibhitaki) (Fruits) - 10%"
//             ],
//             "symptoms": "Persistent fever that lasts for an extended period\nFatigue and weakness\nSweating\nHeadache\nBody aches and pains\nLoss of appetite\nGeneral discomfort and malaise"
//         },
//         "General Health Tonic (Sarvavyadhi Hara Kwatha)": {
//             "remedyIngredients": [
//                 "Withania somnifera (Ashwagandha) (Roots) - 20%",
//                 "Asparagus racemosus (Shatavari) (Roots) - 10%",
//                 "Glycyrrhiza glabra (Yashtimadhu) (Roots) - 10%",
//                 "Tribulus terrestris (Gokshura) (Fruits) - 10%",
//                 "Phyllanthus emblica (Amalaki) (Fruits) - 15%",
//                 "Terminalia arjuna (Arjuna) (Bark) - 15%",
//                 "Centella asiatica (Mandukaparni) (Leaves) - 10%"
//             ],
//             "symptoms": "General Fatigue\nStress Management\nImmune Support\nPhysical Weakness",
//             "dosage": "Dosage: 4 grams of powder should be given to the patient.\nFrequency: Twice daily (morning and evening).\nAdministration: Mix the powder with milk."
//         },
//         "Heart Tonic (Hridya Rasayana)": {
//             "remedyIngredients": [
//                 "Zingiber officinale (Ginger) (Roots) - 10%",
//                 "Piper longum (Long Pepper) (Fruits) - 10%",
//                 "Phyllanthus emblica (Amalaki) (Fruits) - 30%",
//                 "Terminalia chebula (Haritaki) (Fruits) - 15%",
//                 "Tinospora cordifolia (Guduchi) (Stems) - 15%",
//                 "Cassia angustifolia (Senna) (Leaves) - 10%",
//                 "Mentha piperita (Peppermint) (Leaves) - 10%"
//             ],
//             "dosage": "Dosage: 4 grams of mixed powder should be given to the patient.\nFrequency: Twice daily after meals with water.",
//             "symptoms": "Reduced or loss of appetite\nFeeling full quickly after eating\nWeight loss\nGeneral weakness and fatigue\nNausea and vomiting"
//         },
//         "High Blood Pressure (Rakta Gata Vata)": {
//             "symptoms": "Headache, often in the back of the head\nDizziness or vertigo\nBlurred vision\nShortness of breath\nFatigue\nNausea\nNosebleeds\nChest pain or palpitations\nSwelling of the ankles or legs (edema)",
//             "remedyIngredients": [
//                 "Terminalia arjuna (Arjuna) (Bark) - 35%",
//                 "Terminalia chebula (Haritaki) (Fruits) - 15%",
//                 "Asparagus racemosus (Shatavari) (Roots) - 15%",
//                 "Zingiber officinale (Shunthi) (Roots) - 10%",
//                 "Withania somnifera (Ashwagandha) (Roots) - 25%"
//             ],
//             "dosage": "Dosage: 4 grams of powder should be given to the patient.\nFrequency: Twice daily (morning and night) with honey."
//         },
//         "Migraine (Ardhavabhedaka)": {
//             "remedyIngredients": [
//                 "Curcuma longa (Turmeric) (Roots) - 15%",
//                 "Glycyrrhiza glabra (Licorice) (Roots) - 15%",
//                 "Azadirachta indica (Neem) (Bark) - 15%",
//                 "Tinospora cordifolia (Guduchi) (Stems) - 15%",
//                 "Terminalia chebula (Haritaki) (Fruits) - 10%",
//                 "Ocimum sanctum (Holy Basil) (Leaves) - 15%",
//                 "Eclipta alba (Bhringraj) (Leaves) - 15%"
//             ],
//             "symptoms": "Severe headache, often one-sided\nThrobbing or pulsating pain\nSensitivity to light (photophobia)\nSensitivity to sound (phonophobia)\nNausea and vomiting\nVisual disturbances (auras)\nDizziness or vertigo\nFatigue\nNeck pain or stiffness",
//             "dosage": "Dosage: 4 grams of mixed powder should be given to the patient.\nFrequency: Twice a day, preferably with honey."
//         },
//         "Obesity (Medoroga)": {
//             "dosage": "Dosage: 4 grams of mixed powder should be given to the patient.\nFrequency: Twice a day with warm water.",
//             "remedyIngredients": [
//                 "Terminalia chebula (Haritaki) (Fruits) - 15%",
//                 "Terminalia bellerica (Bibhitaki) (Fruits) - 15%",
//                 "Phyllanthus emblica (Amalaki) (Fruits) - 10%",
//                 "Crataeva nurvala (Varuna) (Bark) - 25%",
//                 "Tribulus terrestris (Gokshura) (Fruits) - 25%",
//                 "Zingiber officinale (Ginger) (Roots) - 10%"
//             ],
//             "symptoms": "Excessive body weight\nIncreased body fat\nBreathlessness on exertion\nFatigue\nJoint pain, especially in knees and hips\nReduced physical activity tolerance\nIncreased hunger and appetite\nInsulin resistance"
//         },
//         "Paralysis (Pakshaghata)": {
//             "remedyIngredients": [
//                 "Curcuma zedoaria (White Turmeric) (Roots) - 20%",
//                 "Withania somnifera (Ashwagandha) (Roots) - 20%",
//                 "Tribulus terrestris (Gokshura) (Fruits) - 20%",
//                 "Zingiber officinale (Ginger) (Roots) - 20%",
//                 "Piper longum (Long Pepper) (Fruits) - 5%",
//                 "Crataeva nurvala (Varuna) (Leaves) - 10%",
//                 "Plumbago zeylanica (Chitraka) (Roots) - 5%"
//             ],
//             "dosage": "Dosage: 3 grams of mixed powder should be given to the patient.\nFrequency: Three times a day with honey.",
//             "symptoms": "Loss of motor function in one or more limbs\nWeakness or inability to move affected body parts\nLoss of sensation in the affected areas\nMuscle stiffness or spasms\nDifficulty in speech or swallowing (in some cases)\nChanges in muscle tone\nIncoordination and balance issues\nPain or discomfort in the affected area"
//         },
//         "Prostate Enlargement (Ashmari Vriddhi)": {
//             "remedyIngredients": [
//                 "Tinospora cordifolia (Guduchi) (Stems) - 15%",
//                 "Tribulus terrestris (Gokshura) (Fruits) - 15%",
//                 "Phyllanthus emblica (Amalaki) (Fruits) - 15%",
//                 "Zingiber officinale (Ginger) (Roots) - 10%",
//                 "Butea monosperma (Palash) (Seeds) - 10%",
//                 "Adhatoda vasica (Vasa) (Leaves) - 5%",
//                 "Terminalia chebula (Haritaki) (Fruits) - 10%",
//                 "Terminalia bellerica (Bibhitaki) (Fruits) - 10%"
//             ],
//             "symptoms": "Frequent urination, especially at night (nocturia)\nDifficulty starting and stopping urination\nWeak urine flow\nIncomplete emptying of the bladder\nUrgency to urinate\nDribbling after urination\nPain or discomfort in the lower abdomen or pelvis\nBlood in the urine (hematuria) or semen\nErectile dysfunction (in some cases)",
//             "dosage": "Dosage: 4 grams of mixed powder should be given to the patient.\nFrequency: Twice a day, morning and evening before meals with water."
//         },
//         "Sleeplessness (Anidra)": {
//             "symptoms": "Difficulty falling asleep\nFrequent awakenings during the night\nInability to stay asleep\nNon-restorative or shallow sleep\nFatigue and daytime sleepiness\nIrritability and mood disturbances\nCognitive impairment and poor concentration\nIncreased stress and anxiety",
//             "remedyIngredients": [
//                 "Withania somnifera (Ashwagandha) (Roots) - 20%",
//                 "Centella asiatica (Gotu Kola) (Leaves) - 30%",
//                 "Piper longum (Long Pepper) (Roots) - 20%",
//                 "Glycyrrhiza glabra (Licorice) (Roots) - 10%",
//                 "Terminalia bellerica (Bibhitaki) (Fruits) - 10%"
//             ],
//             "dosage": "Dosage: 3 grams of mixed powder should be given to the patient.\nFrequency: At night before going to bed, with milk."
//         },
//         "Thyroid Problems (Galaganda)": {
//             "symptoms": "Fatigue and weakness\nWeight gain or difficulty losing weight\nCold intolerance\nDry skin and hair\nConstipation\nHoarseness of voice\nSwelling or enlargement of the neck (goiter)\nIrregular menstrual periods (in women)\nMood disturbances, including depression and anxiety",
//             "dosage": "Dosage: 3 grams of mixed powder should be given to the patient.\nFrequency: Twice a day with lukewarm water.",
//             "remedyIngredients": [
//                 "Crataeva nurvala (Varuna) (Bark) - 20%",
//                 "Bauhinia variegata (Kachnar) (Bark) - 20%",
//                 "Sida cordifolia (Bala) (Leaves) - 15%",
//                 "Terminalia chebula (Haritaki) (Fruits) - 10%",
//                 "Terminalia bellerica (Bibhitaki) (Fruits) - 10%",
//                 "Glycyrrhiza glabra (Licorice) (Roots) - 15%",
//                 "Zingiber officinale (Ginger) (Roots) - 10%"
//             ]
//         }
//     },
//     "Digestive": {
//         " Gastritis (Amlapitta)": {
//             "dosage": "Dosage: 4 grams (one teaspoonful) of mixed powder should be given to the patient.\nFrequency: Twice daily, half an hour before meals.\nAdministration: Mix the powder with water.",
//             "remedyIngredients": [
//                 "Zingiber officinale (Shunthi) (Roots) - 10%",
//                 "Piper longum (Pippali) (Fruits) - 10%",
//                 "Mentha piperita (Pudina) (Leaves) - 10%",
//                 "Terminalia chebula (Haritaki) (Fruits) - 15%",
//                 "Terminalia bellerica (Bibhitaki) (Fruits) - 15%",
//                 "Phyllanthus emblica (Amalaki) (Fruits) - 15%",
//                 "Plumbago zeylanica (Chitraka) (Roots) - 10%",
//                 "Tinospora cordifolia (Guduchi) (Stems) - 15%"
//             ],
//             "symptoms": "Burning sensation or pain in the upper abdomen (heartburn)\nNausea and vomiting\nBelching and bloating\nLoss of appetite\nFeeling of fullness in the stomach\nSour or bitter taste in the mouth\nIndigestion and discomfort after eating"
//         },
//         "Chronic Constipation (Vibandha)": {
//             "symptoms": "Infrequent bowel movements\nDifficulty passing stools\nHard and dry stools\nAbdominal discomfort and bloating\nStraining during bowel movements\nA feeling of incomplete evacuation\nGeneral discomfort and uneasiness",
//             "dosage": "Dosage: 4 grams of mixed powder should be given to the patient.\nFrequency: At night before going to bed.\nAdministration: Mix the powder with water.",
//             "remedyIngredients": [
//                 "Holarrhena antidysenterica (Kutaja) (Bark) - 10%",
//                 "Plumbago ovata (Chitraka) (Husk) - 20%",
//                 "Terminalia bellerica (Bibhitaki) (Fruits) - 10%",
//                 "Terminalia chebula (Haritaki) (Fruits) - 15%",
//                 "Phyllanthus emblica (Amalaki) (Fruits) - 15%",
//                 "Cassia angustifolia (Senna) (Leaves) - 20%",
//                 "Glycyrrhiza glabra (Yashtimadhu) (Roots) - 10%"
//             ]
//         },
//         "Diarrhea (Atisara)": {
//             "dosage": "Dosage: 3 grams of mixed powder should be given to the patient.\nFrequency: Three times a day.\nAdministration: Mix the powder with curd.",
//             "remedyIngredients": [
//                 "Holarrhena antidysenterica (Kutaja) (Bark) - 25%",
//                 "Aegle marmelos (Bilva) (Fruits) - 25%",
//                 "Zingiber officinale (Shunthi) (Roots) - 10%",
//                 "Terminalia chebula (Haritaki) (Fruits) - 10%",
//                 "Cyperus rotundus (Musta) (Roots) - 10%",
//                 "Syzygium cumini (Jamun) (Seeds) - 10%",
//                 "Phyllanthus emblica (Amalaki) (Fruits) - 10%"
//             ],
//             "symptoms": "Frequent and loose stools\nAbdominal cramps and pain\nWatery stools\nDehydration\nNausea and vomiting\nFever (in some cases)\nBlood in stools (in severe cases)"
//         },
//         "Stomach Ulcer (Peptic Ulcer)": {
//             "dosage": "Dosage: 4 grams (one teaspoonful) of mixed powder should be given to the patient.\nFrequency: Twice daily (morning and night).\nAdministration: Mix the powder with water.",
//             "symptoms": "Burning pain in the upper abdomen\nNausea and vomiting\nLoss of appetite\nBloating and belching\nDark or bloody stools (in severe cases)\nHeartburn and acid reflux\nFeeling of fullness or discomfort after eating",
//             "remedyIngredients": [
//                 "Aegle marmelos (Bilva) (Fruits) - 20%",
//                 "Symplocos racemosa (Lodhra) (Bark) - 15%",
//                 "Holarrhena antidysenterica (Kutaja) (Bark) - 20%",
//                 "Azadirachta indica (Neem) (Leaves) - 15%",
//                 "Piper longum (Pippali) (Fruits) - 10%",
//                 "Ficus benghalensis (Vata) (Bark) - 15%",
//                 "Quercus infectoria (Majuphal) (Fruits) - 15%"
//             ]
//         },
//         "Typhoid": {
//             "remedyIngredients": [
//                 "Azadirachta indica (Neem) (Bark) - 20%",
//                 "Bauhinia variegata (Arjun) (Bark) - 20%",
//                 "Crataeva nurvala (Varuna) (Bark) - 20%",
//                 "Terminalia chebula (Haritaki) (Fruits) - 15%",
//                 "Terminalia bellerica (Bibhitaki) (Fruits) - 10%",
//                 "Holarrhena antidysenterica (Kutaja) (Bark) - 10%",
//                 "Tinospora cordifolia (Guduchi) (Stems) - 15%"
//             ],
//             "dosage": "Dosage: 4 grams of mixed powder should be given to the patient.\nFrequency: Twice a day (morning and night).\nAdministration: Mix the powder with lukewarm water.",
//             "symptoms": "High fever\nHeadache and body aches\nWeakness and fatigue\nAbdominal pain and discomfort\nLoss of appetite\nDiarrhea or constipation\nRose-colored spots on the abdomen and chest"
//         },
//         "Urinary Tract Infection (Mutrakrichra)": {
//             "symptoms": "Frequent urge to urinate\nBurning sensation during urination\nPain or discomfort in the lower abdomen\nCloudy or bloody urine\nStrong-smelling urine\nMild fever\nFeeling of incomplete bladder emptying",
//             "dosage": "Dosage: 4 grams of mixed powder should be given to the patient.\nFrequency: Twice a day.\nAdministration: Mix the powder with water.",
//             "remedyIngredients": [
//                 "Tribulus terrestris (Gokshura) (Fruits) - 25%",
//                 "Zingiber officinale (Shunthi) (Roots) - 10%",
//                 "Solanum xanthocarpum (Kantakari) (Whole Plant) - 10%",
//                 "Crataeva nurvala (Varuna) (Bark) - 25%",
//                 "Tinospora cordifolia (Guduchi) (Stems) - 10%",
//                 "Asparagus racemosus (Shatavari) (Roots) - 10%",
//                 "Tephrosia purpurea (Sarapunkha) (Leaves) - 10%"
//             ]
//         },
//         "Worm Infestation (Krimi Roga)": {
//             "dosage": "Dosage: 4 grams of mixed powder should be given to the patient.\nFrequency: At night before going to bed.\nAdministration: Mix the powder with water.",
//             "remedyIngredients": [
//                 "Holarrhena antidysenterica (Kutaja) (Bark) - 10%",
//                 "Plumbago ovata (Chitraka) (Husk) - 20%",
//                 "Terminalia bellerica (Bibhitaki) (Fruits) - 10%",
//                 "Terminalia chebula (Haritaki) (Fruits) - 15%",
//                 "Phyllanthus emblica (Amalaki) (Fruits) - 15%",
//                 "Cassia angustifolia (Senna) (Leaves) - 20%",
//                 "Glycyrrhiza glabra (Yashtimadhu) (Roots) - 10%"
//             ],
//             "symptoms": "Abdominal pain and discomfort\nDiarrhea or constipation\nWeight loss\nItching around the anus or genitals\nVisible worms in stool (in severe cases)\nNausea and vomiting (in severe cases)"
//         }
//     },
    
//   //  ...
// }

const barChartOptions = {
  plugins: {
    legend: {
      position: "top", // You can adjust the position as needed
      align: "center",
      labels: {
        usePointStyle: true,
        color: "black", // Customize the legend label color
      },
    },
  },
  scales: {
    x: {
      stacked: true,
      grid: {
        display: false,
      },
    },
    y: {
      stacked: true,
      beginAtZero: true, // Start the y-axis from zero
    },
  },
};

const pieChartOptions = {
  plugins: {
    legend: {
      position: "top", // You can adjust the position as needed
      align: "center",
      labels: {
        usePointStyle: true,
        color: "White", // Customize the legend label color
      },
    },
  },
};




// Dummy data for the pie chart
const pieChartData = {
  labels: [],
  datasets: [
    {
      label: 'frequently used',
      data: [5, 8, 3],
      backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)', 'rgba(255, 205, 86, 0.6)'],
    },
  ],
};

const ChartComp = ({data}) => {

  const [ingredientDetails, setIngredientDetails] = useState({});

  const [barChartData, setBarChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'no. of diseases',
        data: [],
        backgroundColor: ['rgba(75, 192, 192, 0.6)'],
      },
      {
        label: 'no. of ingredients',
        data: [],
        backgroundColor: ['rgba(255, 99, 12, 0.6)'],
      },
    ],
  });

  const [pieChartData, setPieChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'frequently used',
        data: [5, 8, 3],
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)', 'rgba(255, 205, 86, 0.6)'],
      },
    ],
  });

  const trimIngredientName = (ingredient) => {
    const closingBracketIndex = ingredient.indexOf(')');
    if (closingBracketIndex !== -1) {
      return ingredient.substring(0, closingBracketIndex + 1);
    }
    return ingredient;
  };

  useEffect(() => {
    const details = {};

    // Loop through the data hierarchy
    Object.keys(data).forEach((classKey) => {
      const classObj = data[classKey];
      Object.keys(classObj).forEach((diseaseKey) => {
        const diseaseObj = classObj[diseaseKey];
        if (diseaseObj.hasOwnProperty('remedyIngredients')) {
          // If the disease has remedy ingredients, loop through them
          diseaseObj.remedyIngredients.forEach((ingredient) => {
            const trimmedIngredient = trimIngredientName(ingredient);
            // Increment the ingredient's count in the frequency object
            if (!details[trimmedIngredient]) {
              details[trimmedIngredient] = {
                count: 1,
                classes: { [classKey]: [diseaseKey] },
              };
            } else {
              details[trimmedIngredient].count++;
              if (!details[trimmedIngredient].classes[classKey]) {
                details[trimmedIngredient].classes[classKey] = [diseaseKey];
              } else {
                details[trimmedIngredient].classes[classKey].push(diseaseKey);
              }
            }
          });
        }
      });
    });

    // Set the calculated ingredient details in state
    setIngredientDetails(details);

  }, [data]);


  useEffect(() => {
    // Get the list of classes from your data object
    const classes = Object.keys(data);

    // Calculate the number of diseases and ingredients for each class
    const diseaseCounts = [];
    const ingredientCounts = [];

    classes.forEach((className) => {
      const diseasesInClass = Object.keys(data[className]).length;
      
      let ingredientsInClass = 0;
      for (const diseaseName in data[className]) {
        ingredientsInClass += data[className][diseaseName].remedyIngredients.length;
      }

      diseaseCounts.push(diseasesInClass);
      ingredientCounts.push(ingredientsInClass);
    });

    // Update the state with the calculated counts and class labels
    setBarChartData({
      labels: classes,
      datasets: [
        {
          label: 'no. of diseases in class',
          data: diseaseCounts,
          backgroundColor: ['rgba(75, 192, 192, 0.6)'],
        },
        {
          label: 'no. of ingredients in class',
          data: ingredientCounts,
          backgroundColor: ['rgba(255, 99, 12, 0.6)'],
        },
      ],
    });
  }, [data]);


  console.log(ingredientDetails)
  return (
    <div className="container mx-auto py-4 flex flex-col items-center justify-between">
      <div className="w-[85%] text-start mb-4">
        <h1 className="text-2xl font-bold mb-4">
          Ayurvedic Healing for Common Ailments
        </h1>
        <p>
          Nature's pharmacy holds the key to healing. Ayurveda illuminates the
          path to wellness, one holistic remedy at a time
        </p>
      </div>

      <div className="mt-4 w-full grid grid-cols-1 gap-3 justify-center items-center">
      <Bar data={barChartData} options={pieChartOptions} />
      <Bar data={barChartData} options={barChartOptions} />
      </div>
      <ul>
        {Object.keys(ingredientDetails).map((ingredient) => (
          <li key={ingredient}>
            {ingredient}: {ingredientDetails[ingredient].count},{' '}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChartComp;
