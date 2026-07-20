// CD Business Group Ltd — 2026 Catalogue data (extracted from official catalogue)
// Categories: vip, chairs, tables, booths, tents, av, accessories, sanitation
const CD_CATEGORIES = [
  { key: "all", label: "All Products" },
  { key: "vip", label: "VIP & VVIP Seating" },
  { key: "chairs", label: "Chairs & Bar Stools" },
  { key: "tables", label: "Tables" },
  { key: "booths", label: "Booths & Panels" },
  { key: "tents", label: "Tents & Outdoor" },
  { key: "av", label: "AV & Technology" },
  { key: "accessories", label: "Accessories" },
  { key: "sanitation", label: "Sanitation" }
];

const CD_PRODUCTS = [
  {
    code: "CD001", name: "Foldable Consultation Counter", cat: "booths",
    desc: "Shell scheme counter made of aluminium frames and white laminated plywood. Available simple or lockable — ideal reception desk for exhibition stands.",
    size: "100L x 50W x 100H cm", colors: ["White"], stock: 100,
    imgs: ["cd001-counter.jpg", "cd001-counter-back.jpg"]
  },
  {
    code: "CD002", name: "Foldable Brochure Rack", cat: "booths",
    desc: "Folding literature stand in wood and steel. Sets up in seconds and keeps brochures and flyers presentable at your stand entrance.",
    size: "Foldable, floor standing", colors: ["Black"], stock: 100,
    imgs: ["cd002-brochure-rack.jpg"]
  },
  {
    code: "CD003", name: "Standard Chair — Type 1", cat: "chairs",
    desc: "White standard event chair with resin PP shell, cushioned seat and solid wood legs. A clean Scandinavian look for conferences and meetings.",
    size: "45 x 47 x H80 cm", colors: ["White"], stock: 300,
    imgs: ["cd003-chair-type1.jpg"]
  },
  {
    code: "CD004", name: "Stacking Chair — Type 2", cat: "chairs",
    desc: "PU upholstered stacking chair with comfortable seat cushion and strong chrome frame. Our workhorse seat for large conferences.",
    size: "40L x 32H x 46W", colors: ["Black"], stock: 1000,
    imgs: ["cd004-chair-type2.jpg"]
  },
  {
    code: "CD005", name: "Adjustable Bar Stool — Type 1", cat: "chairs",
    desc: "High quality gas-lift bar stool with glossy moulded seat and chrome trumpet base. Height adjustable for cocktail setups.",
    size: "D38 x SD44 x SH58–78 cm", colors: ["White", "Black"], stock: 60,
    imgs: ["cd005-bar-stool-t1-black.jpg", "cd005-bar-stool-t1-white.jpg"]
  },
  {
    code: "CD006", name: "Adjustable Bar Stool — Type 2", cat: "chairs",
    desc: "Quilted high-back PU bar stool with comfortable seat cushion, strong chrome leg and footrest. Adds a premium touch to bar tables.",
    size: "50L x 112H x 50W", colors: ["Black"], stock: 50,
    imgs: ["cd006-bar-stool-t2.jpg"]
  },
  {
    code: "CD007", name: "VIP Lounge Chair", cat: "vip",
    desc: "Adjustable height VIP tub chair in iron and PU leather on a polished chrome base. Swivels 360° — perfect for lounges and panel talks.",
    size: "55L x 45H x 50W", colors: ["White", "Black"], stock: 40,
    imgs: ["cd007-vip-chair.jpg"]
  },
  {
    code: "CD008", name: "VVIP Armchair — Leather", cat: "vip",
    desc: "Iconic swan-style VVIP armchair in PU leather with silver 4-star base. Height adjustable (44–58 cm) with full 360° swivel.",
    size: "47 x 70 x H61–82 cm", colors: ["White", "Black"], stock: 20,
    imgs: ["cd008-vvip-armchair-leather.jpg", "cd008-vvip-armchair-leather-black.jpg"]
  },
  {
    code: "CD009", name: "VVIP Armchair — Velvet", cat: "vip",
    desc: "Swan-style VVIP armchair upholstered in soft velvet with silver leg. The signature seat for head tables and VVIP lounges.",
    size: "47 x 70 x H61–82 cm", colors: ["Cream", "Black"], stock: 20,
    imgs: ["cd009-vvip-armchair-velvet.jpg", "cd009-vvip-armchair-velvet-black.jpg"]
  },
  {
    code: "CD010", name: "VVIP Conference Chair", cat: "vip",
    desc: "VVIP visitor chair in iron and PU leather with silver cantilever frame. Executive comfort for boardrooms and delegations.",
    size: "50L x 98H x 60W", colors: ["Black"], stock: 50,
    imgs: ["cd010-vvip-chair.jpg"]
  },
  {
    code: "CD011", name: "Middle Back Chair", cat: "chairs",
    desc: "PU middle-back visitor chair with comfortable cushion, fixed armrests and strong chrome cantilever leg.",
    size: "55L x 96H x 60W", colors: ["Black"], stock: 50,
    imgs: ["cd011-middle-back-chair.jpg"]
  },
  {
    code: "CD012", name: "Executive Office Seat", cat: "vip",
    desc: "Artificial leather executive seat with high rebound sponge, tilt function, three-level gas pole and polished wood-accent legs.",
    size: "65L x 125H x 70W", colors: ["Black/Wood"], stock: 2,
    imgs: ["cd012-executive-seat.jpg"]
  },
  {
    code: "CD013", name: "Trade Show Chair", cat: "chairs",
    desc: "Curved PU trade show stool with chrome gas-lift base. Adjustable height 61–81 cm for demo counters and stands.",
    size: "Base D38.5 cm, H61–81 cm", colors: ["Black", "White"], stock: 20,
    imgs: ["cd013-trade-show-chair.jpg"]
  },
  {
    code: "CD014", name: "Trade Show Table", cat: "tables",
    desc: "Adjustable-height trade show table with ABS top and iron leg. Twist to raise from café height to cocktail height.",
    size: "D60 x H68–92 cm", colors: ["Black", "White"], stock: 10,
    imgs: ["cd014-trade-show-table.jpg"]
  },
  {
    code: "CD015", name: "Wooden Bar Stool", cat: "chairs",
    desc: "Scandinavian-style bar stool with moulded resin seat and solid wood legs. Seat height 75 cm.",
    size: "Seat H75 cm", colors: ["Grey", "Black"], stock: 30,
    imgs: ["cd015-bar-stool-wood.jpg"]
  },
  {
    code: "CD016", name: "Cosmo Bar Stool", cat: "chairs",
    desc: "Minimalist monocoloured bar stool with cushioned seat. Subtle charm that fits a range of counter tops.",
    size: "40L x 92H x 41W", colors: ["Black", "Green"], stock: 20,
    imgs: ["cd016-cosmo-bar-stool.jpg"]
  },
  {
    code: "CD017", name: "Stolica Velvet Armchair", cat: "vip",
    desc: "Velvet tub armchair with high density foam on black iron legs. A soft statement piece for lounges and interviews.",
    size: "Standard adult", colors: ["Velvet (as pictured)"], stock: 20,
    imgs: ["cd017-stolica.jpg"]
  },
  {
    code: "CD018", name: "High Bar Chair", cat: "chairs",
    desc: "Fan-back polypropylene high bar chair. Light, stackable and weather friendly — great for outdoor cocktail setups.",
    size: "44.5 x 49 x H106 cm (seat 75 cm)", colors: ["White", "Black"], stock: 60,
    imgs: ["cd018-high-bar-chair.jpg"]
  },
  {
    code: "CD019", name: "Rectangular Folding Table", cat: "tables",
    desc: "HDPE folding banquet table on steel frame, folds in half with carry handle. Spandex and stretch covers available.",
    size: "180 x 74 x H74 cm", colors: ["White (covers available)"], stock: 50,
    imgs: ["cd019-rectangular-table.jpg"]
  },
  {
    code: "CD019-H", name: "High Cocktail Table", cat: "tables",
    desc: "Folding cocktail (poseur) table with black or white stretch covers. The standard for receptions and networking areas.",
    size: "D80 x H110 cm approx.", colors: ["White cover", "Black cover"], stock: 50,
    imgs: ["cd019-high-cocktail-table.jpg", "cd019-cocktail-white.jpg"]
  },
  {
    code: "CD019-R", name: "Round Banquet Table", cat: "tables",
    desc: "Folding round banquet table seating 8–10 guests, with premium table cloths available in multiple colours.",
    size: "D152 cm approx.", colors: ["White (cloths available)"], stock: 50,
    imgs: ["cd019-round-table.jpg"]
  },
  {
    code: "CD020", name: "VVIP Glass Side Table", cat: "tables",
    desc: "Sculptural teardrop side table with clear glass top. A signature piece beside VVIP armchairs.",
    size: "D45 x H52 cm", colors: ["Black", "White"], stock: 20,
    imgs: ["cd020-vvip-glass-table.jpg", "cd020-vvip-glass-table-white.jpg"]
  },
  {
    code: "CD021-S", name: "VVIP Iron Side Table", cat: "tables",
    desc: "Hourglass iron side table with printed marble-effect top and gold accent ring.",
    size: "Side table height", colors: ["Dark wood/Gold"], stock: 10,
    imgs: ["cd021-iron-side-table.jpg"]
  },
  {
    code: "CD021", name: "Ardell Coffee Table", cat: "tables",
    desc: "Ardell pedestal coffee table with marble-effect top and gold collar on a white cone base.",
    size: "Coffee table height", colors: ["White/Gold"], stock: 10,
    imgs: ["cd021-ardell-coffee-table.jpg"]
  },
  {
    code: "CD022", name: "Glass Coffee Table", cat: "tables",
    desc: "Clear glass coffee table with polished chrome trumpet base.",
    size: "H50 x W60 cm", colors: ["Clear/Silver"], stock: 10,
    imgs: ["cd022-glass-coffee-table.jpg"]
  },
  {
    code: "CD023", name: "Glass High Table", cat: "tables",
    desc: "Clear glass high table with chrome pillar and trumpet base — pairs with bar stools for standing meetings.",
    size: "H70 x W60 cm", colors: ["Clear/Silver"], stock: 10,
    imgs: ["cd023-glass-high-table.jpg"]
  },
  {
    code: "CD024", name: "Milky High Table", cat: "tables",
    desc: "Tulip-style high cocktail table with MDF top and iron pedestal leg.",
    size: "D60 x H105 cm", colors: ["Black", "White"], stock: 30,
    imgs: ["cd024-milky-high-table.jpg", "cd024-milky-high-table-black.jpg"]
  },
  {
    code: "CD025", name: "Milky Small Table", cat: "tables",
    desc: "Tulip-style café table with iron leg and wood top. Seats 2–4 for bistro corners.",
    size: "D60 x H73 cm", colors: ["Black", "White"], stock: 10,
    imgs: ["cd025-milky-small-table.jpg"]
  },
  {
    code: "CD026", name: "White Glass Table", cat: "tables",
    desc: "Round white glass table on chrome trumpet base — bright, clean surface for reception areas.",
    size: "D50 x H50 cm", colors: ["White/Silver"], stock: 30,
    imgs: ["cd026-glass-table-white.jpg"]
  },
  {
    code: "CD027", name: "White Adjustable Height Table", cat: "tables",
    desc: "Gas-lift adjustable table in white with chrome base. Converts from café to cocktail height in seconds.",
    size: "D60 x H90–110 cm", colors: ["White"], stock: 50,
    imgs: ["cd027-adjustable-table.jpg"]
  },
  {
    code: "CD028", name: "Shell Scheme Panels", cat: "booths",
    desc: "Professional aluminium shell scheme wall panels for branded booths, space division and event floor layouts.",
    size: "H2.4m x W1m per panel", colors: ["White/Aluminium"], stock: 1000,
    imgs: ["cd028-shell-panels.jpg", "cd028-shell-panels-render.jpg"]
  },
  {
    code: "CD029", name: "Shell Scheme Exhibition Booth", cat: "booths",
    desc: "Complete branded exhibition booths: fascia name board, walls, lights, carpet, reception desk, brochure rack, meeting set and dustbin. Sizes: 2x2m, 2x3m, 2x4m, 3x3m, 3x4m, 3x6m and 9x9m. Booth price covers 3 days.",
    size: "2x2m up to 9x9m", colors: ["White panels, blue carpet"], stock: 100,
    imgs: ["cd029-booth-photo.jpg", "cd029-booth-render.jpg"],
    note: "Booth cost covers 3 days"
  },
  {
    code: "CD030", name: "Smart TV (43″ / 50″)", cat: "av",
    desc: "Smart TVs for presentations, digital signage and booth displays. Supplied with mobile stand placement.",
    size: "43″ and 50″", colors: ["Black"], stock: 15,
    imgs: ["cd030-smart-tv.jpg"]
  },
  {
    code: "CD031", name: "Mobile TV Stand", cat: "av",
    desc: "Rolling TV stand with shelf, height ~162 cm. Holds large screens securely at eye level.",
    size: "H162 cm, base 70 x 43 cm", colors: ["Black"], stock: 15,
    imgs: ["cd031-tv-stand.jpg"]
  },
  {
    code: "CD032", name: "Power Extension", cat: "av",
    desc: "Multi-socket power extension lead for booth and stage power distribution.",
    size: "Multi-socket", colors: ["White"], stock: 30,
    imgs: ["cd032-power-extension.jpg"]
  },
  {
    code: "CD033", name: "HDMI Cable", cat: "av",
    desc: "High-speed HDMI cable for connecting laptops to screens and projectors.",
    size: "Standard lengths", colors: ["Black"], stock: 30,
    imgs: ["cd033-hdmi-cable.jpg"]
  },
  {
    code: "CD034", name: "Laptop", cat: "av",
    desc: "Business laptops for registration desks, presentations and secretariat support.",
    size: "15″ class", colors: ["Black"], stock: 10,
    imgs: ["cd034-laptop.jpg"]
  },
  {
    code: "CD035", name: "Stage Lights", cat: "av",
    desc: "LED par stage lights — RGB and warm white — for stages, booths and evening events. Indoor and outdoor rated units.",
    size: "LED par cans", colors: ["RGB"], stock: 50,
    imgs: ["cd035-stage-lights.jpg"]
  },
  {
    code: "CD036", name: "Pagoda Aluminium Tent 3x3m", cat: "tents",
    desc: "Pagoda tent with 63x63mm extruded aluminium frame (6061/T6), heavy duty 850g/sqm white PVC roof and sides — blockout, waterproof, fireproof (DIN4012 B1, M2), UV resistant.",
    size: "3m x 3m", colors: ["White"], stock: 4,
    imgs: ["cd036-pagoda-3x3.jpg"]
  },
  {
    code: "CD037", name: "Pagoda Aluminium Tent 6x6m", cat: "tents",
    desc: "Pagoda tent with 65x65mm aluminium frame, 850gsm white PVC roof, 650g/sqm sides, 2.5m side height. Waterproof, fireproof and UV resistant.",
    size: "6m x 6m, side H2.5m, apex 5.86m", colors: ["White"], stock: 4,
    imgs: ["cd037-pagoda-6x6.jpg"]
  },
  {
    code: "CD038", name: "Pagoda Aluminium Tent 10x10m", cat: "tents",
    desc: "Large pagoda tent with 122x68mm aluminium frame and heavy duty 850g/sqm white PVC fabric. Fixed with expansion bolts on concrete; 2.5m bay distance.",
    size: "10m x 10m, side H2.5m", colors: ["White"], stock: 5,
    imgs: ["cd038-pagoda-10x10.jpg"]
  },
  {
    code: "CD039", name: "Pagoda Tent 10x10m — Transparent", cat: "tents",
    desc: "Statement 10x10m pagoda with 950gsm transparent PVC roof cover. Daylight ambience with the same aluminium frame strength.",
    size: "10m x 10m", colors: ["Transparent"], stock: 2,
    imgs: ["cd039-pagoda-transparent.jpg"]
  },
  {
    code: "CD040", name: "Stretch Tent", cat: "tents",
    desc: "Free-form stretch tent in iron and fabric for garden parties, receptions and open-air lounges.",
    size: "L900 x W500 x H280 cm (10x10m coverage)", colors: ["Beige/White"], stock: 2,
    imgs: ["cd040-stretch-tent.jpg", "hero-stretch-tent.jpg"]
  },
  {
    code: "CD041", name: "Stanchions & Velvet Rope", cat: "accessories",
    desc: "Gold stanchion posts with red velvet ropes for red carpets, queues and VIP zoning.",
    size: "Standard post height", colors: ["Gold/Red"], stock: 50,
    imgs: ["cd041-stanchions.jpg"]
  },
  {
    code: "CD042", name: "Artificial Grass Carpet", cat: "accessories",
    desc: "Artificial grass carpet rolls — 25mm pile, PP+PE, density 16800, net+SBR backing. Green, white and red available.",
    size: "4m x 25m rolls", colors: ["Green", "White", "Red"], stock: 17,
    imgs: ["cd042-carpet-grey.jpg", "cd042-carpet-red.jpg"]
  },
  {
    code: "CD043", name: "VVIP Portable Washroom", cat: "sanitation",
    desc: "Clean VVIP portable washroom units with flush toilet, ventilation and lockable door. Delivered and serviced for outdoor events.",
    size: "Single cabin units", colors: ["Red", "Blue", "Grey"], stock: 20,
    imgs: ["cd043-washroom-units.jpg", "cd043-washroom-open.jpg"]
  }
];
