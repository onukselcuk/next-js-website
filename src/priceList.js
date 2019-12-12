export const dentalImplantObj = {
	straumann: {
		name: {
			en: "Implant Straumann (Swiss) - abutment included"
		},
		euro: 790,
		pound: 670,
		dollar: 880
	},
	hiossen: {
		name: {
			en: "Implant Hiossen (U.S. American) - abutment included"
		},
		euro: 500,
		pound: 425,
		dollar: 560
	},
	boneGrafting: {
		name: {
			en: "Bone Grafting"
		},
		euro: "65 - 320",
		pound: "55 - 270",
		dollar: "70 - 355"
	},
	sinusLifting: {
		name: {
			en: "Sinus Lifting (excluding bone grafting)"
		},
		euro: 360,
		pound: 305,
		dollar: 400
	},
	ceramicCrownWithMetalImplant: {
		name: {
			en: "Ceramic Crown with Standard Metal Implant (per tooth)"
		},
		euro: 185,
		pound: 155,
		dollar: 205
	},
	ceramicCrownWithStandardMetal: {
		name: {
			en: "Ceramic Crown with Standard Metal (per tooth)"
		},
		euro: 140,
		pound: 120,
		dollar: 155
	}
};

export const dentalVeneerCrownObj = {
	zirconiumCrown: {
		name: {
			en: "Zirconium Crown (per tooth)"
		},
		euro: 215,
		pound: 180,
		dollar: 240
	},
	zirconiumCrownWithCad: {
		name: {
			en: "Zirconium Crown with CAD/CAM System (per tooth)"
		},
		euro: 250,
		pound: 210,
		dollar: 280
	},
	fullPorcelainCrown: {
		name: {
			en: "Full Porcelain Crown with CAD/CAM System (per tooth)"
		},
		euro: 285,
		pound: 240,
		dollar: 320
	},
	laminateVeneer: {
		name: {
			en: "Laminate Veneer (per tooth)"
		},
		euro: 250,
		pound: 210,
		dollar: 280
	},
	laminateVeneerEmax: {
		name: {
			en: "Laminate Veneer EMAX (per tooth)"
		},
		euro: 300,
		pound: 255,
		dollar: 335
	},
	onlayInlay: {
		name: {
			en: "Onlay/Inlay Filling (CAD/CAM)"
		},
		euro: 250,
		pound: 210,
		dollar: 280
	}
};

export const denturesInvisalignObj = {
	prosthesisSkeleton: {
		name: {
			en: "Prosthesis Skeleton/Partial (per denture)"
		},
		euro: 600,
		pound: 505,
		dollar: 670
	},
	prosthesisFull: {
		name: {
			en: "Prosthesis Full (per denture)"
		},
		euro: 450,
		pound: 380,
		dollar: 500
	},
	invisalign: {
		name: {
			en: "Invisalign"
		},
		euro: "1600 - 2600",
		pound: "1350 - 2200",
		dollar: "1780 - 2890"
	}
};

export const otherProceduresObj = {
	bonding: {
		name: {
			en: "Bonding"
		},
		euro: 100,
		pound: 85,
		dollar: 110
	},
	filling: {
		name: {
			en: "Dental Filling"
		},
		euro: 60,
		pound: 50,
		dollar: 65
	},
	rootCanal: {
		name: {
			en: "Root Canal Treatment (per canal)"
		},
		euro: 90,
		pound: 75,
		dollar: 100
	},
	laserBleachingPerJaw: {
		name: {
			en: "Laser Bleaching (single jaw)"
		},
		euro: 150,
		pound: 125,
		dollar: 165
	},
	laserBleachingBothJaws: {
		name: {
			en: "Laser Bleaching (both jaws)"
		},
		euro: 200,
		pound: 170,
		dollar: 225
	},
	homeTeethWhiteningKit: {
		name: {
			en: "Home Teeth Whitening Kit"
		},
		euro: 140,
		pound: 120,
		dollar: 155
	},
	dentalCleaningPro: {
		name: {
			en: "Professional Dental Cleaning"
		},
		euro: 55,
		pound: 50,
		dollar: 60
	},
	toothExtractionOnly: {
		name: {
			en: "Tooth Extraction (only)"
		},
		euro: 40,
		pound: 35,
		dollar: 45
	},
	gumContouring: {
		name: {
			en: "Gum Contouring"
		},
		euro: 225,
		pound: 190,
		dollar: 250
	},
	nightGuard: {
		name: {
			en: "Night Guard"
		},
		euro: 90,
		pound: 75,
		dollar: 100
	}
};

export const pedodonticsObj = {
	pedodonticGenAnesthesia: {
		name: {
			en: "Pedodontic General Anesthesia"
		},
		euro: 550,
		pound: 465,
		dollar: 610
	},
	pedodonticFluor: {
		name: {
			en: "Pedodontic Fluor Treatment"
		},
		euro: 170,
		pound: 145,
		dollar: 190
	},
	pedodonticFissurSealant: {
		name: {
			en: "Pedodontic Fissur Sealant"
		},
		euro: 60,
		pound: 50,
		dollar: 65
	}
};

export const dentalImplantArr = Object.values(dentalImplantObj);
export const dentalVeneerCrownArr = Object.values(dentalVeneerCrownObj);
export const denturesInvisalignArr = Object.values(denturesInvisalignObj);
export const otherProceduresArr = Object.values(otherProceduresObj);
export const pedodonticsArr = Object.values(pedodonticsObj);
