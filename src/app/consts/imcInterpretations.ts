export interface IInterpreteIMC {
  minIMC: number,
  maxIMC: number,
  message: string,
  color: string
}

export const IMC_INTERPRETATIONS = [
  {
    minIMC: 0,
    maxIMC: 16.5,
    message: "Vous êtes en dénutrition",
    color: "danger"
  },
  {
    minIMC: 16.5,
    maxIMC: 18.5,
    message: "Vous êtes en maigreur",
    color: "warning"
  },
  {
    minIMC: 18.5,
    maxIMC: 25,
    message: "Vous êtes de poids normal",
    color: "success"
  },
  {
    minIMC: 25,
    maxIMC: 30,
    message: "Vous êtes en surpoids",
    color: "warning"
  },
  {
    minIMC: 30,
    maxIMC: 35,
    message: "Vous êtes en obésité modérée !",
    color: "warning"
  },
  {
    minIMC: 35,
    maxIMC: 40,
    message: "Vous êtes en obésité sévère !",
    color: "danger"
  },
  {
    minIMC: 40,
    maxIMC: 10000,
    message: "Vous êtes en obésité morbide ou massive !",
    color: "danger"
  },
]
