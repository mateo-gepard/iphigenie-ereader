export interface Verse {
  id: string;
  text: string;
  lineNumber: number;
}

export interface Stanza {
  id: string;
  title: string; // Speaker name like "IPHIGENIE", "THOAS"
  verses: Verse[];
  act: number;
  scene: number;
}

export interface Scene {
  id: string;
  title: string; // Like "ERSTER AUFTRITT", "ZWEITER AUFTRITT"
  number: number;
  stanzas: Stanza[];
}

export interface Act {
  id: string;
  title: string; // Like "ERSTER AUFZUG", "ZWEITER AUFZUG"
  number: number;
  scenes: Scene[];
}

export const iphigenieText: Act[] = [
  {
    "id": "act-1",
    "title": "ERSTER AUFZUG",
    "number": 1,
    "scenes": [
      {
        "id": "act-1-scene-1",
        "title": "ERSTER AUFTRITT",
        "number": 1,
        "stanzas": [
          {
            "id": "act-1-scene-1-stanza-1",
            "title": "iphigenie",
            "verses": [],
            "act": 1,
            "scene": 1
          },
          {
            "id": "act-1-scene-1-stanza-2",
            "title": "thoas",
            "verses": [],
            "act": 1,
            "scene": 1
          },
          {
            "id": "act-1-scene-1-stanza-3",
            "title": "orest",
            "verses": [],
            "act": 1,
            "scene": 1
          },
          {
            "id": "act-1-scene-1-stanza-4",
            "title": "pylades",
            "verses": [],
            "act": 1,
            "scene": 1
          },
          {
            "id": "act-1-scene-1-stanza-5",
            "title": "arkas",
            "verses": [
              {
                "id": "verse-1",
                "text": "Schauplatz:HainvorDianensTempel (cid:2)(cid:2)",
                "lineNumber": 1
              }
            ],
            "act": 1,
            "scene": 1
          }
        ]
      },
      {
        "id": "act-1-scene-1",
        "title": "ERSTER AUFTRITT",
        "number": 1,
        "stanzas": []
      },
      {
        "id": "act-1-scene-2",
        "title": "ZWEITER AUFTRITT",
        "number": 2,
        "stanzas": [
          {
            "id": "act-1-scene-2-stanza-1",
            "title": "arkas",
            "verses": [
              {
                "id": "verse-2",
                "text": "Soscheintesfast.Zwarschweigterauchvondir;",
                "lineNumber": 2
              },
              {
                "id": "verse-3",
                "text": "DochhabenhingeworfneWortemich 185",
                "lineNumber": 3
              },
              {
                "id": "verse-4",
                "text": "Belehrt,dassseineSeelefestdenWunsch",
                "lineNumber": 4
              },
              {
                "id": "verse-5",
                "text": "Ergriffenhat,dichzubesitzen.Lass,",
                "lineNumber": 5
              },
              {
                "id": "verse-6",
                "text": "Oüberlassihnnichtsichselbst!damit",
                "lineNumber": 6
              },
              {
                "id": "verse-7",
                "text": "InseinemBusennichtderUnmutreife",
                "lineNumber": 7
              },
              {
                "id": "verse-8",
                "text": "UnddirEntsetzenbringe,duzuspät 190",
                "lineNumber": 8
              },
              {
                "id": "verse-9",
                "text": "AnmeinentreuenRatmitReuedenkest.",
                "lineNumber": 9
              },
              {
                "id": "verse-10",
                "text": "iphigenie.Wie?sinntderKönig,waskeinedlerMann,",
                "lineNumber": 10
              },
              {
                "id": "verse-11",
                "text": "DerseinenNamenliebtunddemVerehrung",
                "lineNumber": 11
              },
              {
                "id": "verse-12",
                "text": "DerHimmlischendenBusenbändiget,",
                "lineNumber": 12
              },
              {
                "id": "verse-13",
                "text": "Jedenkensollte?SinntervomAltar 195",
                "lineNumber": 13
              },
              {
                "id": "verse-14",
                "text": "MichinseinBettemitGewaltzuziehn?",
                "lineNumber": 14
              },
              {
                "id": "verse-15",
                "text": "SorufichalleGötterundvorallen",
                "lineNumber": 15
              },
              {
                "id": "verse-16",
                "text": "DianendieentschlossneGöttinan,",
                "lineNumber": 16
              },
              {
                "id": "verse-17",
                "text": "DieihrenSchutzderPriesteringewiss,",
                "lineNumber": 17
              },
              {
                "id": "verse-18",
                "text": "UndJungfraueinerJungfrau,gerngewährt. 200",
                "lineNumber": 18
              },
              {
                "id": "verse-19",
                "text": "arkas.Seiruhig!EingewaltsamneuesBlut",
                "lineNumber": 19
              },
              {
                "id": "verse-20",
                "text": "TreibtnichtdenKönig,solcheJünglingstat",
                "lineNumber": 20
              },
              {
                "id": "verse-21",
                "text": "Verwegenauszuüben.Wieersinnt,",
                "lineNumber": 21
              },
              {
                "id": "verse-22",
                "text": "BefürchtichandernhartenSchlussvonihm,",
                "lineNumber": 22
              },
              {
                "id": "verse-23",
                "text": "Denunaufhaltbarervollendenwird: 205",
                "lineNumber": 23
              },
              {
                "id": "verse-24",
                "text": "DennseineSeelistfestundunbeweglich.",
                "lineNumber": 24
              },
              {
                "id": "verse-25",
                "text": "Drumbittichdich,vertrauihm;seiihmdankbar,",
                "lineNumber": 25
              },
              {
                "id": "verse-26",
                "text": "Wennduihmweiternichtsgewährenkannst.",
                "lineNumber": 26
              },
              {
                "id": "verse-27",
                "text": "iphigenie.Osagewasdirweiternochbekanntist.",
                "lineNumber": 27
              },
              {
                "id": "verse-28",
                "text": "arkas.Erfahr’svonihm.IchsehdenKönigkommen;",
                "lineNumber": 28
              },
              {
                "id": "verse-29",
                "text": "Duehrstihn,unddichheißtdeineigenHerz,",
                "lineNumber": 29
              },
              {
                "id": "verse-30",
                "text": "Ihmfreundlichundvertraulichzubegegnen.",
                "lineNumber": 30
              },
              {
                "id": "verse-31",
                "text": "EinedlerMannwirddurcheingutesWort",
                "lineNumber": 31
              },
              {
                "id": "verse-32",
                "text": "DerFrauenweitgeführt.",
                "lineNumber": 32
              },
              {
                "id": "verse-33",
                "text": "iphigenie (allein). Zwarsehichnicht,",
                "lineNumber": 33
              },
              {
                "id": "verse-34",
                "text": "WieichdemRatdesTreuenfolgensoll. 215",
                "lineNumber": 34
              },
              {
                "id": "verse-35",
                "text": "verwahrst:verschließt 200JungfraueinerJungfrau:Diana,Jagd-",
                "lineNumber": 35
              },
              {
                "id": "verse-36",
                "text": "göttinundBeschützerinderJugendundderJungfräulichkeit 204Schluss:",
                "lineNumber": 36
              },
              {
                "id": "verse-37",
                "text": "Entschluss",
                "lineNumber": 37
              },
              {
                "id": "verse-38",
                "text": "DochfolgichgernderPflicht,demKönige 11",
                "lineNumber": 38
              },
              {
                "id": "verse-39",
                "text": "FürseineWohltatgutesWortzugeben,",
                "lineNumber": 39
              },
              {
                "id": "verse-40",
                "text": "Undwünschemir,dassichdemMächtigen,",
                "lineNumber": 40
              },
              {
                "id": "verse-41",
                "text": "Wasihmgefällt,mitWahrheitsagenmöge.",
                "lineNumber": 41
              }
            ],
            "act": 1,
            "scene": 2
          }
        ]
      },
      {
        "id": "act-1-scene-3",
        "title": "DRITTER AUFTRITT",
        "number": 3,
        "stanzas": [
          {
            "id": "act-1-scene-3-stanza-1",
            "title": "thoas",
            "verses": [
              {
                "id": "verse-42",
                "text": "MehrVorzugundVertrauengebichnicht",
                "lineNumber": 42
              },
              {
                "id": "verse-43",
                "text": "DerKönigstochteralsderUnbekannten.",
                "lineNumber": 43
              },
              {
                "id": "verse-44",
                "text": "IchwiederholemeinenerstenAntrag: 435",
                "lineNumber": 44
              },
              {
                "id": "verse-45",
                "text": "Komm,folgemirundteilewasichhabe.",
                "lineNumber": 45
              },
              {
                "id": "verse-46",
                "text": "RaubderschönstenFrau:EntführungHelenas,derSchwägerin",
                "lineNumber": 46
              },
              {
                "id": "verse-47",
                "text": "Agamemnons,durchdentrojanischenPrinzenParis 421großenFührer:",
                "lineNumber": 47
              },
              {
                "id": "verse-48",
                "text": "Agamemnon.Vgl.Anm.zuV.420f. 423DurchKalchas’Mund:durch",
                "lineNumber": 48
              },
              {
                "id": "verse-49",
                "text": "denPriesterspruchdesgriechischenPriestersundSehersKalchas",
                "lineNumber": 49
              },
              {
                "id": "verse-50",
                "text": "iphigenie.WiedarfichsolchenSchritt,oKönig,wagen? 17",
                "lineNumber": 50
              },
              {
                "id": "verse-51",
                "text": "HatnichtdieGöttin,diemichrettete,",
                "lineNumber": 51
              },
              {
                "id": "verse-52",
                "text": "AlleindasRechtaufmeingeweihtesLeben?",
                "lineNumber": 52
              },
              {
                "id": "verse-53",
                "text": "SiehatfürmichdenSchutzortausgesucht, 440",
                "lineNumber": 53
              },
              {
                "id": "verse-54",
                "text": "UndsiebewahrtmicheinemVater,den",
                "lineNumber": 54
              },
              {
                "id": "verse-55",
                "text": "SiedurchdenScheingenuggestraft,vielleicht",
                "lineNumber": 55
              },
              {
                "id": "verse-56",
                "text": "ZurschönstenFreudeseinesAltershier.",
                "lineNumber": 56
              },
              {
                "id": "verse-57",
                "text": "VielleichtistmirdiefroheRückkehrnah;",
                "lineNumber": 57
              },
              {
                "id": "verse-58",
                "text": "Undich,aufihrenWegnichtachtend,hätte 445",
                "lineNumber": 58
              },
              {
                "id": "verse-59",
                "text": "MichwiderihrenWillenhiergefesselt?",
                "lineNumber": 59
              },
              {
                "id": "verse-60",
                "text": "EinZeichenbatich,wennichbleibensollte.",
                "lineNumber": 60
              },
              {
                "id": "verse-61",
                "text": "thoas.DasZeichenist,dassdunochhierverweilst.",
                "lineNumber": 61
              },
              {
                "id": "verse-62",
                "text": "SuchAusfluchtsolcherArtnichtängstlichauf.",
                "lineNumber": 62
              },
              {
                "id": "verse-63",
                "text": "Mansprichtvergebensviel,umzuversagen; 450",
                "lineNumber": 63
              },
              {
                "id": "verse-64",
                "text": "DerandrehörtvonallemnurdasNein.",
                "lineNumber": 64
              },
              {
                "id": "verse-65",
                "text": "iphigenie.NichtWortesindes,dienurblendensollen;",
                "lineNumber": 65
              },
              {
                "id": "verse-66",
                "text": "IchhabedirmeintiefstesHerzentdeckt.",
                "lineNumber": 66
              },
              {
                "id": "verse-67",
                "text": "Undsagstdudirnichtselbst,wieichdemVater,",
                "lineNumber": 67
              },
              {
                "id": "verse-68",
                "text": "DerMutter,denGeschwisternmichentgegen 455",
                "lineNumber": 68
              },
              {
                "id": "verse-69",
                "text": "MitängstlichenGefühlensehnenmuss?",
                "lineNumber": 69
              },
              {
                "id": "verse-70",
                "text": "DassindenaltenHallen,wodieTrauer",
                "lineNumber": 70
              },
              {
                "id": "verse-71",
                "text": "NochmanchmalstillemeinenNamenlispelt,",
                "lineNumber": 71
              },
              {
                "id": "verse-72",
                "text": "DieFreude,wieumeineNeugeborne,",
                "lineNumber": 72
              },
              {
                "id": "verse-73",
                "text": "DenschönstenKranzvonSäulanSäulenschlinge. 460",
                "lineNumber": 73
              },
              {
                "id": "verse-74",
                "text": "OsendetestdumichaufSchiffenhin!",
                "lineNumber": 74
              },
              {
                "id": "verse-75",
                "text": "DugäbestmirundallenneuesLeben.",
                "lineNumber": 75
              },
              {
                "id": "verse-76",
                "text": "thoas.Sokehrzurück!TuwasdeinHerzdichheißt;",
                "lineNumber": 76
              },
              {
                "id": "verse-77",
                "text": "UndhörenichtdieStimmegutenRats",
                "lineNumber": 77
              },
              {
                "id": "verse-78",
                "text": "UndderVernunft.SeiganzeinWeibundgib 465",
                "lineNumber": 78
              },
              {
                "id": "verse-79",
                "text": "DichhindemTriebe,derdichzügellos",
                "lineNumber": 79
              },
              {
                "id": "verse-80",
                "text": "Ergreiftunddahinoderdorthinreißt.",
                "lineNumber": 80
              },
              {
                "id": "verse-81",
                "text": "WennihneneineLustimBusenbrennt,",
                "lineNumber": 81
              },
              {
                "id": "verse-82",
                "text": "HältvomVerrätersiekeinheiligBand,",
                "lineNumber": 82
              },
              {
                "id": "verse-83",
                "text": "DersiedemVateroderdemGemahl 470",
                "lineNumber": 83
              },
              {
                "id": "verse-84",
                "text": "Auslangbewährten,treuenArmenlockt;",
                "lineNumber": 84
              },
              {
                "id": "verse-85",
                "text": "UndschweigtinihrerBrustdierascheGlut,",
                "lineNumber": 85
              },
              {
                "id": "verse-86",
                "text": "Sodringtaufsievergebenstreuundmächtig",
                "lineNumber": 86
              },
              {
                "id": "verse-87",
                "text": "DerÜberredunggoldneZungelos.",
                "lineNumber": 87
              },
              {
                "id": "verse-88",
                "text": "Schein:denvermeintlichenTodIphigenies 447bat:erbat,erflehte",
                "lineNumber": 88
              },
              {
                "id": "verse-89",
                "text": "blenden:etwasvortäuschen 460Kranz:BekränzungvonTürpfosten",
                "lineNumber": 89
              },
              {
                "id": "verse-90",
                "text": "undSäulenbeieinerGeburt 469vomVerräter:vonVerratundTreu-",
                "lineNumber": 90
              },
              {
                "id": "verse-91",
                "text": "losigkeit",
                "lineNumber": 91
              },
              {
                "id": "verse-92",
                "text": "iphigenie.Gedenk,oKönig,deinesedelnWortes! 475",
                "lineNumber": 92
              },
              {
                "id": "verse-93",
                "text": ".Aufzug WillstdumeinZutraunsoerwidern?Du",
                "lineNumber": 93
              },
              {
                "id": "verse-94",
                "text": "./4.Auftritt Schienstvorbereitet,alleszuvernehmen.",
                "lineNumber": 94
              },
              {
                "id": "verse-95",
                "text": "thoas.AufsUngehofftewarichnichtbereitet;",
                "lineNumber": 95
              },
              {
                "id": "verse-96",
                "text": "Dochsolltich’saucherwarten:wusstichnicht,",
                "lineNumber": 96
              },
              {
                "id": "verse-97",
                "text": "DassichmiteinemWeibehandelnging? 480",
                "lineNumber": 97
              },
              {
                "id": "verse-98",
                "text": "iphigenie.Schiltnicht,oKönig,unserarmGeschlecht.",
                "lineNumber": 98
              },
              {
                "id": "verse-99",
                "text": "Nichtherrlichwiedieeuern,abernicht",
                "lineNumber": 99
              },
              {
                "id": "verse-100",
                "text": "UnedelsinddieWaffeneinesWeibes.",
                "lineNumber": 100
              },
              {
                "id": "verse-101",
                "text": "Glaubes,darinbinichdirvorzuziehn,",
                "lineNumber": 101
              },
              {
                "id": "verse-102",
                "text": "DassichdeinGlückmehralsduselberkenne. 485",
                "lineNumber": 102
              },
              {
                "id": "verse-103",
                "text": "Duwähnest,unbekanntmitdirundmir,",
                "lineNumber": 103
              },
              {
                "id": "verse-104",
                "text": "EinnäherBandwerdunszumGlückvereinen.",
                "lineNumber": 104
              },
              {
                "id": "verse-105",
                "text": "VollgutenMutes,wievollgutenWillens,",
                "lineNumber": 105
              },
              {
                "id": "verse-106",
                "text": "Dringstduinmich,dassichmichfügensoll;",
                "lineNumber": 106
              },
              {
                "id": "verse-107",
                "text": "UndhierdankichdenGöttern,dasssiemir 490",
                "lineNumber": 107
              },
              {
                "id": "verse-108",
                "text": "DieFestigkeitgegeben,diesesBündnis",
                "lineNumber": 108
              },
              {
                "id": "verse-109",
                "text": "Nichteinzugehen,dassienichtgebilligt.",
                "lineNumber": 109
              },
              {
                "id": "verse-110",
                "text": "thoas.EssprichtkeinGott;essprichtdeineignesHerz.",
                "lineNumber": 110
              },
              {
                "id": "verse-111",
                "text": "iphigenie.SieredennurdurchunserHerzzuuns.",
                "lineNumber": 111
              },
              {
                "id": "verse-112",
                "text": "thoas.UndhabIch,siezuhören,nichtdasRecht?",
                "lineNumber": 112
              }
            ],
            "act": 1,
            "scene": 3
          },
          {
            "id": "act-1-scene-3-stanza-2",
            "title": "iphigenie",
            "verses": [
              {
                "id": "verse-113",
                "text": "EsüberbraustderSturmdiezarteStimme.",
                "lineNumber": 113
              },
              {
                "id": "verse-114",
                "text": "thoas.DiePriesterinvernimmtsiewohlallein?",
                "lineNumber": 114
              },
              {
                "id": "verse-115",
                "text": "iphigenie.VorallenandernmerkesiederFürst.",
                "lineNumber": 115
              },
              {
                "id": "verse-116",
                "text": "thoas.DeinheiligAmtunddeingeerbtesRecht",
                "lineNumber": 116
              },
              {
                "id": "verse-117",
                "text": "AnJovisTischbringtdichdenGötternnäher, 500",
                "lineNumber": 117
              },
              {
                "id": "verse-118",
                "text": "AlseinenerdgebornenWilden.",
                "lineNumber": 118
              },
              {
                "id": "verse-119",
                "text": "iphigenie. So",
                "lineNumber": 119
              },
              {
                "id": "verse-120",
                "text": "BüßichnundasVertraun,dasduerzwangst.",
                "lineNumber": 120
              },
              {
                "id": "verse-121",
                "text": "thoas.IchbineinMensch;undbesserist’swirenden.",
                "lineNumber": 121
              },
              {
                "id": "verse-122",
                "text": "SobleibedennmeinWort:SeiPriesterin",
                "lineNumber": 122
              },
              {
                "id": "verse-123",
                "text": "DerGöttin,wiesiedicherkorenhat; 505",
                "lineNumber": 123
              },
              {
                "id": "verse-124",
                "text": "Dochmirverzeih’Diane,dassichihr",
                "lineNumber": 124
              },
              {
                "id": "verse-125",
                "text": "BishermitUnrechtundmitinnermVorwurf",
                "lineNumber": 125
              },
              {
                "id": "verse-126",
                "text": "DiealtenOpfervorenthaltenhabe.",
                "lineNumber": 126
              },
              {
                "id": "verse-127",
                "text": "KeinFremdernahetglücklichunsermUfer;",
                "lineNumber": 127
              },
              {
                "id": "verse-128",
                "text": "VonAltersheristihmderTodgewiss. 510",
                "lineNumber": 128
              },
              {
                "id": "verse-129",
                "text": "EinnäherBand:vonThoasbeabsichtigteEheschließung489Dringst",
                "lineNumber": 129
              },
              {
                "id": "verse-130",
                "text": "duin:bedrängstdu 496Sturm:»SturmderLeidenschaft«,Thoas’unver-",
                "lineNumber": 130
              },
              {
                "id": "verse-131",
                "text": "hohlenerÄrger 501AlseinenerdgebornenWilden:Anspielungauf",
                "lineNumber": 131
              },
              {
                "id": "verse-132",
                "text": "IphigeniesHerkunftunddenRufderTaurierbeidenGriechen",
                "lineNumber": 132
              },
              {
                "id": "verse-133",
                "text": "NurDuhastmichmiteinerFreundlichkeit, 19",
                "lineNumber": 133
              },
              {
                "id": "verse-134",
                "text": "InderichbaldderzartenTochterLiebe,",
                "lineNumber": 134
              },
              {
                "id": "verse-135",
                "text": "BaldstilleNeigungeinerBrautzusehn",
                "lineNumber": 135
              },
              {
                "id": "verse-136",
                "text": "Michtieferfreute,wiemitZauberbanden",
                "lineNumber": 136
              },
              {
                "id": "verse-137",
                "text": "Gefesselt,dassichmeinerPflichtvergaß. 515",
                "lineNumber": 137
              },
              {
                "id": "verse-138",
                "text": "DuhattestmirdieSinneneingewiegt,",
                "lineNumber": 138
              },
              {
                "id": "verse-139",
                "text": "DasMurrenmeinesVolksvernahmichnicht;",
                "lineNumber": 139
              },
              {
                "id": "verse-140",
                "text": "NunrufensiedieSchuldvonmeinesSohnes",
                "lineNumber": 140
              },
              {
                "id": "verse-141",
                "text": "Frühzeit’gemTodelauterübermich.",
                "lineNumber": 141
              },
              {
                "id": "verse-142",
                "text": "Umdeinetwillenhaltichlängernicht 520",
                "lineNumber": 142
              },
              {
                "id": "verse-143",
                "text": "DieMenge,diedasOpferdringendfordert.",
                "lineNumber": 143
              },
              {
                "id": "verse-144",
                "text": "iphigenie.Ummeinetwillenhabich’sniebegehrt.",
                "lineNumber": 144
              },
              {
                "id": "verse-145",
                "text": "DermissverstehtdieHimmlischen,dersie",
                "lineNumber": 145
              },
              {
                "id": "verse-146",
                "text": "Blutgierigwähnt;erdichtetihnennur",
                "lineNumber": 146
              },
              {
                "id": "verse-147",
                "text": "DieeignengrausamenBegierdenan. 525",
                "lineNumber": 147
              },
              {
                "id": "verse-148",
                "text": "EntzogdieGöttinmichnichtselbstdemPriester?",
                "lineNumber": 148
              },
              {
                "id": "verse-149",
                "text": "IhrwarmeinDienstwillkommner,alsmeinTod.",
                "lineNumber": 149
              },
              {
                "id": "verse-150",
                "text": "thoas.Esziemtsichnichtfüruns,denheiligen",
                "lineNumber": 150
              },
              {
                "id": "verse-151",
                "text": "GebrauchmitleichtbeweglicherVernunft",
                "lineNumber": 151
              },
              {
                "id": "verse-152",
                "text": "NachunsermSinnzudeutenundzulenken. 530",
                "lineNumber": 152
              },
              {
                "id": "verse-153",
                "text": "TudeinePflicht,ichwerdemeinetun.",
                "lineNumber": 153
              },
              {
                "id": "verse-154",
                "text": "ZweiFremde,diewirindesUfersHöhlen",
                "lineNumber": 154
              },
              {
                "id": "verse-155",
                "text": "Verstecktgefunden,unddiemeinemLande",
                "lineNumber": 155
              },
              {
                "id": "verse-156",
                "text": "Nichtsgutesbringen,sindinmeinerHand.",
                "lineNumber": 156
              },
              {
                "id": "verse-157",
                "text": "MitdiesennehmedeineGöttinwieder 535",
                "lineNumber": 157
              },
              {
                "id": "verse-158",
                "text": "Ihrerstes,rechtes,langentbehrtesOpfer!",
                "lineNumber": 158
              },
              {
                "id": "verse-159",
                "text": "Ichsendesiehierher;duweißtdenDienst.",
                "lineNumber": 159
              }
            ],
            "act": 1,
            "scene": 3
          }
        ]
      },
      {
        "id": "act-1-scene-4",
        "title": "VIERTER AUFTRITT",
        "number": 4,
        "stanzas": []
      }
    ]
  },
  {
    "id": "act-2",
    "title": "ZWEITER AUFZUG",
    "number": 2,
    "scenes": [
      {
        "id": "act-2-scene-1",
        "title": "ERSTER AUFTRITT",
        "number": 1,
        "stanzas": [
          {
            "id": "act-2-scene-1-stanza-1",
            "title": "pylades",
            "verses": [
              {
                "id": "verse-160",
                "text": "Wohluns,dasseseinWeibist!denneinMann,",
                "lineNumber": 160
              },
              {
                "id": "verse-161",
                "text": "Derbesteselbst,gewöhnetseinenGeist",
                "lineNumber": 161
              },
              {
                "id": "verse-162",
                "text": "AnGrausamkeit,undmachtsichauchzuletzt",
                "lineNumber": 162
              },
              {
                "id": "verse-163",
                "text": "Ausdem,waserverabscheut,einGesetz,",
                "lineNumber": 163
              },
              {
                "id": "verse-164",
                "text": "WirdausGewohnheithartundfastunkenntlich. 790",
                "lineNumber": 164
              },
              {
                "id": "verse-165",
                "text": "AlleineinWeibbleibtstätaufEinemSinn,",
                "lineNumber": 165
              },
              {
                "id": "verse-166",
                "text": "Densiegefasst.Durechnestsicherer",
                "lineNumber": 166
              },
              {
                "id": "verse-167",
                "text": "AufsieimGutenwieimBösen.–Still!",
                "lineNumber": 167
              },
              {
                "id": "verse-168",
                "text": "Olymp:BerginGriechenland;SitzderGötter,woauchverdiente",
                "lineNumber": 168
              },
              {
                "id": "verse-169",
                "text": "MenschenderVorzeit(Herakles)alsHeroenaufgenommenwurden",
                "lineNumber": 169
              },
              {
                "id": "verse-170",
                "text": "Amazonen:sagenhafterkriegerischerFrauenstamm",
                "lineNumber": 170
              },
              {
                "id": "verse-171",
                "text": "Siekommt;lassunsallein.Ichdarfnichtgleich 27",
                "lineNumber": 171
              },
              {
                "id": "verse-172",
                "text": "IhrunsreNamennennen,unserSchicksal 795",
                "lineNumber": 172
              },
              {
                "id": "verse-173",
                "text": "NichtohneRückhaltihrvertraun.Dugehst,",
                "lineNumber": 173
              },
              {
                "id": "verse-174",
                "text": "Undehsiemitdirsprichttreffichdichnoch.",
                "lineNumber": 174
              }
            ],
            "act": 2,
            "scene": 1
          }
        ]
      },
      {
        "id": "act-2-scene-2",
        "title": "ZWEITER AUFTRITT",
        "number": 2,
        "stanzas": []
      }
    ]
  },
  {
    "id": "act-3",
    "title": "DRITTER AUFZUG",
    "number": 3,
    "scenes": [
      {
        "id": "act-3-scene-1",
        "title": "ERSTER AUFTRITT",
        "number": 1,
        "stanzas": [
          {
            "id": "act-3-scene-1-stanza-1",
            "title": "Orest",
            "verses": [
              {
                "id": "verse-175",
                "text": "DasBlutindeinenAdernaufgetrocknet?",
                "lineNumber": 175
              },
              {
                "id": "verse-176",
                "text": "Schleicht,wievomHauptdergrässlichenGorgone,",
                "lineNumber": 176
              },
              {
                "id": "verse-177",
                "text": "VersteinernddireinZauberdurchdieGlieder?",
                "lineNumber": 177
              },
              {
                "id": "verse-178",
                "text": "OwennvergossnenMutterblutesStimme",
                "lineNumber": 178
              },
              {
                "id": "verse-179",
                "text": "SollnichtderreinenSchwesterSegenswort",
                "lineNumber": 179
              },
              {
                "id": "verse-180",
                "text": "HülfreicheGöttervomOlympusrufen?",
                "lineNumber": 180
              },
              {
                "id": "verse-181",
                "text": "orest.Esruft!esruft!SowillstdumeinVerderben?",
                "lineNumber": 181
              },
              {
                "id": "verse-182",
                "text": "VerbirgtindirsicheineRachegöttin?",
                "lineNumber": 182
              },
              {
                "id": "verse-183",
                "text": "DasInnersteinseinenTiefenwendet?",
                "lineNumber": 183
              },
              {
                "id": "verse-184",
                "text": "iphigenie.EszeigtsichdirimtiefstenHerzenan:",
                "lineNumber": 184
              }
            ],
            "act": 3,
            "scene": 1
          },
          {
            "id": "act-3-scene-1-stanza-2",
            "title": "Orest",
            "verses": [
              {
                "id": "verse-185",
                "text": "Ichlebe!",
                "lineNumber": 185
              },
              {
                "id": "verse-186",
                "text": "orest. Du!",
                "lineNumber": 186
              },
              {
                "id": "verse-187",
                "text": "iphigenie. MeinBruder!",
                "lineNumber": 187
              },
              {
                "id": "verse-188",
                "text": "orest. Lass!Hinweg!",
                "lineNumber": 188
              },
              {
                "id": "verse-189",
                "text": "WievonKreusasBrautkleidzündetsich (cid:2)",
                "lineNumber": 189
              },
              {
                "id": "verse-190",
                "text": "EinunauslöschlichFeuervonmirfort.",
                "lineNumber": 190
              },
              {
                "id": "verse-191",
                "text": "Lassmich!WieHerkuleswillichUnwürd’ger (cid:2)",
                "lineNumber": 191
              },
              {
                "id": "verse-192",
                "text": "iphigenie.Duwirstnichtuntergehn!Odassichnur",
                "lineNumber": 192
              },
              {
                "id": "verse-193",
                "text": "EinruhigWortvondirvernehmenkönnte!",
                "lineNumber": 193
              },
              {
                "id": "verse-194",
                "text": "OlösemeineZweifel,lassdesGlückes,",
                "lineNumber": 194
              },
              {
                "id": "verse-195",
                "text": "Deslangerflehten,michauchsicherwerden.",
                "lineNumber": 195
              },
              {
                "id": "verse-196",
                "text": "DurchmeineSeele.VondemfremdenManne",
                "lineNumber": 196
              },
              {
                "id": "verse-197",
                "text": "EntfernetmicheinSchauer;dochesreißt",
                "lineNumber": 197
              },
              {
                "id": "verse-198",
                "text": "MeinInnerstesgewaltigmichzumBruder.",
                "lineNumber": 198
              },
              {
                "id": "verse-199",
                "text": "süßesRäuchwerk:Weihrauch,hieralsBildfürLinderung",
                "lineNumber": 199
              },
              {
                "id": "verse-200",
                "text": "Gorgone:DerAnblickderGorgonen,dämonischerFrauengestalten",
                "lineNumber": 200
              },
              {
                "id": "verse-201",
                "text": "mitSchlangenhaaren,versteinertejedenMenschen.",
                "lineNumber": 201
              },
              {
                "id": "verse-202",
                "text": "orest.IsthierLyäensTempel?undergreift",
                "lineNumber": 202
              },
              {
                "id": "verse-203",
                "text": ".Aufzug Unbändig-heil’geWutdiePriesterin?",
                "lineNumber": 203
              },
              {
                "id": "verse-204",
                "text": "NacheinerlangenZeitdasHerzsichöffnet,",
                "lineNumber": 204
              },
              {
                "id": "verse-205",
                "text": "DerSeligkeit,demLiebsten,wasdieWelt",
                "lineNumber": 205
              },
              {
                "id": "verse-206",
                "text": "Nochfürmichtragenkann,dasHauptzuküssen,",
                "lineNumber": 206
              },
              {
                "id": "verse-207",
                "text": "MitmeinenArmen,diedenleerenWinden",
                "lineNumber": 207
              },
              {
                "id": "verse-208",
                "text": "Olassmich!Lassmich!Dennesquilletheller",
                "lineNumber": 208
              },
              {
                "id": "verse-209",
                "text": "NichtvomParnassdieew’geQuellesprudelnd",
                "lineNumber": 209
              },
              {
                "id": "verse-210",
                "text": "VonFelszuFelsinsgoldneTalhinab,",
                "lineNumber": 210
              },
              {
                "id": "verse-211",
                "text": "WieFreudemirvomHerzenwallendfließt,",
                "lineNumber": 211
              },
              {
                "id": "verse-212",
                "text": "Orest!Orest!MeinBruder!",
                "lineNumber": 212
              },
              {
                "id": "verse-213",
                "text": "(cid:2) orest. SchöneNymphe,",
                "lineNumber": 213
              },
              {
                "id": "verse-214",
                "text": "IchtrauedirunddeinemSchmeichelnnicht.",
                "lineNumber": 214
              },
              {
                "id": "verse-215",
                "text": "DianafordertstrengeDienerinnen",
                "lineNumber": 215
              },
              {
                "id": "verse-216",
                "text": "UndrächetdasentweihteHeiligtum.",
                "lineNumber": 216
              },
              {
                "id": "verse-217",
                "text": "UndwenndueinenJünglingrettendlieben,",
                "lineNumber": 217
              },
              {
                "id": "verse-218",
                "text": "DasschöneGlückihmzärtlichbietenwillst;",
                "lineNumber": 218
              },
              {
                "id": "verse-219",
                "text": "SowendemeinemFreundedeinGemüt,",
                "lineNumber": 219
              },
              {
                "id": "verse-220",
                "text": "Demwürd’gernMannezu.Erirrtumher",
                "lineNumber": 220
              },
              {
                "id": "verse-221",
                "text": "Weisihnzurechtundschonemeiner.",
                "lineNumber": 221
              },
              {
                "id": "verse-222",
                "text": "iphigenie. Fasse",
                "lineNumber": 222
              },
              {
                "id": "verse-223",
                "text": "Dich,Bruder,underkennedieGefundne!",
                "lineNumber": 223
              },
              {
                "id": "verse-224",
                "text": "SchilteinerSchwesterreineHimmelsfreude",
                "lineNumber": 224
              },
              {
                "id": "verse-225",
                "text": "Nichtunbesonnene,strafbareLust.",
                "lineNumber": 225
              },
              {
                "id": "verse-226",
                "text": "DassunsderAugenblickderhöchstenFreude",
                "lineNumber": 226
              },
              {
                "id": "verse-227",
                "text": "Nichtdreifachelendmache!Sieisthier,",
                "lineNumber": 227
              },
              {
                "id": "verse-228",
                "text": "DielängstverlorneSchwester.VomAltar",
                "lineNumber": 228
              },
              {
                "id": "verse-229",
                "text": "RissmichdieGöttinwegundrettete",
                "lineNumber": 229
              },
              {
                "id": "verse-230",
                "text": "Gefangenbistdu,dargestelltzumOpfer,",
                "lineNumber": 230
              },
              {
                "id": "verse-231",
                "text": "UndfindestinderPriesterindieSchwester.",
                "lineNumber": 231
              },
              {
                "id": "verse-232",
                "text": "orest.Unselige!SomagdieSonnedenn",
                "lineNumber": 232
              },
              {
                "id": "verse-233",
                "text": "Lyäens:Dionysos,auchalsLyaios(›Löser‹)bezeichnet,löstalsGott",
                "lineNumber": 233
              },
              {
                "id": "verse-234",
                "text": "desWeinsSorgenundwirdvondenBacchantinneninreligiös-rauschhaf-",
                "lineNumber": 234
              },
              {
                "id": "verse-235",
                "text": "DieletztenGräuelunsersHausessehn! 39",
                "lineNumber": 235
              },
              {
                "id": "verse-236",
                "text": "MitunszuGrundegehe,nichtihrLeben",
                "lineNumber": 236
              },
              {
                "id": "verse-237",
                "text": "ZuschwereremGeschickundLeidenfriste.",
                "lineNumber": 237
              },
              {
                "id": "verse-238",
                "text": "Gut,Priesterin!ichfolgezumAltar:",
                "lineNumber": 238
              },
              {
                "id": "verse-239",
                "text": "DerBrudermordisthergebrachteSitte",
                "lineNumber": 239
              },
              {
                "id": "verse-240",
                "text": "DassihrmichohneKinderauszurotten",
                "lineNumber": 240
              },
              {
                "id": "verse-241",
                "text": "Beschlossenhabt.Undlassdirraten,habe",
                "lineNumber": 241
              },
              {
                "id": "verse-242",
                "text": "DieSonnenichtzuliebundnichtdieSterne;",
                "lineNumber": 242
              },
              {
                "id": "verse-243",
                "text": "Komm,folgemirinsdunkleReichhinab!",
                "lineNumber": 243
              },
              {
                "id": "verse-244",
                "text": "BekämpfenddieverwandteBrutverschlingen,",
                "lineNumber": 244
              },
              {
                "id": "verse-245",
                "text": "ZerstörtsichselbstdaswütendeGeschlecht;",
                "lineNumber": 245
              },
              {
                "id": "verse-246",
                "text": "Kommkinderlosundschuldlosmithinab!",
                "lineNumber": 246
              },
              {
                "id": "verse-247",
                "text": "DusiehstmichmitErbarmenan?Lassab!",
                "lineNumber": 247
              },
              {
                "id": "verse-248",
                "text": "SicheinenWegnachihresSohnesHerzen;",
                "lineNumber": 248
              },
              {
                "id": "verse-249",
                "text": "DochseingeschwungnerArmtrafihreBrust.",
                "lineNumber": 249
              },
              {
                "id": "verse-250",
                "text": "DieMutterfiel!–Trittauf,unwill’gerGeist!",
                "lineNumber": 250
              },
              {
                "id": "verse-251",
                "text": "ImKreisgeschlossentretetan,ihrFurien,",
                "lineNumber": 251
              },
              {
                "id": "verse-252",
                "text": "Demletzten,grässlichsten,dasihrbereitet!",
                "lineNumber": 252
              },
              {
                "id": "verse-253",
                "text": "NichtHassundRacheschärfenihrenDolch:",
                "lineNumber": 253
              },
              {
                "id": "verse-254",
                "text": "DieliebevolleSchwesterwirdzurTat",
                "lineNumber": 254
              },
              {
                "id": "verse-255",
                "text": "Gezwungen.Weinenicht!DuhastnichtSchuld.",
                "lineNumber": 255
              },
              {
                "id": "verse-256",
                "text": "Geliebt,wieichdichliebenkönnte,Schwester.",
                "lineNumber": 256
              },
              {
                "id": "verse-257",
                "text": "Ja,schwingedeinenStahl,verschonenicht,",
                "lineNumber": 257
              },
              {
                "id": "verse-258",
                "text": "ZerreißediesenBusen,underöffne",
                "lineNumber": 258
              },
              {
                "id": "verse-259",
                "text": "DenStrömendiehiersiedeneinenWeg.",
                "lineNumber": 259
              },
              {
                "id": "verse-260",
                "text": "(ErsinktinErmattung.)",
                "lineNumber": 260
              },
              {
                "id": "verse-261",
                "text": "iphigenie.AlleinzutragendiesesGlückundElend",
                "lineNumber": 261
              },
              {
                "id": "verse-262",
                "text": "Vermagichnicht.–Wobistdu,Pylades?",
                "lineNumber": 262
              },
              {
                "id": "verse-263",
                "text": "WofindichdeineHülfe,teurerMann?",
                "lineNumber": 263
              },
              {
                "id": "verse-264",
                "text": "(Sieentferntsichsuchend.)",
                "lineNumber": 264
              },
              {
                "id": "verse-265",
                "text": "Brudermord:AtreusundThyesttötetenihrenStiefbruder.",
                "lineNumber": 265
              },
              {
                "id": "verse-266",
                "text": "unwill’gerGeist:erzürnterundrächenderGeistKlytemnestras",
                "lineNumber": 266
              },
              {
                "id": "verse-267",
                "text": "f.zurTat/Gezwungen:zurTötungOrestsgezwungendurch",
                "lineNumber": 267
              },
              {
                "id": "verse-268",
                "text": "dieErinnyen(unddenBefehldesThoas)",
                "lineNumber": 268
              }
            ],
            "act": 3,
            "scene": 1
          }
        ]
      },
      {
        "id": "act-3-scene-2",
        "title": "ZWEITER AUFTRITT",
        "number": 2,
        "stanzas": []
      },
      {
        "id": "act-3-scene-3",
        "title": "DRITTER AUFTRITT",
        "number": 3,
        "stanzas": []
      }
    ]
  },
  {
    "id": "act-4",
    "title": "VIERTER AUFZUG",
    "number": 4,
    "scenes": [
      {
        "id": "act-4-scene-1",
        "title": "ERSTER AUFTRITT",
        "number": 1,
        "stanzas": []
      },
      {
        "id": "act-4-scene-2",
        "title": "ZWEITER AUFTRITT",
        "number": 2,
        "stanzas": [
          {
            "id": "act-4-scene-2-stanza-1",
            "title": "iphigenie",
            "verses": [
              {
                "id": "verse-269",
                "text": "DerGöttinBildmitfrischerWellenetzend:dasTempelbild",
                "lineNumber": 269
              },
              {
                "id": "verse-270",
                "text": "desTreuenRat:vgl.V.156–191",
                "lineNumber": 270
              },
              {
                "id": "verse-271",
                "text": "arkas.Willstdudennallessogelassenwagen?",
                "lineNumber": 271
              },
              {
                "id": "verse-272",
                "text": ".Aufzug iphigenie.IchhabesinderGötterHandgelegt.",
                "lineNumber": 272
              },
              {
                "id": "verse-273",
                "text": "./3.Auftritt arkas.SiepflegenMenschenmenschlichzuerretten.",
                "lineNumber": 273
              },
              {
                "id": "verse-274",
                "text": "iphigenie.AufihrenFingerzeigkommtallesan.",
                "lineNumber": 274
              },
              {
                "id": "verse-275",
                "text": "arkas.Ichsagedir,esliegtindeinerHand.",
                "lineNumber": 275
              },
              {
                "id": "verse-276",
                "text": "DesKönigsaufgebrachterSinnallein",
                "lineNumber": 276
              },
              {
                "id": "verse-277",
                "text": "BereitetdiesenFremdenbitternTod.",
                "lineNumber": 277
              },
              {
                "id": "verse-278",
                "text": "DasHeerentwöhntelängstvomhartenOpfer",
                "lineNumber": 278
              },
              {
                "id": "verse-279",
                "text": "Undvondemblut’genDiensteseinGemüt.",
                "lineNumber": 279
              },
              {
                "id": "verse-280",
                "text": "AnfremdesUfertrug,empfandesselbst,",
                "lineNumber": 280
              },
              {
                "id": "verse-281",
                "text": "WiegöttergleichdemarmenIrrenden,",
                "lineNumber": 281
              },
              {
                "id": "verse-282",
                "text": "UmhergetriebenanderfremdenGränze,",
                "lineNumber": 282
              },
              {
                "id": "verse-283",
                "text": "EinfreundlichMenschenangesichtbegegnet.",
                "lineNumber": 283
              },
              {
                "id": "verse-284",
                "text": "Duendestleichtwasdubegonnenhast:",
                "lineNumber": 284
              },
              {
                "id": "verse-285",
                "text": "DennnirgendsbautdieMilde,dieherab",
                "lineNumber": 285
              },
              {
                "id": "verse-286",
                "text": "InmenschlicherGestaltvomHimmelkommt,",
                "lineNumber": 286
              },
              {
                "id": "verse-287",
                "text": "EinReichsichschneller,alswotrübundwild",
                "lineNumber": 287
              },
              {
                "id": "verse-288",
                "text": "SichselbstundbangerAhndungüberlassen,",
                "lineNumber": 288
              },
              {
                "id": "verse-289",
                "text": "DesMenschenlebensschwereBürdenträgt.",
                "lineNumber": 289
              },
              {
                "id": "verse-290",
                "text": "iphigenie.ErschüttremeineSeelenicht,diedu",
                "lineNumber": 290
              },
              {
                "id": "verse-291",
                "text": "NachdeinemWillennichtbewegenkannst.",
                "lineNumber": 291
              },
              {
                "id": "verse-292",
                "text": "arkas.SolangesZeitist,schontmanwederMühe",
                "lineNumber": 292
              },
              {
                "id": "verse-293",
                "text": "NocheinesgutenWortesWiederholung.",
                "lineNumber": 293
              },
              {
                "id": "verse-294",
                "text": "iphigenie.DumachstdirMühundmirerregstduSchmerzen;",
                "lineNumber": 294
              },
              {
                "id": "verse-295",
                "text": "Vergebensbeides:darumlassmichnun.",
                "lineNumber": 295
              },
              {
                "id": "verse-296",
                "text": "arkas.DieSchmerzensind’s,dieichzuHülferufe:",
                "lineNumber": 296
              },
              {
                "id": "verse-297",
                "text": "iphigenie.SiefassenmeineSeelemitGewalt,",
                "lineNumber": 297
              },
              {
                "id": "verse-298",
                "text": "DochtilgensiedenWiderwillennicht.",
                "lineNumber": 298
              },
              {
                "id": "verse-299",
                "text": "arkas.FühlteineschöneSeeleWiderwillen",
                "lineNumber": 299
              },
              {
                "id": "verse-300",
                "text": "FüreineWohltat,diederEdlereicht?",
                "lineNumber": 300
              },
              {
                "id": "verse-301",
                "text": "iphigenie.Ja,wennderEdle,wassichnichtgeziemt,",
                "lineNumber": 301
              },
              {
                "id": "verse-302",
                "text": "StattmeinesDankesmicherwerbenwill.",
                "lineNumber": 302
              },
              {
                "id": "verse-303",
                "text": "arkas.WerkeineNeigungfühlt,demmangeltes",
                "lineNumber": 303
              },
              {
                "id": "verse-304",
                "text": "AneinemWortederEntschuld’gungnie.",
                "lineNumber": 304
              },
              {
                "id": "verse-305",
                "text": "ff.bautdieMilde…schneller:Anspielungaufdiewundersame",
                "lineNumber": 305
              },
              {
                "id": "verse-306",
                "text": "HerkunftIphigeniesundihrerfolgreicheshumanesWirkenaufTauris",
                "lineNumber": 306
              },
              {
                "id": "verse-307",
                "text": "DemFürstensagichan,washiergeschehn. 47",
                "lineNumber": 307
              },
              {
                "id": "verse-308",
                "text": "Wieedelersichgegendichbetrug",
                "lineNumber": 308
              },
              {
                "id": "verse-309",
                "text": "VondeinerAnkunftanbisdiesenTag!",
                "lineNumber": 309
              }
            ],
            "act": 4,
            "scene": 2
          }
        ]
      },
      {
        "id": "act-4-scene-3",
        "title": "DRITTER AUFTRITT",
        "number": 3,
        "stanzas": []
      },
      {
        "id": "act-4-scene-4",
        "title": "VIERTER AUFTRITT",
        "number": 4,
        "stanzas": []
      },
      {
        "id": "act-4-scene-5",
        "title": "FÜNFTER AUFTRITT",
        "number": 5,
        "stanzas": []
      }
    ]
  },
  {
    "id": "act-5",
    "title": "FÜNFTER AUFZUG",
    "number": 5,
    "scenes": [
      {
        "id": "act-5-scene-1",
        "title": "ERSTER AUFTRITT",
        "number": 1,
        "stanzas": []
      },
      {
        "id": "act-5-scene-2",
        "title": "ZWEITER AUFTRITT",
        "number": 2,
        "stanzas": []
      },
      {
        "id": "act-5-scene-3",
        "title": "DRITTER AUFTRITT",
        "number": 3,
        "stanzas": [
          {
            "id": "act-5-scene-3-stanza-1",
            "title": "iphigenie",
            "verses": [
              {
                "id": "verse-310",
                "text": "OlassdieGnade,wiedasheil’geLicht",
                "lineNumber": 310
              },
              {
                "id": "verse-311",
                "text": "DerstillenOpferflamme,mirumkränzt",
                "lineNumber": 311
              },
              {
                "id": "verse-312",
                "text": "denernichthofft:denerbefürchtet",
                "lineNumber": 312
              },
              {
                "id": "verse-313",
                "text": "thoas.WieoftbesänftigtemichdieseStimme! 61",
                "lineNumber": 313
              },
              {
                "id": "verse-314",
                "text": "iphigenie.OreichemirdieHandzumFriedenszeichen.",
                "lineNumber": 314
              },
              {
                "id": "verse-315",
                "text": "thoas.DuforderstvielineinerkurzenZeit.",
                "lineNumber": 315
              },
              {
                "id": "verse-316",
                "text": "iphigenie.UmGutszutunbraucht’skeinerÜberlegung.",
                "lineNumber": 316
              },
              {
                "id": "verse-317",
                "text": "thoas.Sehrviel!dennauchdemGutenfolgtdasÜbel.",
                "lineNumber": 317
              },
              {
                "id": "verse-318",
                "text": "iphigenie.DerZweifelist’s,derGutesbösemacht.",
                "lineNumber": 318
              },
              {
                "id": "verse-319",
                "text": "Bedenkenicht;gewährewiedu’sfühlst.",
                "lineNumber": 319
              }
            ],
            "act": 5,
            "scene": 3
          }
        ]
      },
      {
        "id": "act-5-scene-4",
        "title": "VIERTER AUFTRITT",
        "number": 4,
        "stanzas": [
          {
            "id": "act-5-scene-4-stanza-1",
            "title": "iphigenie",
            "verses": [
              {
                "id": "verse-320",
                "text": ".–6.Auftritt orest (derdasSchwerteinsteckt).",
                "lineNumber": 320
              },
              {
                "id": "verse-321",
                "text": "Sosprich!dusiehstichhorchedeinenWorten.",
                "lineNumber": 321
              }
            ],
            "act": 5,
            "scene": 4
          }
        ]
      },
      {
        "id": "act-5-scene-5",
        "title": "FÜNFTER AUFTRITT",
        "number": 5,
        "stanzas": []
      },
      {
        "id": "act-5-scene-6",
        "title": "SECHSTER AUFTRITT",
        "number": 6,
        "stanzas": [
          {
            "id": "act-5-scene-6-stanza-1",
            "title": "thoas",
            "verses": [
              {
                "id": "verse-322",
                "text": "Undbändigt’ichdenZorninmeinerBrust:",
                "lineNumber": 322
              },
              {
                "id": "verse-323",
                "text": "SowürdendochdieWaffenzwischenuns",
                "lineNumber": 323
              },
              {
                "id": "verse-324",
                "text": "Entscheidenmüssen;Friedesehichnicht.",
                "lineNumber": 324
              },
              {
                "id": "verse-325",
                "text": "Siesindgekommen,dubekennestselbst,",
                "lineNumber": 325
              },
              {
                "id": "verse-326",
                "text": "Glaubtihr,ichsehediesgelassenan?",
                "lineNumber": 326
              },
              {
                "id": "verse-327",
                "text": "DerGriechewendetoftseinlüsternAuge",
                "lineNumber": 327
              },
              {
                "id": "verse-328",
                "text": "DenfernenSchätzenderBarbarenzu,",
                "lineNumber": 328
              },
              {
                "id": "verse-329",
                "text": "DemgoldnenFelle,Pferden,schönenTöchtern;",
                "lineNumber": 329
              },
              {
                "id": "verse-330",
                "text": "DemgoldnenFelle:demgoldenenVlies,dasJasonunddieArgo-",
                "lineNumber": 330
              },
              {
                "id": "verse-331",
                "text": "nautenbeidenKolchernerbeuteten",
                "lineNumber": 331
              },
              {
                "id": "verse-332",
                "text": "MitdenerlangtenGüternglücklichheim.",
                "lineNumber": 332
              },
              {
                "id": "verse-333",
                "text": "orest.DasBild,oKönig,sollunsnichtentzweien!",
                "lineNumber": 333
              },
              {
                "id": "verse-334",
                "text": "JetztkennenwirdenIrrtum,deneinGott",
                "lineNumber": 334
              },
              {
                "id": "verse-335",
                "text": "WieeinenSchleierumdasHauptunslegte,",
                "lineNumber": 335
              },
              {
                "id": "verse-336",
                "text": "UmRatundumBefreiungbatichihn",
                "lineNumber": 336
              },
              {
                "id": "verse-337",
                "text": "VondemGeleitderFurien;ersprach:",
                "lineNumber": 337
              },
              {
                "id": "verse-338",
                "text": "»BringstdudieSchwester,dieanTauris’Ufer",
                "lineNumber": 338
              },
              {
                "id": "verse-339",
                "text": "ImHeiligtumewiderWillenbleibt,",
                "lineNumber": 339
              },
              {
                "id": "verse-340",
                "text": "Wirlegten’svonApollensSchwesteraus,",
                "lineNumber": 340
              },
              {
                "id": "verse-341",
                "text": "Undergedachtedich! DiestrengenBande",
                "lineNumber": 341
              },
              {
                "id": "verse-342",
                "text": "Sindnungelöst;dubistdenDeinenwieder,",
                "lineNumber": 342
              },
              {
                "id": "verse-343",
                "text": "DuHeilige,geschenkt.Vondirberührt",
                "lineNumber": 343
              },
              {
                "id": "verse-344",
                "text": "DasÜbelmichmitallenseinenKlauen",
                "lineNumber": 344
              },
              {
                "id": "verse-345",
                "text": "Zumletztenmal,undschütteltedasMark",
                "lineNumber": 345
              },
              {
                "id": "verse-346",
                "text": "Entsetzlichmirzusammen;dannentfloh’s",
                "lineNumber": 346
              },
              {
                "id": "verse-347",
                "text": "WieeineSchlangezuderHöhle.Neu",
                "lineNumber": 347
              },
              {
                "id": "verse-348",
                "text": "DesTages.Schönundherrlichzeigtsichmir",
                "lineNumber": 348
              },
              {
                "id": "verse-349",
                "text": "DerGöttinRat.Gleicheinemheil’genBilde, (cid:2)",
                "lineNumber": 349
              },
              {
                "id": "verse-350",
                "text": "DaranderStadtunwandelbarGeschick",
                "lineNumber": 350
              },
              {
                "id": "verse-351",
                "text": "DurcheingeheimesGötterwortgebanntist,",
                "lineNumber": 351
              },
              {
                "id": "verse-352",
                "text": "Bewahrtedichineinerheil’genStille",
                "lineNumber": 352
              },
              {
                "id": "verse-353",
                "text": "ZumSegendeinesBrudersundderDeinen.",
                "lineNumber": 353
              },
              {
                "id": "verse-354",
                "text": "DaalleRettungaufderweitenErde",
                "lineNumber": 354
              },
              {
                "id": "verse-355",
                "text": "Verlorenschien,gibstduunsalleswieder.",
                "lineNumber": 355
              },
              {
                "id": "verse-356",
                "text": "OKönig!Hindrenicht,dasssiedieWeihe",
                "lineNumber": 356
              },
              {
                "id": "verse-357",
                "text": "DesväterlichenHausesnunvollbringe,",
                "lineNumber": 357
              },
              {
                "id": "verse-358",
                "text": "MichderentsühntenHallewiedergebe,",
                "lineNumber": 358
              },
              {
                "id": "verse-359",
                "text": "MiraufdasHauptdiealteKronedrücke!",
                "lineNumber": 359
              },
              {
                "id": "verse-360",
                "text": "UndlassdesnähernRechtesmichgenießen!",
                "lineNumber": 360
              },
              {
                "id": "verse-361",
                "text": "GewaltundList,derMännerhöchsterRuhm,",
                "lineNumber": 361
              },
              {
                "id": "verse-362",
                "text": "desnähernRechtes:desRechtsOrests,derinfolgeseinerBruder-",
                "lineNumber": 362
              },
              {
                "id": "verse-363",
                "text": "schaftderNäherstehendeist",
                "lineNumber": 363
              },
              {
                "id": "verse-364",
                "text": "WirddurchdieWahrheitdieserhohenSeele",
                "lineNumber": 364
              },
              {
                "id": "verse-365",
                "text": ".Aufzug Beschämt,undreineskindlichesVertrauen",
                "lineNumber": 365
              },
              {
                "id": "verse-366",
                "text": "iphigenie.DenkandeinWort,undlassdurchdieseRede",
                "lineNumber": 366
              },
              {
                "id": "verse-367",
                "text": "AuseinemgradentreuenMundedich",
                "lineNumber": 367
              },
              {
                "id": "verse-368",
                "text": "Bewegen!Siehunsan!Duhastnichtoft",
                "lineNumber": 368
              },
              {
                "id": "verse-369",
                "text": "ZusolcheredelnTatGelegenheit.",
                "lineNumber": 369
              },
              {
                "id": "verse-370",
                "text": "thoas.Sogeht!",
                "lineNumber": 370
              },
              {
                "id": "verse-371",
                "text": "iphigenie. Nichtso,meinKönig!OhneSegen,",
                "lineNumber": 371
              },
              {
                "id": "verse-372",
                "text": "InWiderwillen,scheidichnichtvondir.",
                "lineNumber": 372
              },
              {
                "id": "verse-373",
                "text": "Verbannunsnicht!EinfreundlichGastrechtwalte",
                "lineNumber": 373
              },
              {
                "id": "verse-374",
                "text": "Vondirzuuns:sosindwirnichtaufewig",
                "lineNumber": 374
              },
              {
                "id": "verse-375",
                "text": "WiemirmeinVaterwar,sobistdu’smir,",
                "lineNumber": 375
              },
              {
                "id": "verse-376",
                "text": "UnddieserEindruckbleibtinmeinerSeele.",
                "lineNumber": 376
              },
              {
                "id": "verse-377",
                "text": "BringtderGeringstedeinesVolkesje",
                "lineNumber": 377
              },
              {
                "id": "verse-378",
                "text": "DenTonderStimmemirinsOhrzurück,",
                "lineNumber": 378
              },
              {
                "id": "verse-379",
                "text": "UndsehichandemÄrmsteneureTracht;",
                "lineNumber": 379
              },
              {
                "id": "verse-380",
                "text": "EmpfangenwillichihnwieeinenGott,",
                "lineNumber": 380
              },
              {
                "id": "verse-381",
                "text": "IchwillihmselbsteinLagerzubereiten,",
                "lineNumber": 381
              },
              {
                "id": "verse-382",
                "text": "AufeinenStuhlihnandasFeuerladen,",
                "lineNumber": 382
              },
              {
                "id": "verse-383",
                "text": "OgebendirdieGötterdeinerTaten",
                "lineNumber": 383
              },
              {
                "id": "verse-384",
                "text": "UnddeinerMildewohlverdientenLohn!",
                "lineNumber": 384
              },
              {
                "id": "verse-385",
                "text": "Lebwohl!Owendedichzuunsundgib",
                "lineNumber": 385
              },
              {
                "id": "verse-386",
                "text": "EinholdesWortdesAbschiedsmirzurück!",
                "lineNumber": 386
              },
              {
                "id": "verse-387",
                "text": "UndTränenfließenlinderndervomAuge",
                "lineNumber": 387
              },
              {
                "id": "verse-388",
                "text": "DesScheidenden.Lebwohl!undreichemir",
                "lineNumber": 388
              },
              {
                "id": "verse-389",
                "text": "ZumPfandderaltenFreundschaftdeineRechte.",
                "lineNumber": 389
              },
              {
                "id": "verse-390",
                "text": "thoas.Lebtwohl!",
                "lineNumber": 390
              },
              {
                "id": "verse-391",
                "text": "Anhang",
                "lineNumber": 391
              },
              {
                "id": "verse-392",
                "text": ". Zur Textgestalt 69",
                "lineNumber": 392
              },
              {
                "id": "verse-393",
                "text": "DerTextdervorliegendenAusgabefolgtdemErstdruck:",
                "lineNumber": 393
              },
              {
                "id": "verse-394",
                "text": "Goethe’sSchriften.DritterBand.Leipzig,beyGeorgJoachimGö-",
                "lineNumber": 394
              },
              {
                "id": "verse-395",
                "text": "Die Orthographie wurde auf der Grundlage der neuen amtlichen",
                "lineNumber": 395
              },
              {
                "id": "verse-396",
                "text": "und grammatische Eigenheiten sowie die originale Groß-/Klein-",
                "lineNumber": 396
              },
              {
                "id": "verse-397",
                "text": "und Getrennt-/Zusammenschreibung blieben gewahrt. Die origi-",
                "lineNumber": 397
              },
              {
                "id": "verse-398",
                "text": "naleSchreibungderNamenwurdebeibehalten(nurV.404wurde",
                "lineNumber": 398
              },
              {
                "id": "verse-399",
                "text": "»Clytemnestra« der durchgängigen Schreibweise »Klytemnestra«,",
                "lineNumber": 399
              },
              {
                "id": "verse-400",
                "text": "punktionfolgtderDruckvorlage.",
                "lineNumber": 400
              },
              {
                "id": "verse-401",
                "text": "2. Anmerkungen",
                "lineNumber": 401
              },
              {
                "id": "verse-402",
                "text": "Anhang",
                "lineNumber": 402
              },
              {
                "id": "verse-403",
                "text": "[Personen]Taurier:barbarischesskythischesVolkaufderHalbinsel",
                "lineNumber": 403
              },
              {
                "id": "verse-404",
                "text": "KrimamSchwarzenMeer.HiersollenderGöttinArtemisMen-",
                "lineNumber": 404
              },
              {
                "id": "verse-405",
                "text": "schenopferdargebrachtwordensein.GoetheerfandinAnalogie",
                "lineNumber": 405
              },
              {
                "id": "verse-406",
                "text": "zuIphigenieinAulisvonEuripidesundinAnlehnungandasfrz.",
                "lineNumber": 406
              },
              {
                "id": "verse-407",
                "text": "Tauride(vgl.RacinesEntwurfeinerIphigenieenTauride)dieBe-",
                "lineNumber": 407
              },
              {
                "id": "verse-408",
                "text": "zeichnung »Tauris«. Seiner Vorstellung nach war Tauris keine",
                "lineNumber": 408
              },
              {
                "id": "verse-409",
                "text": "Halbinsel,sonderneineInsel.",
                "lineNumber": 409
              },
              {
                "id": "verse-410",
                "text": "Hain:altertümlichesWortfüreinWäldchen.",
                "lineNumber": 410
              },
              {
                "id": "verse-411",
                "text": "Dianens:Diana:römischeGöttin,dergriechischenArtemisent-",
                "lineNumber": 411
              },
              {
                "id": "verse-412",
                "text": "sprechend;TochterdesZeus,alsMondgöttinZwillingsschwester",
                "lineNumber": 412
              },
              {
                "id": "verse-413",
                "text": "desLichtgottsApollon;imallgemeinenJagdgöttinundSchütze-",
                "lineNumber": 413
              },
              {
                "id": "verse-414",
                "text": "rinvonJugendundJungfräulichkeit.",
                "lineNumber": 414
              },
              {
                "id": "verse-415",
                "text": "DieGattin ihm, Elektrenund den Sohn:IphigeniesMutter",
                "lineNumber": 415
              },
              {
                "id": "verse-416",
                "text": "KlytemnestraundihreGeschwisterElektraundOrest.",
                "lineNumber": 416
              },
              {
                "id": "verse-417",
                "text": "Fluch:deraufIphigeniesFamilielastendeTantalidenfluch.Zeus",
                "lineNumber": 417
              },
              {
                "id": "verse-418",
                "text": "hatte die Missetaten des Tantalus, des Ururgroßvaters der Iphi-",
                "lineNumber": 418
              },
              {
                "id": "verse-419",
                "text": "genie, nicht nur mit dessen persönlicher Bestrafung geahndet",
                "lineNumber": 419
              },
              {
                "id": "verse-420",
                "text": "(vgl.Anm.zuV.306–325),sondernseinegesamteNachkommen-",
                "lineNumber": 420
              },
              {
                "id": "verse-421",
                "text": "schaftineinerArt»Sippenhaftung«miteinemFluchbelegt.Da-",
                "lineNumber": 421
              },
              {
                "id": "verse-422",
                "text": "durch sind die Mitglieder dieser Familie unfähig zu einem ver-",
                "lineNumber": 422
              },
              {
                "id": "verse-423",
                "text": "nunftgeleiteten und zivilisierten Umgang miteinander, sondern",
                "lineNumber": 423
              },
              {
                "id": "verse-424",
                "text": "tragenihreinnerfamiliärenKonflikte,vonewigerRachsuchtge-",
                "lineNumber": 424
              },
              {
                "id": "verse-425",
                "text": "trieben,miteinerunvorstellbarenGrausamkeitaus.Im3.Auftritt",
                "lineNumber": 425
              },
              {
                "id": "verse-426",
                "text": "des1.Aufzugs(V.328ff.)berichtetIphigeniedementsetztenTau-",
                "lineNumber": 426
              },
              {
                "id": "verse-427",
                "text": "rerkönig Thoas von den barbarischen Exzessen ihrer Vorfahren.",
                "lineNumber": 427
              },
              {
                "id": "verse-428",
                "text": "InfolgeihresAufenthaltsaufTaurisscheintIphigenieselbstvor-",
                "lineNumber": 428
              },
              {
                "id": "verse-429",
                "text": "übergehenddemWirkungskreisdesFluchsentzogenzusein.",
                "lineNumber": 429
              },
              {
                "id": "verse-430",
                "text": "Schatten:NachgriechischerVorstellungführendieSeelender",
                "lineNumber": 430
              },
              {
                "id": "verse-431",
                "text": "Verstorbenen ein wesenloses Schattendasein in der Unterwelt",
                "lineNumber": 431
              },
              {
                "id": "verse-432",
                "text": "(Tartaros,Erebosoderlat.Orkus).AnbestimmtenTagensuchen",
                "lineNumber": 432
              },
              {
                "id": "verse-433",
                "text": "sieihreigenesGrabauf.",
                "lineNumber": 433
              },
              {
                "id": "verse-434",
                "text": "rungsmittel.",
                "lineNumber": 434
              },
              {
                "id": "verse-435",
                "text": "Scythe:Als»Skythen«bezeichnetendieGriechenallenördlich",
                "lineNumber": 435
              },
              {
                "id": "verse-436",
                "text": "desSchwarzenMeereswohnendenVölkerschaften,zudenendie",
                "lineNumber": 436
              },
              {
                "id": "verse-437",
                "text": "Tauriergehörten.NachgriechischerAnsichthandelteessichum",
                "lineNumber": 437
              },
              {
                "id": "verse-438",
                "text": "unzivilisierte »Barbaren«, da sie nicht die griechische Sprache",
                "lineNumber": 438
              },
              {
                "id": "verse-439",
                "text": "sprachenundnichtandergriechischenKulturteilnahmen.Zur",
                "lineNumber": 439
              },
              {
                "id": "verse-440",
                "text": "griechischenKulturgehörteauchdieRedekunst(Rhetorik),ein 71",
                "lineNumber": 440
              },
              {
                "id": "verse-441",
                "text": "Umstand,aufdenArkashierindirektverweist:»DerScythesetzt",
                "lineNumber": 441
              },
              {
                "id": "verse-442",
                "text": "insRedenkeinenVorzug«(V.164).",
                "lineNumber": 442
              },
              {
                "id": "verse-443",
                "text": "–325IchbinausTantalus’Geschlecht…Tartarushinab:Zu",
                "lineNumber": 443
              },
              {
                "id": "verse-444",
                "text": "den Abkömmlingen des Tantalos vgl. den Stammbaum S.97. –",
                "lineNumber": 444
              },
              {
                "id": "verse-445",
                "text": "Von Tantalos wird erzählt, er sei ein Sohn der Kronidentochter",
                "lineNumber": 445
              },
              {
                "id": "verse-446",
                "text": "Pluto,undalsVaternenntmanentwederTmolosodersogarZeus",
                "lineNumber": 446
              },
              {
                "id": "verse-447",
                "text": "selbst. Über die Mutter ist er ein Nachfahre der Titanen, eines",
                "lineNumber": 447
              },
              {
                "id": "verse-448",
                "text": "vorolympischen Göttergeschlechts von besonderer Roheit und",
                "lineNumber": 448
              },
              {
                "id": "verse-449",
                "text": "Kraft. Zwei Kernmotive bestimmen die Geschichten über ihn:",
                "lineNumber": 449
              },
              {
                "id": "verse-450",
                "text": "dasMahl,dasermitdenGötternteilteoderfürsieveranstaltete,",
                "lineNumber": 450
              },
              {
                "id": "verse-451",
                "text": "undseinÜbermutalsBeispielfürmenschlicheHybrisundihre",
                "lineNumber": 451
              },
              {
                "id": "verse-452",
                "text": "Bestrafung.–Zeus,soheißteineVersion,ließTantaloszurTafel",
                "lineNumber": 452
              },
              {
                "id": "verse-453",
                "text": "der Olympier zu und vertraute ihm seine Pläne an, aber dieser",
                "lineNumber": 453
              },
              {
                "id": "verse-454",
                "text": "verriet sie den Menschen und stahl für sie die Götternahrung",
                "lineNumber": 454
              },
              {
                "id": "verse-455",
                "text": "NektarundAmbrosia.IneineranderenFassungwollteTantalos",
                "lineNumber": 455
              },
              {
                "id": "verse-456",
                "text": "dieAllwissenheitdesZeusprüfen;erludihnmitdenOlympiern",
                "lineNumber": 456
              },
              {
                "id": "verse-457",
                "text": "zu einem Essen, für das er seinen Sohn Pelops in Stücke ge-",
                "lineNumber": 457
              },
              {
                "id": "verse-458",
                "text": "schnittenhatte.ZurStrafeerlittTantalosnachseinemTodinder",
                "lineNumber": 458
              },
              {
                "id": "verse-459",
                "text": "UnterweltdiesprichwörtlichgewordenenQualen.Untereinem",
                "lineNumber": 459
              },
              {
                "id": "verse-460",
                "text": "mit Früchten beladenen Baum steht er bis zu den Hüften im",
                "lineNumber": 460
              },
              {
                "id": "verse-461",
                "text": "Wasser und wird von Hunger und Durst gefoltert, denn die",
                "lineNumber": 461
              },
              {
                "id": "verse-462",
                "text": "Zweige schnellen hinweg, wenn er nach ihren Früchten greift,",
                "lineNumber": 462
              },
              {
                "id": "verse-463",
                "text": "und der Wasserspiegel senkt sich, sobald er sich bückt und zu",
                "lineNumber": 463
              },
              {
                "id": "verse-464",
                "text": "trinkenversucht.AußerdemschwebteinriesigerFelsblocküber",
                "lineNumber": 464
              },
              {
                "id": "verse-465",
                "text": "demBaumunddrohtständig,Tantaloszuzerschmettern.–Sein",
                "lineNumber": 465
              },
              {
                "id": "verse-466",
                "text": "Sohn Pelops, eine der großen griechischen Heldengestalten,",
                "lineNumber": 466
              },
              {
                "id": "verse-467",
                "text": "wurdevondenGötterninerneuterSchönheitwiederhergestellt;",
                "lineNumber": 467
              },
              {
                "id": "verse-468",
                "text": "einebereitsverzehrteSchulterwurdedurcheineElfenbein-Pro-",
                "lineNumber": 468
              },
              {
                "id": "verse-469",
                "text": "theseersetzt.",
                "lineNumber": 469
              },
              {
                "id": "verse-470",
                "text": "Zur Schmach des alten Tartarus: Der griechische Mythos",
                "lineNumber": 470
              },
              {
                "id": "verse-471",
                "text": "kenntdieUnterwelt(Tartaros,Erebos,Orkus)alsTotenreichun-",
                "lineNumber": 471
              },
              {
                "id": "verse-472",
                "text": "terderErde,indemdieSchattenderVerstorbenenihrwesenlo-",
                "lineNumber": 472
              },
              {
                "id": "verse-473",
                "text": "sesSchattendaseinführen.DieFrommengehenindievomLe-",
                "lineNumber": 473
              },
              {
                "id": "verse-474",
                "text": "thestrom(StromdesVergessens)umflossenenelysischenGefilde",
                "lineNumber": 474
              },
              {
                "id": "verse-475",
                "text": "ein,wosieinewigerGlückseligkeitleben;dieFrevlerwerdenin",
                "lineNumber": 475
              },
              {
                "id": "verse-476",
                "text": "deneigentlichenTartarosgestoßen,einentiefenAbgrund,indem",
                "lineNumber": 476
              },
              {
                "id": "verse-477",
                "text": "sieewigeQualenerduldenmüssen.",
                "lineNumber": 477
              },
              {
                "id": "verse-478",
                "text": "f. Diane, / Erzürnt auf ihren großen Führer: Wegen einer",
                "lineNumber": 478
              },
              {
                "id": "verse-479",
                "text": "Flaute konnte die griechische Flotte nicht von Aulis aus nach",
                "lineNumber": 479
              },
              {
                "id": "verse-480",
                "text": "Troja übersetzen. Dem griechischen Seher und Wahrsager Kal-",
                "lineNumber": 480
              },
              {
                "id": "verse-481",
                "text": "Anhang chaszufolgelagdieUrsacheineinemFrevelAgamemnons,der",
                "lineNumber": 481
              },
              {
                "id": "verse-482",
                "text": "einederGöttinArtemis(Diana)geweihteHirschkuhaufderJagd",
                "lineNumber": 482
              },
              {
                "id": "verse-483",
                "text": "erlegthatte.NurindemAgamemnonseineeigeneTochterIphi-",
                "lineNumber": 483
              },
              {
                "id": "verse-484",
                "text": "genie der Göttin opfere, sei Artemis zu versöhnen. Der König",
                "lineNumber": 484
              },
              {
                "id": "verse-485",
                "text": "von Mykene lockte daraufhin seine Tochter in Begleitung ihrer",
                "lineNumber": 485
              },
              {
                "id": "verse-486",
                "text": "MutterKlytemnestramitdemVersprechennachAulis,siewerde",
                "lineNumber": 486
              },
              {
                "id": "verse-487",
                "text": "mitAchillverlobt,undopferteseineigenesKindderGöttin.Im",
                "lineNumber": 487
              },
              {
                "id": "verse-488",
                "text": "letztenAugenblickverhüllteArtemisIphigenieineinerWolke,",
                "lineNumber": 488
              },
              {
                "id": "verse-489",
                "text": "entführtesienachTaurisundhinterließstattderKönigstochter",
                "lineNumber": 489
              },
              {
                "id": "verse-490",
                "text": "eineHirschkuhaufdemAltar.DaIphigeniesSchicksalungeklärt",
                "lineNumber": 490
              },
              {
                "id": "verse-491",
                "text": "blieb,warAgamemnon»genugbestraft«(vgl.V.442),zumalsich",
                "lineNumber": 491
              },
              {
                "id": "verse-492",
                "text": "auchseineGemahlinvonihmabwandteundaufRachefürden",
                "lineNumber": 492
              },
              {
                "id": "verse-493",
                "text": "vermeintlichenToddergemeinsamenTochtersann.",
                "lineNumber": 493
              },
              {
                "id": "verse-494",
                "text": "gnädigeRetterin:Diana(andiesichIphigenieineinemGebet",
                "lineNumber": 494
              },
              {
                "id": "verse-495",
                "text": "wendet;vgl.auchdenRhythmuswechsel).",
                "lineNumber": 495
              },
              {
                "id": "verse-496",
                "text": "f.dasgrässliche/GeleitderRachegeister:DieErinnyen(Fu-",
                "lineNumber": 496
              },
              {
                "id": "verse-497",
                "text": "rien) sind die drei hundeköpfigen und schlangenhaarigen Ra-",
                "lineNumber": 497
              },
              {
                "id": "verse-498",
                "text": "chegöttinnen der Unterwelt, die nach antiker Vorstellung den",
                "lineNumber": 498
              },
              {
                "id": "verse-499",
                "text": "Untäter verfolgen, zumal bei Verbrechen innerhalb der Familie.",
                "lineNumber": 499
              },
              {
                "id": "verse-500",
                "text": "V.576–580)zurächen,seineeigeneMutterKlytemnestraermor-",
                "lineNumber": 500
              },
              {
                "id": "verse-501",
                "text": "det. Diese schwere Blutschuld hatte Alekto, Megaira und Tisi-",
                "lineNumber": 501
              },
              {
                "id": "verse-502",
                "text": "phone,diedreiFurien,ausderUnterweltaufdieErdegerufen,",
                "lineNumber": 502
              },
              {
                "id": "verse-503",
                "text": "umdenFrevelzubestrafen.UmsichvonderVerfolgungdurch",
                "lineNumber": 503
              },
              {
                "id": "verse-504",
                "text": "die grausamen Rachegöttinnen zu befreien, die ihn bis zum",
                "lineNumber": 504
              },
              {
                "id": "verse-505",
                "text": "Wahnsinn trieben, hatte Orest mit seinem Freund Pylades das",
                "lineNumber": 505
              },
              {
                "id": "verse-506",
                "text": "Orakel von Delphi aufgesucht, wo der Gott Apoll durch seine",
                "lineNumber": 506
              },
              {
                "id": "verse-507",
                "text": "PriesterindenRatsuchendenHilfedurchzumeistdoppelsinnige",
                "lineNumber": 507
              },
              {
                "id": "verse-508",
                "text": "Orakelsprüche zukommen lässt. Gemäß der mythologischen",
                "lineNumber": 508
              },
              {
                "id": "verse-509",
                "text": "Überlieferung,dieauchvonEuripides(IphigeniebeidenTaurern)",
                "lineNumber": 509
              },
              {
                "id": "verse-510",
                "text": "übernommenwurde,sollteOrestdieSchwesterApolls,alsoDi-",
                "lineNumber": 510
              },
              {
                "id": "verse-511",
                "text": "ana,vonTauris,wosiealseineArtNationalgöttinverehrtwurde,",
                "lineNumber": 511
              },
              {
                "id": "verse-512",
                "text": "nach Griechenland bringen. Nach Ansicht der Griechen konnte",
                "lineNumber": 512
              },
              {
                "id": "verse-513",
                "text": "damitnurdasTempelbildnisderDianainTaurisgemeintsein.",
                "lineNumber": 513
              },
              {
                "id": "verse-514",
                "text": "–580 Soll ich … stellt: Orest spricht hier das Schicksal vieler",
                "lineNumber": 514
              },
              {
                "id": "verse-515",
                "text": "seinerAhnenundvorallemdasjenigeseinesVatersAgamemnon",
                "lineNumber": 515
              },
              {
                "id": "verse-516",
                "text": "an,dervonseinereigenenFrauKlytemnestraundderemGelieb-",
                "lineNumber": 516
              },
              {
                "id": "verse-517",
                "text": "ten,AgamemnonsVetterÄgisth,grausamermordetwurde.Orest",
                "lineNumber": 517
              },
              {
                "id": "verse-518",
                "text": "möchtelieberdenTodaufdemAltarderDianaerleidenalsdurch",
                "lineNumber": 518
              },
              {
                "id": "verse-519",
                "text": "den Arm arglistiger Verwandter umkommen wie unlängst sein 73",
                "lineNumber": 519
              },
              {
                "id": "verse-520",
                "text": "Vater,denKlytemnestranacheinemBadineinnetzartigesGe-",
                "lineNumber": 520
              },
              {
                "id": "verse-521",
                "text": "wandeinhüllte(nachandererÜberlieferungwährenddesBades",
                "lineNumber": 521
              },
              {
                "id": "verse-522",
                "text": "mit einem Netz überwarf), so dass er sich nicht gegen Ägisth",
                "lineNumber": 522
              },
              {
                "id": "verse-523",
                "text": "wehrenkonnte.AllerdingsweißOrestzudiesemZeitpunktnoch",
                "lineNumber": 523
              },
              {
                "id": "verse-524",
                "text": "nicht,dassseineSchwesterIphigeniedieDiana-Priesterinist,die",
                "lineNumber": 524
              },
              {
                "id": "verse-525",
                "text": "seinen Opfertod durchführen muss – üblicherweise durch das",
                "lineNumber": 525
              },
              {
                "id": "verse-526",
                "text": "DurchschneidenderKehle.",
                "lineNumber": 526
              },
              {
                "id": "verse-527",
                "text": "WielosgelassneHunde:InderantikenVorstellungsweltwer-",
                "lineNumber": 527
              },
              {
                "id": "verse-528",
                "text": "dendieRachegöttinnenoftmitBlut-oderSchweißhundenauf",
                "lineNumber": 528
              },
              {
                "id": "verse-529",
                "text": "derFährteeinesverwundetenWildesverglichen.",
                "lineNumber": 529
              },
              {
                "id": "verse-530",
                "text": "Orest hatten einen Teil ihrer Kindheit gemeinsam verbracht,",
                "lineNumber": 530
              },
              {
                "id": "verse-531",
                "text": "woraus eine enge Freundschaft entstanden war. Elektra, die äl-",
                "lineNumber": 531
              },
              {
                "id": "verse-532",
                "text": "testeSchwesterOrests,hattedenjüngerenBruderbaldnachAga-",
                "lineNumber": 532
              },
              {
                "id": "verse-533",
                "text": "memnonsErmordungdurchÄgisthundKlytemnestrazuKönig",
                "lineNumber": 533
              },
              {
                "id": "verse-534",
                "text": "Strophios, ihrem gemeinsamen Onkel, bringen lassen, um sein",
                "lineNumber": 534
              },
              {
                "id": "verse-535",
                "text": "Leben vor Ägisth und dessen Anhängern zu retten. Denn von",
                "lineNumber": 535
              },
              {
                "id": "verse-536",
                "text": "OrestgingfürdieKönigsmördereinegroßeGefahraus–sowohl",
                "lineNumber": 536
              },
              {
                "id": "verse-537",
                "text": "alseinziglegitimierterThronnachfolgerseinesVatersinMykene",
                "lineNumber": 537
              },
              {
                "id": "verse-538",
                "text": "alsauchalsdessenspätererRächer.MitdieserFluchtnachPhokis",
                "lineNumber": 538
              },
              {
                "id": "verse-539",
                "text": "wurde Orest ein zweites Mal gerettet, denn bereits gleich nach",
                "lineNumber": 539
              },
              {
                "id": "verse-540",
                "text": "demMordanAgamemnonhatteÄgisthauchOrest,damalsnoch",
                "lineNumber": 540
              },
              {
                "id": "verse-541",
                "text": "imKindesalter,tötenwollen.AberdessenAmmeübergabÄgisth,",
                "lineNumber": 541
              },
              {
                "id": "verse-542",
                "text": "als dieser die Herausgabe des Jungen forderte, ihren eigenen",
                "lineNumber": 542
              },
              {
                "id": "verse-543",
                "text": "Sohn, so dass er das falsche Kind umbrachte. – Pylades blieb",
                "lineNumber": 543
              },
              {
                "id": "verse-544",
                "text": "Orest auch nach dessen blutiger Rache ein treuer Freund und",
                "lineNumber": 544
              },
              {
                "id": "verse-545",
                "text": "verließsogarseineHeimatPhokis,umdenvorSchuldgefühlen",
                "lineNumber": 545
              },
              {
                "id": "verse-546",
                "text": "fast wahnsinnig Gewordenen als ständiger Weggefährte zu be-",
                "lineNumber": 546
              },
              {
                "id": "verse-547",
                "text": "schützenundihnvonderVerfolgungdurchdieErinnyenzube-",
                "lineNumber": 547
              },
              {
                "id": "verse-548",
                "text": "freien.",
                "lineNumber": 548
              },
              {
                "id": "verse-549",
                "text": "–600durchdieverworrnenPfade…wiederaufzuwinden:",
                "lineNumber": 549
              },
              {
                "id": "verse-550",
                "text": "Anspielung auf Theseus, der mit Hilfe des Fadens der Ariadne",
                "lineNumber": 550
              },
              {
                "id": "verse-551",
                "text": "wiederausdemLabyrinthdeskretischenKönigsMinosheraus-",
                "lineNumber": 551
              },
              {
                "id": "verse-552",
                "text": "fand.",
                "lineNumber": 552
              },
              {
                "id": "verse-553",
                "text": "dem hohen Ahnherrn gleich: Orest erinnert sich an einige",
                "lineNumber": 553
              },
              {
                "id": "verse-554",
                "text": "zusammen mit Pylades vollbrachte Taten in ihrer Jugend. Hel-",
                "lineNumber": 554
              },
              {
                "id": "verse-555",
                "text": "dentatendieserArtwerdenindergriechischenMythologiealler-",
                "lineNumber": 555
              },
              {
                "id": "verse-556",
                "text": "dingseherTheseusundHerakleszugeordnetalsihrengemein-",
                "lineNumber": 556
              },
              {
                "id": "verse-557",
                "text": "samenVorfahrenTantalusoderAtreus.Goetheverlässthierdie",
                "lineNumber": 557
              },
              {
                "id": "verse-558",
                "text": "mythologischeExaktheitentweder,umjenePhasejugendlichen",
                "lineNumber": 558
              },
              {
                "id": "verse-559",
                "text": "Anhang TatendurstsseinesjetztdepressivenHeldenhervorzuhebenoder",
                "lineNumber": 559
              },
              {
                "id": "verse-560",
                "text": "um die innerfamiliäre Verherrlichung der berühmten Vorfahren",
                "lineNumber": 560
              },
              {
                "id": "verse-561",
                "text": "durchOrestzuunterstreichen.",
                "lineNumber": 561
              },
              {
                "id": "verse-562",
                "text": "Ton der Harfe: Anspielung auf die Lyra, mitderin dergrie-",
                "lineNumber": 562
              },
              {
                "id": "verse-563",
                "text": "chischenAntikederSängerseinenVortragbegleitete.",
                "lineNumber": 563
              },
              {
                "id": "verse-564",
                "text": "f.BringstdudieSchwesterzuApollenhin/Undwohnen",
                "lineNumber": 564
              },
              {
                "id": "verse-565",
                "text": "beidedannvereintzuDelphis:Pyladesthematisierthierden",
                "lineNumber": 565
              },
              {
                "id": "verse-566",
                "text": "Orakelspruch, dem zufolge Orest erst dann von seinem Fluch,",
                "lineNumber": 566
              },
              {
                "id": "verse-567",
                "text": "alsoderVerfolgungdurchdieErinnyen,befreitwird,wenndiese",
                "lineNumber": 567
              },
              {
                "id": "verse-568",
                "text": "Aufgabeerfülltist.SeineInterpretationdesofträtselhaftenOra-",
                "lineNumber": 568
              },
              {
                "id": "verse-569",
                "text": "kelspruchs ist eindeutig: Apolls Zwillingsschwester Diana bzw.",
                "lineNumber": 569
              },
              {
                "id": "verse-570",
                "text": "ihrBildnisimDiana-TempelinTaurissollnachDelphigebracht",
                "lineNumber": 570
              },
              {
                "id": "verse-571",
                "text": "werden.ErstamSchlussdesDramasstelltsichheraus,dassdieses",
                "lineNumber": 571
              },
              {
                "id": "verse-572",
                "text": "Orakelanderszudeutenist.",
                "lineNumber": 572
              },
              {
                "id": "verse-573",
                "text": "f.ZueinerschwerenTat…:UmOrestTrostzuspenden,spielt",
                "lineNumber": 573
              },
              {
                "id": "verse-574",
                "text": "Pylades auf den Herakles-Mythos an: Herakles hatte in einem",
                "lineNumber": 574
              },
              {
                "id": "verse-575",
                "text": "von Hera verhängten Anfall von Jähzorn seine Frau und seine",
                "lineNumber": 575
              },
              {
                "id": "verse-576",
                "text": "dreiKindererschlagen.NachdemderWahnsinnvonihmgewi-",
                "lineNumber": 576
              },
              {
                "id": "verse-577",
                "text": "chen war, bereute er seine Tat zutiefst. Das Orakel von Delphi",
                "lineNumber": 577
              },
              {
                "id": "verse-578",
                "text": "versprach ihm Entsühnung durch die bekannten zwölf über-",
                "lineNumber": 578
              },
              {
                "id": "verse-579",
                "text": "menschlichenArbeiten,dieerzuverrichtenhatte.",
                "lineNumber": 579
              },
              {
                "id": "verse-580",
                "text": "Ulyssen:Odysseus,KönigvonIthaka.Odysseuszähltzuden",
                "lineNumber": 580
              },
              {
                "id": "verse-581",
                "text": "größten Helden im Trojanischen Krieg und spielte mit seiner",
                "lineNumber": 581
              },
              {
                "id": "verse-582",
                "text": "Intelligenz, seiner Besonnenheit, seiner Redekunst und seinem",
                "lineNumber": 582
              },
              {
                "id": "verse-583",
                "text": "oft listigen Einfallsreichtum (Trojanisches Pferd) eine kriegs-",
                "lineNumber": 583
              },
              {
                "id": "verse-584",
                "text": "entscheidende Rolle. Auch auf seinen zehnjährigen Irrfahrten",
                "lineNumber": 584
              },
              {
                "id": "verse-585",
                "text": "(»Odyssee«) zeichnete sich der »Listenreiche« neben Kühnheit",
                "lineNumber": 585
              },
              {
                "id": "verse-586",
                "text": "undHeldenmutdurchklugesKalkülaus.",
                "lineNumber": 586
              },
              {
                "id": "verse-587",
                "text": "Kreta:AusVorsichterfindetPyladeseinefalscheHerkunft.",
                "lineNumber": 587
              },
              {
                "id": "verse-588",
                "text": "–866 Die hohe … wieder: Troja (griech. Ilion) wurde nach",
                "lineNumber": 588
              },
              {
                "id": "verse-589",
                "text": "langjährigerBelagerungdurchdieGriechenunterFührungAga-",
                "lineNumber": 589
              },
              {
                "id": "verse-590",
                "text": "memnons,desKönigsvonMykene,erobertundzerstört.Inder",
                "lineNumber": 590
              },
              {
                "id": "verse-591",
                "text": "Ilias,einemgriechischenEposvonHomer,wirdderKampfge-",
                "lineNumber": 591
              },
              {
                "id": "verse-592",
                "text": "schildert.GrößterHeldderGriechenwarAchilleus,derwiesein",
                "lineNumber": 592
              },
              {
                "id": "verse-593",
                "text": "schönsterFreund(vgl.V.863)Patroklosfiel;derriesigeAias(lat.",
                "lineNumber": 593
              },
              {
                "id": "verse-594",
                "text": "Ajax,vgl.V.865),derSohndesKönigsTelamonvonSalamis,galt",
                "lineNumber": 594
              },
              {
                "id": "verse-595",
                "text": "nachAchilleusalsderstärkste,aberauchwildesteunterdengrie-",
                "lineNumber": 595
              },
              {
                "id": "verse-596",
                "text": "chischenHelden.Palamedes(V.865)wareingroßerGelehrter.",
                "lineNumber": 596
              },
              {
                "id": "verse-597",
                "text": "Barbaren:ursprünglicheinBegrifffüralleNicht-Griechen,der",
                "lineNumber": 597
              },
              {
                "id": "verse-598",
                "text": "aberschnelleineherabsetzendeBedeutungimSinnevon»unzi- 75",
                "lineNumber": 598
              },
              {
                "id": "verse-599",
                "text": "vilisiert«bekam.",
                "lineNumber": 599
              },
              {
                "id": "verse-600",
                "text": "Ägisthens:ÄgistherschlugseinenOnkelAtreusundbemäch-",
                "lineNumber": 600
              },
              {
                "id": "verse-601",
                "text": "tigte sich der Herrschaft Mykenes. Während Agamemnon am",
                "lineNumber": 601
              },
              {
                "id": "verse-602",
                "text": "Trojanischen Krieg teilnahm, verführte er dessen Frau Klytem-",
                "lineNumber": 602
              },
              {
                "id": "verse-603",
                "text": "nestra,diesichwiederumanihremGemahlrächenwollte,weil",
                "lineNumber": 603
              },
              {
                "id": "verse-604",
                "text": "erzuBeginndesFeldzugsihregemeinsameTochterIphigenieder",
                "lineNumber": 604
              },
              {
                "id": "verse-605",
                "text": "GöttinArtemis(Diana)geopferthatte(wiesiezumindestanneh-",
                "lineNumber": 605
              },
              {
                "id": "verse-606",
                "text": "menmusste).GemeinsamtötetensiedenheimkehrendenAga-",
                "lineNumber": 606
              },
              {
                "id": "verse-607",
                "text": "memnon(vgl.Anm.zuV.576–580).",
                "lineNumber": 607
              },
              {
                "id": "verse-608",
                "text": "einer alten Rache tief Gefühl: Anspielung auf die (schein-",
                "lineNumber": 608
              },
              {
                "id": "verse-609",
                "text": "bare)OpferungIphigeniesdurchAgamemnon,aberauchdarauf,",
                "lineNumber": 609
              },
              {
                "id": "verse-610",
                "text": "dassAgamemnonÄgisthsVaterThyestvommykenischenThron",
                "lineNumber": 610
              },
              {
                "id": "verse-611",
                "text": "gestürzthatte,umsichseineHerrschaftzurückzuerobern,ausder",
                "lineNumber": 611
              },
              {
                "id": "verse-612",
                "text": "ThyestihnundseinenBruderMenelaosvertriebenhatte.Ägisth",
                "lineNumber": 612
              },
              {
                "id": "verse-613",
                "text": "hattebereitsAtreus,denVaterAgamemnons,getötet;nunrächte",
                "lineNumber": 613
              },
              {
                "id": "verse-614",
                "text": "sichÄgistherneut,indemerdenVettererschlug,undbeseitigte",
                "lineNumber": 614
              },
              {
                "id": "verse-615",
                "text": "damitzugleichdenKonkurrentenumdenmykenischenThron.",
                "lineNumber": 615
              },
              {
                "id": "verse-616",
                "text": "DabeideausdemGeschlechtdesTantaluswaren,vollzogensie",
                "lineNumber": 616
              },
              {
                "id": "verse-617",
                "text": "aneinanderden»alten«Fluch,alsodenTantalidenfluch.",
                "lineNumber": 617
              },
              {
                "id": "verse-618",
                "text": "HerdderVatergötter:GoethemischthierRömischesindie",
                "lineNumber": 618
              },
              {
                "id": "verse-619",
                "text": "griechisch-mythologische Handlung: Die Bilder der römischen",
                "lineNumber": 619
              },
              {
                "id": "verse-620",
                "text": "GottheitenderVorratskammer(Penaten)wareninderNähedes",
                "lineNumber": 620
              },
              {
                "id": "verse-621",
                "text": "Herdesaufgestellt.",
                "lineNumber": 621
              },
              {
                "id": "verse-622",
                "text": "(vgl.AvernerSeebeiNeapel),auchalsBezeichnungfürdieganze",
                "lineNumber": 622
              },
              {
                "id": "verse-623",
                "text": "Unterweltgebräuchlich.GoetheverknüpftindemBildvon»des",
                "lineNumber": 623
              },
              {
                "id": "verse-624",
                "text": "Avernus Netzen« also römische Mythologie mit dem griechi-",
                "lineNumber": 624
              },
              {
                "id": "verse-625",
                "text": "schenMythosumdenToddesAgamemnon.",
                "lineNumber": 625
              },
              {
                "id": "verse-626",
                "text": "stiefgewordnen Mutter: Infolge des Todes des Ehegatten",
                "lineNumber": 626
              },
              {
                "id": "verse-627",
                "text": "AgamemnonundderneuenVerbindungmitÄgisthwarKlytem-",
                "lineNumber": 627
              },
              {
                "id": "verse-628",
                "text": "nestranachgriechischemRechtsverständniszurStiefmutterihrer",
                "lineNumber": 628
              },
              {
                "id": "verse-629",
                "text": "leiblichenKindergeworden.DieFolgenfürdieStellungderKin-",
                "lineNumber": 629
              },
              {
                "id": "verse-630",
                "text": "derhatteElektraameigenenLeiberlebenmüssen,indemsiezur",
                "lineNumber": 630
              },
              {
                "id": "verse-631",
                "text": "f.ihreGefährten,/DerZweifelunddieReue:Goethepsy-",
                "lineNumber": 631
              },
              {
                "id": "verse-632",
                "text": "chologisiertdieRachegöttinnen,indemersiealsBildfürseeli-",
                "lineNumber": 632
              },
              {
                "id": "verse-633",
                "text": "scheVorgängenimmt.",
                "lineNumber": 633
              },
              {
                "id": "verse-634",
                "text": "Acheron:nebenKokytosundStyxeinweiteresGewässer,das",
                "lineNumber": 634
              },
              {
                "id": "verse-635",
                "text": "die Unterwelt umgibt und über das die Seelen der Toten von",
                "lineNumber": 635
              },
              {
                "id": "verse-636",
                "text": "Charon,demFährmannderUnterwelt,übergesetztwerden;vgl.",
                "lineNumber": 636
              },
              {
                "id": "verse-637",
                "text": "Anhang auchAnm.zuV.325.",
                "lineNumber": 637
              },
              {
                "id": "verse-638",
                "text": "einalterFluch:InAischylos’DramaDieEumenidensinddie",
                "lineNumber": 638
              },
              {
                "id": "verse-639",
                "text": "ErinnyenaufgrundeinesFluchsindieUnterweltverbannt.",
                "lineNumber": 639
              },
              {
                "id": "verse-640",
                "text": "von Goethe mit Bedacht gesetzt, weil sie Entscheidendes her-",
                "lineNumber": 640
              },
              {
                "id": "verse-641",
                "text": "»EinigehalbeVersehabeichgelassen,wosievielleichtguttun,",
                "lineNumber": 641
              },
              {
                "id": "verse-642",
                "text": "auch einige Veränderungen des Silbenmaßes mit Fleiß ange-",
                "lineNumber": 642
              },
              {
                "id": "verse-643",
                "text": "bracht.«",
                "lineNumber": 643
              },
              {
                "id": "verse-644",
                "text": "Kreusas Brautkleid: Die korinthische Prinzessin Kreusa er-",
                "lineNumber": 644
              },
              {
                "id": "verse-645",
                "text": "hieltanlässlichihrerHochzeitmitJason,demHeldenderArgo-",
                "lineNumber": 645
              },
              {
                "id": "verse-646",
                "text": "nautensage, von ihrer Nebenbuhlerin Medea ein Brautkleid als",
                "lineNumber": 646
              },
              {
                "id": "verse-647",
                "text": "angeblichesVersöhnungsgeschenk.SobaldKreusadasHochzeits-",
                "lineNumber": 647
              },
              {
                "id": "verse-648",
                "text": "kleidangelegthatte,gingesinunlöschbareFlammenaufundver-",
                "lineNumber": 648
              },
              {
                "id": "verse-649",
                "text": "branntediejungeBraut.AufdieseWeiserächtesichJasonsLe-",
                "lineNumber": 649
              },
              {
                "id": "verse-650",
                "text": "bensgefährtinMedeaanihrerRivalin.Jason,denVaterderbeiden",
                "lineNumber": 650
              },
              {
                "id": "verse-651",
                "text": "gemeinsamen Kinder, bestrafte Medea kurz darauf mit der Tö-",
                "lineNumber": 651
              },
              {
                "id": "verse-652",
                "text": "tungihrerKinder.",
                "lineNumber": 652
              },
              {
                "id": "verse-653",
                "text": "WieHerkules:Orestidentifiziertsichhierinseinerschweren",
                "lineNumber": 653
              },
              {
                "id": "verse-654",
                "text": "Depression mit dem sterbenden Herakles (lat.: Herkules). Der",
                "lineNumber": 654
              },
              {
                "id": "verse-655",
                "text": "griechische Held und Halbgott (Vater: Zeus; Mutter: Alkmene)",
                "lineNumber": 655
              },
              {
                "id": "verse-656",
                "text": "hattevonseinerGattinDeianeiraeinohneihrWissenvergiftetes",
                "lineNumber": 656
              },
              {
                "id": "verse-657",
                "text": "Gewand erhalten, das schwere Ätzwunden auf seinem Körper",
                "lineNumber": 657
              },
              {
                "id": "verse-658",
                "text": "hinterließ.VonunerträglichenSchmerzengequält,zogersichin",
                "lineNumber": 658
              },
              {
                "id": "verse-659",
                "text": "dieEinödezurückundließsichdortverbrennen.AufdieseWeise",
                "lineNumber": 659
              },
              {
                "id": "verse-660",
                "text": "hattesichderKentaurNessosdochnochanHeraklesgerächt,der",
                "lineNumber": 660
              },
              {
                "id": "verse-661",
                "text": "ihnbeidessenVersuch,dieschöneDeianeirazuentführen,mit",
                "lineNumber": 661
              },
              {
                "id": "verse-662",
                "text": "einemvergiftetenPfeilgetötethatte.DenndersterbendeNessos",
                "lineNumber": 662
              },
              {
                "id": "verse-663",
                "text": "hatteDeianeirageraten,seinmitLiebezuihrerfülltesBlutaufzu-",
                "lineNumber": 663
              },
              {
                "id": "verse-664",
                "text": "fangen,weilsiesichdamitdieTreueHerkules’sichernkönne.Dei-",
                "lineNumber": 664
              },
              {
                "id": "verse-665",
                "text": "aneiraglaubteNessosundbestrichvieleJahrespäterineinemMo-",
                "lineNumber": 665
              },
              {
                "id": "verse-666",
                "text": "ment von Eifersucht das Untergewand ihres Gatten mit dem",
                "lineNumber": 666
              },
              {
                "id": "verse-667",
                "text": "vergiftetenNessosblut(»Nessoshemd«).Erschüttertvomqualvol-",
                "lineNumber": 667
              },
              {
                "id": "verse-668",
                "text": "lenTodihresMannesnahmsichDeianeiradaraufhindasLeben.",
                "lineNumber": 668
              },
              {
                "id": "verse-669",
                "text": "chantischen Gefolge des Dionysos junge Mädchen, die sich oft",
                "lineNumber": 669
              },
              {
                "id": "verse-670",
                "text": "schmeichlerisch-anbiedernd verhielten. Auf diese Eigenschaft",
                "lineNumber": 670
              },
              {
                "id": "verse-671",
                "text": "spielt Orest an, wenn er ihre Wiedersehensfreude mit der Zu-",
                "lineNumber": 671
              },
              {
                "id": "verse-672",
                "text": "dringlichkeiteinerNympheverwechselt.",
                "lineNumber": 672
              },
              {
                "id": "verse-673",
                "text": "desMordesgewisseLosung:AnspielungaufdenMord,der 77",
                "lineNumber": 673
              },
              {
                "id": "verse-674",
                "text": "einerBegrüßunginnerhalbseinerFamiliehäufigfolgte.",
                "lineNumber": 674
              },
              {
                "id": "verse-675",
                "text": "DesnahverwandtenBluts,daservergoss:einesMordesin-",
                "lineNumber": 675
              },
              {
                "id": "verse-676",
                "text": "nerhalbderFamilie.",
                "lineNumber": 676
              },
              {
                "id": "verse-677",
                "text": "chen Wesen der Naturnotwendigkeit (Ananke) und dem Hin-",
                "lineNumber": 677
              },
              {
                "id": "verse-678",
                "text": "weisaufihreSchwester,dieSchicksalsgöttinTyche,erfolgtnun",
                "lineNumber": 678
              },
              {
                "id": "verse-679",
                "text": "auchdurchPyladeseineInstrumentalisierungderGötterundder",
                "lineNumber": 679
              },
              {
                "id": "verse-680",
                "text": "ReligionfürdieeigeneArgumentation,vgl.etwaV.490–537.",
                "lineNumber": 680
              },
              {
                "id": "verse-681",
                "text": "ff.derTitanen…Olympier:ZeusunddieolympischenGötter",
                "lineNumber": 681
              },
              {
                "id": "verse-682",
                "text": "beseitigten die Herrschaft der Titanen, des ersten Götterge-",
                "lineNumber": 682
              },
              {
                "id": "verse-683",
                "text": "schlechtsindergriechischenMythologie.",
                "lineNumber": 683
              },
              {
                "id": "verse-684",
                "text": "anmut’genZweig:AnspielungaufdenantikenBrauch,zum",
                "lineNumber": 684
              },
              {
                "id": "verse-685",
                "text": "ZeichenderBitteoderdesErflehensvonSchutzundHilfeeinen",
                "lineNumber": 685
              },
              {
                "id": "verse-686",
                "text": "mitweißerWolleumwundenenLorbeer-oderÖlzweigbeisich",
                "lineNumber": 686
              },
              {
                "id": "verse-687",
                "text": "zutragen.",
                "lineNumber": 687
              },
              {
                "id": "verse-688",
                "text": "inderIlias(X,463ff.).",
                "lineNumber": 688
              },
              {
                "id": "verse-689",
                "text": "–07derallein…säubre?:AnspielungaufdieTatendesThe-",
                "lineNumber": 689
              },
              {
                "id": "verse-690",
                "text": "seus(Plutarch,Theseus7ff.).",
                "lineNumber": 690
              },
              {
                "id": "verse-691",
                "text": "–30Gleicheinemheil’genBilde…desHauses:Orestver-",
                "lineNumber": 691
              },
              {
                "id": "verse-692",
                "text": "gleicht seine Schwester mit dem Kultbild einer städtischen",
                "lineNumber": 692
              },
              {
                "id": "verse-693",
                "text": "Schutzgottheit, das in den griechischen Tempeln aufbewahrt",
                "lineNumber": 693
              },
              {
                "id": "verse-694",
                "text": "wurdeunddadurchSegenundSchutzfürdieStadtgewährte.",
                "lineNumber": 694
              },
              {
                "id": "verse-695",
                "text": "3. Von der Urfassung zur klassischen Form",
                "lineNumber": 695
              },
              {
                "id": "verse-696",
                "text": "Anhang",
                "lineNumber": 696
              },
              {
                "id": "verse-697",
                "text": ".1Überblick",
                "lineNumber": 697
              },
              {
                "id": "verse-698",
                "text": "marerHoffolgte,gehörteermitWieland,Herder,späterauchSchil-",
                "lineNumber": 698
              },
              {
                "id": "verse-699",
                "text": "lerzueinemKreisausgewählterbürgerlicherIntellektueller,dieim",
                "lineNumber": 699
              },
              {
                "id": "verse-700",
                "text": "engen Zusammenleben mit dem höfischen Adel aus Weimar ein",
                "lineNumber": 700
              },
              {
                "id": "verse-701",
                "text": "geistigesundkulturellesZentrumEuropasbildeten.",
                "lineNumber": 701
              },
              {
                "id": "verse-702",
                "text": "Dem damals 26jährigen Juristen und erfolgreichen Schriftsteller",
                "lineNumber": 702
              },
              {
                "id": "verse-703",
                "text": "(DieLeidendes jungenWerthers) wurdenvonAnfanganwichtige",
                "lineNumber": 703
              },
              {
                "id": "verse-704",
                "text": "Staatsämteranvertraut,sodasskaumZeitbliebfüreineliterarische",
                "lineNumber": 704
              },
              {
                "id": "verse-705",
                "text": "Betätigung.DennochentstandindieserPhaseinnursechsWochen",
                "lineNumber": 705
              },
              {
                "id": "verse-706",
                "text": "die erste Prosafassung der Iphigenie, unterbrochen von Dienstrei-",
                "lineNumber": 706
              },
              {
                "id": "verse-707",
                "text": "sen,aufdenenGoethedeprimierendeErfahrungenmitderArmut",
                "lineNumber": 707
              },
              {
                "id": "verse-708",
                "text": "dereinfachenBevölkerungmachte.",
                "lineNumber": 708
              },
              {
                "id": "verse-709",
                "text": "GoethehattedieersteAufführungseinerIphigenieimhöfischen",
                "lineNumber": 709
              },
              {
                "id": "verse-710",
                "text": "LiebhabertheaterderMutterdesHerzogs,AnnaAmalia,persönlich",
                "lineNumber": 710
              },
              {
                "id": "verse-711",
                "text": "inszeniert und selbst die Rolle des Orest gespielt, war aber mit",
                "lineNumber": 711
              },
              {
                "id": "verse-712",
                "text": "Abschrift mehr. Es folgten Jahre des Experimentierens mit einer",
                "lineNumber": 712
              },
              {
                "id": "verse-713",
                "text": "angemessenensprachlichenForm,diedenmodernenGeistseiner",
                "lineNumber": 713
              },
              {
                "id": "verse-714",
                "text": "IphigeniemitdemFormidealderAntikeverbindensollte.Dieend-",
                "lineNumber": 714
              },
              {
                "id": "verse-715",
                "text": "gültige Fassung im Blankvers, also im ungereimten fünffüßigen",
                "lineNumber": 715
              },
              {
                "id": "verse-716",
                "text": "Jambus, entstand unter dem Eindruck seiner Begegnung mit der",
                "lineNumber": 716
              },
              {
                "id": "verse-717",
                "text": "Schlüsseltext des ästhetischen Bildungsprogramms der Weimarer",
                "lineNumber": 717
              },
              {
                "id": "verse-718",
                "text": "Klassik und ist bis heute Gegenstand wissenschaftlicher Kontro-",
                "lineNumber": 718
              },
              {
                "id": "verse-719",
                "text": "versen.",
                "lineNumber": 719
              },
              {
                "id": "verse-720",
                "text": "Gegen manche kritischen Stimmen zur Form und Sprache des",
                "lineNumber": 720
              },
              {
                "id": "verse-721",
                "text": "Dramas(RichardM.Meyer,3.4.1)hebtTheodorW.AdornodieKul-",
                "lineNumber": 721
              },
              {
                "id": "verse-722",
                "text": "turundHumanitätstiftendeLeistungdieserSprachehervor,dieer",
                "lineNumber": 722
              },
              {
                "id": "verse-723",
                "text": "alsspannungsreichenBändigungsversuchderrohenKräftebetrach-",
                "lineNumber": 723
              },
              {
                "id": "verse-724",
                "text": "tet,diedurchdieBarbareidesTantalidenfluchsindasStückgetragen",
                "lineNumber": 724
              },
              {
                "id": "verse-725",
                "text": "werden. Sprache und Form sind demnach keineswegs nur kunst-",
                "lineNumber": 725
              },
              {
                "id": "verse-726",
                "text": "vollesBeiwerkoderlebloserKlassizismus.DennimGegensatzzum",
                "lineNumber": 726
              },
              {
                "id": "verse-727",
                "text": "französischen Klassizismus sei Goethes Sprache so eng mit dem",
                "lineNumber": 727
              },
              {
                "id": "verse-728",
                "text": "GehaltdesDramasundseinereigenendichterischenErfahrungver-",
                "lineNumber": 728
              },
              {
                "id": "verse-729",
                "text": "bunden,dasssichdieseSpracheunentwegtmitdemdramatischen",
                "lineNumber": 729
              },
              {
                "id": "verse-730",
                "text": "Geschehenneuerzeuge,»alswäresie[…]fähig,jedesubjektiveRe-",
                "lineNumber": 730
              },
              {
                "id": "verse-731",
                "text": "Abb.1:JohannWolfgangGoethe",
                "lineNumber": 731
              },
              {
                "id": "verse-732",
                "text": "gunginsichzuempfangenundnachihrsichzuwandeln«.Dassei",
                "lineNumber": 732
              },
              {
                "id": "verse-733",
                "text": "nurmöglichgewesendurchGoetheseigeneErfahrungvonbarba-",
                "lineNumber": 733
              },
              {
                "id": "verse-734",
                "text": "rischen, naturwüchsigen Kräften auch im zivilisierten Menschen,",
                "lineNumber": 734
              },
              {
                "id": "verse-735",
                "text": "die–imTantalidenmythossichtbar–alseinunentwegtLauerndes",
                "lineNumber": 735
              },
              {
                "id": "verse-736",
                "text": "undBedrohlichesvonderSchönheitdieserSprachegebändigtwer-",
                "lineNumber": 736
              },
              {
                "id": "verse-737",
                "text": "den(3.4.2).",
                "lineNumber": 737
              },
              {
                "id": "verse-738",
                "text": "denBlickaufdieEntstehungsbedingungenderIphigenieundstellt",
                "lineNumber": 738
              },
              {
                "id": "verse-739",
                "text": "fest,GoethehabebewusstKunstund»Lebenspraxis«getrennt.Daer",
                "lineNumber": 739
              },
              {
                "id": "verse-740",
                "text": "imDiensteinesFürstengestandenhabeundseineKunstzugleich",
                "lineNumber": 740
              },
              {
                "id": "verse-741",
                "text": "ein Teil der höfischen Repräsentation gewesen sei, seien die un-",
                "lineNumber": 741
              },
              {
                "id": "verse-742",
                "text": "bequemen Wirklichkeitserfahrungen dieser Zeit, die er als »Be-",
                "lineNumber": 742
              },
              {
                "id": "verse-743",
                "text": "schmutzung«erlebthabe,vonihmbewusstausderDichtungaus-",
                "lineNumber": 743
              },
              {
                "id": "verse-744",
                "text": "geschlossen worden. Die Trennung zwischen einer »reinen« Welt",
                "lineNumber": 744
              },
              {
                "id": "verse-745",
                "text": "derKunstundeinerschlechtenWirklichkeit,ihrerAnsichtnachty-",
                "lineNumber": 745
              },
              {
                "id": "verse-746",
                "text": "pischfürdasDenkendesBildungsbürgertumsim19.Jahrhundert,",
                "lineNumber": 746
              },
              {
                "id": "verse-747",
                "text": "Anhang sei hier bereits angelegt und drücke sich auch in der Sprache des",
                "lineNumber": 747
              },
              {
                "id": "verse-748",
                "text": "Dramasaus(3.4.3).",
                "lineNumber": 748
              },
              {
                "id": "verse-749",
                "text": ".2AusgewählteBriefeundTagebucheintragungenGoethes",
                "lineNumber": 749
              },
              {
                "id": "verse-750",
                "text": "zuIphigenieaufTauris",
                "lineNumber": 750
              },
              {
                "id": "verse-751",
                "text": "»DenganzenTagbrüt’ichüber›Iphigenien‹,dassmirderKopfganz",
                "lineNumber": 751
              },
              {
                "id": "verse-752",
                "text": "wüst ist, ob ich gleich zur schönen Vorbereitung letzte Nacht 10",
                "lineNumber": 752
              },
              {
                "id": "verse-753",
                "text": "Stundengeschlafenhabe.SoganzohneSammlung,nurdeneinen",
                "lineNumber": 753
              },
              {
                "id": "verse-754",
                "text": "FußimSteigriemendesDichter-Hippogryphs[Fabelwesen;Misch-",
                "lineNumber": 754
              },
              {
                "id": "verse-755",
                "text": "wesenausPferdundGreifvogel],will’ssehrschwersein,etwaszu 5",
                "lineNumber": 755
              },
              {
                "id": "verse-756",
                "text": "bringen,dasnichtganzmitGlanzleinwand-Lumpengekleidetsei.«",
                "lineNumber": 756
              },
              {
                "id": "verse-757",
                "text": "GoetheüberseineDichtungen.VersucheinerSammlungallerÄußerungen",
                "lineNumber": 757
              },
              {
                "id": "verse-758",
                "text": "desDichtersüberseinepoetischenWerke.Hrsg.vonHansGerhardGräf.",
                "lineNumber": 758
              },
              {
                "id": "verse-759",
                "text": "S.159f.",
                "lineNumber": 759
              },
              {
                "id": "verse-760",
                "text": "»[Rekruten-]Auslesung. Nachher einsam im neuen Schlosse an",
                "lineNumber": 760
              },
              {
                "id": "verse-761",
                "text": "›Iphigenie‹geschrieben,soauchden4.[März.]«",
                "lineNumber": 761
              },
              {
                "id": "verse-762",
                "text": "GräfII,3.S.161.",
                "lineNumber": 762
              },
              {
                "id": "verse-763",
                "text": "»HierwilldasDramagarnichtfort,esistverflucht,derKönigvon",
                "lineNumber": 763
              },
              {
                "id": "verse-764",
                "text": "Tauris soll reden, als wenn kein Strumpfwürker in Apolde hun-",
                "lineNumber": 764
              },
              {
                "id": "verse-765",
                "text": "gerte.«",
                "lineNumber": 765
              },
              {
                "id": "verse-766",
                "text": "GräfII,3.S.162.",
                "lineNumber": 766
              },
              {
                "id": "verse-767",
                "text": "»Ich bin in große Not geraten, die ich Dir sogleich anzeigen und",
                "lineNumber": 767
              },
              {
                "id": "verse-768",
                "text": "klagen muss. Nach Deinem Abschied las ich noch in der ›Elektra‹",
                "lineNumber": 768
              },
              {
                "id": "verse-769",
                "text": "desSophokles.DielangenJambenohneAbschnittunddassonder-",
                "lineNumber": 769
              },
              {
                "id": "verse-770",
                "text": "Abb.2:JohannWolfgangGoethe:Rekrutenaushebung",
                "lineNumber": 770
              },
              {
                "id": "verse-771",
                "text": "bareWälzenundRollendesPeriodshabensichmirsoeingeprägt,",
                "lineNumber": 771
              },
              {
                "id": "verse-772",
                "text": "dassmirnundiekurzenZeilender›Iphigenie‹ganzhöckerig,übel-",
                "lineNumber": 772
              },
              {
                "id": "verse-773",
                "text": "klingendundunlesbarwerden.Ichhabegleichangefangendieerste",
                "lineNumber": 773
              },
              {
                "id": "verse-774",
                "text": "Szene umzuändern. Damit ich aber nicht zu weit gehe, und Maß",
                "lineNumber": 774
              },
              {
                "id": "verse-775",
                "text": "undZielfestgesetztwerde,bitt’ichDichetwaum5Uhrumeine",
                "lineNumber": 775
              },
              {
                "id": "verse-776",
                "text": "Lektion.IchwillzuDirkommen!«",
                "lineNumber": 776
              },
              {
                "id": "verse-777",
                "text": "GräfII,3.S.177f.",
                "lineNumber": 777
              },
              {
                "id": "verse-778",
                "text": "Anhang",
                "lineNumber": 778
              },
              {
                "id": "verse-779",
                "text": "»›Iphigenia‹inJambenzuübersetzen,hätteichniegewagt,wäremir",
                "lineNumber": 779
              },
              {
                "id": "verse-780",
                "text": "Leitstern erschienen. Der Umgang mit dem Verfasser, besonders",
                "lineNumber": 780
              },
              {
                "id": "verse-781",
                "text": "währendseinesKrankenlagers,hatmichnochmehrdarüberaufge-",
                "lineNumber": 781
              },
              {
                "id": "verse-782",
                "text": "klärt,undichersuchedieFreunde,darübermitWohlwollennach- 5",
                "lineNumber": 782
              },
              {
                "id": "verse-783",
                "text": "zudenken.",
                "lineNumber": 783
              },
              {
                "id": "verse-784",
                "text": "Esistauffallend,dasswirinunsererSprachenurwenigeSylben",
                "lineNumber": 784
              },
              {
                "id": "verse-785",
                "text": "finden,dieentschiedenkurzoderlangsind.Mitdenandernverfährt",
                "lineNumber": 785
              },
              {
                "id": "verse-786",
                "text": "mannachGeschmackoderWillkür.Nunhat[KarlPhilipp]Moritz",
                "lineNumber": 786
              },
              {
                "id": "verse-787",
                "text": "ausgeklügelt, dass es eine gewisse Rangordnung der Sylben gebe, 10",
                "lineNumber": 787
              },
              {
                "id": "verse-788",
                "text": "unddassdiedemSinnenachbedeutenderegegeneinewenigerbe-",
                "lineNumber": 788
              },
              {
                "id": "verse-789",
                "text": "deutendelangseiundjenekurzmache,dagegenaberauchwieder",
                "lineNumber": 789
              },
              {
                "id": "verse-790",
                "text": "kurzwerdenkönne,wennsieindieNähevoneineranderngerät,",
                "lineNumber": 790
              },
              {
                "id": "verse-791",
                "text": "welchemehrGeistesgewichthat.«",
                "lineNumber": 791
              },
              {
                "id": "verse-792",
                "text": "GoethesWerke.[WeimarerAusgabe.]Hrsg.imAuftragederGroßherzogin",
                "lineNumber": 792
              },
              {
                "id": "verse-793",
                "text": "Bd.8.S.224f.",
                "lineNumber": 793
              },
              {
                "id": "verse-794",
                "text": ".3Textvarianten",
                "lineNumber": 794
              },
              {
                "id": "verse-795",
                "text": "iphigenieallein.Folgenmussichihm,dennderMeinigengroße",
                "lineNumber": 795
              },
              {
                "id": "verse-796",
                "text": "Gefahrseh’ichvorAugen.Dochwillmirsbangewerden,über",
                "lineNumber": 796
              },
              {
                "id": "verse-797",
                "text": "meineigenSchicksal.Vergebenshofftichstillverwahrtvonmei-",
                "lineNumber": 797
              },
              {
                "id": "verse-798",
                "text": "nerGöttindenaltenFluchvonunsernHausausklingenzulassen,",
                "lineNumber": 798
              },
              {
                "id": "verse-799",
                "text": "unddurchGebetundReinheitdieOlympierzuversühnen.Kaum 5",
                "lineNumber": 799
              },
              {
                "id": "verse-800",
                "text": "wirdmirinArmenmeinBrudergeheilt,kaumnahteinSchiffein",
                "lineNumber": 800
              },
              {
                "id": "verse-801",
                "text": "langerflehtes,michandieStättederlebendenVaterWeltzulei-",
                "lineNumber": 801
              },
              {
                "id": "verse-802",
                "text": "ten,wirdmireindoppeltLastervondertaubenNotgeboten,Das",
                "lineNumber": 802
              },
              {
                "id": "verse-803",
                "text": "heiligemiranvertrauteSchutzbilddiesesUferswegzuraubenund",
                "lineNumber": 803
              },
              {
                "id": "verse-804",
                "text": "denKönigzuhintergehn.WennichmitBetrugundRaubbeginn, 10",
                "lineNumber": 804
              },
              {
                "id": "verse-805",
                "text": "wiewillichSegenbringenundwowillichenden?Achwarum",
                "lineNumber": 805
              },
              {
                "id": "verse-806",
                "text": "scheintderUndankmirwietausendandernnichteinleichtesun-",
                "lineNumber": 806
              },
              {
                "id": "verse-807",
                "text": "bedeutendesVergehn.EssangendieParzeneingrausendLied,als",
                "lineNumber": 807
              },
              {
                "id": "verse-808",
                "text": "TantalfielvomgoldnenStuhl,dieAltenlittenmitihremFreund.",
                "lineNumber": 808
              },
              {
                "id": "verse-809",
                "text": "Ichhörtesoft!InmeinerJugendsangseineAmmeunsKindern 15",
                "lineNumber": 809
              },
              {
                "id": "verse-810",
                "text": "vor. Es fürchte die Götter das Menschen-Geschlecht, sie haben 83",
                "lineNumber": 810
              },
              {
                "id": "verse-811",
                "text": "Macht,undbrauchensie,wiesihnengefällt,derfürchtesiemehr",
                "lineNumber": 811
              },
              {
                "id": "verse-812",
                "text": "densieerheben,aufschroffenKlippenstehnihreStühleumden",
                "lineNumber": 812
              },
              {
                "id": "verse-813",
                "text": "goldnenTisch.ErhebtsicheinZwistsostürztderGastunwie-",
                "lineNumber": 813
              },
              {
                "id": "verse-814",
                "text": "derbringlichinsReichderNacht,undohneGerichtliegterge-",
                "lineNumber": 814
              },
              {
                "id": "verse-815",
                "text": "bundeninderFinsternis.Sieaberlassensichsewigwohlseinam",
                "lineNumber": 815
              },
              {
                "id": "verse-816",
                "text": "goldnenTisch.VonBergzuBergenschreitensiewegundausder",
                "lineNumber": 816
              },
              {
                "id": "verse-817",
                "text": "TiefedampftihnendesRiesenerstickterMundgleichandernOp-",
                "lineNumber": 817
              },
              {
                "id": "verse-818",
                "text": "fern ein leichter Rauch. Von ganzen Geschlechtern wenden sie",
                "lineNumber": 818
              },
              {
                "id": "verse-819",
                "text": "wegihrsegnendAugundhassenimEnkeldieehmalsgeliebten",
                "lineNumber": 819
              },
              {
                "id": "verse-820",
                "text": "und nun verworfnen Züge des Ahnherrn. So sangen die Alten",
                "lineNumber": 820
              },
              {
                "id": "verse-821",
                "text": "undTantalhorchtinseinerHöhle,denktseineKinderundseine",
                "lineNumber": 821
              },
              {
                "id": "verse-822",
                "text": "EnkelundschütteltdasHaupt.",
                "lineNumber": 822
              },
              {
                "id": "verse-823",
                "text": "GoethesIphigenieaufTauris.InvierfacherGestalthrsg.vonJakobBaechtold.",
                "lineNumber": 823
              },
              {
                "id": "verse-824",
                "text": ".4LiteraturwissenschaftlicheStellungnahmenzuForm",
                "lineNumber": 824
              },
              {
                "id": "verse-825",
                "text": "undSprache",
                "lineNumber": 825
              },
              {
                "id": "verse-826",
                "text": "»Stattdessenherrschtinder›Iphigenie‹eineungoethischeMono-",
                "lineNumber": 826
              },
              {
                "id": "verse-827",
                "text": "tonie des Ausdrucks: zu ängstlich ist jedes Wort vermieden, das",
                "lineNumber": 827
              },
              {
                "id": "verse-828",
                "text": "dempathetischenStilwiderstreitenkönnte.Fortwährendkehrt,wo",
                "lineNumber": 828
              },
              {
                "id": "verse-829",
                "text": "sonstbeiGoetheinvollsterFreiheitdieBeiwortewechseln,dasan-",
                "lineNumber": 829
              },
              {
                "id": "verse-830",
                "text": "tikisierendeEpitheton›ehern‹wieder:ehernesBand,eherneToren,",
                "lineNumber": 830
              },
              {
                "id": "verse-831",
                "text": "eherneKetten,eherneHand.[…]",
                "lineNumber": 831
              },
              {
                "id": "verse-832",
                "text": "Sowirdmandie›Iphigenie‹beiallerLebenswahrheitderCharak-",
                "lineNumber": 832
              },
              {
                "id": "verse-833",
                "text": "tere,beiallerWeisheitihrerSprüche,beidemherrlichenSchwung",
                "lineNumber": 833
              },
              {
                "id": "verse-834",
                "text": "mancherTeile,wiederSzene,inderOresterwacht,undvorallem",
                "lineNumber": 834
              },
              {
                "id": "verse-835",
                "text": "der wundervollen Schlussszene als Kunstwerk den größten Taten",
                "lineNumber": 835
              },
              {
                "id": "verse-836",
                "text": "Goetheskaumzurechnendürfen.Dieedle,hoheGesinnung,diedie",
                "lineNumber": 836
              },
              {
                "id": "verse-837",
                "text": "›Iphigenie‹erfüllt,lässtunsfreilichindieSchattendiesesalten,hei-",
                "lineNumber": 837
              },
              {
                "id": "verse-838",
                "text": "ligen, dichtbelaubten Hains wie in reinere Luft eintreten; und die",
                "lineNumber": 838
              },
              {
                "id": "verse-839",
                "text": "tiefeGüteinderSeeledesDichterszeigtkeinesseinerWerkeer-",
                "lineNumber": 839
              },
              {
                "id": "verse-840",
                "text": "greifenderalsdies.AlsKunstwerkeaberstehendochdienochhö-",
                "lineNumber": 840
              },
              {
                "id": "verse-841",
                "text": "her,indenenerdenmenschlichenLeidenschafteneinenbreiteren",
                "lineNumber": 841
              },
              {
                "id": "verse-842",
                "text": "Spielraumgönnte,alsdiesklassischeReliefgestattet.«",
                "lineNumber": 842
              },
              {
                "id": "verse-843",
                "text": "Anhang",
                "lineNumber": 843
              },
              {
                "id": "verse-844",
                "text": "CoronaSchröteralsIphigenie",
                "lineNumber": 844
              },
              {
                "id": "verse-845",
                "text": "»DerStildesWerkesistderallesdurchdringendeÄtherseinerSpra-",
                "lineNumber": 845
              },
              {
                "id": "verse-846",
                "text": "che.SolcherVorrangderFormträgtdaszivilisatorischeMoment[…]",
                "lineNumber": 846
              },
              {
                "id": "verse-847",
                "text": "insGedichtetehinein.DieMilderungdesRohen,schließlichdessen",
                "lineNumber": 847
              },
              {
                "id": "verse-848",
                "text": "VerschwindensindnichtbloßdieAbsichtderHeldin.DieGestalt",
                "lineNumber": 848
              },
              {
                "id": "verse-849",
                "text": "einesjedenSatzesvollziehtsichmitbedachter,errungenermesotew 5",
                "lineNumber": 849
              },
              {
                "id": "verse-850",
                "text": "[mesotes(griech.)›Maß‹,›Mäßigung‹]derFormulierung.Wunderlich",
                "lineNumber": 850
              },
              {
                "id": "verse-851",
                "text": "vermähltsiesichmitwarmem,umfangendemStrömen.Auchex-",
                "lineNumber": 851
              },
              {
                "id": "verse-852",
                "text": "tremeunderschreckendeSachverhaltehabendaranteil,ohnedaß",
                "lineNumber": 852
              },
              {
                "id": "verse-853",
                "text": "sieabgeschwächtwürden.SchweigtantithetischderSkythenkönig 85",
                "lineNumber": 853
              },
              {
                "id": "verse-854",
                "text": "oderredeterkarg,soscheintdieseKargheitnichtlängerdieeines",
                "lineNumber": 854
              },
              {
                "id": "verse-855",
                "text": "desAusdrucksnichtrechtMächtigen;seinSchweigenistseinerseits",
                "lineNumber": 855
              },
              {
                "id": "verse-856",
                "text": "zivilisatorisch,demwütendenAusbruchabgedungen.«",
                "lineNumber": 856
              },
              {
                "id": "verse-857",
                "text": "TheodorW.Adorno:ZumKlassizismusvonGoethes»Iphigenie«.In:Ders.:",
                "lineNumber": 857
              },
              {
                "id": "verse-858",
                "text": "NotenzurLiteraturIV.Hrsg.vonRolfTiedemann.Frankfurta.M.:Suhrkamp,",
                "lineNumber": 858
              },
              {
                "id": "verse-859",
                "text": ".(GesammelteSchriften.Hrsg.vonRolfTiedemannunterMitw.von",
                "lineNumber": 859
              },
              {
                "id": "verse-860",
                "text": "GretelAdorno[u.a.].Bd.11)S.501.–©SuhrkampVerlagFrankfurtamMain",
                "lineNumber": 860
              },
              {
                "id": "verse-861",
                "text": ".AlleRechtebeiundvorbehaltendurchSuhrkampVerlagBerlin.",
                "lineNumber": 861
              },
              {
                "id": "verse-862",
                "text": "»Der SchriftstellererlebtdieihnumgebendeWirklichkeitalsBe-",
                "lineNumber": 862
              },
              {
                "id": "verse-863",
                "text": "schmutzung: ›[…] denn ich fliehe das Unreine‹1. ›Dann las ich",
                "lineNumber": 863
              },
              {
                "id": "verse-864",
                "text": "zurAbwaschungundReinigungeinigesgriechische‹2.Hieristeine",
                "lineNumber": 864
              },
              {
                "id": "verse-865",
                "text": "Denkform bereits angelegt, die für das Bildungsbürgertum des",
                "lineNumber": 865
              },
              {
                "id": "verse-866",
                "text": "19.Jahrhundertskennzeichnendseinwird:die›Reinheit‹derKunst",
                "lineNumber": 866
              },
              {
                "id": "verse-867",
                "text": "bzw.desKunsterlebnisseswirdalsbesondereSphäredem›Schmutz‹",
                "lineNumber": 867
              },
              {
                "id": "verse-868",
                "text": "derWirklichkeit,desAlltagsdaseinsgegenübergestellt.",
                "lineNumber": 868
              },
              {
                "id": "verse-869",
                "text": "Goethes Briefe an Frau von Stein beleuchten die Haltung eines",
                "lineNumber": 869
              },
              {
                "id": "verse-870",
                "text": "Schriftstellers,dernurdeswegenzugleichVerwaltungsbeamtersein",
                "lineNumber": 870
              },
              {
                "id": "verse-871",
                "text": "kann, weil die Kunst ihm die Möglichkeit gibt, die Realität durch",
                "lineNumber": 871
              },
              {
                "id": "verse-872",
                "text": "den Schein des Schönen zu negieren. ›Mit meiner Menschenglau-",
                "lineNumber": 872
              },
              {
                "id": "verse-873",
                "text": "berey[GoethesprichtvonderRekrutenaushebung]binichhierfer-",
                "lineNumber": 873
              },
              {
                "id": "verse-874",
                "text": "tigundhabemitaltenSoldatengegessenundvonvorigenZeiten",
                "lineNumber": 874
              },
              {
                "id": "verse-875",
                "text": "redenhören.MeinStückrückt‹3.›KnebelnkönnenSiesagendaßdas",
                "lineNumber": 875
              },
              {
                "id": "verse-876",
                "text": "Stücksichformt,undGliederkriegt.MorgenhabichdieAuslesung",
                "lineNumber": 876
              },
              {
                "id": "verse-877",
                "text": "[sc.derRekruten],dannwillichmichindasneueSchloßsperren",
                "lineNumber": 877
              },
              {
                "id": "verse-878",
                "text": "undeinigeTageanmeinenFigurenposseln‹4.KünstlerischeTätig-",
                "lineNumber": 878
              },
              {
                "id": "verse-879",
                "text": "keit und zweckgebundene Arbeit treten auseinander. Goethe faßt",
                "lineNumber": 879
              },
              {
                "id": "verse-880",
                "text": "jene als Instrument der Befreiung aus den Zwängen des Alltags:",
                "lineNumber": 880
              },
              {
                "id": "verse-881",
                "text": "›MeineSeelelöstsichnachundnachdurchdielieblichenTöneaus",
                "lineNumber": 881
              },
              {
                "id": "verse-882",
                "text": "den Banden der Protokolle und Ackten. Ein Quatro neben in der",
                "lineNumber": 882
              },
              {
                "id": "verse-883",
                "text": "grünenStube,sizzichundrufediefernenGestalten[sc.derIphi-",
                "lineNumber": 883
              },
              {
                "id": "verse-884",
                "text": "genie]leiseherüber‹5.",
                "lineNumber": 884
              },
              {
                "id": "verse-885",
                "text": "Die lebenspraktischen Erfahrungen, die den Hintergrund der",
                "lineNumber": 885
              },
              {
                "id": "verse-886",
                "text": "Anhang Iphigenie bilden, werden von Goethe unter einem doppelten As- 25",
                "lineNumber": 886
              },
              {
                "id": "verse-887",
                "text": "pektreflektiert:AlsbürgerlicherSchriftsteller,derfüreinehöfische",
                "lineNumber": 887
              },
              {
                "id": "verse-888",
                "text": "Gesellschaft,imDiensteinesfürstlichenMäzensproduziert,willer",
                "lineNumber": 888
              },
              {
                "id": "verse-889",
                "text": "einStückschreiben,dessenBedeutungdieFunktion,Teilhöfisch-",
                "lineNumber": 889
              },
              {
                "id": "verse-890",
                "text": "repräsentativerDaseinsentfaltungzusein,transzendiert,erwill›et-",
                "lineNumber": 890
              },
              {
                "id": "verse-891",
                "text": "wasbringen,dasnichtganzmitGlanzleinwandLumpengekleidet 30",
                "lineNumber": 891
              },
              {
                "id": "verse-892",
                "text": "sey‹6. Als Bürger, zu dessen Lebenspraxis, im Gegensatz zur höfi-",
                "lineNumber": 892
              },
              {
                "id": "verse-893",
                "text": "schen,dasMomentderArbeitalswesentlichesgehört,beginnter",
                "lineNumber": 893
              },
              {
                "id": "verse-894",
                "text": "eineKonzeptionderKunstauszubilden,inderderBereichderAr-",
                "lineNumber": 894
              },
              {
                "id": "verse-895",
                "text": "beitausgespartbleibt.›HierwilldasDramagarnichtfort,esistver-",
                "lineNumber": 895
              },
              {
                "id": "verse-896",
                "text": "flucht, der König von Tauris soll reden als wenn kein Strumpf- 35",
                "lineNumber": 896
              },
              {
                "id": "verse-897",
                "text": "würcker in Apolda hungerte‹7. Der berühmte Satz Goethes weist",
                "lineNumber": 897
              },
              {
                "id": "verse-898",
                "text": "vorausaufdas,wasalsInstitutionKunstinderbürgerlichenGesell-",
                "lineNumber": 898
              },
              {
                "id": "verse-899",
                "text": "schaftsichlangsamherauszubildenbeginnt:derenAutonomiebe-",
                "lineNumber": 899
              },
              {
                "id": "verse-900",
                "text": "deutet auch die Versöhnung mit der schlechten Realität. Damit",
                "lineNumber": 900
              },
              {
                "id": "verse-901",
                "text": "kannKunstnichtmehr,wieinnerhalbeinerbürgerlich-aufkläreri- 40",
                "lineNumber": 901
              },
              {
                "id": "verse-902",
                "text": "schen Institutionalisierung, Gegenstand des Selbstverständnisses",
                "lineNumber": 902
              },
              {
                "id": "verse-903",
                "text": "der miteinander über die Formen ihres gesellschaftlichen Zusam-",
                "lineNumber": 903
              },
              {
                "id": "verse-904",
                "text": "menlebens diskutierenden Bürger sein, sondern sie wird für den",
                "lineNumber": 904
              },
              {
                "id": "verse-905",
                "text": "RezipientenzumMittelderFluchtausderRealität.«",
                "lineNumber": 905
              },
              {
                "id": "verse-906",
                "text": "ChristaBürger:Iphigenie–dieEntstehungderbürgerlichenKunst.In:",
                "lineNumber": 906
              },
              {
                "id": "verse-907",
                "text": "Dies.:DerUrsprungderbürgerlichenInstitutionKunstimhöfischenWei-",
                "lineNumber": 907
              },
              {
                "id": "verse-908",
                "text": "mar.LiteratursoziologischeUntersuchungenzumklassischenGoethe.Frank-",
                "lineNumber": 908
              },
              {
                "id": "verse-909",
                "text": ".AlleRechtebeiundvorbehaltendurchSuhrkampVerlagBerlin.",
                "lineNumber": 909
              },
              {
                "id": "verse-910",
                "text": ". Kunstauffassung der Klassik 87",
                "lineNumber": 910
              },
              {
                "id": "verse-911",
                "text": ".1Überblick",
                "lineNumber": 911
              },
              {
                "id": "verse-912",
                "text": "Die Weimarer Klassik orientierte sich an den ästhetischen Vorbil-",
                "lineNumber": 912
              },
              {
                "id": "verse-913",
                "text": "derndergriechischenAntike.DerAnstoßdazukamausderbilden-",
                "lineNumber": 913
              },
              {
                "id": "verse-914",
                "text": "den Kunst, nämlich von dem Kunsthistoriker Johann Joachim",
                "lineNumber": 914
              },
              {
                "id": "verse-915",
                "text": "Winckelmann,derdemspätbarockenManierismus(»Schwulst«)die",
                "lineNumber": 915
              },
              {
                "id": "verse-916",
                "text": "»edleEinfaltundstilleGröße«griechischerKunstwerkeentgegen-",
                "lineNumber": 916
              },
              {
                "id": "verse-917",
                "text": "hielt(GedankenüberdieNachahmungdergriechischenWerkeinder",
                "lineNumber": 917
              },
              {
                "id": "verse-918",
                "text": "sen Vorbild erklärten griechischen Kunst griff er zugleich die da-",
                "lineNumber": 918
              },
              {
                "id": "verse-919",
                "text": "maligeKulturhoheitFrankreichsan,dassichamVorbildRomsori-",
                "lineNumber": 919
              },
              {
                "id": "verse-920",
                "text": "entierthatte(französischerKlassizismus).",
                "lineNumber": 920
              },
              {
                "id": "verse-921",
                "text": "Neben der Einfachheit und Harmonie der griechischen Kunst-",
                "lineNumber": 921
              },
              {
                "id": "verse-922",
                "text": "werke erkannte Winckelmann in den Figuren der Griechen den",
                "lineNumber": 922
              },
              {
                "id": "verse-923",
                "text": "AusdruckeinergroßeninnerenHaltungunddaszeitloseIdealbild",
                "lineNumber": 923
              },
              {
                "id": "verse-924",
                "text": "eines freien Menschen. Der einzigartige Einklang von sinnlicher",
                "lineNumber": 924
              },
              {
                "id": "verse-925",
                "text": "AnschauungundsittlichenMaßstäben,denerindergriechischen",
                "lineNumber": 925
              },
              {
                "id": "verse-926",
                "text": "Plastikerblickte,wareinGedanke,derdieWeimarerKlassikzutiefst",
                "lineNumber": 926
              },
              {
                "id": "verse-927",
                "text": "beeinflusste.",
                "lineNumber": 927
              },
              {
                "id": "verse-928",
                "text": "TypischfürdieKlassikistfernerdieVorstellungvoneinerZweck-",
                "lineNumber": 928
              },
              {
                "id": "verse-929",
                "text": "freiheit der Kunst (Autonomieästhetik). Ein Kunstwerk ist auto-",
                "lineNumber": 929
              },
              {
                "id": "verse-930",
                "text": "nom,daesaußerhalbvonwirtschaftlichenoderpolitischenNütz-",
                "lineNumber": 930
              },
              {
                "id": "verse-931",
                "text": "lichkeitsüberlegungen steht und als schöner Gegenstand in sich",
                "lineNumber": 931
              },
              {
                "id": "verse-932",
                "text": "selbstruht(vgl.KarlPhilippMoritz,4.2).DadurcherhälteinKunst-",
                "lineNumber": 932
              },
              {
                "id": "verse-933",
                "text": "gegenstand den Charakter eines für sich bestehenden vollendeten",
                "lineNumber": 933
              },
              {
                "id": "verse-934",
                "text": "Ganzen. Kunst muss daher auch keine Wirklichkeit wiedergeben,",
                "lineNumber": 934
              },
              {
                "id": "verse-935",
                "text": "sondernistAusdruckeinerhinterderjeweiligenFormerkennbaren",
                "lineNumber": 935
              },
              {
                "id": "verse-936",
                "text": "Idee.",
                "lineNumber": 936
              },
              {
                "id": "verse-937",
                "text": "Unter Bildung verstand die Klassik die ständige Selbstvervoll-",
                "lineNumber": 937
              },
              {
                "id": "verse-938",
                "text": "kommnungdessittlichenundgeistigenMenschen.DieseBildungs-",
                "lineNumber": 938
              },
              {
                "id": "verse-939",
                "text": "vorstellung rückte den Menschen als Individuum in das Zentrum",
                "lineNumber": 939
              },
              {
                "id": "verse-940",
                "text": "von Bildung und Erziehung, während praktisch-gesellschaftliche",
                "lineNumber": 940
              },
              {
                "id": "verse-941",
                "text": "Aspekte,wiesienochdieAufklärungformulierthatte,indenHin-",
                "lineNumber": 941
              },
              {
                "id": "verse-942",
                "text": "tergrund traten. Angesichts des Scheiterns der Französischen Re-",
                "lineNumber": 942
              },
              {
                "id": "verse-943",
                "text": "volutionentwarfSchillerdasKonzepteinerästhetischenErziehung,",
                "lineNumber": 943
              },
              {
                "id": "verse-944",
                "text": "ummitdenMittelnderKunstzueinerVeredelungdesmenschli-",
                "lineNumber": 944
              },
              {
                "id": "verse-945",
                "text": "chenCharakterszugelangen.AuchergingvonderVorbildlichkeit",
                "lineNumber": 945
              },
              {
                "id": "verse-946",
                "text": "dergriechischenAntikeundderzeitlosenundzwecklosenSchön-",
                "lineNumber": 946
              },
              {
                "id": "verse-947",
                "text": "heit eines Kunstwerks aus, das die sinnlich-sittliche Doppelnatur",
                "lineNumber": 947
              },
              {
                "id": "verse-948",
                "text": "Anhang desMenschenzueinemharmonischenAusgleichführe.Dieser»äs-",
                "lineNumber": 948
              },
              {
                "id": "verse-949",
                "text": "thetische« Zustand, also die Erfahrung einer Ausgewogenheit von",
                "lineNumber": 949
              },
              {
                "id": "verse-950",
                "text": "PflichtundNeigungimKunsterlebnis,bedeutedasErlebengrößt-",
                "lineNumber": 950
              },
              {
                "id": "verse-951",
                "text": "möglicherpersönlicherFreiheit.DenninderSpielwelteinerzweck-",
                "lineNumber": 951
              },
              {
                "id": "verse-952",
                "text": "freienKunst,unddamitbefreitvondentatsächlichenBeschränkun-",
                "lineNumber": 952
              },
              {
                "id": "verse-953",
                "text": "genseinerExistenz,erlebederMenschdieeigenenMöglichkeiten",
                "lineNumber": 953
              },
              {
                "id": "verse-954",
                "text": "einessittlichen,zuVernunftundHumanitätfähigenWesens(4.3).",
                "lineNumber": 954
              },
              {
                "id": "verse-955",
                "text": "DiedeutscheKlassikentwickeltealsounterdemEindruckderre-",
                "lineNumber": 955
              },
              {
                "id": "verse-956",
                "text": "volutionärenEreignisseimNachbarlandeinenalternativenWegzur",
                "lineNumber": 956
              },
              {
                "id": "verse-957",
                "text": "Entfaltungeinerzivilisierten,humanenGesellschaft.DieKunstund",
                "lineNumber": 957
              },
              {
                "id": "verse-958",
                "text": "vorallemdieLiteraturerfuhreneineeinzigartigeAufwertung,denn",
                "lineNumber": 958
              },
              {
                "id": "verse-959",
                "text": "siespieltenbeidiesemVersucheineSchlüsselrolle.",
                "lineNumber": 959
              },
              {
                "id": "verse-960",
                "text": ".2KarlPhilippMoritz:VersucheinerVereinigung",
                "lineNumber": 960
              },
              {
                "id": "verse-961",
                "text": "»BeidembloßNützlichenfindeichnichtsowohlandemGegen-",
                "lineNumber": 961
              },
              {
                "id": "verse-962",
                "text": "standeselbst,alsvielmehranderVorstellungvonderBequemlich-",
                "lineNumber": 962
              },
              {
                "id": "verse-963",
                "text": "keitoderBehaglichkeit,diemirodereinemanderndurchdenGe-",
                "lineNumber": 963
              },
              {
                "id": "verse-964",
                "text": "brauch desselben zuwachsen wird, Vergnügen. Ich mache mich",
                "lineNumber": 964
              },
              {
                "id": "verse-965",
                "text": "gleichsamzumMittelpunkte,woraufichalleTeiledesGegenstan- 5",
                "lineNumber": 965
              },
              {
                "id": "verse-966",
                "text": "desbeziehe,d.h.ichbetrachtedenselbenbloßalsMittel,wovonich",
                "lineNumber": 966
              },
              {
                "id": "verse-967",
                "text": "selbst, in so fern meine Vollkommenheit dadurch befördert wird,",
                "lineNumber": 967
              },
              {
                "id": "verse-968",
                "text": "derZweckbin.DerbloßnützlicheGegenstandistalsoinsichnichts",
                "lineNumber": 968
              },
              {
                "id": "verse-969",
                "text": "GanzesoderVollendetes,sondernwirdeserst,indemerinmirsei-",
                "lineNumber": 969
              },
              {
                "id": "verse-970",
                "text": "nenZweckerreicht,oderinmirvollendetwird.–BeiderBetrach- 10",
                "lineNumber": 970
              },
              {
                "id": "verse-971",
                "text": "tungdesSchönenaberwälzeichdenZweckausmirindenGegen-",
                "lineNumber": 971
              },
              {
                "id": "verse-972",
                "text": "stand selbst zurück: ich betrachte ihn, als etwas, nicht in mir,",
                "lineNumber": 972
              },
              {
                "id": "verse-973",
                "text": "sondern insich selbstVollendetes, das also insich einGanzesaus-",
                "lineNumber": 973
              },
              {
                "id": "verse-974",
                "text": "macht,undmirumseinselbstwillenVergnügengewährt;indemich",
                "lineNumber": 974
              },
              {
                "id": "verse-975",
                "text": "demschönenGegenstandenichtsowohleineBeziehungaufmich, 15",
                "lineNumber": 975
              },
              {
                "id": "verse-976",
                "text": "als mir vielmehr eine Beziehung auf ihn gebe. Da mir nun das",
                "lineNumber": 976
              },
              {
                "id": "verse-977",
                "text": "Schöne mehr um sein selbst willen, das Nützliche aber bloß um",
                "lineNumber": 977
              },
              {
                "id": "verse-978",
                "text": "meinetwillen,liebist;sogewähretmirdasSchöneeinhöheresund",
                "lineNumber": 978
              },
              {
                "id": "verse-979",
                "text": "uneigennützigeresVergnügen,alsdasbloßNützliche.DasVergnü-",
                "lineNumber": 979
              },
              {
                "id": "verse-980",
                "text": "genandembloßNützlichenistgröberundgemeiner,dasVergnü- 20",
                "lineNumber": 980
              },
              {
                "id": "verse-981",
                "text": "genandemSchönenfeinerundseltner.Jeneshabenwir,ingewis-",
                "lineNumber": 981
              },
              {
                "id": "verse-982",
                "text": "semVerstande,mitdenTierengemein;dieseserhebtunsübersie.",
                "lineNumber": 982
              },
              {
                "id": "verse-983",
                "text": "DadasNützlicheseinenZwecknichtinsich,sondernaußersich 89",
                "lineNumber": 983
              },
              {
                "id": "verse-984",
                "text": "in etwas anderm hat, dessen Vollkommenheit dadurch vermehrt",
                "lineNumber": 984
              },
              {
                "id": "verse-985",
                "text": "werdensoll;somussderjenige,welcheretwasNützlicheshervor-",
                "lineNumber": 985
              },
              {
                "id": "verse-986",
                "text": "bringenwill,diesenäußernZweckbeiseinemWerkebeständigvor",
                "lineNumber": 986
              },
              {
                "id": "verse-987",
                "text": "Augen haben. Und wenn das Werk nur seinen äußern Zweck er-",
                "lineNumber": 987
              },
              {
                "id": "verse-988",
                "text": "reicht,somagesübrigensinsichbeschaffensein,wieeswolle;dies",
                "lineNumber": 988
              },
              {
                "id": "verse-989",
                "text": "kömmt,insofernesbloßnützlichist,garnichtinBetracht.Wenn",
                "lineNumber": 989
              },
              {
                "id": "verse-990",
                "text": "eine Uhr nur richtig ihre Stunden zeigt, und ein Messer nur gut",
                "lineNumber": 990
              },
              {
                "id": "verse-991",
                "text": "schneidet; so bekümmre ich mich, in Ansehung des eigentlichen",
                "lineNumber": 991
              },
              {
                "id": "verse-992",
                "text": "Nutzens,wederumdieKostbarkeitdesGehäusesanderUhr,noch",
                "lineNumber": 992
              },
              {
                "id": "verse-993",
                "text": "desGriffesandemMesser:auchachteichnichtdarauf,obmirselbst",
                "lineNumber": 993
              },
              {
                "id": "verse-994",
                "text": "dasWerkinderUhr,oderdieKlingeandemMesser,gutinsAuge",
                "lineNumber": 994
              },
              {
                "id": "verse-995",
                "text": "fälltodernicht.DieUhrunddasMesserhabenihrenZweckaußer",
                "lineNumber": 995
              },
              {
                "id": "verse-996",
                "text": "sich,indemjenigen,welchersichderselbenzuseinerBequemlich-",
                "lineNumber": 996
              },
              {
                "id": "verse-997",
                "text": "keitbedienet;siesinddahernichtsinsichVollendetes,undhaben",
                "lineNumber": 997
              },
              {
                "id": "verse-998",
                "text": "anundfürsich,ohnediemöglicheoderwirklicheErreichungihres",
                "lineNumber": 998
              },
              {
                "id": "verse-999",
                "text": "äußernZwecks,keineneigentümlichenWert.Mitdiesemihremäu-",
                "lineNumber": 999
              },
              {
                "id": "verse-1000",
                "text": "ßern Zweck zusammengenommen als ein Ganzes betrachtet, ma-",
                "lineNumber": 1000
              },
              {
                "id": "verse-1001",
                "text": "chensiemirerstVergnügen;vondiesemZweckabgeschnitten,las-",
                "lineNumber": 1001
              },
              {
                "id": "verse-1002",
                "text": "sen sie mich völlig gleichgültig. Ich betrachte die Uhr und das",
                "lineNumber": 1002
              },
              {
                "id": "verse-1003",
                "text": "MessernurmitVergnügen,insoferneichsiebrauchenkann,und",
                "lineNumber": 1003
              },
              {
                "id": "verse-1004",
                "text": "brauchesienicht,damitichsiebetrachtenkann.",
                "lineNumber": 1004
              },
              {
                "id": "verse-1005",
                "text": "BeidemSchönenistesumgekehrt.DieseshatseinenZwecknicht",
                "lineNumber": 1005
              },
              {
                "id": "verse-1006",
                "text": "außersich,undistnichtwegenderVollkommenheitvonetwasan-",
                "lineNumber": 1006
              },
              {
                "id": "verse-1007",
                "text": "derm,sondernwegenseinereigneninnernVollkommenheitda.Man",
                "lineNumber": 1007
              },
              {
                "id": "verse-1008",
                "text": "betrachtetesnicht,insofernmanesbrauchenkann,sondernman",
                "lineNumber": 1008
              },
              {
                "id": "verse-1009",
                "text": "brauchtesnur,insofernmanesbetrachtenkann.Wirbedürfendes",
                "lineNumber": 1009
              },
              {
                "id": "verse-1010",
                "text": "Schönennichtsosehr,umdadurchergötztzuwerden,alsdasSchöne",
                "lineNumber": 1010
              },
              {
                "id": "verse-1011",
                "text": "unsrerbedarf,umerkanntzuwerden.Wirkönnensehrgutohnedie",
                "lineNumber": 1011
              },
              {
                "id": "verse-1012",
                "text": "BetrachtungschönerKunstwerkebestehen,dieseaberkönnen,als",
                "lineNumber": 1012
              },
              {
                "id": "verse-1013",
                "text": "solche,nichtwohlohneunsreBetrachtungbestehen.Jemehrwirsie",
                "lineNumber": 1013
              },
              {
                "id": "verse-1014",
                "text": "also entbehren können, desto mehr betrachten wir sie um ihrer",
                "lineNumber": 1014
              },
              {
                "id": "verse-1015",
                "text": "selbstwillen,umihnendurchunsreBetrachtunggleichsamerstihr",
                "lineNumber": 1015
              },
              {
                "id": "verse-1016",
                "text": "wahresvollesDaseinzugeben.DenndurchunsrezunehmendeAn-",
                "lineNumber": 1016
              },
              {
                "id": "verse-1017",
                "text": "erkennungdesSchönenineinemschönenKunstwerke,vergrößern",
                "lineNumber": 1017
              },
              {
                "id": "verse-1018",
                "text": "wirgleichsamseineSchönheitselber,undlegenimmermehrWert",
                "lineNumber": 1018
              },
              {
                "id": "verse-1019",
                "text": "hinein.DaherdasungeduldigeVerlangen,dassallesdemSchönen",
                "lineNumber": 1019
              },
              {
                "id": "verse-1020",
                "text": "huldigensoll,welcheswireinmaldafürerkannthaben:jeallgemei-",
                "lineNumber": 1020
              },
              {
                "id": "verse-1021",
                "text": "neresalsschönerkanntundbewundertwird,destomehrWerter-",
                "lineNumber": 1021
              },
              {
                "id": "verse-1022",
                "text": "hältesauchinunsernAugen.[…]WährenddasSchöneunsreBe-",
                "lineNumber": 1022
              },
              {
                "id": "verse-1023",
                "text": "trachtungganzaufsichzieht,ziehtessieeineWeilevonunsselber",
                "lineNumber": 1023
              },
              {
                "id": "verse-1024",
                "text": "Anhang ab,undmacht,dasswirunsindemschönenGegenstandezuverlie-",
                "lineNumber": 1024
              },
              {
                "id": "verse-1025",
                "text": "renscheinen;undebendiesVerlieren,diesVergessenunsrerselbst, 65",
                "lineNumber": 1025
              },
              {
                "id": "verse-1026",
                "text": "istderhöchsteGraddesreinenunduneigennützigenVergnügens,",
                "lineNumber": 1026
              },
              {
                "id": "verse-1027",
                "text": "welches uns das Schöne gewährt. Wir opfern in dem Augenblick",
                "lineNumber": 1027
              },
              {
                "id": "verse-1028",
                "text": "unserindividuelleseingeschränktesDaseineinerArtvonhöherem",
                "lineNumber": 1028
              },
              {
                "id": "verse-1029",
                "text": "Dasein auf. Das Vergnügen am Schönen muss sich daher immer",
                "lineNumber": 1029
              },
              {
                "id": "verse-1030",
                "text": "mehrderuneigennützigenLiebenähern,wennesächtseinsoll.« 70",
                "lineNumber": 1030
              },
              {
                "id": "verse-1031",
                "text": "KarlPhilippMoritz:VersucheinerVereinigungallerschönenKünsteund",
                "lineNumber": 1031
              },
              {
                "id": "verse-1032",
                "text": "WissenschaftenunterdemBegriffdesinsichselbstVollendeten.In:Theorie",
                "lineNumber": 1032
              },
              {
                "id": "verse-1033",
                "text": ".3FriedrichSchiller:BriefandenHerzogvonAugustenburg",
                "lineNumber": 1033
              },
              {
                "id": "verse-1034",
                "text": "»DerVersuchdesFranzösischenVolks,sichinseineheiligenMen-",
                "lineNumber": 1034
              },
              {
                "id": "verse-1035",
                "text": "schenrechte einzusetzen, und eine politische Freiheit zu erringen,",
                "lineNumber": 1035
              },
              {
                "id": "verse-1036",
                "text": "hatbloßdasUnvermögenunddieUnwürdigkeitdesselbenanden",
                "lineNumber": 1036
              },
              {
                "id": "verse-1037",
                "text": "Taggebracht,undnichtnurdiesesunglücklicheVolk,sondernmit",
                "lineNumber": 1037
              },
              {
                "id": "verse-1038",
                "text": "ihmaucheinenbeträchtlichenTeilEuropens,undeinganzesJahr-",
                "lineNumber": 1038
              },
              {
                "id": "verse-1039",
                "text": "hundert,inBarbareiundKnechtschaftzurückgeschleudert.DerMo- 5",
                "lineNumber": 1039
              },
              {
                "id": "verse-1040",
                "text": "mentwardergünstigste,abererfandeineverderbteGeneration,die",
                "lineNumber": 1040
              },
              {
                "id": "verse-1041",
                "text": "ihn nicht wert war, und weder zu würdigen noch zu benutzen",
                "lineNumber": 1041
              },
              {
                "id": "verse-1042",
                "text": "wusste. Der Gebrauch den sie von diesem großen Geschenk des",
                "lineNumber": 1042
              },
              {
                "id": "verse-1043",
                "text": "Zufalls macht und gemacht hat, beweist unwidersprechlich, dass",
                "lineNumber": 1043
              },
              {
                "id": "verse-1044",
                "text": "das Menschengeschlecht der vormundschaftlichen Gewalt noch 10",
                "lineNumber": 1044
              },
              {
                "id": "verse-1045",
                "text": "nicht entwachsen ist, dass das liberale Regiment der Vernunft da",
                "lineNumber": 1045
              },
              {
                "id": "verse-1046",
                "text": "noch zu frühe kommt, wo man kaum damit fertig wird, sich der",
                "lineNumber": 1046
              },
              {
                "id": "verse-1047",
                "text": "brutalenGewaltderTierheitzuerwehren,unddassderjenigenoch",
                "lineNumber": 1047
              },
              {
                "id": "verse-1048",
                "text": "nicht reif ist zur bürgerlichen Freiheit, dem noch so vieles zur",
                "lineNumber": 1048
              },
              {
                "id": "verse-1049",
                "text": "menschlichenfehlt.[…]",
                "lineNumber": 1049
              },
              {
                "id": "verse-1050",
                "text": "In den niedern Klassen sehen wir nichts als rohe gesetzlose",
                "lineNumber": 1050
              },
              {
                "id": "verse-1051",
                "text": "Triebe,diesichnachaufgehobenemBandderbürgerlichenOrdnung",
                "lineNumber": 1051
              },
              {
                "id": "verse-1052",
                "text": "entfesseln,undmitunlenksamerWutihrertierischenBefriedigung",
                "lineNumber": 1052
              },
              {
                "id": "verse-1053",
                "text": "zueilen. Es war also nicht der moralische Widerstand von innen,",
                "lineNumber": 1053
              },
              {
                "id": "verse-1054",
                "text": "bloßdieZwangsgewaltvonaußen,wasbisherihrenAusbruchzu- 20",
                "lineNumber": 1054
              },
              {
                "id": "verse-1055",
                "text": "rückhielt.EswarenalsonichtfreieMenschen,diederStaatunter-",
                "lineNumber": 1055
              },
              {
                "id": "verse-1056",
                "text": "drückt hatte, nein, es waren bloß wilde Tiere, die er an heilsame",
                "lineNumber": 1056
              },
              {
                "id": "verse-1057",
                "text": "Kettenlegte.[…]",
                "lineNumber": 1057
              },
              {
                "id": "verse-1058",
                "text": "AufderandernSeitegebenunsdiezivilisiertenKlassendennoch 91",
                "lineNumber": 1058
              },
              {
                "id": "verse-1059",
                "text": "widrigerenAnblickderErschlaffung,derGeistesschwäche,undei-",
                "lineNumber": 1059
              },
              {
                "id": "verse-1060",
                "text": "ner Versunkenheit des Charakters, die um so empörender ist, je-",
                "lineNumber": 1060
              },
              {
                "id": "verse-1061",
                "text": "mehrdieKulturselbstdaranTeilhat.[…]",
                "lineNumber": 1061
              },
              {
                "id": "verse-1062",
                "text": "Die Aufklärung, deren sich die höhern Stände unsers Zeitalters",
                "lineNumber": 1062
              },
              {
                "id": "verse-1063",
                "text": "nichtmitunrechtrühmen,istbloßtheoretischeKultur,undzeigt,",
                "lineNumber": 1063
              },
              {
                "id": "verse-1064",
                "text": "imganzengenommen,sowenigeinenveredelndenEinflussaufdie",
                "lineNumber": 1064
              },
              {
                "id": "verse-1065",
                "text": "Gesinnung,dasssievielmehrbloßdazuhilft,dieVerderbnisinein",
                "lineNumber": 1065
              },
              {
                "id": "verse-1066",
                "text": "Systemzubringen,undunheilbarerzumachen.[…]",
                "lineNumber": 1066
              },
              {
                "id": "verse-1067",
                "text": "UndistdiesesnundieMenschheit,möchteichfragen,fürderen",
                "lineNumber": 1067
              },
              {
                "id": "verse-1068",
                "text": "Rechte der Philosoph sich verwendet, die der edle Weltbürger in",
                "lineNumber": 1068
              },
              {
                "id": "verse-1069",
                "text": "Gedankenhat,undanwelchereinneuererSolonseineIdeenvon",
                "lineNumber": 1069
              },
              {
                "id": "verse-1070",
                "text": "einer Staatsverfassung realisieren möchte? Ich zweifle sehr. Nur",
                "lineNumber": 1070
              },
              {
                "id": "verse-1071",
                "text": "seineFähigkeitalseinsittlichesWesenzuhandeln,gibtdemMen-",
                "lineNumber": 1071
              },
              {
                "id": "verse-1072",
                "text": "schen Anspruch auf Freiheit; ein Gemüt aber, das nur sinnlicher",
                "lineNumber": 1072
              },
              {
                "id": "verse-1073",
                "text": "Bestimmungenfähigist,istderFreiheitsowenigwert,alsempfäng-",
                "lineNumber": 1073
              },
              {
                "id": "verse-1074",
                "text": "lich.AlleReforme,dieBestandhabensoll,mussvonderDenkungs-",
                "lineNumber": 1074
              },
              {
                "id": "verse-1075",
                "text": "artausgehen,undwoeineVerderbnisindenPrinzipienherrscht,da",
                "lineNumber": 1075
              },
              {
                "id": "verse-1076",
                "text": "kannnichtsgesundes,nichtgutartigesaufkeimen.NurderCharak-",
                "lineNumber": 1076
              },
              {
                "id": "verse-1077",
                "text": "terderBürgererschafftunderhältdenStaat,undmachtpolitische",
                "lineNumber": 1077
              },
              {
                "id": "verse-1078",
                "text": "undbürgerlicheFreiheitmöglich.DennwenndieWeisheitselbstin",
                "lineNumber": 1078
              },
              {
                "id": "verse-1079",
                "text": "PersonvomOlympherabstiege,unddievollkommensteVerfassung",
                "lineNumber": 1079
              },
              {
                "id": "verse-1080",
                "text": "einführte, so müsste sie ja doch Menschen die Ausführung über-",
                "lineNumber": 1080
              },
              {
                "id": "verse-1081",
                "text": "geben.",
                "lineNumber": 1081
              },
              {
                "id": "verse-1082",
                "text": "[…]SolangeaberderobersteGrundsatzderStaatenvoneinem",
                "lineNumber": 1082
              },
              {
                "id": "verse-1083",
                "text": "empörendenEgoismuszeugt,undsolangedieTendenzderStaats-",
                "lineNumber": 1083
              },
              {
                "id": "verse-1084",
                "text": "bürger nur auf das physische Wohlsein beschränkt ist, so lange,",
                "lineNumber": 1084
              },
              {
                "id": "verse-1085",
                "text": "fürchte ich, wird die politische Regeneration, die man so nahe",
                "lineNumber": 1085
              },
              {
                "id": "verse-1086",
                "text": "glaubte,nichtsalseinschönerphilosophischerTraumbleiben.",
                "lineNumber": 1086
              },
              {
                "id": "verse-1087",
                "text": "Sollmanalsoaufhören,darnachzustreben?Sollmangeradedie",
                "lineNumber": 1087
              },
              {
                "id": "verse-1088",
                "text": "wichtigste aller menschlichen Angelegenheiten einer gesetzlichen",
                "lineNumber": 1088
              },
              {
                "id": "verse-1089",
                "text": "Willkür, einem blinden Zufall anheimstellen, während dass das",
                "lineNumber": 1089
              },
              {
                "id": "verse-1090",
                "text": "Reich der Vernunft nach jeder andern Seite zusehends erweitert",
                "lineNumber": 1090
              },
              {
                "id": "verse-1091",
                "text": "wird?Nichtsweniger,GnädigsterPrinz.Politischeundbürgerliche",
                "lineNumber": 1091
              },
              {
                "id": "verse-1092",
                "text": "FreiheitbleibtimmerundewigdasHeiligsteallerGüter,daswür-",
                "lineNumber": 1092
              },
              {
                "id": "verse-1093",
                "text": "digsteZielallerAnstrengungen,unddasgroßeZentrumallerKultur",
                "lineNumber": 1093
              },
              {
                "id": "verse-1094",
                "text": "–abermanwirddiesenherrlichenBaunuraufdemfestenGrund",
                "lineNumber": 1094
              },
              {
                "id": "verse-1095",
                "text": "eines veredelten Charakters aufführen, man wird damit anfangen",
                "lineNumber": 1095
              },
              {
                "id": "verse-1096",
                "text": "müssenfürdieVerfassungBürgerzuerschaffen,ehemandenBür-",
                "lineNumber": 1096
              },
              {
                "id": "verse-1097",
                "text": "gerneineVerfassunggebenkann.[…]",
                "lineNumber": 1097
              },
              {
                "id": "verse-1098",
                "text": "Auf den Charakter wird bekanntlich durch Berichtigung der",
                "lineNumber": 1098
              },
              {
                "id": "verse-1099",
                "text": "Anhang BegriffeunddurchReinigungderGefühlegewirkt.Jenesistdas 65",
                "lineNumber": 1099
              },
              {
                "id": "verse-1100",
                "text": "Geschäft der philosophischen, dieses vorzugsweise der ästhe-",
                "lineNumber": 1100
              },
              {
                "id": "verse-1101",
                "text": "tischen Kultur. Aufklärung der Begriffe kann es allein nicht aus-",
                "lineNumber": 1101
              },
              {
                "id": "verse-1102",
                "text": "richten, denn von dem Kopf ist noch ein gar weiter Weg zu dem",
                "lineNumber": 1102
              },
              {
                "id": "verse-1103",
                "text": "Herzen,undbeiweitemdergrößereTeilderMenschenwirddurch",
                "lineNumber": 1103
              },
              {
                "id": "verse-1104",
                "text": "EmpfindungenzumHandelnbestimmt.AberdasHerzalleinistein 70",
                "lineNumber": 1104
              },
              {
                "id": "verse-1105",
                "text": "ebensounsichrerFührerunddiezartesteEmpfindsamkeitwirdnur",
                "lineNumber": 1105
              },
              {
                "id": "verse-1106",
                "text": "ein desto leichterer Raub der Schwärmerei, wenn ein heller Ver-",
                "lineNumber": 1106
              },
              {
                "id": "verse-1107",
                "text": "standsienichtleitet.GesundheitdesKopfeswirdalsomitderRein-",
                "lineNumber": 1107
              },
              {
                "id": "verse-1108",
                "text": "heit des Willens zusammen treffen müssen, wenn der Charakter",
                "lineNumber": 1108
              },
              {
                "id": "verse-1109",
                "text": "vollendetheißensoll. 75",
                "lineNumber": 1109
              },
              {
                "id": "verse-1110",
                "text": "DiesdringendereBedürfnisunsersZeitaltersscheintmirdieVer-",
                "lineNumber": 1110
              },
              {
                "id": "verse-1111",
                "text": "edlungderGefühleunddiesittlicheReinigungdesWillenszusein,",
                "lineNumber": 1111
              },
              {
                "id": "verse-1112",
                "text": "denn für die Aufklärung des Verstandes ist schon sehr viel getan",
                "lineNumber": 1112
              },
              {
                "id": "verse-1113",
                "text": "worden. Es fehlt uns nicht sowohl an der Kenntnis der Wahrheit",
                "lineNumber": 1113
              },
              {
                "id": "verse-1114",
                "text": "und des Rechts, als an der Wirksamkeit dieser Erkenntnis zu Be- 80",
                "lineNumber": 1114
              },
              {
                "id": "verse-1115",
                "text": "stimmungdesWillens,nichtsowohlanLichtalsanWärme,nicht",
                "lineNumber": 1115
              },
              {
                "id": "verse-1116",
                "text": "sowohlanphilosophischeralsanästhetischerKultur.Dieseletztere",
                "lineNumber": 1116
              },
              {
                "id": "verse-1117",
                "text": "halteichfürdaswirksamsteInstrumentderCharakterbildung,und",
                "lineNumber": 1117
              },
              {
                "id": "verse-1118",
                "text": "zugleichfürdasjenige,welchesvondempolitischenZustandvoll-",
                "lineNumber": 1118
              },
              {
                "id": "verse-1119",
                "text": "kommen unabhängig, und also auch ohne Hülfe des Staats zu er- 85",
                "lineNumber": 1119
              },
              {
                "id": "verse-1120",
                "text": "haltenist.",
                "lineNumber": 1120
              },
              {
                "id": "verse-1121",
                "text": "Undhieristesnun,GnädigsterPrinz,wodieKunstundderGe-",
                "lineNumber": 1121
              },
              {
                "id": "verse-1122",
                "text": "schmackihrebildendeHandandenMenschenlegen,undihrenver-",
                "lineNumber": 1122
              },
              {
                "id": "verse-1123",
                "text": "edelndenEinflussbeweisen.DieKünstedesSchönenundErhabe-",
                "lineNumber": 1123
              },
              {
                "id": "verse-1124",
                "text": "nenbeleben,übenundverfeinerndasEmpfindungsvermögen,sie 90",
                "lineNumber": 1124
              },
              {
                "id": "verse-1125",
                "text": "erhebendenGeistvondengrobenVergnügungendesStoffeszum",
                "lineNumber": 1125
              },
              {
                "id": "verse-1126",
                "text": "reinenWohlgefallenanbloßenFormen,undgewöhnenihn,auchin",
                "lineNumber": 1126
              },
              {
                "id": "verse-1127",
                "text": "seineGenüsseSelbsttätigkeitzumischen.DiewahreVerfeinerung",
                "lineNumber": 1127
              },
              {
                "id": "verse-1128",
                "text": "derGefühlebestehtaberjederzeitdarin,dassderhöhernNaturdes",
                "lineNumber": 1128
              },
              {
                "id": "verse-1129",
                "text": "MenschenunddemgöttlichenTeilseinesWesens,seinerVernunft 95",
                "lineNumber": 1129
              },
              {
                "id": "verse-1130",
                "text": "undseinerFreiheit,einAntheildaranverschafftwird.",
                "lineNumber": 1130
              },
              {
                "id": "verse-1131",
                "text": "[…]DieGesetzederKunstsindnichtindenwandelbarenFormen",
                "lineNumber": 1131
              },
              {
                "id": "verse-1132",
                "text": "einesgefälligenundoftganzentartetenZeitgeschmacks,sondernin",
                "lineNumber": 1132
              },
              {
                "id": "verse-1133",
                "text": "dem Notwendigen und Ewigen der menschlichen Natur, in den",
                "lineNumber": 1133
              },
              {
                "id": "verse-1134",
                "text": "UrgesetzendesGeistes,gegründet.AusdemgöttlichenTeilunsers 100",
                "lineNumber": 1134
              },
              {
                "id": "verse-1135",
                "text": "Wesens,ausdemewigreinenEther[Äther]idealischerMenschheit",
                "lineNumber": 1135
              },
              {
                "id": "verse-1136",
                "text": "strömt der lautere Quell der Schönheit herab, unangesteckt von",
                "lineNumber": 1136
              },
              {
                "id": "verse-1137",
                "text": "demGeistdesZeitalters,dertiefunterihmintrübenStrudelndahin",
                "lineNumber": 1137
              },
              {
                "id": "verse-1138",
                "text": "wallt.DaherkannauchdieKunst,mittenuntereinembarbarischen 93",
                "lineNumber": 1138
              },
              {
                "id": "verse-1139",
                "text": "undunwürdigenJahrhundert,reinwieeineHimmlischewandeln,",
                "lineNumber": 1139
              },
              {
                "id": "verse-1140",
                "text": "sobald sie nur ihres hohen Ursprungs eingedenk bleibt, und sich",
                "lineNumber": 1140
              },
              {
                "id": "verse-1141",
                "text": "nichtselbstzurSklavinniedrigererAbsichtenundBedürfnisseer-",
                "lineNumber": 1141
              },
              {
                "id": "verse-1142",
                "text": "niedrigt. So wandelt noch jetzt der Griechische Geist in seinen",
                "lineNumber": 1142
              },
              {
                "id": "verse-1143",
                "text": "wenigenÜberrestendurchdieNachtunsersnordischenZeitalters,",
                "lineNumber": 1143
              },
              {
                "id": "verse-1144",
                "text": "und sein elektrischer Schlag weckt manche verwandte Seele zum",
                "lineNumber": 1144
              },
              {
                "id": "verse-1145",
                "text": "GefühlihrerGrößeauf.",
                "lineNumber": 1145
              },
              {
                "id": "verse-1146",
                "text": "Damit aber der Kunst nicht das Unglück begegne, zur Nachah-",
                "lineNumber": 1146
              },
              {
                "id": "verse-1147",
                "text": "mungdesZeitgeistesherunterzusinken,densiezusicherheben",
                "lineNumber": 1147
              },
              {
                "id": "verse-1148",
                "text": "soll, so muss sie Ideale haben, die ihr unaufhörlich das Bild des",
                "lineNumber": 1148
              },
              {
                "id": "verse-1149",
                "text": "höchsten Schönen vorhalten, wie tief auch das Zeitalter sich ent-",
                "lineNumber": 1149
              },
              {
                "id": "verse-1150",
                "text": "würdigenmag[…].«",
                "lineNumber": 1150
              },
              {
                "id": "verse-1151",
                "text": "FriedrichSchiller:ÜberdieästhetischeErziehungdesMenschenineiner",
                "lineNumber": 1151
              },
              {
                "id": "verse-1152",
                "text": "S.137–143.",
                "lineNumber": 1152
              },
              {
                "id": "verse-1153",
                "text": ".4FriedrichSchiller:AnkündigungderZeitschrift",
                "lineNumber": 1153
              },
              {
                "id": "verse-1154",
                "text": "»ZueinerZeit,wodasnaheGeräuschdesKriegsdasVaterlandängs-",
                "lineNumber": 1154
              },
              {
                "id": "verse-1155",
                "text": "tiget,woderKampfpolitischerMeinungenundInteressendiesen",
                "lineNumber": 1155
              },
              {
                "id": "verse-1156",
                "text": "KriegbeinaheinjedemZirkelerneuert,undnurallzuoftMusenund",
                "lineNumber": 1156
              },
              {
                "id": "verse-1157",
                "text": "Graziendarausverscheucht,wowederindenGesprächennochin",
                "lineNumber": 1157
              },
              {
                "id": "verse-1158",
                "text": "den Schriften des Tages vor diesem allverfolgenden Dämon der",
                "lineNumber": 1158
              },
              {
                "id": "verse-1159",
                "text": "StaatskritikRettungist,möchteesebensogewagtalsverdienstlich",
                "lineNumber": 1159
              },
              {
                "id": "verse-1160",
                "text": "sein,densosehrzerstreutenLeserzueinerUnterhaltungvonganz",
                "lineNumber": 1160
              },
              {
                "id": "verse-1161",
                "text": "entgegengesetzterArteinzuladen.InderTatscheinendieZeitum-",
                "lineNumber": 1161
              },
              {
                "id": "verse-1162",
                "text": "ständeeinerSchriftwenigGlückzuversprechen,diesichüberdas",
                "lineNumber": 1162
              },
              {
                "id": "verse-1163",
                "text": "Lieblingsthema des Tages ein strenges Stillschweigen auferlegen,",
                "lineNumber": 1163
              },
              {
                "id": "verse-1164",
                "text": "undihrenRuhmdarinsuchenwird,durchetwasanderszugefallen,",
                "lineNumber": 1164
              },
              {
                "id": "verse-1165",
                "text": "alswodurchjetztallesgefällt.AberjemehrdasbeschränkteInter-",
                "lineNumber": 1165
              },
              {
                "id": "verse-1166",
                "text": "esse der Gegenwart die Gemüter in Spannung setzt, einengt und",
                "lineNumber": 1166
              },
              {
                "id": "verse-1167",
                "text": "unterjocht, desto dringender wird das Bedürfnis, durch ein allge-",
                "lineNumber": 1167
              },
              {
                "id": "verse-1168",
                "text": "meinesundhöheresInteresseandem,wasrein menschlichund",
                "lineNumber": 1168
              },
              {
                "id": "verse-1169",
                "text": "überallenEinflussderZeitenerhabenist,siewiederinFreiheitzu",
                "lineNumber": 1169
              },
              {
                "id": "verse-1170",
                "text": "setzen,unddiepolitischgeteilteWeltunterderFahnederWahrheit",
                "lineNumber": 1170
              },
              {
                "id": "verse-1171",
                "text": "undSchönheitwiederzuvereinigen.",
                "lineNumber": 1171
              },
              {
                "id": "verse-1172",
                "text": "DiesistderGesichtspunkt,auswelchemdieVerfasserdieserZeit-",
                "lineNumber": 1172
              },
              {
                "id": "verse-1173",
                "text": "schrift dieselbe betrachtet wissen möchten. Einer heitern und lei-",
                "lineNumber": 1173
              },
              {
                "id": "verse-1174",
                "text": "Anhang denschaftfreienUnterhaltungsollsiegewidmetsein,unddemGeist 20",
                "lineNumber": 1174
              },
              {
                "id": "verse-1175",
                "text": "undHerzendesLesers,denderAnblickderZeitbegebenheitenbald",
                "lineNumber": 1175
              },
              {
                "id": "verse-1176",
                "text": "entrüstet,baldniederschlägt,einefröhlicheZerstreuunggewähren.",
                "lineNumber": 1176
              },
              {
                "id": "verse-1177",
                "text": "MittenindiesempolitischenTumultsollsiefürMusenundCha-",
                "lineNumber": 1177
              },
              {
                "id": "verse-1178",
                "text": "ritinnen[Grazien,GöttinnenderAnmut]einenengenvertraulichen",
                "lineNumber": 1178
              },
              {
                "id": "verse-1179",
                "text": "Zirkelschließen,auswelchemallesverbanntseinwird,wasmitei- 25",
                "lineNumber": 1179
              },
              {
                "id": "verse-1180",
                "text": "nem unreinen Parteigeist gestempelt ist. Aber indem sie sich alle",
                "lineNumber": 1180
              },
              {
                "id": "verse-1181",
                "text": "BeziehungenaufdenjetzigenWeltlaufundaufdienächstenEr-",
                "lineNumber": 1181
              },
              {
                "id": "verse-1182",
                "text": "wartungenderMenschheitverbietet,wirdsieüberdievergangene",
                "lineNumber": 1182
              },
              {
                "id": "verse-1183",
                "text": "WeltdieGeschichte,undüberdiekommendediePhilosophiebe-",
                "lineNumber": 1183
              },
              {
                "id": "verse-1184",
                "text": "fragen, wird sie zu dem Ideale veredelter Menschheit, welches 30",
                "lineNumber": 1184
              },
              {
                "id": "verse-1185",
                "text": "durchdieVernunftaufgegeben,inderErfahrungabersoleichtaus",
                "lineNumber": 1185
              },
              {
                "id": "verse-1186",
                "text": "denAugengerücktwird,einzelneZügesammeln,undandemstil-",
                "lineNumber": 1186
              },
              {
                "id": "verse-1187",
                "text": "len Bau besserer Begriffe, reinerer Grundsätze und edlerer Sitten,",
                "lineNumber": 1187
              },
              {
                "id": "verse-1188",
                "text": "vondemzuletztallewahreVerbesserungdesgesellschaftlichenZu-",
                "lineNumber": 1188
              },
              {
                "id": "verse-1189",
                "text": "standes abhängt, nach Vermögen geschäftig sein. Sowohl spielend 35",
                "lineNumber": 1189
              },
              {
                "id": "verse-1190",
                "text": "als ernsthaft wird man im Fortgange dieser Schrift dieses einzige",
                "lineNumber": 1190
              },
              {
                "id": "verse-1191",
                "text": "Zielverfolgen,undsoverschiedenauchdieWegeseinmögen,die",
                "lineNumber": 1191
              },
              {
                "id": "verse-1192",
                "text": "mandazueinschlagenwird,sowerdendochalle,näheroderent-",
                "lineNumber": 1192
              },
              {
                "id": "verse-1193",
                "text": "fernter, dahin gerichtet sein, wahre Humanität zu befördern. Man",
                "lineNumber": 1193
              },
              {
                "id": "verse-1194",
                "text": "wirdstreben,dieSchönheitzurVermittlerinnderWahrheitzuma- 40",
                "lineNumber": 1194
              },
              {
                "id": "verse-1195",
                "text": "chen, und durch die Wahrheit der Schönheit ein daurendes Fun-",
                "lineNumber": 1195
              },
              {
                "id": "verse-1196",
                "text": "damentundeinehöhereWürdezugeben.«",
                "lineNumber": 1196
              },
              {
                "id": "verse-1197",
                "text": "FriedrichSchiller:ÜberdieästhetischeErziehungdesMenschenineiner",
                "lineNumber": 1197
              },
              {
                "id": "verse-1198",
                "text": "S.195f.",
                "lineNumber": 1198
              },
              {
                "id": "verse-1199",
                "text": ". Iphigenie – vom griechischen zum 95",
                "lineNumber": 1199
              },
              {
                "id": "verse-1200",
                "text": "deutschen Mythos",
                "lineNumber": 1200
              },
              {
                "id": "verse-1201",
                "text": ".1Überblick",
                "lineNumber": 1201
              },
              {
                "id": "verse-1202",
                "text": "Euripides’DramaIphigenie bei den Taurern(ersteAufführungum",
                "lineNumber": 1202
              },
              {
                "id": "verse-1203",
                "text": "v.Chr.)zeigtdieGriechinmitihrenblutigenRachegelüstenge-",
                "lineNumber": 1203
              },
              {
                "id": "verse-1204",
                "text": "genüber Helena und Menelaos noch tief verstrickt in den Tantali-",
                "lineNumber": 1204
              },
              {
                "id": "verse-1205",
                "text": "denfluch. Ganz anders als Goethes klassizistische Iphigenie ist sie",
                "lineNumber": 1205
              },
              {
                "id": "verse-1206",
                "text": "hiernochnichtdasspätereIdealanMenschlichkeitundSelbstver-",
                "lineNumber": 1206
              },
              {
                "id": "verse-1207",
                "text": "antwortung.HumanitätwirdnichtgestiftetdurchdiesittlicheAu-",
                "lineNumber": 1207
              },
              {
                "id": "verse-1208",
                "text": "tonomiedesverantwortlichhandelndenEinzelnen,sondernbleibt",
                "lineNumber": 1208
              },
              {
                "id": "verse-1209",
                "text": "gebundenaneinGöttlichesaußerhalbdesMenschen:NurdasEin-",
                "lineNumber": 1209
              },
              {
                "id": "verse-1210",
                "text": "greifenderGöttinArtemis(Diana)alsdeaexmachina1[»Göttinaus",
                "lineNumber": 1210
              },
              {
                "id": "verse-1211",
                "text": "der(Theater-)Maschine«]beendetdasMenschenopferundermög-",
                "lineNumber": 1211
              },
              {
                "id": "verse-1212",
                "text": "lichtdieFluchtderGriechen(5.4).",
                "lineNumber": 1212
              },
              {
                "id": "verse-1213",
                "text": "EineerheblicheVeränderungerfuhrauchderTantalidenfluch,der",
                "lineNumber": 1213
              },
              {
                "id": "verse-1214",
                "text": "erstdurchdieBearbeitungGoethesdietiefeBedeutungals»Zone",
                "lineNumber": 1214
              },
              {
                "id": "verse-1215",
                "text": "des Unheils« (Adorno), als Ort einer vorzivilisatorischen Barbarei",
                "lineNumber": 1215
              },
              {
                "id": "verse-1216",
                "text": "erhielt,inwelcherderentmündigteMenschderWillkürderGötter",
                "lineNumber": 1216
              },
              {
                "id": "verse-1217",
                "text": "ausgeliefertist.",
                "lineNumber": 1217
              },
              {
                "id": "verse-1218",
                "text": "stellerKrügerineinIphigenie-ExemplardieberühmteSentenzge-",
                "lineNumber": 1218
              },
              {
                "id": "verse-1219",
                "text": "schrieben:»AllemenschlichenGebrechen/sühnetreineMensch-",
                "lineNumber": 1219
              },
              {
                "id": "verse-1220",
                "text": "lichkeit«. Damit und durch seinen Vergleich Iphigenies mit der",
                "lineNumber": 1220
              },
              {
                "id": "verse-1221",
                "text": "heiligenAgathaaufeinemGemäldeRaphaelshattebereitsGoethe",
                "lineNumber": 1221
              },
              {
                "id": "verse-1222",
                "text": "zuderspäterenVerklärungdesDramasundderTitelfigurbeigetra-",
                "lineNumber": 1222
              },
              {
                "id": "verse-1223",
                "text": "gen.",
                "lineNumber": 1223
              },
              {
                "id": "verse-1224",
                "text": "AnselmFeuerbachsGemäldederIphigenieistinspiriertvomEin-",
                "lineNumber": 1224
              },
              {
                "id": "verse-1225",
                "text": "gangsmonologundzeigteineklassizistischeSehnsuchtsfigur(5.6).",
                "lineNumber": 1225
              },
              {
                "id": "verse-1226",
                "text": "In dieser Pose symbolisiert Iphigenie die Griechensehnsucht der",
                "lineNumber": 1226
              },
              {
                "id": "verse-1227",
                "text": "deutschen Klassik als den zeitlos gewordenen Traum von einem",
                "lineNumber": 1227
              },
              {
                "id": "verse-1228",
                "text": "höherenmenschlichenSein.DieseSehnsuchtwirdnachMatuschek",
                "lineNumber": 1228
              },
              {
                "id": "verse-1229",
                "text": "zum Ausdruck eines neuen, metaphysischen Daseinsgefühls und",
                "lineNumber": 1229
              },
              {
                "id": "verse-1230",
                "text": "begründeteinefürdas19.JahrhunderttypischeAuffassungvonder",
                "lineNumber": 1230
              },
              {
                "id": "verse-1231",
                "text": "deutschen Klassik. Das Drama und seine Hauptfigur werden zum",
                "lineNumber": 1231
              },
              {
                "id": "verse-1232",
                "text": "Weibl.Formvondeusexmachina(»GottausderMaschine«);imantiken",
                "lineNumber": 1232
              },
              {
                "id": "verse-1233",
                "text": "Schauspiel der durch eine Theatermaschine herabgelassene Gott, der die",
                "lineNumber": 1233
              },
              {
                "id": "verse-1234",
                "text": "dramatischenVerwicklungenlöst.",
                "lineNumber": 1234
              },
              {
                "id": "verse-1235",
                "text": "Inbegriff einer eigenen Welt des Geistigen und Idealen außerhalb",
                "lineNumber": 1235
              },
              {
                "id": "verse-1236",
                "text": "Anhang allerZeitlichkeitundWirklichkeit.IneinerZeitschwindenderRe-",
                "lineNumber": 1236
              },
              {
                "id": "verse-1237",
                "text": "ligiositätversprichtdieseweltlicheHeiligeErlösungvondenNiede-",
                "lineNumber": 1237
              },
              {
                "id": "verse-1238",
                "text": "rungen der Wirklichkeit kraft ihrer versöhnenden Ausstrahlung",
                "lineNumber": 1238
              },
              {
                "id": "verse-1239",
                "text": "und trägt als »Herzstück« der Weimarer Klassik zur kulturellen",
                "lineNumber": 1239
              },
              {
                "id": "verse-1240",
                "text": "Identität der Deutschen und ihrer »Bildungsmission« im werden-",
                "lineNumber": 1240
              },
              {
                "id": "verse-1241",
                "text": "denNationalstaatbei(vgl.Matuschek,5.7).",
                "lineNumber": 1241
              },
              {
                "id": "verse-1242",
                "text": "Angesichts einer solchen Mystifizierung des Dramas und seiner",
                "lineNumber": 1242
              },
              {
                "id": "verse-1243",
                "text": "insMadonnenhaftegesteigertenTitelfigurfanddieModernitätder",
                "lineNumber": 1243
              }
            ],
            "act": 5,
            "scene": 6
          },
          {
            "id": "act-5-scene-6-stanza-2",
            "title": "Iphigenie",
            "verses": [
              {
                "id": "verse-1244",
                "text": "schenMythosresultierte,bisindieMittedes20.Jahrhundertshin-",
                "lineNumber": 1244
              },
              {
                "id": "verse-1245",
                "text": "einzuwenigBeachtung.ErstdanacherfolgteeinekonsequenteEin-",
                "lineNumber": 1245
              },
              {
                "id": "verse-1246",
                "text": "ordnungdesDramasindenideengeschichtlichenZusammenhang",
                "lineNumber": 1246
              },
              {
                "id": "verse-1247",
                "text": "derAufklärung.",
                "lineNumber": 1247
              },
              {
                "id": "verse-1248",
                "text": ".2StammbaumderTantalidenfamilie 97",
                "lineNumber": 1248
              },
              {
                "id": "verse-1249",
                "text": "Tantalos",
                "lineNumber": 1249
              },
              {
                "id": "verse-1250",
                "text": "(direkte Abstammung von den Titanen,",
                "lineNumber": 1250
              },
              {
                "id": "verse-1251",
                "text": "aber vermutlich auch von Zeus)",
                "lineNumber": 1251
              },
              {
                "id": "verse-1252",
                "text": "Astyoche ∞ Pelops ∞ Hippodameia",
                "lineNumber": 1252
              },
              {
                "id": "verse-1253",
                "text": "∞ Kleola",
                "lineNumber": 1253
              },
              {
                "id": "verse-1254",
                "text": "Chrysippos Atreus ∞ Aerope ∞ Thyestes",
                "lineNumber": 1254
              },
              {
                "id": "verse-1255",
                "text": "∞ Pelopeia ∞",
                "lineNumber": 1255
              },
              {
                "id": "verse-1256",
                "text": "Anaxibia Menelaos Agamemnon",
                "lineNumber": 1256
              },
              {
                "id": "verse-1257",
                "text": "∞ Strophios ∞ Helena ∞ Klytaimnestra ∞ Aigisthos",
                "lineNumber": 1257
              },
              {
                "id": "verse-1258",
                "text": "(Sohn Thyestes’",
                "lineNumber": 1258
              },
              {
                "id": "verse-1259",
                "text": "mit dessen Tochter",
                "lineNumber": 1259
              },
              {
                "id": "verse-1260",
                "text": "Pelopeia, der",
                "lineNumber": 1260
              },
              {
                "id": "verse-1261",
                "text": "dritten Frau dessen",
                "lineNumber": 1261
              },
              {
                "id": "verse-1262",
                "text": "Bruders Atreus)",
                "lineNumber": 1262
              },
              {
                "id": "verse-1263",
                "text": "Pylades Iphigeneia Elektra Orestes",
                "lineNumber": 1263
              },
              {
                "id": "verse-1264",
                "text": "Anmerkung:",
                "lineNumber": 1264
              },
              {
                "id": "verse-1265",
                "text": "Zur besseren Übersicht sind nur die männlichen Nachfahren des Tantalos",
                "lineNumber": 1265
              },
              {
                "id": "verse-1266",
                "text": "hervorgehoben, zumal es sich bei dem Tantalidenfluch vornehmlich um",
                "lineNumber": 1266
              },
              {
                "id": "verse-1267",
                "text": "barbarisch ausgetragene innerfamiliäre Thronfolgekämpfe um den",
                "lineNumber": 1267
              },
              {
                "id": "verse-1268",
                "text": "Königsthron von Mykene handelt. Zu den weiteren, hier nicht angeführten",
                "lineNumber": 1268
              },
              {
                "id": "verse-1269",
                "text": "Opfern des blutigen Thronstreits zählten ein Sohn des Atreus aus seiner ersten",
                "lineNumber": 1269
              },
              {
                "id": "verse-1270",
                "text": "Ehe mit Kleola und zwei Söhne Thyestes’ aus seiner Ehe mit Atreus’ früherer",
                "lineNumber": 1270
              },
              {
                "id": "verse-1271",
                "text": "Frau Aerope (vgl. V. 364–388).",
                "lineNumber": 1271
              },
              {
                "id": "verse-1272",
                "text": "5.3PeterHacks:»Iphigenieoder:",
                "lineNumber": 1272
              },
              {
                "id": "verse-1273",
                "text": "»Tantalos zeugte den Pelops. Pelops zeugte den Atreus und den",
                "lineNumber": 1273
              },
              {
                "id": "verse-1274",
                "text": "Thyestes.AtreuszeugtedenAgamemnon,AgamemnondenOrest.",
                "lineNumber": 1274
              },
              {
                "id": "verse-1275",
                "text": "IndenunmittelbarenBegebenheitendieserfünfHerrenereigneten",
                "lineNumber": 1275
              },
              {
                "id": "verse-1276",
                "text": "sichdieSchlachtungundVerspeisungvon6Knaben,derDiebstahl1",
                "lineNumber": 1276
              },
              {
                "id": "verse-1277",
                "text": "goldenen Hundes und 1 goldenen Lammes, 2 der klassischen und",
                "lineNumber": 1277
              },
              {
                "id": "verse-1278",
                "text": "beispielgebenden Fälle von Homosexualität, 2 Schändungen von 5",
                "lineNumber": 1278
              },
              {
                "id": "verse-1279",
                "text": "Töchtern durch ihre Väter, 1 Vatermord, 1 Muttermord, 1 Gatten-",
                "lineNumber": 1279
              },
              {
                "id": "verse-1280",
                "text": "mord, 1 Tochtermord, nicht zu rechnen Selbstmorde, Ehebrüche",
                "lineNumber": 1280
              },
              {
                "id": "verse-1281",
                "text": "undminderintimeBluttatenunterVerwandtenzweitenodernoch",
                "lineNumber": 1281
              },
              {
                "id": "verse-1282",
                "text": "entfernteren Grades. Solche Vorfälle heimeln auch den modernen",
                "lineNumber": 1282
              },
              {
                "id": "verse-1283",
                "text": "LeseranundgewährenihmBefriedigung.« 10",
                "lineNumber": 1283
              },
              {
                "id": "verse-1284",
                "text": "PeterHacks:Iphigenieoder:ÜberdieWiederverwendungvonMythen.",
                "lineNumber": 1284
              },
              {
                "id": "verse-1285",
                "text": ".4Euripides:IphigeniebeidenTaurern",
                "lineNumber": 1285
              }
            ],
            "act": 5,
            "scene": 6
          },
          {
            "id": "act-5-scene-6-stanza-3",
            "title": "thoas",
            "verses": [
              {
                "id": "verse-1286",
                "text": "(nachrechtsrufend,vonwobewaffnetesVolkherbeieilt)",
                "lineNumber": 1286
              },
              {
                "id": "verse-1287",
                "text": "IhrBürgerallediesesTaurerlandes,auf!",
                "lineNumber": 1287
              },
              {
                "id": "verse-1288",
                "text": "ZäumteureRosseschnellundsprengtzurKüstehin,",
                "lineNumber": 1288
              },
              {
                "id": "verse-1289",
                "text": "WodesHellenenschiffesStrandguteuerharrt,",
                "lineNumber": 1289
              },
              {
                "id": "verse-1290",
                "text": "UndmitdemBeistandunsrerGöttinArtemis",
                "lineNumber": 1290
              },
              {
                "id": "verse-1291",
                "text": "FangtmirdiegottvergessnenRäuberwiederein!",
                "lineNumber": 1291
              },
              {
                "id": "verse-1292",
                "text": "ZiehtauchdieschnellenSchiffeindieFlut!",
                "lineNumber": 1292
              },
              {
                "id": "verse-1293",
                "text": "ZurSeewieaufdemLandzuPferdewollenwir",
                "lineNumber": 1293
              },
              {
                "id": "verse-1294",
                "text": "SiefassenundvomschroffenFelshinabinsMeer",
                "lineNumber": 1294
              },
              {
                "id": "verse-1295",
                "text": "(ZumChor[bestehendaus15griechischen",
                "lineNumber": 1295
              },
              {
                "id": "verse-1296",
                "text": "weiblichenKriegsgefangenen].)",
                "lineNumber": 1296
              },
              {
                "id": "verse-1297",
                "text": "Euchaber,dieihrwohlgewusstumdiesenTrug,",
                "lineNumber": 1297
              },
              {
                "id": "verse-1298",
                "text": "EuchFrauen,strafichspäter,wennichMußehab.",
                "lineNumber": 1298
              },
              {
                "id": "verse-1299",
                "text": "Jetztaberbleibichnichtuntätig;dasGebot",
                "lineNumber": 1299
              },
              {
                "id": "verse-1300",
                "text": "DerStundelässtmirkeineZeitzumRuhenmehr.",
                "lineNumber": 1300
              },
              {
                "id": "verse-1301",
                "text": "athene 99",
                "lineNumber": 1301
              },
              {
                "id": "verse-1302",
                "text": "(vomTempeldachherabsprechend)",
                "lineNumber": 1302
              },
              {
                "id": "verse-1303",
                "text": "Wohin,wohinwillstdumitdenVerfolgernhier,",
                "lineNumber": 1303
              },
              {
                "id": "verse-1304",
                "text": "Thoas?Vernimm,wasich,Athene,dirjetztsag!",
                "lineNumber": 1304
              },
              {
                "id": "verse-1305",
                "text": "GibdieVerfolgungaufundstaudesHeeresStrom!",
                "lineNumber": 1305
              },
              {
                "id": "verse-1306",
                "text": "GeführtvomSchicksalundApollonsSpruchgemäß",
                "lineNumber": 1306
              },
              {
                "id": "verse-1307",
                "text": "ErschienOresteshier,verfolgtauchvondemZorn",
                "lineNumber": 1307
              },
              {
                "id": "verse-1308",
                "text": "NachArgosunddasheil’geBildinmeineStadt,",
                "lineNumber": 1308
              },
              {
                "id": "verse-1309",
                "text": "Aufdasserwerd’erlöstvonallerseinerNot.",
                "lineNumber": 1309
              },
              {
                "id": "verse-1310",
                "text": "Dashabichdirzusagen.DochOrest,dendu",
                "lineNumber": 1310
              },
              {
                "id": "verse-1311",
                "text": "InMeeresbrandungfangen,dendutötenwillst,",
                "lineNumber": 1311
              },
              {
                "id": "verse-1312",
                "text": "IhnträgtPoseidonmirzulieb’insichermSchiff",
                "lineNumber": 1312
              },
              {
                "id": "verse-1313",
                "text": "JetztschondahinaufwogenloserMeeresbahn.",
                "lineNumber": 1313
              },
              {
                "id": "verse-1314",
                "text": "(Nachlinkssprechend.)",
                "lineNumber": 1314
              },
              {
                "id": "verse-1315",
                "text": "Auchdu,Orestes,achtewohlaufmeinGebot–",
                "lineNumber": 1315
              },
              {
                "id": "verse-1316",
                "text": "DuhörstderGöttinStimme,bistduauchschonfern–",
                "lineNumber": 1316
              },
              {
                "id": "verse-1317",
                "text": "ZiehhinmitdeinerSchwesterunddemGötterbild,",
                "lineNumber": 1317
              },
              {
                "id": "verse-1318",
                "text": "UndwenndukommstzumGötterbau,zurStadtAthen,",
                "lineNumber": 1318
              },
              {
                "id": "verse-1319",
                "text": "Karystos’Klippen,vondemVolkHalägenannt!",
                "lineNumber": 1319
              },
              {
                "id": "verse-1320",
                "text": "DortbaueeinenTempelundstellaufdasBild",
                "lineNumber": 1320
              },
              {
                "id": "verse-1321",
                "text": "UndnennesnachdemTaurerlandundnachdemLeid,",
                "lineNumber": 1321
              },
              {
                "id": "verse-1322",
                "text": "Dasduerduldet,alsderEumenidenWut",
                "lineNumber": 1322
              },
              {
                "id": "verse-1323",
                "text": "DichtriebdurchHellas!KünftigheißtTauropolos",
                "lineNumber": 1323
              },
              {
                "id": "verse-1324",
                "text": "DieLetotochterimGesangderSterblichen.",
                "lineNumber": 1324
              },
              {
                "id": "verse-1325",
                "text": "UndstiftediesenBrauch:BegehtmanalsErsatz",
                "lineNumber": 1325
              },
              {
                "id": "verse-1326",
                "text": "FürdeinenOpfertoddasFest,soritz’derStahl",
                "lineNumber": 1326
              },
              {
                "id": "verse-1327",
                "text": "DamitderGöttinheil’gesRechtgewahretbleib’.",
                "lineNumber": 1327
              },
              {
                "id": "verse-1328",
                "text": "Du,TochterAgamemnons,wirstaufheiligen",
                "lineNumber": 1328
              },
              {
                "id": "verse-1329",
                "text": "BerghöhnvonBrauronPriesterinderArtemis.",
                "lineNumber": 1329
              },
              {
                "id": "verse-1330",
                "text": "Einstwirstdudortbestattet,undalsEhrengab’",
                "lineNumber": 1330
              },
              {
                "id": "verse-1331",
                "text": "WirddirsomanchesschöngewebteKleidgeweiht,",
                "lineNumber": 1331
              },
              {
                "id": "verse-1332",
                "text": "DasFrauen,die,vonKindesnotdahingerafft,",
                "lineNumber": 1332
              },
              {
                "id": "verse-1333",
                "text": "Zurückgelassen.",
                "lineNumber": 1333
              },
              {
                "id": "verse-1334",
                "text": "(ZuThoas.)",
                "lineNumber": 1334
              },
              {
                "id": "verse-1335",
                "text": "DieseGriechenfrauenhier",
                "lineNumber": 1335
              },
              {
                "id": "verse-1336",
                "text": "SollstdualsbaldheimsendenausdemTaurerland.",
                "lineNumber": 1336
              },
              {
                "id": "verse-1337",
                "text": "Anhang DeinwackrerSinnließmichauchdich,Orest,befrein",
                "lineNumber": 1337
              },
              {
                "id": "verse-1338",
                "text": "SogeltedenninZukunftfolgendesGesetz:",
                "lineNumber": 1338
              },
              {
                "id": "verse-1339",
                "text": "WergleicheStimmenzahlerhält,derhatgesiegt.",
                "lineNumber": 1339
              },
              {
                "id": "verse-1340",
                "text": "SoführedeineSchwesterfortausdiesemLand,",
                "lineNumber": 1340
              },
              {
                "id": "verse-1341",
                "text": "SohnAgamemnons,unddu,Thoas,zürnenicht!",
                "lineNumber": 1341
              }
            ],
            "act": 5,
            "scene": 6
          },
          {
            "id": "act-5-scene-6-stanza-4",
            "title": "thoas",
            "verses": [
              {
                "id": "verse-1342",
                "text": "HerrinAthene,werderGötterRufvernimmt",
                "lineNumber": 1342
              },
              {
                "id": "verse-1343",
                "text": "UnddenGehorsamihmverweigert,isteinTor.",
                "lineNumber": 1343
              },
              {
                "id": "verse-1344",
                "text": "IchzürnedemOrestesnicht,dasserdasBild",
                "lineNumber": 1344
              },
              {
                "id": "verse-1345",
                "text": "DerGöttinunsentführt,auchseinerSchwesternicht.",
                "lineNumber": 1345
              },
              {
                "id": "verse-1346",
                "text": "WieziemteKampfmitGöttern,diesomächtigsind?",
                "lineNumber": 1346
              },
              {
                "id": "verse-1347",
                "text": "AufstellenuntergutenZeichenjenesBild!",
                "lineNumber": 1347
              },
              {
                "id": "verse-1348",
                "text": "AuchdieseFrauenschickichinsgesegnete",
                "lineNumber": 1348
              },
              {
                "id": "verse-1349",
                "text": "Hellenenland,wieduesmirbefohlenhast.",
                "lineNumber": 1349
              },
              {
                "id": "verse-1350",
                "text": "Euripides:IphigeniebeidenTaurern.Übers.vonJohannJacobChristian",
                "lineNumber": 1350
              },
              {
                "id": "verse-1351",
                "text": "»SieistinTauris,wohinDianasiealsihrePriesteringebrachthat.",
                "lineNumber": 1351
              },
              {
                "id": "verse-1352",
                "text": "DerheiligePinienhainfälltzumMeerhinab,unddersanfteWind",
                "lineNumber": 1352
              },
              {
                "id": "verse-1353",
                "text": "wiegtunaufhörlichdieharmonischenWipfel,währenddieWellen",
                "lineNumber": 1353
              },
              {
                "id": "verse-1354",
                "text": "in stummem Rauschen gegen den Strand schlagen. Die Tochter",
                "lineNumber": 1354
              },
              {
                "id": "verse-1355",
                "text": "AgamemnonssteigtdieTempelstufenhinab.Wiehörtmaninihr, 5",
                "lineNumber": 1355
              },
              {
                "id": "verse-1356",
                "text": "von ihren ersten Worten an, die Schwester der edelsten griechi-",
                "lineNumber": 1356
              },
              {
                "id": "verse-1357",
                "text": "schen Statuen! So sprachen die Göttinnen Homers und die Jung-",
                "lineNumber": 1357
              },
              {
                "id": "verse-1358",
                "text": "frauen des Aischylos. – Wir kennen dieses ernste Schreiten und",
                "lineNumber": 1358
              },
              {
                "id": "verse-1359",
                "text": "dieseruhigeHaltungvonderPallasAthene-unddenArtemis-Fi-",
                "lineNumber": 1359
              },
              {
                "id": "verse-1360",
                "text": "gurenunsererMuseen.Wirhabenlangedieseheitereundunsterb- 10",
                "lineNumber": 1360
              },
              {
                "id": "verse-1361",
                "text": "licheSchönheitdervollendetenFormbetrachtet,diesegeradenFal-",
                "lineNumber": 1361
              },
              {
                "id": "verse-1362",
                "text": "ten des fallenden Gewands,diese nacktenFüße,dieso weißsind",
                "lineNumber": 1362
              },
              {
                "id": "verse-1363",
                "text": "wiedieMarmorstufen,aufdenensiestehen,diesegroßen,offenen",
                "lineNumber": 1363
              },
              {
                "id": "verse-1364",
                "text": "Augen,dieüberdieWechselfälledesLebenshinausdieunbeweg-",
                "lineNumber": 1364
              },
              {
                "id": "verse-1365",
                "text": "lichen Tiefen der Natur und des Schicksals zu sehen scheinen. 15",
                "lineNumber": 1365
              },
              {
                "id": "verse-1366",
                "text": "Manchmal,wenneinSonnenstrahlindiegraueLuftderGaleriefiel,",
                "lineNumber": 1366
              },
              {
                "id": "verse-1367",
                "text": "habenwirzusehengeglaubt,wieihreGestesichvollendet,ihrGe-",
                "lineNumber": 1367
              },
              {
                "id": "verse-1368",
                "text": "wandsichbewegtundihreewiggeschlossenenLippensichöffnen, 101",
                "lineNumber": 1368
              },
              {
                "id": "verse-1369",
                "text": "umWortezuformen.Wasgäbemannicht,umsiezuhören!Mit",
                "lineNumber": 1369
              },
              {
                "id": "verse-1370",
                "text": "welchtönendem,vollemAkzentmussihrlangsamerSprechgesang",
                "lineNumber": 1370
              },
              {
                "id": "verse-1371",
                "text": "indenPalästenderGötterwiderhallen!–Manhörtihnhiersogut",
                "lineNumber": 1371
              },
              {
                "id": "verse-1372",
                "text": "wiebeidenaltenTragikern.EsistkeineRedewieunsere,sondern",
                "lineNumber": 1372
              },
              {
                "id": "verse-1373",
                "text": "einernsterGesang,dessenRhythmussichumdenGedanken,den",
                "lineNumber": 1373
              },
              {
                "id": "verse-1374",
                "text": "er trägt, herum entfaltet, wiederholt und beugt wie eine Athener",
                "lineNumber": 1374
              },
              {
                "id": "verse-1375",
                "text": "ProzessionumdasHeiligenbildherum,dassiemitführt.Esisteine",
                "lineNumber": 1375
              },
              {
                "id": "verse-1376",
                "text": "Priesterin,diespricht;seitsovielenJahrenvondenMenschenge-",
                "lineNumber": 1376
              },
              {
                "id": "verse-1377",
                "text": "trennt, der Göttin so nah, eingenistet am Fuße des Altars, ›steigt",
                "lineNumber": 1377
              },
              {
                "id": "verse-1378",
                "text": "ihreSeelewiedieFlammedesHeiligtumsindenlichtenÄtherder",
                "lineNumber": 1378
              },
              {
                "id": "verse-1379",
                "text": "Unsterblichen.‹",
                "lineNumber": 1379
              },
              {
                "id": "verse-1380",
                "text": "Sieberührtihn,ohnedieErdezuverlassen;denndasGöttlicheist",
                "lineNumber": 1380
              },
              {
                "id": "verse-1381",
                "text": "aufderErde,undfürsoeineSeeleheißtSchauenBeten.–Nichts",
                "lineNumber": 1381
              },
              {
                "id": "verse-1382",
                "text": "Unruhiges, nichts Übertriebenes ist in ihrem Gottesdienst; alles",
                "lineNumber": 1382
              },
              {
                "id": "verse-1383",
                "text": "daran ist natürlich, und alles daran ist gesund; wenn man wissen",
                "lineNumber": 1383
              },
              {
                "id": "verse-1384",
                "text": "will,worindaswahrereligiöseEmpfindenbesteht,mussmanhier-",
                "lineNumber": 1384
              },
              {
                "id": "verse-1385",
                "text": "herkommen;esistkeineEkstase,sondernHellsichtigkeit;wases",
                "lineNumber": 1385
              },
              {
                "id": "verse-1386",
                "text": "begründet,istdieGabe,dieDingeimGroßenundimGutenzuse-",
                "lineNumber": 1386
              },
              {
                "id": "verse-1387",
                "text": "hen;esistdiefeineVorhersehung,diedurchdasGewirrderEreig-",
                "lineNumber": 1387
              },
              {
                "id": "verse-1388",
                "text": "nisse und die greifbaren Formen der Gegenstände hindurch die",
                "lineNumber": 1388
              },
              {
                "id": "verse-1389",
                "text": "ZeugungskräfteunddieunsichtbarenGesetzeerfasst;esistdieFä-",
                "lineNumber": 1389
              },
              {
                "id": "verse-1390",
                "text": "higkeit,dieinnerenGötterzuverstehen,dieindenDingenwohnen",
                "lineNumber": 1390
              },
              {
                "id": "verse-1391",
                "text": "undvondenendieDingeselbstnurdieAußenseitesind.Einsol-",
                "lineNumber": 1391
              },
              {
                "id": "verse-1392",
                "text": "chesEmpfindenstelltdieGötternichtgegendieNatur,eslässtsie",
                "lineNumber": 1392
              },
              {
                "id": "verse-1393",
                "text": "inihr,vereintmitihr,wiedieSeelemitdemKörper.«",
                "lineNumber": 1393
              },
              {
                "id": "verse-1394",
                "text": "HippolyteTaine:St.OdileetIphig´enieenTauride.In:LeseheftederFreien",
                "lineNumber": 1394
              },
              {
                "id": "verse-1395",
                "text": "leben,.S.7f.–ÜbersetztvonStefanMatuschek.",
                "lineNumber": 1395
              },
              {
                "id": "verse-1396",
                "text": "5.6AnselmFeuerbach:Iphigenie",
                "lineNumber": 1396
              },
              {
                "id": "verse-1397",
                "text": "Anhang",
                "lineNumber": 1397
              },
              {
                "id": "verse-1398",
                "text": ".7StefanMatuschek:»KlassischesHumanitätsideal:Goethes",
                "lineNumber": 1398
              },
              {
                "id": "verse-1399",
                "text": "»GoethesIphigenieträgteineBotschaft.Sieverkörperteinethisches",
                "lineNumber": 1399
              },
              {
                "id": "verse-1400",
                "text": "Ideal: die Selbstbestimmung und Selbstverantwortung des einzel-",
                "lineNumber": 1400
              },
              {
                "id": "verse-1401",
                "text": "nen Menschen. Goethes Schauspiel stellt es so dar, dass diese 103",
                "lineNumber": 1401
              },
              {
                "id": "verse-1402",
                "text": "SelbstbestimmungdenEinzelnenausallerreligiösenundauchpo-",
                "lineNumber": 1402
              },
              {
                "id": "verse-1403",
                "text": "litischenBevormundungbefreit,ihnaberindieserFreiheitzugleich",
                "lineNumber": 1403
              },
              {
                "id": "verse-1404",
                "text": "Rücksicht üben und das Einverständnis des anderen suchen lässt.",
                "lineNumber": 1404
              },
              {
                "id": "verse-1405",
                "text": "Das ist Goethes Änderung der mythischen Vorlage: Nicht die In-",
                "lineNumber": 1405
              },
              {
                "id": "verse-1406",
                "text": "trigeundauchkeinedeaexmachinabefreienIphigenieausihrem",
                "lineNumber": 1406
              },
              {
                "id": "verse-1407",
                "text": "Exil,sondernihreOffenheitgegenüberThoasundihrVertrauenauf",
                "lineNumber": 1407
              },
              {
                "id": "verse-1408",
                "text": "menschlichesVerständnisundEinverständnis.Goethesvielzitierter",
                "lineNumber": 1408
              },
              {
                "id": "verse-1409",
                "text": "Selbstkommentar, seine Iphigenie sei ›verteufelt human‹, deutet",
                "lineNumber": 1409
              },
              {
                "id": "verse-1410",
                "text": "den antireligiösen Impuls an, der darin liegt, dass hier alle Moral",
                "lineNumber": 1410
              },
              {
                "id": "verse-1411",
                "text": "allein auf die menschliche Selbstverantwortung gegründet wird.",
                "lineNumber": 1411
              },
              {
                "id": "verse-1412",
                "text": "Das hat auch eine politische Dimension, wenn Iphigenie die feh-",
                "lineNumber": 1412
              },
              {
                "id": "verse-1413",
                "text": "lende moralische Rechenschaft des absoluten Herrschers anklagt.",
                "lineNumber": 1413
              },
              {
                "id": "verse-1414",
                "text": "›EinwildesLied‹nenntThoasdas,unddasistesnichtnurfürihn,",
                "lineNumber": 1414
              },
              {
                "id": "verse-1415",
                "text": "sondernwohlfüralleOhrenzurZeitdesAbsolutismus,inderdie-",
                "lineNumber": 1415
              },
              {
                "id": "verse-1416",
                "text": "ses Schauspiel entstand. Die Botschaft von individueller Freiheit",
                "lineNumber": 1416
              },
              {
                "id": "verse-1417",
                "text": "undSelbstbestimmungverdanktsichnatürlichnichtGoetheallein,",
                "lineNumber": 1417
              },
              {
                "id": "verse-1418",
                "text": "sonderndereuropäischenAufklärungsphilosophieundihremZiel,",
                "lineNumber": 1418
              },
              {
                "id": "verse-1419",
                "text": "dieAutonomiedesEinzelnenmitdenOrdnungsbedürfnissender",
                "lineNumber": 1419
              },
              {
                "id": "verse-1420",
                "text": "Gemeinschaftübereinzubringen.WennGoethediesesZieldurch",
                "lineNumber": 1420
              },
              {
                "id": "verse-1421",
                "text": "denCharakterunddieunerhörteTat(dasssiedieeigeneIntrigeof-",
                "lineNumber": 1421
              },
              {
                "id": "verse-1422",
                "text": "fen legt) seiner Iphigenie erreichen lässt, kleidet er ein aktuelles",
                "lineNumber": 1422
              },
              {
                "id": "verse-1423",
                "text": "philosophischesIdealinsantikeGewand.Erfolgtdamitderdurch",
                "lineNumber": 1423
              },
              {
                "id": "verse-1424",
                "text": "JohannJoachimWinckelmannbegonnenenIdealisierungdergrie-",
                "lineNumber": 1424
              },
              {
                "id": "verse-1425",
                "text": "chischen Antike,diesie zurProjektionsflächedereigenen, gegen-",
                "lineNumber": 1425
              },
              {
                "id": "verse-1426",
                "text": "wärtigenWunschvorstellungenmacht.›DasLandderGriechenmit",
                "lineNumber": 1426
              },
              {
                "id": "verse-1427",
                "text": "der Seele suchend‹: mit diesem Vers aus ihrem Auftrittsmonolog",
                "lineNumber": 1427
              },
              {
                "id": "verse-1428",
                "text": "sprichtGoethesIphigenieselbstdasMottozudieserklassizistischen",
                "lineNumber": 1428
              },
              {
                "id": "verse-1429",
                "text": "Graecophilie. In der Vorstellung von der ›Weimarer Klassik‹, die",
                "lineNumber": 1429
              },
              {
                "id": "verse-1430",
                "text": "dann das 19.Jahrhundert zum Zweck der kulturellen Nationen-",
                "lineNumber": 1430
              },
              {
                "id": "verse-1431",
                "text": "bildung Deutschlands entwickelt, gewinnt diese Iphigenie eine",
                "lineNumber": 1431
              },
              {
                "id": "verse-1432",
                "text": "Schlüsselstellung. Sie wird zu deren Herzstück, zum klassischen",
                "lineNumber": 1432
              },
              {
                "id": "verse-1433",
                "text": "Humanitätsideal, womit sie ganz neue mythische Züge annimmt.",
                "lineNumber": 1433
              },
              {
                "id": "verse-1434",
                "text": "DergriechischeverwandeltsichineinendeutschenMythos.Iphi-",
                "lineNumber": 1434
              },
              {
                "id": "verse-1435",
                "text": "genie steht insgesamt für die Weimarer Klassik und deren huma-",
                "lineNumber": 1435
              },
              {
                "id": "verse-1436",
                "text": "nistischeBildungsmission.«",
                "lineNumber": 1436
              },
              {
                "id": "verse-1437",
                "text": "StefanMatuschek:KlassischesHumanitätsideal:GoethesIphigenieundihr",
                "lineNumber": 1437
              },
              {
                "id": "verse-1438",
                "text": "S.173f.",
                "lineNumber": 1438
              },
              {
                "id": "verse-1439",
                "text": "6. Der Geist der Aufklärung",
                "lineNumber": 1439
              },
              {
                "id": "verse-1440",
                "text": "Anhang",
                "lineNumber": 1440
              },
              {
                "id": "verse-1441",
                "text": ".1Überblick",
                "lineNumber": 1441
              },
              {
                "id": "verse-1442",
                "text": "BereitsbeimVergleichmitderTragödiedesEuripideswirddie»auf-",
                "lineNumber": 1442
              },
              {
                "id": "verse-1443",
                "text": "klärerische«ModernitätvonGoethesIphigeniedeutlich,daersthier",
                "lineNumber": 1443
              },
              {
                "id": "verse-1444",
                "text": "die Autonomie des Menschen hergestellt wird. Indem Iphigenie",
                "lineNumber": 1444
              },
              {
                "id": "verse-1445",
                "text": "schließlichdenfreienmenschlichenWillenalseinzigeRichtschnur",
                "lineNumber": 1445
              },
              {
                "id": "verse-1446",
                "text": "desGutengeltendmacht,verpflichtetsiesichder»Autonomiedes",
                "lineNumber": 1446
              },
              {
                "id": "verse-1447",
                "text": "Willens«,nachKantdasoberstePrinzipderSittlichkeit.Dennwenn",
                "lineNumber": 1447
              },
              {
                "id": "verse-1448",
                "text": "IphigeniesichschließlichüberdievonPyladeszurUmsetzungdes",
                "lineNumber": 1448
              },
              {
                "id": "verse-1449",
                "text": "Fluchtplans vorgebrachten höchst pragmatischen Argumente und",
                "lineNumber": 1449
              },
              {
                "id": "verse-1450",
                "text": "seineangeblichenSachzwängehinwegsetztundwennsieThoasge-",
                "lineNumber": 1450
              },
              {
                "id": "verse-1451",
                "text": "genüber die freie Willensentscheidung betont, wendet sie Kants",
                "lineNumber": 1451
              },
              {
                "id": "verse-1452",
                "text": "Vorstellung vom freien Willen als einem Prinzip an, das keinen",
                "lineNumber": 1452
              },
              {
                "id": "verse-1453",
                "text": "Zwängen unterworfen ist. Auch der universale Humanitätsan-",
                "lineNumber": 1453
              },
              {
                "id": "verse-1454",
                "text": "spruch, wie er im berühmten Dialog des fünften Akts zwischen",
                "lineNumber": 1454
              },
              {
                "id": "verse-1455",
                "text": "ThoasundIphigeniezumAusdruckkommt,entsprichtderPhilo-",
                "lineNumber": 1455
              },
              {
                "id": "verse-1456",
                "text": "sophie Kants, wonach die Freiheit des Willens für alle Menschen",
                "lineNumber": 1456
              },
              {
                "id": "verse-1457",
                "text": "gilt.",
                "lineNumber": 1457
              },
              {
                "id": "verse-1458",
                "text": "genies gegenüber Thoas und den Göttern die Voraussetzung zur",
                "lineNumber": 1458
              },
              {
                "id": "verse-1459",
                "text": "sittlichen Verantwortung des Menschen im Sinne der Aufklärung.",
                "lineNumber": 1459
              },
              {
                "id": "verse-1460",
                "text": "Der Tantalidenfluch mit seinen »zornigen, drohenden, strafenden",
                "lineNumber": 1460
              },
              {
                "id": "verse-1461",
                "text": "Göttern,dieindespotischerWillkürblindenGehorsamverlangen,",
                "lineNumber": 1461
              },
              {
                "id": "verse-1462",
                "text": "auchwennsieGewalttatundUnrechtbefehlen«,steheimVerhält-",
                "lineNumber": 1462
              },
              {
                "id": "verse-1463",
                "text": "niseinerAnalogiezurorthodoxenchristlichenLehrevoneinerErb-",
                "lineNumber": 1463
              },
              {
                "id": "verse-1464",
                "text": "sünde,dievonderAufklärungsbewegungdes18.Jahrhundertsund",
                "lineNumber": 1464
              },
              {
                "id": "verse-1465",
                "text": "von Goethe persönlich abgelehnt wurde. Denn indem weder der",
                "lineNumber": 1465
              },
              {
                "id": "verse-1466",
                "text": "FluchnochdieErbsündeauseigenerKraftvondenMenschenauf-",
                "lineNumber": 1466
              },
              {
                "id": "verse-1467",
                "text": "gehoben werden können, wird menschliche Autonomie beein-",
                "lineNumber": 1467
              },
              {
                "id": "verse-1468",
                "text": "trächtigt,werdenMenschenabhängigvongöttlicherWillküroder",
                "lineNumber": 1468
              },
              {
                "id": "verse-1469",
                "text": "Gnade. Die in dem Drama angelegte Emanzipation von solchen",
                "lineNumber": 1469
              },
              {
                "id": "verse-1470",
                "text": "Gottesvorstellungenförderezugleich–ganzimSinnederAufklä-",
                "lineNumber": 1470
              },
              {
                "id": "verse-1471",
                "text": "rung–die»HerausbildungderAutonomiedesMenschen«undbe-",
                "lineNumber": 1471
              },
              {
                "id": "verse-1472",
                "text": "wirkedamitauch»dieDistanzierungvomreinenAbsolutismusder",
                "lineNumber": 1472
              },
              {
                "id": "verse-1473",
                "text": "weltlichenHerrschaft«.",
                "lineNumber": 1473
              },
              {
                "id": "verse-1474",
                "text": "derTitelheldinalsVoraussetzungeinerBeendigungdesTantaliden-",
                "lineNumber": 1474
              },
              {
                "id": "verse-1475",
                "text": "fluchsunddamit»alsBefreiungvomErbzwangdesBösen«.Diese",
                "lineNumber": 1475
              },
              {
                "id": "verse-1476",
                "text": "besondere Bedeutung der Wahrheit, ohne die menschliche Auto- 105",
                "lineNumber": 1476
              },
              {
                "id": "verse-1477",
                "text": "nomienichtmöglichwäre,seiwiederumnurvordemHintergrund",
                "lineNumber": 1477
              },
              {
                "id": "verse-1478",
                "text": "derAufklärung zuverstehen.DerWegIphigeniesvonZweifelnan",
                "lineNumber": 1478
              },
              {
                "id": "verse-1479",
                "text": "demsinnvollenWaltenderGötterbiszuroffenenKritikanderen",
                "lineNumber": 1479
              },
              {
                "id": "verse-1480",
                "text": "Willkürherrschaft imParzenliedistfürBorchmeyerzugleichChif-",
                "lineNumber": 1480
              },
              {
                "id": "verse-1481",
                "text": "frefürungerechteirdischeHerrschaftimabsolutistischenZeitalter.",
                "lineNumber": 1481
              },
              {
                "id": "verse-1482",
                "text": "DennunmittelbarnachdieserSzenegreifeIphigeniemitgleichen",
                "lineNumber": 1482
              },
              {
                "id": "verse-1483",
                "text": "ArgumentenundBilderndieHerrscherwillkürThoas’an.Dasneue,",
                "lineNumber": 1483
              },
              {
                "id": "verse-1484",
                "text": "partnerschaftlicheVerhältniszwischenGottheitundIphigeniefinde",
                "lineNumber": 1484
              },
              {
                "id": "verse-1485",
                "text": "daherseineEntsprechungineinerneuenBeziehungzwischenFürst",
                "lineNumber": 1485
              },
              {
                "id": "verse-1486",
                "text": "undUntertan.",
                "lineNumber": 1486
              },
              {
                "id": "verse-1487",
                "text": ".2WolfdietrichRasch:Goethes›IphigenieaufTauris‹alsDrama",
                "lineNumber": 1487
              },
              {
                "id": "verse-1488",
                "text": "»NachgriechischerAuffassungkonnteZeusnachseinemGefallen,",
                "lineNumber": 1488
              },
              {
                "id": "verse-1489",
                "text": "wieIphigenieamBeispielderAtridenzeigt,diemoralischenKräfte",
                "lineNumber": 1489
              },
              {
                "id": "verse-1490",
                "text": "imMenschenausschalten.DieorthodoxeKirchenlehreleugnetedie",
                "lineNumber": 1490
              },
              {
                "id": "verse-1491",
                "text": "Möglichkeit,auseigenerKraftderSchuldzuentgehen;Gotthatden",
                "lineNumber": 1491
              },
              {
                "id": "verse-1492",
                "text": "MenschennachdemSündenfallinseinerVerderbtheitbelassenund",
                "lineNumber": 1492
              },
              {
                "id": "verse-1493",
                "text": "ihm jene autonome moralische Kraft nicht zugestanden, die Zeus",
                "lineNumber": 1493
              },
              {
                "id": "verse-1494",
                "text": "den Atriden nahm. Luther erklärte, so lange noch ein Mensch",
                "lineNumber": 1494
              },
              {
                "id": "verse-1495",
                "text": "glaubt,›ervermögenocheinkleinwenigfürseineRettungzutun,",
                "lineNumber": 1495
              },
              {
                "id": "verse-1496",
                "text": "bleibt er in Zuversicht auf sich selbst und verzweifelt nicht von",
                "lineNumber": 1496
              },
              {
                "id": "verse-1497",
                "text": "Grundansich‹,erdemütigtsichnichtvorGottundbleibtdeshalb",
                "lineNumber": 1497
              },
              {
                "id": "verse-1498",
                "text": "derGnadefern.DiegesamteAufklärungwidersprachmitEntschie-",
                "lineNumber": 1498
              },
              {
                "id": "verse-1499",
                "text": "denheitdieserAuffassung,auchGoethe,woranichbereitserinnert",
                "lineNumber": 1499
              },
              {
                "id": "verse-1500",
                "text": "habe. Er lehnte die Lehre ab, ›daß die menschliche Natur durch",
                "lineNumber": 1500
              },
              {
                "id": "verse-1501",
                "text": "denSündenfalldergestaltverdorbensei,daßauchbisinihrenin-",
                "lineNumber": 1501
              },
              {
                "id": "verse-1502",
                "text": "nerstenKernnichtdasmindesteGuteanihrzufinden,deshalbder",
                "lineNumber": 1502
              },
              {
                "id": "verse-1503",
                "text": "Mensch auf seine eigenen Kräfte durchaus Verzicht zu tun habe‹.",
                "lineNumber": 1503
              },
              {
                "id": "verse-1504",
                "text": "NochsehrspäthatGoethedieseAnschauungsweise,dieeineKon-",
                "lineNumber": 1504
              },
              {
                "id": "verse-1505",
                "text": "stanteseinesDenkensist,bestätigt.›WenngewisseErscheinungen",
                "lineNumber": 1505
              },
              {
                "id": "verse-1506",
                "text": "an der menschlichen Natur, betrachtet von seiten der Sittlichkeit,",
                "lineNumber": 1506
              },
              {
                "id": "verse-1507",
                "text": "unsnötigen,ihreineArtvonradikalemBösen,eineErbsündezu-",
                "lineNumber": 1507
              },
              {
                "id": "verse-1508",
                "text": "zuschreiben, so fordern andere Manifestationen derselben: ihr",
                "lineNumber": 1508
              },
              {
                "id": "verse-1509",
                "text": "gleichfalls eine Erbtugend, eine angeborene Güte […] zuzugeste-",
                "lineNumber": 1509
              },
              {
                "id": "verse-1510",
                "text": "hen.‹ Diese ›Erbtugend‹ sieht auch Iphigenie im Menschen, und",
                "lineNumber": 1510
              },
              {
                "id": "verse-1511",
                "text": "eben die menschliche Fähigkeit zum Guten, die auch die Atriden",
                "lineNumber": 1511
              },
              {
                "id": "verse-1512",
                "text": "besaßen, ›verbarg‹ Zeus ihrem Blick, schaltete sie aus. Indem sie 25",
                "lineNumber": 1512
              },
              {
                "id": "verse-1513",
                "text": "Anhang dieseMaßnahmenderGötterundderen›Haß‹aufdieAtridenmit-",
                "lineNumber": 1513
              },
              {
                "id": "verse-1514",
                "text": "teilt,stelltIphigeniedieGötterbloß.DiebewußteAusschaltungder",
                "lineNumber": 1514
              },
              {
                "id": "verse-1515",
                "text": "moralischenFähigkeitenbeidenMenschenmußalsbesondersbös-",
                "lineNumber": 1515
              },
              {
                "id": "verse-1516",
                "text": "artig erscheinen, und sie beeinträchtigt in besonderem Maße die",
                "lineNumber": 1516
              },
              {
                "id": "verse-1517",
                "text": "menschliche Autonomie, macht den Menschen gänzlich abhängig 30",
                "lineNumber": 1517
              },
              {
                "id": "verse-1518",
                "text": "vondergöttlichenWillkür.",
                "lineNumber": 1518
              },
              {
                "id": "verse-1519",
                "text": "AusdemgleichenGrundelehntedieAufklärungdasDogmavon",
                "lineNumber": 1519
              },
              {
                "id": "verse-1520",
                "text": "der Erbsünde ab. Da es die eigenen moralischen Kräfte des Men-",
                "lineNumber": 1520
              },
              {
                "id": "verse-1521",
                "text": "schen als letztlich unwirksam erklärte und ihn gänzlich von der",
                "lineNumber": 1521
              },
              {
                "id": "verse-1522",
                "text": "göttlichen Gnade abhängig machte, war der Mensch auf eine rein 35",
                "lineNumber": 1522
              },
              {
                "id": "verse-1523",
                "text": "theonome Existenz angewiesen. Der Aufklärungstheologie galt es",
                "lineNumber": 1523
              },
              {
                "id": "verse-1524",
                "text": "als ein Widerspruch zur absoluten Güte Gottes, daß er alle Men-",
                "lineNumber": 1524
              },
              {
                "id": "verse-1525",
                "text": "schenwegenAdamsUngehorsamgegenihnnachderorthodoxen",
                "lineNumber": 1525
              },
              {
                "id": "verse-1526",
                "text": "LehremitAdamsSchuldbelastethatte.InsofernistderAtridenfluch",
                "lineNumber": 1526
              },
              {
                "id": "verse-1527",
                "text": "einverkleinertesModellderErbsünde.IphigeniesKlage:›Achund 40",
                "lineNumber": 1527
              },
              {
                "id": "verse-1528",
                "text": "seinganzGeschlechttrugihrenHaß‹,dieaufTantalus’Geschlecht",
                "lineNumber": 1528
              },
              {
                "id": "verse-1529",
                "text": "bezogenist,läßtsichgleichsamaufAdamsGeschlechtübertragen",
                "lineNumber": 1529
              },
              {
                "id": "verse-1530",
                "text": "undaufdenstrafendenHaßJahwes.«",
                "lineNumber": 1530
              },
              {
                "id": "verse-1531",
                "text": "WolfdietrichRasch:Goethes›IphigenieaufTauris‹alsDramaderAutonomie.",
                "lineNumber": 1531
              },
              {
                "id": "verse-1532",
                "text": "»Aufihr›Erweckungserlebnis‹–dieEntrückungdurchDiana–bau-",
                "lineNumber": 1532
              },
              {
                "id": "verse-1533",
                "text": "end,wähntIphigeniesichlangeingänzlichemEinvernehmenmit",
                "lineNumber": 1533
              },
              {
                "id": "verse-1534",
                "text": "denGöttern.ImEingangsmonologleitetsieausderselbstverständ-",
                "lineNumber": 1534
              },
              {
                "id": "verse-1535",
                "text": "lich angenommenen Intaktheit ihrer Familie geradezu den An-",
                "lineNumber": 1535
              },
              {
                "id": "verse-1536",
                "text": "spruchab,denIhrenzurückgegebenzuwerden.ZugumZugwird 5",
                "lineNumber": 1536
              },
              {
                "id": "verse-1537",
                "text": "indessen der Glaube an die glückliche Bewahrung ihrer Familie",
                "lineNumber": 1537
              },
              {
                "id": "verse-1538",
                "text": "durchdieGötterzunichtegemacht.Alssienundurchdievonihr",
                "lineNumber": 1538
              },
              {
                "id": "verse-1539",
                "text": "verlangte Lüge ebenfalls in den Zwangszusammenhang des Ver-",
                "lineNumber": 1539
              },
              {
                "id": "verse-1540",
                "text": "brechens der Tantaliden hineingezogen zu werden droht – ›die",
                "lineNumber": 1540
              },
              {
                "id": "verse-1541",
                "text": "ehrneHandderNot‹,diedas›obersteGesetz‹derWeltsei,gebiete 10",
                "lineNumber": 1541
              },
              {
                "id": "verse-1542",
                "text": "wacht ihr Zweifel an dem sinnvollen, Sittlichkeit verbürgenden",
                "lineNumber": 1542
              },
              {
                "id": "verse-1543",
                "text": "WaltenderGötter.IndieserSituationamEndedesviertenAufzugs",
                "lineNumber": 1543
              },
              {
                "id": "verse-1544",
                "text": "singtsiedas›LiedderParzen[…]/AlsTantalusvomgoldnenStuhle",
                "lineNumber": 1544
              },
              {
                "id": "verse-1545",
                "text": "die Olympier nachwirkt, wird – wie im Prometheus des jungen 107",
                "lineNumber": 1545
              },
              {
                "id": "verse-1546",
                "text": "Goethe – die Willkürherrschaft der Götter zum Pendant, ja zur",
                "lineNumber": 1546
              },
              {
                "id": "verse-1547",
                "text": "Chiffre ungerechter irdischer Herrschaft, noch unaufgeklärt-abso-",
                "lineNumber": 1547
              },
              {
                "id": "verse-1548",
                "text": "lutistischer Regierung. Die Götter brauchen die Herrschaft, ›wie’s",
                "lineNumber": 1548
              },
              {
                "id": "verse-1549",
                "text": "ihnengefällt‹;wensieheuteerheben–dasSchicksalderfürstlichen",
                "lineNumber": 1549
              },
              {
                "id": "verse-1550",
                "text": "Favoriten–,denstürzensiemorgenundbannenihngleichsammit",
                "lineNumber": 1550
              },
              {
                "id": "verse-1551",
                "text": "einer ›lettre de cachet‹ [königlicher Haftbefehl] in die Bastille des",
                "lineNumber": 1551
              },
              {
                "id": "verse-1552",
                "text": "Tartaros,woervergebens›gerechtenGerichtes‹harrt.",
                "lineNumber": 1552
              },
              {
                "id": "verse-1553",
                "text": "[…]DaßdiegleichenMaßstäbeaufReligion(Götter)undPolitik",
                "lineNumber": 1553
              },
              {
                "id": "verse-1554",
                "text": "(Herrschende) angewandt werden, zeigt Iphigenies Auftritt nach",
                "lineNumber": 1554
              },
              {
                "id": "verse-1555",
                "text": "demParzenlied.›Dieheil’geLippetönteinwildesLied‹,hältThoas",
                "lineNumber": 1555
              },
              {
                "id": "verse-1556",
                "text": "Parzenlied‹gesprochen.InderTatlehntIphigeniesichmitdenglei-",
                "lineNumber": 1556
              },
              {
                "id": "verse-1557",
                "text": "chen Argumenten und Bildern gegen die alte Götter- und Herr-",
                "lineNumber": 1557
              },
              {
                "id": "verse-1558",
                "text": "scherwillkürauf.EntsprechendfindetdasneueVerhältniszwischen",
                "lineNumber": 1558
              },
              {
                "id": "verse-1559",
                "text": "Mensch und Gottheit, dessen Konstituierung im Mittelpunkt des",
                "lineNumber": 1559
              },
              {
                "id": "verse-1560",
                "text": "Schauspielssteht,seinKorrelatineinerneuenBeziehungzwischen",
                "lineNumber": 1560
              },
              {
                "id": "verse-1561",
                "text": "FürstundUntertan.Iphigenies›Bild‹derGötteristzugleichihrBild",
                "lineNumber": 1561
              },
              {
                "id": "verse-1562",
                "text": "der guten Regierung. Gott ist nicht der ›Ganz Andere‹, von dem",
                "lineNumber": 1562
              },
              {
                "id": "verse-1563",
                "text": "mansichkeinBildmachensoll,sondernseinWesenwirdimGe-",
                "lineNumber": 1563
              },
              {
                "id": "verse-1564",
                "text": "genteilnachdemModellderHumanität,nachdemBilddesguten",
                "lineNumber": 1564
              },
              {
                "id": "verse-1565",
                "text": "Menschen entworfen. ›Edel sei der Mensch, / Hilfreich und gut!‹",
                "lineNumber": 1565
              },
              {
                "id": "verse-1566",
                "text": "Mensch‹ ist also der berühmten Hymne gemäß das ›Vorbild jener",
                "lineNumber": 1566
              },
              {
                "id": "verse-1567",
                "text": "geahnetenWesen‹.HierwirdderBerichtderGenesis,daßGottden",
                "lineNumber": 1567
              },
              {
                "id": "verse-1568",
                "text": "Menschen nach seinem Bilde schuf, genau umgekehrt. Iphigenies",
                "lineNumber": 1568
              },
              {
                "id": "verse-1569",
                "text": "verzweifelterAusrufamEndedesviertenAufzugs:›Rettetmich,/",
                "lineNumber": 1569
              },
              {
                "id": "verse-1570",
                "text": "nesnachdemVorbildderHumanitätentworfeneGottesbild.›Iphi-",
                "lineNumber": 1570
              },
              {
                "id": "verse-1571",
                "text": "geniebittetdieGötter,denErmöglichungsgrundfürdenGlauben",
                "lineNumber": 1571
              },
              {
                "id": "verse-1572",
                "text": "ansiezustiften.‹",
                "lineNumber": 1572
              },
              {
                "id": "verse-1573",
                "text": "nomiezunichtemacht,IphigeniejedochzumVerbrechendesKult-",
                "lineNumber": 1573
              },
              {
                "id": "verse-1574",
                "text": "bildraubs(dervermeintlichenBedingungderEntsündigungOrests)",
                "lineNumber": 1574
              },
              {
                "id": "verse-1575",
                "text": "undzumBetrugdesKönigszwingen,dannwärederBeweisfürdie",
                "lineNumber": 1575
              },
              {
                "id": "verse-1576",
                "text": "Unentrinnbarkeit des Atridenfluchs, für die Prädestination auch",
                "lineNumber": 1576
              },
              {
                "id": "verse-1577",
                "text": "IphigenieszumBösenerbracht.DerAtridenfluchistverschiedent-",
                "lineNumber": 1577
              },
              {
                "id": "verse-1578",
                "text": "lichalsChiffrederErbsündebzw.derPrädestinationslehregedeutet",
                "lineNumber": 1578
              },
              {
                "id": "verse-1579",
                "text": "worden,welchefürdieAufklärung,alsHindernisseaufdemWege",
                "lineNumber": 1579
              },
              {
                "id": "verse-1580",
                "text": "Anhang zur Autonomie, Skandala par excellence gewesen sind. Iphigenie",
                "lineNumber": 1580
              },
              {
                "id": "verse-1581",
                "text": "suchtganzimGeistederAufklärungauseigenerKraft,aufautonom",
                "lineNumber": 1581
              },
              {
                "id": "verse-1582",
                "text": "menschlichem Wege den mythischen Erbzwang, die durch den",
                "lineNumber": 1582
              },
              {
                "id": "verse-1583",
                "text": "Atridenfluch ausgelöste Kettenfolge des Verbrechens aufzuhe- 60",
                "lineNumber": 1583
              },
              {
                "id": "verse-1584",
                "text": "ben.[…]",
                "lineNumber": 1584
              },
              {
                "id": "verse-1585",
                "text": "Die›Reinheit‹istdieConditiosinequanon[notwendigeBedin-",
                "lineNumber": 1585
              },
              {
                "id": "verse-1586",
                "text": "gung]der›Entsühnung‹.WürdeersteredurchdievonIphigeniever-",
                "lineNumber": 1586
              },
              {
                "id": "verse-1587",
                "text": "langteLügegetrübt,sowäreauchletzterenichtmehrdenkbar;der",
                "lineNumber": 1587
              },
              {
                "id": "verse-1588",
                "text": "Flucherwiesesichalsunaufhebbar,menschlicheAutonomiewäre 65",
                "lineNumber": 1588
              },
              {
                "id": "verse-1589",
                "text": "dann ebensowenig möglich wie die ›Gutheit‹ der Götter oder die",
                "lineNumber": 1589
              },
              {
                "id": "verse-1590",
                "text": "Gerechtigkeit der Herrschaft. Die Lüge würde also den Sinn der",
                "lineNumber": 1590
              },
              {
                "id": "verse-1591",
                "text": "Existenz Iphigenies zerstören! Diese eminente Bedeutung des",
                "lineNumber": 1591
              },
              {
                "id": "verse-1592",
                "text": "Wahrheitsproblems ist nur vor dem Hintergrund der Aufklärung",
                "lineNumber": 1592
              },
              {
                "id": "verse-1593",
                "text": "zuverstehen.« 70",
                "lineNumber": 1593
              },
              {
                "id": "verse-1594",
                "text": "[u.ö.].S.142–145.",
                "lineNumber": 1594
              },
              {
                "id": "verse-1595",
                "text": ". Thoas und das Barbarische 109",
                "lineNumber": 1595
              },
              {
                "id": "verse-1596",
                "text": ".1Überblick",
                "lineNumber": 1596
              },
              {
                "id": "verse-1597",
                "text": "DasBildvonThoasalseinemgefährlichenBarbaren,derdurchIphi-",
                "lineNumber": 1597
              },
              {
                "id": "verse-1598",
                "text": "geniemissioniertwird,wurdeinderjüngerenForschungerheblich",
                "lineNumber": 1598
              },
              {
                "id": "verse-1599",
                "text": "revidiert.SoübertrifftetwaderEinklangderfünfFigurenindiesem",
                "lineNumber": 1599
              },
              {
                "id": "verse-1600",
                "text": "geschlossenenDramabeiweitemdieGegensätze,diesichausdem",
                "lineNumber": 1600
              },
              {
                "id": "verse-1601",
                "text": "dramatischen Konflikt ergeben. Die angeblichen Barbaren Thoas",
                "lineNumber": 1601
              },
              {
                "id": "verse-1602",
                "text": "und Arkas sprechen nicht nur die gleiche Kunstsprache wie die",
                "lineNumber": 1602
              },
              {
                "id": "verse-1603",
                "text": "Griechen,erweisensichnichtnuralsderenebenbürtigeDialogpart-",
                "lineNumber": 1603
              },
              {
                "id": "verse-1604",
                "text": "ner, sondern wirken durch das Raffinement im wechselseitigen",
                "lineNumber": 1604
              },
              {
                "id": "verse-1605",
                "text": "WortspielwieTeilnehmerineinemgemeinsamen»eingestimmten",
                "lineNumber": 1605
              },
              {
                "id": "verse-1606",
                "text": "Zirkel«,wasHackertmitdemursprünglichenCharakterdesDramas",
                "lineNumber": 1606
              },
              {
                "id": "verse-1607",
                "text": "alsHofdichtungerklärt(7.2).",
                "lineNumber": 1607
              },
              {
                "id": "verse-1608",
                "text": "SolcheDialoge,diesichoftalsDiskurse,alsintellektuellesStreit-",
                "lineNumber": 1608
              },
              {
                "id": "verse-1609",
                "text": "gesprächzurFrageeinerHumanisierungderGesellschaftlesen,ver-",
                "lineNumber": 1609
              },
              {
                "id": "verse-1610",
                "text": "raten bereits viel vom humanen Geist dieser »Barbaren«. Immer",
                "lineNumber": 1610
              },
              {
                "id": "verse-1611",
                "text": "wiederistdaheraufdieUngerechtigkeitdesAusgangsdesDramas",
                "lineNumber": 1611
              },
              {
                "id": "verse-1612",
                "text": "hingewiesenworden,derdemSkythenköniguneigennützigeEnt-",
                "lineNumber": 1612
              },
              {
                "id": "verse-1613",
                "text": "sagungabverlangt,umeinehumaneLösungzuermöglichen:Wäh-",
                "lineNumber": 1613
              },
              {
                "id": "verse-1614",
                "text": "renddenGriechenalleWünscheerfülltwerden,wirdThoasalsder",
                "lineNumber": 1614
              },
              {
                "id": "verse-1615",
                "text": "eigentlichkantianischHandelndeinmittenungeklärterprivaterund",
                "lineNumber": 1615
              },
              {
                "id": "verse-1616",
                "text": "innenpolitischerProblemezurückgelassen.Adorno(7.3)betrachtet",
                "lineNumber": 1616
              },
              {
                "id": "verse-1617",
                "text": "diesen Ausgang als einen Mangel des Dramas, dagegen erkennt",
                "lineNumber": 1617
              },
              {
                "id": "verse-1618",
                "text": "Meier(7.4)inderUmkehrungdertraditionellen»Wert-Hierarchie«",
                "lineNumber": 1618
              },
              {
                "id": "verse-1619",
                "text": "vonKulturvolkundBarbarenGoethesDistanzzurAntikeundsei-",
                "lineNumber": 1619
              },
              {
                "id": "verse-1620",
                "text": "nenNeuansatzausdemGeistderdeutschenKlassik.",
                "lineNumber": 1620
              },
              {
                "id": "verse-1621",
                "text": "»›[GoethesIphigenie]istjafürdasAmateurtheateramHofgeschrie-",
                "lineNumber": 1621
              },
              {
                "id": "verse-1622",
                "text": "benundfastnurvonDilettantenuraufgeführtworden.DieProben",
                "lineNumber": 1622
              },
              {
                "id": "verse-1623",
                "text": "wareneinBestandteilhöfischerGeselligkeit,beiderdiePrivilegien",
                "lineNumber": 1623
              },
              {
                "id": "verse-1624",
                "text": "nur nochpro forma gewahrtwurden(Goethewarnochnicht ge-",
                "lineNumber": 1624
              },
              {
                "id": "verse-1625",
                "text": "adelt,alsseinOrestdenallerhöchstenPylades,Serenissimusselbst",
                "lineNumber": 1625
              },
              {
                "id": "verse-1626",
                "text": "zurSeitehatte).NochinderDiktioneinzelnerVerspartienerkennt",
                "lineNumber": 1626
              },
              {
                "id": "verse-1627",
                "text": "mandiesenTonfallgezierterKonversation.‹Vorallemäußertersich",
                "lineNumber": 1627
              },
              {
                "id": "verse-1628",
                "text": "indenWortspielendesstichomythisch-sentenziösenDialogs[…].",
                "lineNumber": 1628
              },
              {
                "id": "verse-1629",
                "text": "›Iphigenie.OreichemirdieHandzumschönenZeichen.Thoas.",
                "lineNumber": 1629
              },
              {
                "id": "verse-1630",
                "text": "Anhang DuforderstvielineinerkurzenZeit.Iphigenie.UmGutszuthun 10",
                "lineNumber": 1630
              },
              {
                "id": "verse-1631",
                "text": "brauchtskeinerUeberlegung.Thoas.SehrvielobausdemGuten",
                "lineNumber": 1631
              },
              {
                "id": "verse-1632",
                "text": "böses nicht entspringe! Iphigenie. Zweifel schadet dem Guten",
                "lineNumber": 1632
              },
              {
                "id": "verse-1633",
                "text": "mehralsdasBöseselbst‹[…].",
                "lineNumber": 1633
              },
              {
                "id": "verse-1634",
                "text": "RhetorischverlangtdiesegedrechselteDialektikdeneingestimm-",
                "lineNumber": 1634
              },
              {
                "id": "verse-1635",
                "text": "tenZirkel,demdieIphigeniewieübrigensauchderTassovorihrer 15",
                "lineNumber": 1635
              },
              {
                "id": "verse-1636",
                "text": "AufführungpartienweisezuGehörgebrachtwurde.Dochsollda-",
                "lineNumber": 1636
              },
              {
                "id": "verse-1637",
                "text": "mitderFormihrAppellcharakternichtabgesprochenwerden.Nur",
                "lineNumber": 1637
              },
              {
                "id": "verse-1638",
                "text": "lagdempoetischenAufrufzurEdelmutsposedieeinverständigeIn-",
                "lineNumber": 1638
              },
              {
                "id": "verse-1639",
                "text": "timitätzugrunde,diedasKonfliktmomentzumangenehmenKitzel",
                "lineNumber": 1639
              },
              {
                "id": "verse-1640",
                "text": "dämpfteundinderLösungeinefragloseSelbstbestätigungerfuhr. 20",
                "lineNumber": 1640
              },
              {
                "id": "verse-1641",
                "text": "DasGemälde,dasGeorgMelchiorKrausvonderErkennungsszene",
                "lineNumber": 1641
              },
              {
                "id": "verse-1642",
                "text": "mitGoethealsOrestundCoronaSchröteralsIphigeniegemalthat,",
                "lineNumber": 1642
              },
              {
                "id": "verse-1643",
                "text": "›atmetinseinersüßlichenIdealitätdengleichenGeist,dendieBe-",
                "lineNumber": 1643
              },
              {
                "id": "verse-1644",
                "text": "richteverraten.›ManglaubteeinenApollozusehen‹,schriebKnebel",
                "lineNumber": 1644
              },
              {
                "id": "verse-1645",
                "text": "überGoetheanLavater.‹DieIphigeniewarfürihrerstesPublikum 25",
                "lineNumber": 1645
              },
              {
                "id": "verse-1646",
                "text": "nichtswenigeralsein›Ärgernis‹,undgeradedeshalbbrauchtman",
                "lineNumber": 1646
              },
              {
                "id": "verse-1647",
                "text": "ihren Verfasser, wenn er sie später im Rückblick auf den Über-",
                "lineNumber": 1647
              },
              {
                "id": "verse-1648",
                "text": "schwangjenersowildenwieschönenJahrealsdoch›verteufelthu-",
                "lineNumber": 1648
              },
              {
                "id": "verse-1649",
                "text": "selbstinSchutzzunehmen.DasÜbermaßgefühligerBekenntnisse, 30",
                "lineNumber": 1649
              },
              {
                "id": "verse-1650",
                "text": "das in der Gruppeneuphorie der ersten Weimarer Zeit und ihrer",
                "lineNumber": 1650
              },
              {
                "id": "verse-1651",
                "text": "Umstände gründete, war ihm bei der Fertigstellung des Stücks in",
                "lineNumber": 1651
              },
              {
                "id": "verse-1652",
                "text": "Romschonunbehaglichgeworden.BuchstäblichdemHinweisei-",
                "lineNumber": 1652
              },
              {
                "id": "verse-1653",
                "text": "nergewissen›Süßlichkeit‹folgend,erweisteinestatistischeStich-",
                "lineNumber": 1653
              },
              {
                "id": "verse-1654",
                "text": "probe,daßderbetreffendeWortgebrauchgegenüberdemProsatext 35",
                "lineNumber": 1654
              },
              {
                "id": "verse-1655",
                "text": "umzweiDritteleingeschränktwurde.«",
                "lineNumber": 1655
              },
              {
                "id": "verse-1656",
                "text": "FritzHackert:IphigenieaufTauris.In:GoethesDramen.NeueInterpretatio-",
                "lineNumber": 1656
              },
              {
                "id": "verse-1657",
                "text": ".3TheodorW.Adorno:»ZurKlassizität",
                "lineNumber": 1657
              },
              {
                "id": "verse-1658",
                "text": "»DasGefühleinerUngerechtigkeit,diedarumdemSchauspielzum",
                "lineNumber": 1658
              },
              {
                "id": "verse-1659",
                "text": "Schadengereicht,weilesobjektiv,derIdeenachbeansprucht,mit",
                "lineNumber": 1659
              },
              {
                "id": "verse-1660",
                "text": "HumanitätrealisieresichGerechtigkeit,rührtdaher,daßThoas,der",
                "lineNumber": 1660
              },
              {
                "id": "verse-1661",
                "text": "Barbar,mehrgibtalsdieGriechen,dieihm,mitEinverständnisder",
                "lineNumber": 1661
              },
              {
                "id": "verse-1662",
                "text": "Dichtung,humanüberlegensichdünken.Goethe,derdaszurZeit 5",
                "lineNumber": 1662
              },
              {
                "id": "verse-1663",
                "text": "derendgültigenNiederschriftmußinnerviert[gespürt]haben,hat 111",
                "lineNumber": 1663
              },
              {
                "id": "verse-1664",
                "text": "allseineKunstdarangewendet,dasStückvordemEinwandzube-",
                "lineNumber": 1664
              },
              {
                "id": "verse-1665",
                "text": "hüten; der Verlauf der Iphigenie in ihren späteren Akten ist die",
                "lineNumber": 1665
              },
              {
                "id": "verse-1666",
                "text": "Apologie [Verteidigung] von Humanität gegen ihr immanent In-",
                "lineNumber": 1666
              },
              {
                "id": "verse-1667",
                "text": "humanes.UmsolcherVerteidigungwillenwagtGoetheeinÄußers-",
                "lineNumber": 1667
              },
              {
                "id": "verse-1668",
                "text": "tes. Iphigenie, gehorsam dem kategorischen Imperativ der damals",
                "lineNumber": 1668
              },
              {
                "id": "verse-1669",
                "text": "nochungeschriebenenKritikderpraktischenVernunft,desavouiert",
                "lineNumber": 1669
              },
              {
                "id": "verse-1670",
                "text": "[leugnet]ausFreiheit,ausAutonomieihreigenesInteresse,dasdes",
                "lineNumber": 1670
              },
              {
                "id": "verse-1671",
                "text": "Betrugs bedarf und damit den mythischen Schuldzusammenhang",
                "lineNumber": 1671
              },
              {
                "id": "verse-1672",
                "text": "wiederholt. Wie die Helden der Zauberflöte achtet sie das Gebot",
                "lineNumber": 1672
              },
              {
                "id": "verse-1673",
                "text": "vonWahrheitundverrätwiesichselbstdieIhren,dieeinzigdank",
                "lineNumber": 1673
              },
              {
                "id": "verse-1674",
                "text": "der Humanität des Barbaren gerettet werden. Die große Schluß-",
                "lineNumber": 1674
              },
              {
                "id": "verse-1675",
                "text": "szene mit Thoas dann trachtet, durch einen Takt, der dem gesell-",
                "lineNumber": 1675
              },
              {
                "id": "verse-1676",
                "text": "schaftlichen abgelernt ist, durchs Ritual von Gastfreundschaft, bis",
                "lineNumber": 1676
              },
              {
                "id": "verse-1677",
                "text": "zur Unkenntlichkeit abzuschwächen, was geschieht: daß der Sky-",
                "lineNumber": 1677
              },
              {
                "id": "verse-1678",
                "text": "thenkönig,derrealweitedlersichverhältalsseineedlenGäste,al-",
                "lineNumber": 1678
              },
              {
                "id": "verse-1679",
                "text": "lein,verlassenübrigist.DerEinladungwirderschwerlichfolgen.Er",
                "lineNumber": 1679
              },
              {
                "id": "verse-1680",
                "text": "darf,eineSprachfigurGoethesanzuwenden,anderhöchstenHu-",
                "lineNumber": 1680
              },
              {
                "id": "verse-1681",
                "text": "manitätnichtteilhaben,verurteilt,derenObjektzubleiben,wäh-",
                "lineNumber": 1681
              },
              {
                "id": "verse-1682",
                "text": "renderalsihrSubjekthandelte.DasUnzulänglichederBeschwich-",
                "lineNumber": 1682
              },
              {
                "id": "verse-1683",
                "text": "tigung,dieVersöhnungnurerschleicht,manifestiertsichästhetisch.",
                "lineNumber": 1683
              },
              {
                "id": "verse-1684",
                "text": "Die verzweifelte Anstrengung des Dichters ist überwertig, ihre",
                "lineNumber": 1684
              },
              {
                "id": "verse-1685",
                "text": "DrähtewerdensichtbarundverletzendieRegelderNatürlichkeit,",
                "lineNumber": 1685
              },
              {
                "id": "verse-1686",
                "text": "diedasStücksichstellte.ManmerktdieAbsichtundmanwirdver-",
                "lineNumber": 1686
              },
              {
                "id": "verse-1687",
                "text": "stimmt. Das Meisterwerk knirscht in den Scharnieren: damit ver-",
                "lineNumber": 1687
              },
              {
                "id": "verse-1688",
                "text": "klagtesdenBegriffdesMeisterwerks.«",
                "lineNumber": 1688
              },
              {
                "id": "verse-1689",
                "text": "TheodorW.Adorno:ZumKlassizismusvonGoethes»Iphigenie«.In:Ders.:",
                "lineNumber": 1689
              },
              {
                "id": "verse-1690",
                "text": "NotenzurLiteratur IV.Hrsg.vonRolf Tiedemann.Frankfurta.M.:Suhr-",
                "lineNumber": 1690
              },
              {
                "id": "verse-1691",
                "text": "vonGretelAdorno[u.a.].Bd.11.)S.495–514[Auszug].–©SuhrkampVerlag,",
                "lineNumber": 1691
              },
              {
                "id": "verse-1692",
                "text": "VerlagBerlin.",
                "lineNumber": 1692
              },
              {
                "id": "verse-1693",
                "text": ".4AlbertMeier:»JohannWolfgangGoethe.",
                "lineNumber": 1693
              },
              {
                "id": "verse-1694",
                "text": "»NichtIphigenie,OrestundPyladessindes,diedenPreisdesSit-",
                "lineNumber": 1694
              },
              {
                "id": "verse-1695",
                "text": "tengesetzes zu entrichten haben, sondern allein die Taurer, denen",
                "lineNumber": 1695
              },
              {
                "id": "verse-1696",
                "text": "nichteinmalvergönntwird,mitdemTriumphderGriechennicht",
                "lineNumber": 1696
              },
              {
                "id": "verse-1697",
                "text": "einverstanden zu sein. Dass Iphigenie auf Tauris ›ganz verteufelt",
                "lineNumber": 1697
              },
              {
                "id": "verse-1698",
                "text": "Anhang dieserethischenAsymmetriebegründet,dieeinParadoxzurFolge 5",
                "lineNumber": 1698
              },
              {
                "id": "verse-1699",
                "text": "hat. Die Geschichte der Tantaliden steht für Gewalt und erst die",
                "lineNumber": 1699
              },
              {
                "id": "verse-1700",
                "text": "DurchbrechungdiesesGewaltzusammenhangskanndievonIphi-",
                "lineNumber": 1700
              },
              {
                "id": "verse-1701",
                "text": "genie ersehnte Lösung bringen: ›Soll dieser Fluch denn ewig wal-",
                "lineNumber": 1701
              },
              {
                "id": "verse-1702",
                "text": "ten?Soll/NiediesGeschlechtmiteinemneuenSegen/Sichwie-",
                "lineNumber": 1702
              },
              {
                "id": "verse-1703",
                "text": "derheben?‹Dasgelingtfreilichnur,indemdenSkythenzwarkeine 10",
                "lineNumber": 1703
              },
              {
                "id": "verse-1704",
                "text": "körperlicheGewaltmehrangetanwird,umsomehrabereinemo-",
                "lineNumber": 1704
              },
              {
                "id": "verse-1705",
                "text": "ralische. Iphigenie braucht die Freiwilligkeit auf Seiten von Thoas",
                "lineNumber": 1705
              },
              {
                "id": "verse-1706",
                "text": "underzwingtsieineinerethischenErpressung,dieGoetheauffällig",
                "lineNumber": 1706
              },
              {
                "id": "verse-1707",
                "text": "sarkastischformuliert:›Siehunsan!Duhastnichtoft/Zusolcher",
                "lineNumber": 1707
              },
              {
                "id": "verse-1708",
                "text": "edeln Tat Gelegenheit. / Versagen kannst du’s nicht; gewähr es 15",
                "lineNumber": 1708
              },
              {
                "id": "verse-1709",
                "text": "bald!‹",
                "lineNumber": 1709
              },
              {
                "id": "verse-1710",
                "text": "Voll und ganz im Sinne kantianischer Gesetzesstrenge handelt",
                "lineNumber": 1710
              },
              {
                "id": "verse-1711",
                "text": "nurThoas,deruneigennützigentsagt,währendsichdenAtridenje-",
                "lineNumber": 1711
              },
              {
                "id": "verse-1712",
                "text": "derWunscherfüllt.DassdemTaurerkönigdasletzteWortgehört,",
                "lineNumber": 1712
              },
              {
                "id": "verse-1713",
                "text": "dessenAbgepresstheitinderLakoniedes›Lebtwohl!‹überdeutlich 20",
                "lineNumber": 1713
              },
              {
                "id": "verse-1714",
                "text": "wird, ist schlüssig, weil der Skythe sittlicher handelt alsdie Grie-",
                "lineNumber": 1714
              },
              {
                "id": "verse-1715",
                "text": "chen.SchillerhatdieseÜberlegenheitherausgehört:›Soisteseine",
                "lineNumber": 1715
              },
              {
                "id": "verse-1716",
                "text": "vorzüglicheSchönheitinderdeutschenIphigenia,daßdertaurische",
                "lineNumber": 1716
              },
              {
                "id": "verse-1717",
                "text": "König,dereinzige,derdenWünschenOrestsundseinerSchwester",
                "lineNumber": 1717
              },
              {
                "id": "verse-1718",
                "text": "im Wege steht, nie unsre Achtung verliert und uns zuletzt noch 25",
                "lineNumber": 1718
              },
              {
                "id": "verse-1719",
                "text": "Liebe abnötigt‹. In dieser Umkehrung der Wert-Hierarchie, in der",
                "lineNumber": 1719
              },
              {
                "id": "verse-1720",
                "text": "einBarbardieGriechenübertrifft,kommtdereigentlicheNeuansatz",
                "lineNumber": 1720
              },
              {
                "id": "verse-1721",
                "text": "Goethes zum Tragen. Es ist nicht die exilierte Iphigenie, in deren",
                "lineNumber": 1721
              },
              {
                "id": "verse-1722",
                "text": "Heimatsehnsucht sich die Griechenferne des sentimentalischen",
                "lineNumber": 1722
              },
              {
                "id": "verse-1723",
                "text": "unddahergraecophilenDichterswiedererkennenwürde.Sowiedie 30",
                "lineNumber": 1723
              },
              {
                "id": "verse-1724",
                "text": "HandlungumIphigenieaufderDifferenzvonKulturvolkundBar-",
                "lineNumber": 1724
              },
              {
                "id": "verse-1725",
                "text": "barenfußt,sospiegeltGoetheandiesemStoffdieeigeneDistanz",
                "lineNumber": 1725
              },
              {
                "id": "verse-1726",
                "text": "zurAntikeundschreibtseinem›modernen‹WerkdieKlassik/Ro-",
                "lineNumber": 1726
              },
              {
                "id": "verse-1727",
                "text": "mantik-Differenz ein, in deren Licht die Taurer den Griechen",
                "lineNumber": 1727
              },
              {
                "id": "verse-1728",
                "text": "zwangsläufigmehralsnurebenbürtigsind.« 35",
                "lineNumber": 1728
              },
              {
                "id": "verse-1729",
                "text": "AlbertMeier:»JohannWolfgangGoethe.›IphigenieaufTauris.EinSchau-",
                "lineNumber": 1729
              },
              {
                "id": "verse-1730",
                "text": ".TheaterinderKritik–RolfMichaelis:»Derschöne 113",
                "lineNumber": 1730
              },
              {
                "id": "verse-1731",
                "text": "»PlattenspieleraufdemBoden,ZettelanderWandauchzweiStun-",
                "lineNumber": 1731
              },
              {
                "id": "verse-1732",
                "text": "denspäter,wenigeMeterentfernt,aufPeymannsBühnevonGoe-",
                "lineNumber": 1732
              },
              {
                "id": "verse-1733",
                "text": "thes ›Iphigenie‹ (Bühnenbild und Kostüme: Ilona Freyer). Im lan-",
                "lineNumber": 1733
              },
              {
                "id": "verse-1734",
                "text": "gen,weißenManteleinerLabor-ArbeiterinbetrittKirstenDeneals",
                "lineNumber": 1734
              },
              {
                "id": "verse-1735",
                "text": "IphigeniedieSzene.SiestreiftvorbeianihrendreiStaffeleien,auf",
                "lineNumber": 1735
              },
              {
                "id": "verse-1736",
                "text": "denen große Schreibtafeln stehen, schaut auf die Notizzettel und",
                "lineNumber": 1736
              },
              {
                "id": "verse-1737",
                "text": "Karteikarten,diesiesichandieWandgepinnthat,beugtsichüber",
                "lineNumber": 1737
              },
              {
                "id": "verse-1738",
                "text": "ihranderesArbeitsinstrument,denPlattenspieler.ErsterTonindie-",
                "lineNumber": 1738
              },
              {
                "id": "verse-1739",
                "text": "serAufführung:keinWort,sondernreinerKlang,das›Adagio‹aus",
                "lineNumber": 1739
              },
              {
                "id": "verse-1740",
                "text": "demerstenderdreiRasumowsky-QuartetteBeethovens.[…]",
                "lineNumber": 1740
              },
              {
                "id": "verse-1741",
                "text": "Damit ist, vor jedem Wort, Peymanns Inszenierung bestimmt.",
                "lineNumber": 1741
              },
              {
                "id": "verse-1742",
                "text": "WiekannmandiesalsidealistischesHumanitäts-Märcheneinstge-",
                "lineNumber": 1742
              },
              {
                "id": "verse-1743",
                "text": "priesene,heutegeschmähteStückspielen,indemvorzweihundert",
                "lineNumber": 1743
              },
              {
                "id": "verse-1744",
                "text": "JahreneinnochnichtvierzigjährigerDichter–inFrankreichbereitet",
                "lineNumber": 1744
              },
              {
                "id": "verse-1745",
                "text": "sich die Revolution vor – seiner Titelheldin solche Worte in den",
                "lineNumber": 1745
              },
              {
                "id": "verse-1746",
                "text": "Busensleisewehendkühlen…/UmGutszutun,braucht’skeiner",
                "lineNumber": 1746
              },
              {
                "id": "verse-1747",
                "text": "Überlegung…/DerZweifelist’s,derGutesbösemacht./Bedenke",
                "lineNumber": 1747
              },
              {
                "id": "verse-1748",
                "text": "nicht;gewähre,wiedu’sfühlst‹?",
                "lineNumber": 1748
              },
              {
                "id": "verse-1749",
                "text": "DieMusikamAnfangöffnetPeymannsInszenierungindasdurch",
                "lineNumber": 1749
              },
              {
                "id": "verse-1750",
                "text": "WorteschwerzuerschließendeParadies,gibtihrdieRichtungauf",
                "lineNumber": 1750
              },
              {
                "id": "verse-1751",
                "text": "ihr in jedem Büro, jeder Disco begegnen könnten, an die Rampe,",
                "lineNumber": 1751
              },
              {
                "id": "verse-1752",
                "text": "baumeltmitdenBeinenselbstsicher-verlegenundsprichtdieers-",
                "lineNumber": 1752
              },
              {
                "id": "verse-1753",
                "text": "gen,dichtbelaubtenHaines…/Tretichnochjetztmitschaudern-",
                "lineNumber": 1753
              },
              {
                "id": "verse-1754",
                "text": "dem Gefühl / Als wenn ich sie zum erstenmal beträte, / Und es",
                "lineNumber": 1754
              },
              {
                "id": "verse-1755",
                "text": "gewöhntsichnichtmeinGeisthierher.‹",
                "lineNumber": 1755
              },
              {
                "id": "verse-1756",
                "text": "EinMenschimExil.FremdunterFremden.AuchdieseinThema,",
                "lineNumber": 1756
              },
              {
                "id": "verse-1757",
                "text": "daswährendderzweiJahrhunderte,seitdenenesGoethesSchau-",
                "lineNumber": 1757
              },
              {
                "id": "verse-1758",
                "text": "spielgibt,immeraktuellergewordenist.AuseinerFremdekommt",
                "lineNumber": 1758
              },
              {
                "id": "verse-1759",
                "text": "dieBühnenbildnerinIlonaFreyer,dieinderDDRnichtsoarbeiten",
                "lineNumber": 1759
              },
              {
                "id": "verse-1760",
                "text": "durfte, wie es ihr Verständnis von Kunst verlangt. Sie isoliert die",
                "lineNumber": 1760
              },
              {
                "id": "verse-1761",
                "text": "PriesterinIphigenie,dasauseinerHochkulturindieBarbareiver-",
                "lineNumber": 1761
              },
              {
                "id": "verse-1762",
                "text": "schlageneKönigskind,amvorderenBühnenrand.ZwischenStapeln",
                "lineNumber": 1762
              },
              {
                "id": "verse-1763",
                "text": "vonManuskripten,altenPhotos,Briefen,Zetteln,Schreibtafeln,ei-",
                "lineNumber": 1763
              },
              {
                "id": "verse-1764",
                "text": "ner altertümlichen Schreibmaschine, einem Plattenspieler haust",
                "lineNumber": 1764
              },
              {
                "id": "verse-1765",
                "text": "Anhang IphigeniewieineinerOasederKulturinmitteneinerGemeinschaft",
                "lineNumber": 1765
              },
              {
                "id": "verse-1766",
                "text": "archaischerBlutrache.",
                "lineNumber": 1766
              },
              {
                "id": "verse-1767",
                "text": "Symbol der skythischen Fremde, in der Iphigenie zu leben seit 40",
                "lineNumber": 1767
              },
              {
                "id": "verse-1768",
                "text": "fünfzehnJahrengezwungenist:derroheTempelderDiana,deren",
                "lineNumber": 1768
              },
              {
                "id": "verse-1769",
                "text": "Priesterinsieist.ÜberzweikrummenÄsteneinschmalesBrett,dar-",
                "lineNumber": 1769
              },
              {
                "id": "verse-1770",
                "text": "auf ein großer ›echter‹ Vogelflügel und ein künstlicher. Feldsteine",
                "lineNumber": 1770
              },
              {
                "id": "verse-1771",
                "text": "undeinausderAschegeopferterMenschengeschichtetes,wenige",
                "lineNumber": 1771
              },
              {
                "id": "verse-1772",
                "text": "ZentimeterhohesMäuerchenscheidendenTempelbezirkvonder 45",
                "lineNumber": 1772
              },
              {
                "id": "verse-1773",
                "text": "sonstkahlen,grauausgeschlagenenBühne,dieimHintergrundab-",
                "lineNumber": 1773
              },
              {
                "id": "verse-1774",
                "text": "geschlossen wird von zwei großen schwarzen Tüchern, zwischen",
                "lineNumber": 1774
              },
              {
                "id": "verse-1775",
                "text": "derenschmalemSchlitzLichtaufdieSzenefällt.",
                "lineNumber": 1775
              },
              {
                "id": "verse-1776",
                "text": "KulturinderBarbarei,BildungunterMenschenfressern,Mensch-",
                "lineNumber": 1776
              },
              {
                "id": "verse-1777",
                "text": "lichkeitimTerror:vomerstenAugenblickansinddiebeidenPole 50",
                "lineNumber": 1777
              },
              {
                "id": "verse-1778",
                "text": "fixiert, zwischen denen sich die Inszenierung spannt, lange ehe",
                "lineNumber": 1778
              },
              {
                "id": "verse-1779",
                "text": "KirstenDene,alsPriesterinzumMenschenopferbefohlen,vorVer-",
                "lineNumber": 1779
              },
              {
                "id": "verse-1780",
                "text": "zweiflungweinenddieGöttinanfleht:›OenthaltevomBlutmeine",
                "lineNumber": 1780
              },
              {
                "id": "verse-1781",
                "text": "Hände!‹odersichjeneFragestellt,diePeymannausdem(frühes-",
                "lineNumber": 1781
              },
              {
                "id": "verse-1782",
                "text": "ten) Prosa-Entwurf in die (endgültige) Versfassung übernimmt: 55",
                "lineNumber": 1782
              },
              {
                "id": "verse-1783",
                "text": "›WennichmitBetrugundRaubbeginn,wiewillichSeegenbringen",
                "lineNumber": 1783
              },
              {
                "id": "verse-1784",
                "text": "undwowillichenden?‹[…]",
                "lineNumber": 1784
              },
              {
                "id": "verse-1785",
                "text": "Solche Ehrlichkeit (und Bescheidenheit) gegenüber einem Ent-",
                "lineNumber": 1785
              },
              {
                "id": "verse-1786",
                "text": "wurfidealerMenschlichkeitprägtdieInszenierungder›Iphigenie‹.",
                "lineNumber": 1786
              },
              {
                "id": "verse-1787",
                "text": "Zu vermitteln ist nicht das zu Lebensregeln verfestigte Spruchgut 60",
                "lineNumber": 1787
              },
              {
                "id": "verse-1788",
                "text": "diesesDramas,sondernderZweifelandieseminunmenschlicher",
                "lineNumber": 1788
              },
              {
                "id": "verse-1789",
                "text": "ZeiterträumtenundformuliertenAppellzuMenschlichkeit.",
                "lineNumber": 1789
              },
              {
                "id": "verse-1790",
                "text": "NichtsanderesleistetdieseAufführungdreiStundenlang,vom",
                "lineNumber": 1790
              },
              {
                "id": "verse-1791",
                "text": "verstörendenBeginnmitderSchallplattenhörendenIphigeniebis",
                "lineNumber": 1791
              },
              {
                "id": "verse-1792",
                "text": "zum–ratlosen–Ende:ZwarschütteltderBarbaren-König(Branko 65",
                "lineNumber": 1792
              },
              {
                "id": "verse-1793",
                "text": "Samarovski)derjungenFrau,dieervomAltargerninsEhebettge-",
                "lineNumber": 1793
              },
              {
                "id": "verse-1794",
                "text": "führt hätte, mit beiden Händen die Rechte, wünscht auch, ohne",
                "lineNumber": 1794
              },
              {
                "id": "verse-1795",
                "text": "allzuvielKummerinderKehle›Lebtwohl!‹–aberPeymannwen-",
                "lineNumber": 1795
              },
              {
                "id": "verse-1796",
                "text": "det die kritische Haltung gegenüber der Mitwelt auch auf Goethe",
                "lineNumber": 1796
              },
              {
                "id": "verse-1797",
                "text": "an:Dasdarf’sdochnichtgewesensein,daßdieHumanitäts-Arien 70",
                "lineNumber": 1797
              },
              {
                "id": "verse-1798",
                "text": "gesungenwerdenvonzivilisiertenMenschen–aufKostendesBar-",
                "lineNumber": 1798
              },
              {
                "id": "verse-1799",
                "text": "baren,deralsgeprellterManneinsamzurückbleibt.«",
                "lineNumber": 1799
              },
              {
                "id": "verse-1800",
                "text": "ClausPeymanninszeniertGoethes»Iphigenie«[…].In:DIEZEITNr.48vom",
                "lineNumber": 1800
              },
              {
                "id": "verse-1801",
                "text": "Abb.5:KirstenDenealsIphigenieinderInszenierungvonClaus",
                "lineNumber": 1801
              },
              {
                "id": "verse-1802",
                "text": "Wäschenbeuren.–MitGenehmigungvonGundelKilian,Wäschenbeuren",
                "lineNumber": 1802
              },
              {
                "id": "verse-1803",
                "text": "Inhalt",
                "lineNumber": 1803
              },
              {
                "id": "verse-1804",
                "text": "IphigenieaufTauris 5",
                "lineNumber": 1804
              },
              {
                "id": "verse-1805",
                "text": "Anhang",
                "lineNumber": 1805
              },
              {
                "id": "verse-1806",
                "text": ". ZurTextgestalt 69",
                "lineNumber": 1806
              },
              {
                "id": "verse-1807",
                "text": ". Anmerkungen 70",
                "lineNumber": 1807
              },
              {
                "id": "verse-1808",
                "text": ". VonderUrfassungzurklassischenForm 78",
                "lineNumber": 1808
              },
              {
                "id": "verse-1809",
                "text": ".1 Überblick 78",
                "lineNumber": 1809
              },
              {
                "id": "verse-1810",
                "text": ".2 AusgewählteBriefeundTagebucheintragungenGoethes",
                "lineNumber": 1810
              },
              {
                "id": "verse-1811",
                "text": "zuIphigenieaufTauris 80",
                "lineNumber": 1811
              },
              {
                "id": "verse-1812",
                "text": ".3 Textvarianten 82",
                "lineNumber": 1812
              },
              {
                "id": "verse-1813",
                "text": ".4LiteraturwissenschaftlicheStellungnahmenzuForm",
                "lineNumber": 1813
              },
              {
                "id": "verse-1814",
                "text": "undSprache 83",
                "lineNumber": 1814
              },
              {
                "id": "verse-1815",
                "text": ".KunstauffassungderKlassik 87",
                "lineNumber": 1815
              },
              {
                "id": "verse-1816",
                "text": ".1 Überblick 87",
                "lineNumber": 1816
              },
              {
                "id": "verse-1817",
                "text": ".2KarlPhilippMoritz:VersucheinerVereinigung",
                "lineNumber": 1817
              },
              {
                "id": "verse-1818",
                "text": ".3FriedrichSchiller:BriefandenHerzogvonAugusten-",
                "lineNumber": 1818
              },
              {
                "id": "verse-1819",
                "text": ".4FriedrichSchiller:AnkündigungderZeitschrift",
                "lineNumber": 1819
              },
              {
                "id": "verse-1820",
                "text": ". Iphigenie–vomgriechischenzumdeutschenMythos 95",
                "lineNumber": 1820
              },
              {
                "id": "verse-1821",
                "text": ".1 Überblick 95",
                "lineNumber": 1821
              },
              {
                "id": "verse-1822",
                "text": ".2 StammbaumderTantalidenfamilie 97",
                "lineNumber": 1822
              },
              {
                "id": "verse-1823",
                "text": ".4Euripides:IphigeniebeidenTaurern 98",
                "lineNumber": 1823
              },
              {
                "id": "verse-1824",
                "text": ".DerGeistderAufklärung 104 117",
                "lineNumber": 1824
              },
              {
                "id": "verse-1825",
                "text": ".1 Überblick 104",
                "lineNumber": 1825
              },
              {
                "id": "verse-1826",
                "text": ".2WolfdietrichRasch:Goethes›IphigenieaufTauris‹als",
                "lineNumber": 1826
              },
              {
                "id": "verse-1827",
                "text": ". ThoasunddasBarbarische 109",
                "lineNumber": 1827
              },
              {
                "id": "verse-1828",
                "text": ".1 Überblick 109",
                "lineNumber": 1828
              },
              {
                "id": "verse-1829",
                "text": ".3 TheodorW.Adorno:»ZurKlassizitätvonGoethes",
                "lineNumber": 1829
              },
              {
                "id": "verse-1830",
                "text": ".4AlbertMeier:»JohannWolfgangGoethe.›Iphigenieauf",
                "lineNumber": 1830
              },
              {
                "id": "verse-1831",
                "text": ".TheaterinderKritik–RolfMichaelis:»DerschöneMutzur",
                "lineNumber": 1831
              }
            ],
            "act": 5,
            "scene": 6
          }
        ]
      }
    ]
  }
];
