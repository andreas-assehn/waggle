// Sample location responses:

// search via postcode
const sample1 = {
  result_type: "postcode",
  suburb: "London Borough of Harrow",
  *city: "London",
  *county: "Greater London",
  *state: "England",
  *postcode: "HA3 9JS",
  *country: "United Kingdom",
  *country_code: "gb",
  datasource:,
  sourcename: "openstreetmap",
  attribution: "© OpenStreetMap contributors",
  license: "Open Database License",
  url: "https://www.openstreetmap.org/copyright",
  *lon: -0.298049444,
  *lat: 51.589386044,
  parent_as_place_id: true,
  *formatted: "London, HA3 9JS, United Kingdom",
  *address_line1: "London",
  *address_line2: "HA3 9JS, United Kingdom",
  rank:,
  confidence: 1,
  confidence_city_level: 1,
  match_type: "full_match",
  place_id: "51fe8aa4f93d13d3bf5973d97b0071cb4940f00101f9012cc4020000000000c00207",
  }

// Search via street name
const sample2 = {
datasource: {
sourcename: "openstreetmap",
attribution: "© OpenStreetMap contributors",
license: "Open Database License",
url: "https://www.openstreetmap.org/copyright"},
name: "Avon Close",
*street: "Avon Close",
*city: "Garston",
*county: "Hertfordshire",
*state: "England",
*postcode: "WD25 0DN",
*country: "United Kingdom",
*country_code: "gb",
*lon: -0.3915597,
*lat: 51.6881496,
*state_code: "ENG",
*formatted: "Avon Close, Garston, WD25 0DN, United Kingdom",
*address_line1: "Avon Close",
*address_line2: "Garston, WD25 0DN, United Kingdom",
county_code: "HRT",
result_type: "street",
rank: {
importance: 0.5,
confidence: 0,
confidence_city_level: 0,
confidence_street_level: 0,
match_type: "match_by_street"},
place_id: "51dd9e7b6a500fd9bf59b4603d4915d84940f00102f9015b795e0000000000c0020492030a41766f6e20436c6f7365",
}

