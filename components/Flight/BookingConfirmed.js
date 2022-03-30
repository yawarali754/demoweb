import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { CircularProgress } from '@material-ui/core'
import Moment from 'moment'
import { changePassengerCode } from '../../public/js/utils'
import { saveBookingAction } from '../../redux/actions/flightActions'

const BookingConfirmed = () => {
  const router = useRouter()
  const dispatch = useDispatch()

  const flightData = useSelector((state) => state.flightData)
  const userLogin = useSelector((state) => state.userLogin)
  const { loading } = flightData
  const flightSearchData = flightData?.validation?.OTA_AirLowFareSearchRQ

  const airlines = require('iata-airlines/active_airlines.json')
  const airports = require('iata-airports/active_airports.json')
  const codeToCity = (code) => {
    let items = airports.filter((item) => item.fs === code)
    return `${items[0].fs} - ${items[0].city} Airport`
  }
  const codeToFlight = (code) => {
    let items = airlines.filter((item) => item.fs === code)
    return ` ${items[0].name}`
  }
  useEffect(() => {
    const saveBooking = {
      user_email: userLogin?.Email,
      booking_name: {
        ApplicationResults: {
          status: 'Complete',
          Success: [
            {
              timeStamp: '2019-12-12T08:48:30.243-06:00',
            },
          ],
          Warning: [
            {
              type: 'BusinessLogic',
              timeStamp: '2019-12-12T08:48:27.500-06:00',
              SystemSpecificResults: [
                {
                  Message: [
                    {
                      code: 'WARN.SWS.HOST.WARNING_RESPONSE',
                      content:
                        'OTA_VehResLLSRQ: A MINIMUM OF 8 DAYS WILL BE CHARGED',
                    },
                    {
                      content: 'EXTRA DAY RATE APPLIES AFTER 7 DAYS',
                    },
                    {
                      content: 'KIOSK SERVICE AVAILABLE',
                    },
                    {
                      content: 'NISSAN NOTE OR SIMILAR',
                    },
                    {
                      content: 'NATIONAL COUNTER SERVICE CONFIRMED',
                    },
                    {
                      content: 'GREEN MEANS GO. THANK YOU FOR SHOPPING ZL',
                    },
                  ],
                },
              ],
            },
            {
              type: 'BusinessLogic',
              timeStamp: '2019-12-12T08:48:28.091-06:00',
              SystemSpecificResults: [
                {
                  Message: [
                    {
                      code: 'WARN.SWS.HOST.ERROR_IN_RESPONSE',
                      content: 'NO ARNK INSERTED',
                    },
                  ],
                },
              ],
            },
            {
              type: 'BusinessLogic',
              timeStamp: '2019-12-12T08:48:28.580-06:00',
              SystemSpecificResults: [
                {
                  Message: [
                    {
                      code: 'WARN.SWS.HOST.ERROR_IN_RESPONSE',
                      content:
                        'EndTransactionLLSRQ: BSG NOT ALLOWED GROUP PLANNER ACTIVE - USE CORPORATE NAME FIELD',
                    },
                  ],
                },
              ],
            },
          ],
        },
        ItineraryRef: {
          ID: 'DAVRGS',
        },
        AirBook: {
          OriginDestinationOption: {
            FlightSegment: [
              {
                ArrivalDateTime: '03-09T15:11',
                DepartureDateTime: '03-09T10:27',
                eTicket: true,
                FlightNumber: '2923',
                NumberInParty: '001',
                ResBookDesigCode: 'Y',
                Status: 'SS',
                DestinationLocation: {
                  LocationCode: 'LHE',
                },
                MarketingAirline: {
                  Code: 'AA',
                  FlightNumber: '2923',
                },
                OriginLocation: {
                  LocationCode: 'LAS',
                },
              },
            ],
          },
        },
        AirPrice: [
          {
            PriceQuote: {
              MiscInformation: {
                BaggageInfo: {
                  SubCodeProperties: [
                    {
                      SolutionSequenceNmbr: 1,
                      RPH: 1,
                      AncillaryFeeGroupCode: 'BG',
                      AncillaryService: {
                        SubGroupCode: 'CY',
                        Text: 'CARRY ON HAND BAGGAGE',
                      },
                      CommercialNameofBaggageItemType: 'CARRYON HAND BAGGAGE',
                      EMD_Type: '4',
                      ExtendedSubCodeKey: '0LNABAA',
                      RFIC: 'C',
                    },
                    {
                      SolutionSequenceNmbr: 1,
                      RPH: 2,
                      AncillaryFeeGroupCode: 'BG',
                      AncillaryService: {
                        SubGroupCode: 'CY',
                        Text: 'CARRY ON HAND BAGGAGE',
                      },
                      CommercialNameofBaggageItemType:
                        'CARRY ON UP TO 40 LI 101 LCM',
                      DescriptionOne: {
                        Code: '4S',
                        Text: 'UP TO 40 LINEAR INCHES/101 LINEAR CENTIMETERS',
                      },
                      EMD_Type: '4',
                      ExtendedSubCodeKey: '0MMACAA',
                      RFIC: 'C',
                      SizeWeightInfo: {
                        MaximumSizeInAlternate: {
                          Units: 'C',
                          content: '101',
                        },
                        MaximumSize: {
                          Units: 'I',
                          content: '40',
                        },
                      },
                    },
                    {
                      SolutionSequenceNmbr: 1,
                      RPH: 3,
                      AncillaryFeeGroupCode: 'BG',
                      AncillaryService: {
                        SubGroupCode: 'CY',
                        Text: 'CARRY ON HAND BAGGAGE',
                      },
                      CommercialNameofBaggageItemType:
                        'CARRY ON UP TO 45 LI 115 LCM',
                      DescriptionOne: {
                        Code: '4U',
                        Text: 'UP TO 45 LINEAR INCHES/115 LINEAR CENTIMETERS',
                      },
                      EMD_Type: '4',
                      ExtendedSubCodeKey: '0MUACAA',
                      RFIC: 'C',
                      SizeWeightInfo: {
                        MaximumSizeInAlternate: {
                          Units: 'C',
                          content: '115',
                        },
                        MaximumSize: {
                          Units: 'I',
                          content: '45',
                        },
                      },
                    },
                    {
                      SolutionSequenceNmbr: 1,
                      RPH: 4,
                      AncillaryFeeGroupCode: 'BG',
                      CommercialNameofBaggageItemType:
                        'UPTO50LB 23KG AND62LI 158LCM',
                      DescriptionOne: {
                        Code: '23',
                        Text: 'UP TO 50 POUNDS/23 KILOGRAMS',
                      },
                      DescriptionTwo: {
                        Code: '6U',
                        Text: 'UP TO 62 LINEAR INCHES/158 LINEAR CENTIMETERS',
                      },
                      EMD_Type: '4',
                      ExtendedSubCodeKey: '0GOACAA',
                      RFIC: 'C',
                      SizeWeightInfo: {
                        MaximumSizeInAlternate: {
                          Units: 'C',
                          content: '158',
                        },
                        MaximumSize: {
                          Units: 'I',
                          content: '62',
                        },
                        MaximumWeightInAlternate: {
                          Units: 'K',
                          content: '23',
                        },
                        MaximumWeight: {
                          Units: 'L',
                          content: '50',
                        },
                      },
                    },
                    {
                      SolutionSequenceNmbr: 1,
                      RPH: 5,
                      AncillaryFeeGroupCode: 'BG',
                      CommercialNameofBaggageItemType: 'OVER100LB 45KG BAGGAGE',
                      DescriptionOne: {
                        Code: '1X',
                        Text: 'OVER 100 POUNDS/45 KILOGRAMS',
                      },
                      EMD_Type: '4',
                      ExtendedSubCodeKey: '0DQAEAA',
                      SizeWeightInfo: {
                        MinimumWeightInAlternate: {
                          Units: 'L',
                          content: '45',
                        },
                        MinimumWeight: {
                          Units: 'L',
                          content: '100',
                        },
                      },
                    },
                    {
                      SolutionSequenceNmbr: 1,
                      RPH: 6,
                      AncillaryFeeGroupCode: 'BG',
                      CommercialNameofBaggageItemType: 'ALLOWANCE',
                      EMD_Type: '4',
                      ExtendedSubCodeKey: '0DFAAAA',
                      RFIC: 'C',
                    },
                  ],
                },
                HeaderInformation: [
                  {
                    SolutionSequenceNmbr: '1',
                    DepartureDate: '2020-03-09',
                    LastTicketingDate: '12-13T23:59',
                    Text: [
                      'VALIDATING CARRIER - AA',
                      'BAG ALLOWANCE     -LASDFW-NIL/AA',
                      '1STCHECKED BAG FEE-LASDFW-USD30.00/AA/UP TO 50 POUNDS/23 KILOGR',
                      'AMS AND UP TO 62 LINEAR INCHES/158 LINEAR CENTIMETERS**',
                      '2NDCHECKED BAG FEE-LASDFW-USD40.00/AA/UP TO 50 POUNDS/23 KILOGR',
                      'AMS AND UP TO 62 LINEAR INCHES/158 LINEAR CENTIMETERS**',
                      '**BAG FEES APPLY AT EACH CHECK IN LOCATION',
                      'CARRY ON ALLOWANCE',
                      'LASDFW-02P/AA',
                      '01/UP TO 40 LINEAR INCHES/101 LINEAR CENTIMETERS',
                      '01/UP TO 45 LINEAR INCHES/115 LINEAR CENTIMETERS',
                      'ADDITIONAL ALLOWANCES AND/OR DISCOUNTS MAY APPLY DEPENDING ON',
                      'FLYER-SPECIFIC FACTORS /E.G. FREQUENT FLYER STATUS/MILITARY/',
                      'CREDIT CARD FORM OF PAYMENT/EARLY PURCHASE OVER INTERNET,ETC./',
                      'EMBARGOES-APPLY TO EACH PASSENGER',
                      'LASDFW-AA',
                      'OVER 100 POUNDS/45 KILOGRAMS NOT PERMITTED',
                      '09MAR DEPARTURE DATE-----LAST DAY TO PURCHASE 13DEC/2359',
                    ],
                    ValidatingCarrier: {
                      Code: 'AA',
                    },
                  },
                ],
                SolutionInformation: [
                  {
                    SolutionSequenceNmbr: '1',
                    BaseFareCurrencyCode: 'USD',
                    CurrencyCode: 'USD',
                    GrandTotalEquivFareAmount: '867.91',
                    GrandTotalTaxes: '79.39',
                    RequiresRebook: 'false',
                    TicketNumber: '0',
                    TotalAmount: '947.30',
                  },
                ],
                ValidatingCarrier: [
                  {
                    NewValidatingProcess: true,
                    SolutionSequenceNmbr: '1',
                    SettlementMethod: 'ARC',
                    Ticket: [
                      {
                        Type: 'ETKTPREF',
                        CarrierCode: 'AA',
                        ValidatingCarrierType: 'Default',
                      },
                    ],
                  },
                ],
              },
              PricedItinerary: {
                AlternativePricing: 'false',
                CurrencyCode: 'USD',
                MultiTicket: false,
                TotalAmount: '947.30',
                AirItineraryPricingInfo: [
                  {
                    SolutionSequenceNmbr: '1',
                    BaggageProvisions: [
                      {
                        RPH: '1',
                        Associations: {
                          CarrierCode: [
                            {
                              RPH: 1,
                              content: 'AA',
                            },
                          ],
                          CountForSegmentAssociatedID: '1',
                          DepartureDate: [
                            {
                              RPH: 1,
                              content: '2020-03-09',
                            },
                          ],
                          DestinationLocation: [
                            {
                              LocationCode: 'DFW',
                              RPH: 1,
                            },
                          ],
                          FlightNumber: [
                            {
                              RPH: 1,
                              content: '2923',
                            },
                          ],
                          OriginLocation: [
                            {
                              LocationCode: 'LAS',
                              RPH: 1,
                            },
                          ],
                          PNR_Segment: [
                            {
                              RPH: 1,
                              content: '2',
                            },
                          ],
                          ResBookDesigCode: [
                            {
                              RPH: 1,
                              content: 'Y',
                            },
                          ],
                          StatusCode: [
                            {
                              RPH: 1,
                              content: 'SS',
                            },
                          ],
                        },
                        CarrierWhoseBaggageProvisionsApply: 'AA',
                        NumPiecesBDI: '0',
                        ProvisionType: 'A',
                        SubCodeInfo: {
                          SubCodeForChargesOthers: '0DFAAAA',
                        },
                      },
                      {
                        RPH: '2',
                        Associations: {
                          CarrierCode: [
                            {
                              RPH: 1,
                              content: 'AA',
                            },
                          ],
                          CountForSegmentAssociatedID: '1',
                          DepartureDate: [
                            {
                              RPH: 1,
                              content: '2020-03-09',
                            },
                          ],
                          DestinationLocation: [
                            {
                              LocationCode: 'DFW',
                              RPH: 1,
                            },
                          ],
                          FlightNumber: [
                            {
                              RPH: 1,
                              content: '2923',
                            },
                          ],
                          OriginLocation: [
                            {
                              LocationCode: 'LAS',
                              RPH: 1,
                            },
                          ],
                          PNR_Segment: [
                            {
                              RPH: 1,
                              content: '2',
                            },
                          ],
                          ResBookDesigCode: [
                            {
                              RPH: 1,
                              content: 'Y',
                            },
                          ],
                          StatusCode: [
                            {
                              RPH: 1,
                              content: 'SS',
                            },
                          ],
                        },
                        CarrierWhoseBaggageProvisionsApply: 'AA',
                        Commissionable: 'N',
                        FeeApplicationIndicator: '3',
                        FeeNotGuaranteedIndicator: 'N',
                        FirstOccurrence: '1',
                        Interlineable: 'Y',
                        LastOccurrence: '1',
                        PassengerType: {
                          Code: 'ADT',
                        },
                        PriceInformation: {
                          Base: {
                            Amount: '30.00',
                            CurrencyCode: 'USD',
                          },
                          Equiv: {
                            Amount: '30.00',
                            CurrencyCode: 'USD',
                          },
                          Total: '30.00',
                        },
                        ProvisionType: 'C',
                        RefundReissue: 'R',
                        SubCodeInfo: {
                          SubCodeForChargesOthers: '0GOACAA',
                        },
                      },
                      {
                        RPH: '3',
                        Associations: {
                          CarrierCode: [
                            {
                              RPH: 1,
                              content: 'AA',
                            },
                          ],
                          CountForSegmentAssociatedID: '1',
                          DepartureDate: [
                            {
                              RPH: 1,
                              content: '2020-03-09',
                            },
                          ],
                          DestinationLocation: [
                            {
                              LocationCode: 'DFW',
                              RPH: 1,
                            },
                          ],
                          FlightNumber: [
                            {
                              RPH: 1,
                              content: '2923',
                            },
                          ],
                          OriginLocation: [
                            {
                              LocationCode: 'LAS',
                              RPH: 1,
                            },
                          ],
                          PNR_Segment: [
                            {
                              RPH: 1,
                              content: '2',
                            },
                          ],
                          ResBookDesigCode: [
                            {
                              RPH: 1,
                              content: 'Y',
                            },
                          ],
                          StatusCode: [
                            {
                              RPH: 1,
                              content: 'SS',
                            },
                          ],
                        },
                        CarrierWhoseBaggageProvisionsApply: 'AA',
                        Commissionable: 'N',
                        FeeApplicationIndicator: '3',
                        FeeNotGuaranteedIndicator: 'N',
                        FirstOccurrence: '2',
                        Interlineable: 'Y',
                        LastOccurrence: '2',
                        PassengerType: {
                          Code: 'ADT',
                        },
                        PriceInformation: {
                          Base: {
                            Amount: '40.00',
                            CurrencyCode: 'USD',
                          },
                          Equiv: {
                            Amount: '40.00',
                            CurrencyCode: 'USD',
                          },
                          Total: '40.00',
                        },
                        ProvisionType: 'C',
                        RefundReissue: 'R',
                        SubCodeInfo: {
                          SubCodeForChargesOthers: '0GOACAA',
                        },
                      },
                      {
                        RPH: '4',
                        Associations: {
                          CarrierCode: [
                            {
                              RPH: 1,
                              content: 'AA',
                            },
                          ],
                          CountForSegmentAssociatedID: '1',
                          DepartureDate: [
                            {
                              RPH: 1,
                              content: '2020-03-09',
                            },
                          ],
                          DestinationLocation: [
                            {
                              LocationCode: 'DFW',
                              RPH: 1,
                            },
                          ],
                          FlightNumber: [
                            {
                              RPH: 1,
                              content: '2923',
                            },
                          ],
                          OriginLocation: [
                            {
                              LocationCode: 'LAS',
                              RPH: 1,
                            },
                          ],
                          PNR_Segment: [
                            {
                              RPH: 1,
                              content: '2',
                            },
                          ],
                          ResBookDesigCode: [
                            {
                              RPH: 1,
                              content: 'Y',
                            },
                          ],
                          StatusCode: [
                            {
                              RPH: 1,
                              content: 'SS',
                            },
                          ],
                        },
                        CarrierWhoseBaggageProvisionsApply: 'AA',
                        NumPiecesBDI: '2',
                        NumPiecesITR: ['1', '1'],
                        ProvisionType: 'B',
                        SubCodeInfo: {
                          SubCodeForAllowance: [
                            {
                              RPH: 1,
                              content: '0MMACAA',
                            },
                            {
                              RPH: 2,
                              content: '0MUACAA',
                            },
                          ],
                          SubCodeForChargesOthers: '0LNABAA',
                        },
                      },
                      {
                        RPH: '5',
                        Associations: {
                          CarrierCode: [
                            {
                              RPH: 1,
                              content: 'AA',
                            },
                          ],
                          CountForSegmentAssociatedID: '1',
                          DepartureDate: [
                            {
                              RPH: 1,
                              content: '2020-03-09',
                            },
                          ],
                          DestinationLocation: [
                            {
                              LocationCode: 'DFW',
                              RPH: 1,
                            },
                          ],
                          FlightNumber: [
                            {
                              RPH: 1,
                              content: '2923',
                            },
                          ],
                          OriginLocation: [
                            {
                              LocationCode: 'LAS',
                              RPH: 1,
                            },
                          ],
                          PNR_Segment: [
                            {
                              RPH: 1,
                              content: '2',
                            },
                          ],
                          ResBookDesigCode: [
                            {
                              RPH: 1,
                              content: 'Y',
                            },
                          ],
                          StatusCode: [
                            {
                              RPH: 1,
                              content: 'SS',
                            },
                          ],
                        },
                        CarrierWhoseBaggageProvisionsApply: 'AA',
                        Commissionable: 'N',
                        FeeNotGuaranteedIndicator: 'Y',
                        NoChargeNotAvailableIndicator: 'X',
                        PassengerType: {
                          Code: 'ADT',
                        },
                        PriceInformation: {
                          Base: {
                            Amount: '0.00',
                          },
                          Equiv: {
                            CurrencyCode: 'USD',
                          },
                        },
                        ProvisionType: 'E',
                        SubCodeInfo: {
                          SubCodeForChargesOthers: '0DQAEAA',
                        },
                      },
                    ],
                    FareCalculation: {
                      Text: 'LAS AA DFW867.91USD867.91END ZPLAS XFLAS4.5',
                    },
                    FareCalculationBreakdown: [
                      {
                        Branch: {
                          PCC: 'G7HE',
                          FirstJointCarrier: 'AA',
                        },
                        Departure: {
                          CityCode: 'LAS',
                          AirportCode: 'LAS',
                          AirlineCode: 'AA',
                          GenericInd: 'O',
                          ArrivalCityCode: 'DFW',
                          ArrivalAirportCode: 'DFW',
                        },
                        FareBasis: {
                          Code: 'YA2AAN',
                          FareAmount: '867.91',
                          FarePassengerType: 'ADT',
                          FareType: 'P',
                          FilingCarrier: 'AA',
                          GlobalInd: 'WH',
                          TripTypeInd: 'O',
                          Market: 'LASDFW',
                          Cabin: 'Y',
                        },
                        FreeBaggageAllowance: 'NONIL',
                        RuleCategoryIndicator: [
                          '5',
                          '8',
                          '10',
                          '12',
                          '15',
                          '16',
                          '18',
                          '23',
                        ],
                      },
                    ],
                    ItinTotalFare: {
                      NonRefundableInd: 'N',
                      BaggageInfo: {
                        US_DOT_Disclosure: {
                          Text: [
                            'BAG ALLOWANCE     -LASDFW-NIL/AA',
                            '1STCHECKED BAG FEE-LASDFW-USD30.00/AA/UP TO 50 POUNDS/23 KILOGR',
                            'AMS AND UP TO 62 LINEAR INCHES/158 LINEAR CENTIMETERS**',
                            '2NDCHECKED BAG FEE-LASDFW-USD40.00/AA/UP TO 50 POUNDS/23 KILOGR',
                            'AMS AND UP TO 62 LINEAR INCHES/158 LINEAR CENTIMETERS**',
                            '**BAG FEES APPLY AT EACH CHECK IN LOCATION',
                            'CARRY ON ALLOWANCE',
                            'LASDFW-02P/AA',
                            '01/UP TO 40 LINEAR INCHES/101 LINEAR CENTIMETERS',
                            '01/UP TO 45 LINEAR INCHES/115 LINEAR CENTIMETERS',
                            'ADDITIONAL ALLOWANCES AND/OR DISCOUNTS MAY APPLY DEPENDING ON',
                            'FLYER-SPECIFIC FACTORS /E.G. FREQUENT FLYER STATUS/MILITARY/',
                            'CREDIT CARD FORM OF PAYMENT/EARLY PURCHASE OVER INTERNET,ETC./',
                            'EMBARGOES-APPLY TO EACH PASSENGER',
                            'LASDFW-AA',
                            'OVER 100 POUNDS/45 KILOGRAMS NOT PERMITTED',
                          ],
                        },
                      },
                      BaseFare: {
                        Amount: '867.91',
                        CurrencyCode: 'USD',
                      },
                      Construction: {
                        Amount: '867.91',
                        CurrencyCode: 'USD',
                        RateOfExchange: '1.000000',
                      },
                      Endorsements: {
                        Text: [
                          'NONREF/SVCCHGPLUSFAREDIF/CXL BY FLT TIME OR NOVALUE',
                        ],
                      },
                      Taxes: {
                        TotalAmount: '79.39',
                        Tax: [
                          {
                            Amount: '65.09',
                            TaxCode: 'US1',
                            TaxName: 'TRANSPORTATION TAX DOMESTIC WH',
                            TicketingTaxCode: 'US',
                          },
                          {
                            Amount: '4.20',
                            TaxCode: 'ZP',
                            TaxName: 'FLIGHT SEGMENT TAX DOMESTIC',
                            TicketingTaxCode: 'ZP',
                          },
                          {
                            Amount: '5.60',
                            TaxCode: 'AY',
                            TaxName: 'PASSENGER CIVIL AVIATION SECUR',
                            TicketingTaxCode: 'AY',
                          },
                          {
                            Amount: '4.50',
                            TaxCode: 'XF',
                            TaxName: 'PASSENGER FACILITY CHARGE',
                            TicketingTaxCode: 'XF',
                          },
                        ],
                      },
                      TotalFare: {
                        Amount: '947.30',
                        CurrencyCode: 'USD',
                      },
                      Warnings: {
                        Warning: [
                          {
                            ShortText: 'BAG ALLOWANCE     -LASDFW-NIL/AA',
                          },
                          {
                            ShortText:
                              '1STCHECKED BAG FEE-LASDFW-USD30.00/AA/UP TO 50 POUNDS/23 KILOGR',
                          },
                          {
                            ShortText:
                              'AMS AND UP TO 62 LINEAR INCHES/158 LINEAR CENTIMETERS**',
                          },
                          {
                            ShortText:
                              '2NDCHECKED BAG FEE-LASDFW-USD40.00/AA/UP TO 50 POUNDS/23 KILOGR',
                          },
                          {
                            ShortText:
                              'AMS AND UP TO 62 LINEAR INCHES/158 LINEAR CENTIMETERS**',
                          },
                          {
                            ShortText:
                              '**BAG FEES APPLY AT EACH CHECK IN LOCATION',
                          },
                          {
                            ShortText: 'CARRY ON ALLOWANCE',
                          },
                          {
                            ShortText: 'LASDFW-02P/AA',
                          },
                          {
                            ShortText:
                              '01/UP TO 40 LINEAR INCHES/101 LINEAR CENTIMETERS',
                          },
                          {
                            ShortText:
                              '01/UP TO 45 LINEAR INCHES/115 LINEAR CENTIMETERS',
                          },
                          {
                            ShortText:
                              'ADDITIONAL ALLOWANCES AND/OR DISCOUNTS MAY APPLY DEPENDING ON',
                          },
                          {
                            ShortText:
                              'FLYER-SPECIFIC FACTORS /E.G. FREQUENT FLYER STATUS/MILITARY/',
                          },
                          {
                            ShortText:
                              'CREDIT CARD FORM OF PAYMENT/EARLY PURCHASE OVER INTERNET,ETC./',
                          },
                          {
                            ShortText: 'EMBARGOES-APPLY TO EACH PASSENGER',
                          },
                          {
                            ShortText: 'LASDFW-AA',
                          },
                          {
                            ShortText:
                              'OVER 100 POUNDS/45 KILOGRAMS NOT PERMITTED',
                          },
                        ],
                      },
                    },
                    PassengerTypeQuantity: {
                      Code: 'ADT',
                      Quantity: '1',
                    },
                    PTC_FareBreakdown: [
                      {
                        Cabin: 'Y',
                        FareBasis: {
                          Code: 'YA2AAN',
                          FareAmount: '867.91',
                          FarePassengerType: 'ADT',
                          FareType: 'P',
                          FilingCarrier: 'AA',
                          GlobalInd: 'WH',
                          Market: 'LASDFW',
                        },
                        FreeBaggageAllowance: 'NONIL',
                      },
                    ],
                  },
                ],
              },
            },
          },
        ],
        TravelItineraryRead: {
          TravelItinerary: {
            CustomerInfo: {
              Address: {
                AddressLine: [
                  {
                    Id: '6',
                    type: 'O',
                    content: 'SABRE TRAVEL',
                  },
                  {
                    Id: '7',
                    type: 'O',
                    content: '3150 SABRE DRIVE',
                  },
                  {
                    Id: '8',
                    type: 'O',
                    content: 'SOUTHLAKE, TX US',
                  },
                  {
                    Id: '9',
                    type: 'O',
                    content: '76092',
                  },
                ],
              },
              ContactNumbers: {
                ContactNumber: [
                  {
                    LocationCode: 'DFW',
                    Phone: '202-555-0137-H-1.1',
                    RPH: '001',
                    Id: '5',
                  },
                ],
              },
              PaymentInfo: {
                Payment: {
                  Form: [
                    {
                      RPH: '001',
                      Id: '69',
                      Text: ['CHECK'],
                    },
                  ],
                },
              },
              PersonName: [
                {
                  WithInfant: 'false',
                  NameNumber: '01.01',
                  NameReference: 'ABC123',
                  PassengerType: 'ADT',
                  RPH: '1',
                  elementId: 'pnr-2.1',
                  GivenName: 'Nabeel',
                  Surname: 'Ahmed',
                },
              ],
            },
            ItineraryInfo: {
              ItineraryPricing: {
                PriceQuote: [
                  {
                    RPH: '1',
                    MiscInformation: {
                      BaggageFees: {
                        Text: [
                          'BAG ALLOWANCE     -LASDFW-NIL/AA',
                          '1STCHECKED BAG FEE-LASDFW-USD30.00/AA/UP TO 50 POUNDS/23 KILOGR',
                          'AMS AND UP TO 62 LINEAR INCHES/158 LINEAR CENTIMETERS**',
                          '2NDCHECKED BAG FEE-LASDFW-USD40.00/AA/UP TO 50 POUNDS/23 KILOGR',
                          'AMS AND UP TO 62 LINEAR INCHES/158 LINEAR CENTIMETERS**',
                          '**BAG FEES APPLY AT EACH CHECK IN LOCATION',
                          'CARRY ON ALLOWANCE',
                          'LASDFW-02P/AA',
                          '01/UP TO 40 LINEAR INCHES/101 LINEAR CENTIMETERS',
                          '01/UP TO 45 LINEAR INCHES/115 LINEAR CENTIMETERS',
                          'ADDITIONAL ALLOWANCES AND/OR DISCOUNTS MAY APPLY DEPENDING ON',
                          'FLYER-SPECIFIC FACTORS /E.G. FREQUENT FLYER STATUS/MILITARY/',
                          'CREDIT CARD FORM OF PAYMENT/EARLY PURCHASE OVER INTERNET,ETC./',
                          'EMBARGOES-APPLY TO EACH PASSENGER',
                          'LASDFW-AA',
                          'OVER 100 POUNDS/45 KILOGRAMS NOT PERMITTED',
                        ],
                      },
                      SignatureLine: [
                        {
                          ExpirationDateTime: '00:00',
                          Source: 'SYS',
                          Status: 'ACTIVE',
                          Text: 'G7HE G7HE*AWT 0848/12DEC19',
                        },
                      ],
                    },
                    PricedItinerary: [
                      {
                        DisplayOnly: false,
                        InputMessage: 'WPFCK¥P1ADT¥RQ',
                        RPH: '1',
                        StatusCode: 'A',
                        TaxExempt: false,
                        ValidatingCarrier: 'AA',
                        StoredDateTime: '2019-12-12T08:48',
                        AirItineraryPricingInfo: {
                          ItinTotalFare: [
                            {
                              BaseFare: {
                                Amount: '867.91',
                                CurrencyCode: 'USD',
                              },
                              Taxes: {
                                Tax: {
                                  Amount: '79.39',
                                  TaxCode: 'XT',
                                },
                                TaxBreakdownCode: [
                                  {
                                    TaxPaid: false,
                                    content: '65.09US',
                                  },
                                  {
                                    TaxPaid: false,
                                    content: '4.20ZP',
                                  },
                                  {
                                    TaxPaid: false,
                                    content: '5.60AY',
                                  },
                                  {
                                    TaxPaid: false,
                                    content: '4.50XF',
                                  },
                                ],
                              },
                              TotalFare: {
                                Amount: '947.30',
                                CurrencyCode: 'USD',
                              },
                              Totals: {
                                BaseFare: {
                                  Amount: '867.91',
                                },
                                Taxes: {
                                  Tax: {
                                    Amount: '79.39',
                                  },
                                },
                                TotalFare: {
                                  Amount: '947.30',
                                },
                              },
                            },
                          ],
                          PassengerTypeQuantity: [
                            {
                              Code: 'ADT',
                              Quantity: '01',
                            },
                          ],
                          PTC_FareBreakdown: [
                            {
                              Endorsements: {
                                Endorsement: [
                                  {
                                    type: 'PRICING_PARAMETER',
                                    Text: 'WPFCK$P1ADT$RQ',
                                  },
                                  {
                                    type: 'WARNING',
                                    Text: 'VALIDATING CARRIER - AA',
                                  },
                                  {
                                    type: 'SYSTEM_ENDORSEMENT',
                                    Text: 'NONREF/SVCCHGPLUSFAREDIF/CXL BY FLT TIME OR NOVALUE',
                                  },
                                  {
                                    type: 'DOT_BAGGAGE',
                                    Text: 'BAG ALLOWANCE     -LASDFW-NIL/AA',
                                  },
                                  {
                                    type: 'DOT_BAGGAGE',
                                    Text: '1STCHECKED BAG FEE-LASDFW-USD30.00/AA/UP TO 50 POUNDS/23 KILOGR',
                                  },
                                  {
                                    type: 'DOT_BAGGAGE',
                                    Text: 'AMS AND UP TO 62 LINEAR INCHES/158 LINEAR CENTIMETERS**',
                                  },
                                  {
                                    type: 'DOT_BAGGAGE',
                                    Text: '2NDCHECKED BAG FEE-LASDFW-USD40.00/AA/UP TO 50 POUNDS/23 KILOGR',
                                  },
                                  {
                                    type: 'DOT_BAGGAGE',
                                    Text: 'AMS AND UP TO 62 LINEAR INCHES/158 LINEAR CENTIMETERS**',
                                  },
                                  {
                                    type: 'DOT_BAGGAGE',
                                    Text: '**BAG FEES APPLY AT EACH CHECK IN LOCATION',
                                  },
                                  {
                                    type: 'DOT_BAGGAGE',
                                    Text: 'CARRY ON ALLOWANCE',
                                  },
                                  {
                                    type: 'DOT_BAGGAGE',
                                    Text: 'LASDFW-02P/AA',
                                  },
                                  {
                                    type: 'DOT_BAGGAGE',
                                    Text: '01/UP TO 40 LINEAR INCHES/101 LINEAR CENTIMETERS',
                                  },
                                  {
                                    type: 'DOT_BAGGAGE',
                                    Text: '01/UP TO 45 LINEAR INCHES/115 LINEAR CENTIMETERS',
                                  },
                                  {
                                    type: 'DOT_BAGGAGE',
                                    Text: 'ADDITIONAL ALLOWANCES AND/OR DISCOUNTS MAY APPLY DEPENDING ON',
                                  },
                                  {
                                    type: 'DOT_BAGGAGE',
                                    Text: 'FLYER-SPECIFIC FACTORS /E.G. FREQUENT FLYER STATUS/MILITARY/',
                                  },
                                  {
                                    type: 'DOT_BAGGAGE',
                                    Text: 'CREDIT CARD FORM OF PAYMENT/EARLY PURCHASE OVER INTERNET,ETC./',
                                  },
                                  {
                                    type: 'DOT_BAGGAGE',
                                    Text: 'EMBARGOES-APPLY TO EACH PASSENGER',
                                  },
                                  {
                                    type: 'DOT_BAGGAGE',
                                    Text: 'LASDFW-AA',
                                  },
                                  {
                                    type: 'DOT_BAGGAGE',
                                    Text: 'OVER 100 POUNDS/45 KILOGRAMS NOT PERMITTED',
                                  },
                                ],
                              },
                              FareBasis: [
                                {
                                  Code: 'YA2AAN',
                                },
                              ],
                              FareCalculation: {
                                Text: [
                                  'LAS AA DFW867.91USD867.91END ZPLAS XFLAS4.5',
                                ],
                              },
                              FareSource: 'ATPC',
                              FlightSegment: [
                                {
                                  ConnectionInd: 'O',
                                  DepartureDateTime: '03-09T10:27',
                                  FlightNumber: '2923',
                                  ResBookDesigCode: 'Y',
                                  SegmentNumber: '1',
                                  Status: 'OK',
                                  BaggageAllowance: {
                                    Number: 'NIL',
                                  },
                                  FareBasis: {
                                    Code: 'YA2AAN',
                                  },
                                  MarketingAirline: {
                                    Code: 'AA',
                                    FlightNumber: '2923',
                                  },
                                  OriginLocation: {
                                    LocationCode: 'LAS',
                                  },
                                  ValidityDates: {
                                    NotValidAfter: '2020-03-09',
                                    NotValidBefore: '2020-03-09',
                                  },
                                },
                                {
                                  OriginLocation: {
                                    LocationCode: 'DFW',
                                  },
                                },
                              ],
                              FareComponent: [
                                {
                                  FareBasisCode: 'YA2AAN',
                                  FareDirectionality: 'FROM',
                                  Amount: '86791',
                                  TicketDesignator: '',
                                  GoverningCarrier: 'AA',
                                  FareComponentNumber: '1',
                                  Location: {
                                    Origin: 'LAS',
                                    Destination: 'DFW',
                                  },
                                  Dates: {
                                    DepartureDateTime: '03-09T10:27',
                                    ArrivalDateTime: '03-09T15:11',
                                  },
                                  FlightSegmentNumbers: {
                                    FlightSegmentNumber: ['1'],
                                  },
                                },
                              ],
                              ResTicketingRestrictions: [
                                'LAST DAY TO PURCHASE 13DEC/2359',
                                'GUARANTEED FARE APPL IF PURCHASED BEFORE 13DEC',
                              ],
                            },
                          ],
                        },
                      },
                    ],
                    ResponseHeader: {
                      Text: [
                        'FARE - PRICE RETAINED',
                        'FARE USED TO CALCULATE DISCOUNT',
                        'FARE NOT GUARANTEED UNTIL TICKETED',
                      ],
                    },
                    PriceQuotePlus: {
                      DomesticIntlInd: 'I',
                      PricingStatus: 'S',
                      VerifyFareCalc: false,
                      ItineraryChanged: false,
                      ManualFare: false,
                      NegotiatedFare: false,
                      SystemIndicator: 'S',
                      NUCSuppresion: false,
                      SubjToGovtApproval: false,
                      IT_BT_Fare: 'BT',
                      DisplayOnly: false,
                      DiscountAmount: '0',
                      PassengerInfo: {
                        PassengerType: 'ADT',
                        PassengerData: [
                          {
                            NameNumber: '01.01',
                            content: 'DZIK/WIELGACHNY',
                          },
                        ],
                      },
                      TicketingInstructionsInfo: {},
                    },
                  },
                ],
                PriceQuoteTotals: {
                  BaseFare: {
                    Amount: '867.91',
                  },
                  Taxes: {
                    Tax: {
                      Amount: '79.39',
                    },
                  },
                  TotalFare: {
                    Amount: '947.30',
                  },
                },
              },
              ReservationItems: {
                Item: [
                  {
                    RPH: '1',
                    FlightSegment: [
                      {
                        AirMilesFlown: '1055',
                        ArrivalDateTime: '03-09T15:11',
                        DayOfWeekInd: '1',
                        DepartureDateTime: '2020-03-09T10:27',
                        SegmentBookedDate: '2019-12-12T08:48:00',
                        ElapsedTime: '02.44',
                        eTicket: true,
                        FlightNumber: '2923',
                        NumberInParty: '01',
                        ResBookDesigCode: 'Y',
                        SegmentNumber: '0001',
                        SmokingAllowed: false,
                        SpecialMeal: false,
                        Status: 'HK',
                        StopQuantity: '00',
                        IsPast: false,
                        CodeShare: false,
                        Id: '11',
                        DestinationLocation: {
                          LocationCode: 'DFW',
                        },
                        Equipment: {
                          AirEquipType: '321',
                        },
                        MarketingAirline: {
                          Code: 'AA',
                          FlightNumber: '2923',
                          ResBookDesigCode: 'Y',
                          Banner: 'MARKETED BY AMERICAN AIRLINES',
                        },
                        Meal: [
                          {
                            Code: 'F',
                          },
                        ],
                        OperatingAirline: [
                          {
                            Code: 'AA',
                            FlightNumber: '2923',
                            ResBookDesigCode: 'Y',
                            Banner: 'OPERATED BY AMERICAN AIRLINES',
                          },
                        ],
                        OperatingAirlinePricing: {
                          Code: 'AA',
                        },
                        DisclosureCarrier: {
                          Code: 'AA',
                          DOT: false,
                          Banner: 'AMERICAN AIRLINES',
                        },
                        OriginLocation: {
                          LocationCode: 'LAS',
                          Terminal: 'TERMINAL 1',
                          TerminalCode: '1',
                        },
                        SupplierRef: {
                          ID: 'DCAA*DAVRGS',
                        },
                        UpdatedArrivalTime: '03-09T15:11',
                        UpdatedDepartureTime: '03-09T10:27',
                      },
                    ],
                    Product: {
                      ProductDetails: {
                        productCategory: 'AIR',
                        ProductName: {
                          type: 'AIR',
                          content: '',
                        },
                        Air: {
                          sequence: 1,
                          segmentAssociationId: 2,
                          DepartureAirport: 'LAS',
                          DepartureTerminalName: 'TERMINAL 1',
                          DepartureTerminalCode: '1',
                          ArrivalAirport: 'DFW',
                          EquipmentType: '321',
                          MarketingAirlineCode: 'AA',
                          MarketingFlightNumber: '2923',
                          MarketingClassOfService: 'Y',
                          MealCode: ['F'],
                          ElapsedTime: 164,
                          AirMilesFlown: 1055,
                          FunnelFlight: false,
                          ChangeOfGauge: false,
                          DisclosureCarrier: {
                            Code: 'AA',
                            DOT: false,
                            Banner: 'AMERICAN AIRLINES',
                          },
                          AirlineRefId: 'DCAA*DAVRGS',
                          Eticket: true,
                          DepartureDateTime: '2020-03-09T10:27:00',
                          ArrivalDateTime: '2020-03-09T15:11:00',
                          FlightNumber: '2923',
                          ClassOfService: 'Y',
                          ActionCode: 'HK',
                          NumberInParty: 1,
                          inboundConnection: false,
                          outboundConnection: false,
                          SegmentBookedDate: '2019-12-12T08:48:00',
                        },
                      },
                    },
                  },
                  {
                    RPH: '2',
                    Hotel: {
                      DayOfWeekInd: '3',
                      NumberInParty: '01',
                      NumberOfUnits: '1',
                      SegmentNumber: '0002',
                      Status: 'HK',
                      Type: 'HHL',
                      IsPast: false,
                      Id: '23',
                      BasicPropertyInfo: {
                        ChainCode: 'EA',
                        HotelCityCode: 'DFW',
                        HotelCode: '58393',
                        HotelName: 'ESA DALLAS DFW AIRPORT N',
                        Address: {
                          AddressLine: ['7825 HEATHROW DRIVE'],
                          CountryCode: 'US',
                        },
                        CancelPenalty: [
                          {
                            PolicyCode: '06P',
                          },
                        ],
                        ConfirmationNumber: ['2111370829-'],
                        DirectConnect: 'DCEA',
                        ContactNumbers: {
                          ContactNumber: [
                            {
                              Fax: '972-929-4801',
                              Phone: '972-929-3333',
                            },
                          ],
                        },
                      },
                      Customer: {
                        ReserveUnderName: ['DZIK WIELGACHNY'],
                      },
                      Guarantee: 'VI4XXXXXXXXXXX1111EXP 12 21-DZIK',
                      POS: {
                        Source: {
                          RequestorID: ['99999999'],
                        },
                      },
                      RoomRates: {
                        Commission: {
                          NonCommission: false,
                          Percent: '10.00',
                          content: 'AGENT COMMISSION 10.00 PERCENT',
                        },
                        Rate: {
                          Amount: '104.99',
                          CurrencyCode: 'USD',
                          RoomTypeCode: 'A0AA01',
                          HotelTotalPricing: {
                            TotalTax: {
                              Tax: [
                                {
                                  Id: 'TX1',
                                  content: '25.20 25502-STATE RO',
                                },
                                {
                                  Id: 'TX2',
                                  content: '37.80 25605-CITY  RO',
                                },
                              ],
                            },
                            TotalSurcharge: {
                              Amount: '0.00',
                            },
                            ApproximateTotal: {
                              AmountAndCurrency: '482.95 USD',
                            },
                          },
                          RateAccessCodeBooked: {
                            ClientIdentificationCode: '   ',
                            RateAccessCode: '   ',
                            CategoryTypeCode: 'R',
                          },
                        },
                      },
                      TimeSpan: {
                        Duration: '004',
                        End: '03-15',
                        Start: '03-11',
                      },
                    },
                    Product: {
                      ProductBase: {
                        SegmentReference: 23,
                      },
                      ProductDetails: {
                        productCategory: 'AGTLCSSEGMENT',
                        productType: 'HHL',
                        vendorCode: 'EA',
                        statusCode: 'HK',
                        startPoint: 'DFW',
                        startDateTime: '2020-03-11T00:00:00',
                        endPoint: 'DFW',
                        endDateTime: '2020-03-15T00:00:00',
                        ProductName: {
                          type: 'HHL',
                          content: 'Lodging',
                        },
                        Lodging: {
                          ResGlobalInfo: {
                            BookingInfo: {
                              Status: '39',
                              InfoSource: '100',
                              RateKey:
                                'ai20pLi4+jBwjzazENuVfgFEJ5AuU6JX6QfkHGTwp+kIgUgk8mGLqO4/kPi4wCrdjH1sDuongiuXbQ0jeRjmeUJTL/NBVnUwG+A3eGEobPZ0CRlk3rmxQV0NauiCVssiq/0vt8X4QqFtAkAexTV2Ed1DuIrY+emxsuFpYI4RSrksosi+gKyrge1kw4uzm6KytAaN6aKGWbk5+CKXHLH+x3blcjwsP7sxItrd0VGRxTelL7bKYR1HsI8QnqL/0IwW+QKBgLVOBAh/DezZtJRtZNn8wMu/HF2mPuxG8CMbpHhlrD3R4xKL/J5hnQRMQugkgXK2oAu2aGZ9MXInueoO8wvpGoxKNb7XrlzOjruJVEISM3EPDErY103pdwGwvao1bCBLUWLTZZMjkxyV0HFeRZW4P3vuR6f9iuiQV6Mff8M=',
                              TransactionId: '15dfa7153c13-CTS1',
                              BookingKey:
                                'b6bfc130-5588-4302-a0d4-4b023d98b9f4',
                              HotelReservationIds: {
                                HotelReservation: [
                                  {
                                    Id: '2111370829',
                                    Type: 40,
                                  },
                                  {
                                    Id: 'DAVRGS',
                                    Type: 24,
                                  },
                                ],
                              },
                            },
                            HotelInfo: {
                              HotelCode: '100086112',
                              CodeContext: 'GLOBAL',
                              GlobalChainCode: 'EA',
                              HotelName: 'Esa Dallas Dfw Airport N',
                              BrandCode: '10000',
                              SabreRating: '1.0',
                              ChainName: 'Extended Stay America',
                              BrandName: 'undefined',
                              SupplierChainCode: 'EA',
                              SourceHotelCode: '58393',
                              LocationInfo: {
                                Latitude: '32.91592',
                                Longitude: '-97.01404',
                                Address: {
                                  AddressLine1: '7825 Heathrow Drive',
                                  CityName: {
                                    CityCode: 'DFW',
                                    content: 'Irving',
                                  },
                                  StateProv: {
                                    StateCode: 'TX',
                                    content: '',
                                  },
                                  PostalCode: '75063',
                                  CountryName: {
                                    Code: 'US',
                                    content: 'United States (the)',
                                  },
                                },
                                Contact: {
                                  Phone: '972-929-3333',
                                  Fax: '972-929-4801',
                                },
                              },
                              Amenities: {
                                Amenity: [
                                  {
                                    Code: 101,
                                    Description: 'Wheelchair access',
                                  },
                                  {
                                    Code: 137,
                                    Description:
                                      'Complimentary in-room coffee or tea',
                                  },
                                  {
                                    Code: 162,
                                    Description: 'Meal plan available',
                                  },
                                  {
                                    Code: 168,
                                    Description: 'Onsite laundry',
                                  },
                                  {
                                    Code: 179,
                                    Description:
                                      'Wireless internet connection in public areas',
                                  },
                                  {
                                    Code: 181,
                                    Description:
                                      'Transportation services - local area',
                                  },
                                  {
                                    Code: 198,
                                    Description: 'Non-smoking rooms (generic)',
                                  },
                                  {
                                    Code: 2004,
                                    Description: 'Local Calls',
                                  },
                                  {
                                    Code: 2006,
                                    Description: 'Refrigerator',
                                  },
                                  {
                                    Code: 2009,
                                    Description: 'Free WIFI in meeting rooms',
                                  },
                                  {
                                    Code: 218,
                                    Description: 'Children welcome',
                                  },
                                  {
                                    Code: 220,
                                    Description:
                                      'Hotel does not provide pornographic films/TV',
                                  },
                                  {
                                    Code: 227,
                                    Description: 'Complimentary breakfast',
                                    ComplimentaryInd: true,
                                  },
                                  {
                                    Code: 24,
                                    Description: 'Conference facilities',
                                  },
                                  {
                                    Code: 258,
                                    Description: 'Accessible rooms',
                                  },
                                  {
                                    Code: 259,
                                    Description: 'High speed internet access',
                                  },
                                  {
                                    Code: 260,
                                    Description: 'Interior corridors',
                                  },
                                  {
                                    Code: 261,
                                    Description: 'High speed wireless',
                                  },
                                  {
                                    Code: 262,
                                    Description: 'Kitchenette',
                                  },
                                  {
                                    Code: 282,
                                    Description: 'Airport shuttle service',
                                  },
                                  {
                                    Code: 312,
                                    Description: 'Smoke-free property',
                                  },
                                  {
                                    Code: 42,
                                    Description: 'Free parking',
                                    ComplimentaryInd: true,
                                  },
                                  {
                                    Code: 44,
                                    Description: 'Game room',
                                  },
                                  {
                                    Code: 48,
                                    Description: 'Health club',
                                  },
                                ],
                              },
                              PropertyTypeInfo: {
                                PropertyType: [
                                  {
                                    Code: 13,
                                    Description: 'Extended stay',
                                  },
                                ],
                              },
                            },
                            StayDateRange: {
                              StartDate: '2020-03-11',
                              EndDate: '2020-03-15',
                            },
                            Total: {
                              AmountAfterTax: 482.95,
                              CurrencyCode: 'USD',
                              Changed: false,
                              SupplierChangedAmount: 104.99,
                            },
                            AdditionalDetails: {
                              AdditionalDetail: [
                                {
                                  Code: 14,
                                  Text: [
                                    'VISIT US ON THE WEB AT WWW.EXTENDEDSTAY.COM',
                                    'THANK YOU FOR BOOKING EXTENDED STAY HOTELS',
                                    'BY 1800 11MAR2020 LOCAL PROPERTY TIME',
                                    'CREDIT CARD GUARANTEE',
                                    'BY 1800 11MAR2020 LOCAL PROPERTY TIME',
                                    'CREDIT CARD GUARANTEE',
                                  ],
                                },
                                {
                                  Code: 2101,
                                  Text: [
                                    'BY 1800 11MAR2020 LOCAL PROPERTY TIME',
                                    'CREDIT CARD GUARANTEE',
                                  ],
                                },
                              ],
                            },
                            Commission: {
                              CommissionIndicator: true,
                              Type: 'Variable',
                              CommissionDescription: {
                                Text: 'AGENT COMMISSION 10.00 PERCENT',
                              },
                            },
                          },
                          Rooms: {
                            Room: [
                              {
                                RoomIndex: 1,
                                InvBlockCode: 'A0AA01',
                                SegmentNumber: 1,
                                GuestRoomInfo: 16,
                                Guests: {
                                  Count: 1,
                                  Guest: [
                                    {
                                      FirstName: 'WIELGACHNY',
                                      LastName: 'DZIK',
                                      Email: 'services.platform.test@sabre.com',
                                      Index: 1,
                                      LeadGuest: true,
                                      Type: 10,
                                      Contact: {
                                        Phone: '202-555-0137',
                                      },
                                    },
                                  ],
                                },
                                RoomDescription: {
                                  Name: 'CORPORATE RATE',
                                  Text: 'STANDARD STUDIO 2 QUEENS NONSMKNG ACCESSIBLE FREE WIFI AND GRAB AND GO BKFST 32IN LCD TV KITCHEN DINING AND WORK AREA AVAILABLE TO GUESTS TRAVELING ON BUSINESS RATE COMMISSIONABLE AT 10PCT UP TO 7 NIGHTS TAXES AND SERVICE CHARGES NOT INCLUDED 104.99 PER NIGHT STARTING 11MAR FOR 4 NIGHTS 419.96 TOTAL RATE STARTING 11MAR FOR 4 NIGHTS',
                                },
                                BookingStatus: 'null',
                                RatePlan: {
                                  RatePlanName: 'CORPORATE RATE',
                                  RatePlanType: '24',
                                  PrepaidIndicator: false,
                                  RatePlanDescription: {},
                                  RatePlanInclusions: {},
                                  MealsIncluded: {
                                    MealIncluded: [{}],
                                  },
                                  RateInfo: {
                                    AmountBeforeTax: 419.96,
                                    AmountAfterTax: 482.95,
                                    CurrencyCode: 'USD',
                                    NightlyRate: 104.99,
                                    AdditionalFeesInclusive: true,
                                    TaxInclusive: true,
                                    AdditionalDetails: {
                                      AdditionalDetail: [
                                        {
                                          Code: 32,
                                          Text: [
                                            'INCLUDES TAXES AND SURCHARGES',
                                          ],
                                        },
                                      ],
                                    },
                                    Fees: {
                                      Amount: 0,
                                    },
                                    Taxes: {
                                      Amount: 62.99,
                                      CurrencyCode: 'USD',
                                      Tax: [
                                        {
                                          Code: 27,
                                          Amount: 25.2,
                                          CurrencyCode: 'USD',
                                          TaxDescription: {
                                            Text: '25502-STATE ROOM TAX',
                                          },
                                        },
                                        {
                                          Code: 27,
                                          Amount: 37.8,
                                          CurrencyCode: 'USD',
                                          TaxDescription: {
                                            Text: '25605-CITY  ROOM TAX',
                                          },
                                        },
                                      ],
                                    },
                                    CancelPenalties: {
                                      CancelPenalty: [
                                        {
                                          Refundable: true,
                                          Deadline: {
                                            AbsoluteDeadline:
                                              '2020-03-11T18:00:00',
                                          },
                                        },
                                      ],
                                    },
                                    Guarantee: {
                                      GuaranteeType: 'GUAR',
                                      GuaranteesAccepted: {
                                        GuaranteeAccepted: [
                                          {
                                            GuaranteeTypeCode: 5,
                                            PaymentCards: {
                                              PaymentCard: [
                                                {
                                                  CardCode: 'AX',
                                                  content: 'AMERICAN EXPRESS',
                                                },
                                                {
                                                  CardCode: 'CA',
                                                  content: 'MASTERCARD',
                                                },
                                                {
                                                  CardCode: 'DC',
                                                  content: 'DINERS CLUB CARD',
                                                },
                                                {
                                                  CardCode: 'DS',
                                                  content: 'DISCOVER CARD',
                                                },
                                                {
                                                  CardCode: 'IK',
                                                  content: 'MASTER CARD',
                                                },
                                                {
                                                  CardCode: 'JC',
                                                  content: 'JCB CREDIT CARD',
                                                },
                                                {
                                                  CardCode: 'MC',
                                                  content: 'MASTER CARD',
                                                },
                                                {
                                                  CardCode: 'VI',
                                                  content: 'VISA',
                                                },
                                                {
                                                  CardCode: 'VS',
                                                  content: 'VISA',
                                                },
                                              ],
                                            },
                                          },
                                          {
                                            GuaranteeTypeCode: 19,
                                          },
                                          {
                                            GuaranteeTypeCode: 29,
                                          },
                                        ],
                                      },
                                    },
                                  },
                                },
                              },
                            ],
                          },
                          PaymentInformation: {
                            Type: 'GUARANTEE',
                          },
                          POS: {
                            Source: {
                              AgencyName: 'SABRE TRAVEL',
                              ISOCountryCode: 'US',
                              PseudoCityCode: 'G7HE',
                              RequestorID: {
                                Id: '99999999',
                              },
                              AgencyAddress: {
                                AddressLine1: '3150 SABRE DRIVE',
                                AddressLine2: 'SOUTHLAKE, TX US',
                                AddressLine3: '76092',
                                CountryName: {
                                  Code: 'US',
                                  content: '',
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                  {
                    RPH: '3',
                    MiscSegment: {
                      DayOfWeekInd: '6',
                      DepartureDateTime: '03-14',
                      NumberInParty: '01',
                      SegmentNumber: '0003',
                      Status: 'GK',
                      Type: 'OTH',
                      IsPast: false,
                      Id: '66',
                      OriginLocation: {
                        LocationCode: 'ORD',
                      },
                      Text: ['TEST OTH MISCELLANEOUS SEGMENT'],
                      Vendor: {
                        Code: 'AS',
                      },
                    },
                  },
                  {
                    RPH: '4',
                    Vehicle: {
                      Id: '51',
                      DayOfWeekInd: '1',
                      SegmentNumber: '0004',
                      Status: 'HK',
                      IsPast: false,
                      ConfirmationNumber: '1005434227COUNT-',
                      DirectConnect: 'DCZL',
                      VehRentalCore: {
                        PickUpDateTime: '03-16T09:00',
                        PickUpDay: '1',
                        ReturnDateTime: '03-23T19:00',
                        LocationDetails: {
                          LocationCode: 'LAS',
                        },
                      },
                      VehVendorAvail: {
                        VehResCore: {
                          PricedEquip: {
                            Equipment: {
                              EquipType: 'CCAR',
                              Quantity: '01',
                            },
                          },
                          RentalRate: {
                            Changed: 'C',
                            GuaranteedQuoted: 'G',
                            RateCode: '¤NW8',
                            STM_RatePlan: '¤NW8',
                            VehicleTypes: {
                              VehType: 'CCAR',
                            },
                          },
                          VehicleCharges: {
                            VehicleCharge: {
                              GuaranteeInd: 'VI4XXXXXXXXXXX1111EXP 12 21-DZIK',
                              Amount: [
                                '¤USD290.00 UNL WY XD48.33 UNL XH24.17 UNL',
                              ],
                              ChargeDetails: {
                                ApproximateTotalCharge: [
                                  {
                                    Amount: '290.00',
                                    MileageAllowance: 'UNL',
                                    RateType: 'WEEKLY RATE',
                                  },
                                  {
                                    Amount: '24.17',
                                    MileageAllowance: 'UNL',
                                    RateType: 'EXTRA HOUR',
                                  },
                                  {
                                    Amount: '48.33',
                                    MileageAllowance: 'UNL',
                                    RateType: 'EXTRA DAY',
                                  },
                                  {
                                    Amount: '482.65',
                                    MileageAllowance: 'UNL',
                                    NumDays: '8',
                                    NumHours: '0',
                                    RateType: 'APPROXIMATE TOTAL PRICE',
                                    TotalMandatoryCharges: '144.32',
                                  },
                                ],
                              },
                              Mileage: {
                                CurrencyCode: 'USD',
                              },
                            },
                          },
                        },
                        Vendor: {
                          Code: 'ZL',
                        },
                      },
                    },
                  },
                ],
              },
              Ticketing: [
                {
                  RPH: '01',
                  TicketTimeLimit: 'TAW/',
                },
              ],
            },
            ItineraryRef: {
              AirExtras: false,
              ID: 'DAVRGS',
              InhibitCode: 'U',
              PartitionID: 'AA',
              PrimeHostID: '1S',
              Header: ['PRICE QUOTE RECORD EXISTS - SYSTEM'],
              Source: {
                AAA_PseudoCityCode: 'G7HE',
                CreateDateTime: '2019-12-12T08:48',
                CreationAgent: 'AWT',
                HomePseudoCityCode: 'G7HE',
                PseudoCityCode: 'G7HE',
                ReceivedFrom: 'SP TEST',
                LastUpdateDateTime: '2019-12-12T08:48',
                SequenceNumber: '1',
              },
            },
            RemarkInfo: {},
            SpecialServiceInfo: [
              {
                RPH: '001',
                Type: 'AFX',
                Id: '20',
                Service: {
                  SSR_Code: 'OSI',
                  Text: ['AA HHL EA BY 1800 11MAR2020 LOCAL PROPERTY TIME'],
                },
              },
              {
                RPH: '002',
                Type: 'AFX',
                Id: '21',
                Service: {
                  SSR_Code: 'OSI',
                  Text: ['AA HHL EA CREDIT CARD GUARANTEE'],
                },
              },
              {
                RPH: '003',
                Type: 'AFX',
                Id: '64',
                Service: {
                  SSR_Code: 'OSI',
                  Text: ['AA CCR ZL A MINIMUM OF 8 DAYS WILL BE CHARGED'],
                },
              },
              {
                RPH: '004',
                Type: 'AFX',
                Id: '65',
                Service: {
                  SSR_Code: 'OSI',
                  Text: ['AA CCR ZL EXTRA DAY RATE APPLIES AFTER 7 DAYS'],
                },
              },
              {
                RPH: '005',
                Type: 'AFX',
                Id: '67',
                Service: {
                  SSR_Code: 'SSR',
                  SSR_Type: 'OTHS',
                  Text: ['/CC WIELGACHNY DZIK'],
                },
              },
              {
                RPH: '006',
                Type: 'AFX',
                Id: '68',
                Service: {
                  SSR_Code: 'SSR',
                  SSR_Type: 'DOCS',
                  PersonName: [
                    {
                      NameNumber: '01.01',
                      content: 'DZIK/WIELGACHNY',
                    },
                  ],
                  Text: ['AA HK1/DB/01JAN1990/M/DZIK/WIELGACHNY'],
                },
              },
              {
                RPH: '001',
                Type: 'GFX',
                Id: '12',
                Service: {
                  SSR_Code: 'OSI',
                  Airline: {
                    Code: 'EA',
                  },
                  Text: ['HHL 100086112 A0AA01  D CORPORATE RATE'],
                },
              },
              {
                RPH: '002',
                Type: 'GFX',
                Id: '13',
                Service: {
                  SSR_Code: 'OSI',
                  Airline: {
                    Code: 'EA',
                  },
                  Text: [
                    'HHL 100086112 A0AA01  D STANDARD STUDIO 2 QUEENS NON',
                  ],
                },
              },
              {
                RPH: '003',
                Type: 'GFX',
                Id: '14',
                Service: {
                  SSR_Code: 'OSI',
                  Airline: {
                    Code: 'EA',
                  },
                  Text: [
                    'HHL 100086112 A0AA01  D SMKNG ACCESSIBLE FREE WIFI A',
                  ],
                },
              },
              {
                RPH: '004',
                Type: 'GFX',
                Id: '15',
                Service: {
                  SSR_Code: 'OSI',
                  Airline: {
                    Code: 'EA',
                  },
                  Text: ['HHL 100086112 A0AA01  TTX 62.99 TTL TAX'],
                },
              },
              {
                RPH: '005',
                Type: 'GFX',
                Id: '16',
                Service: {
                  SSR_Code: 'OSI',
                  Airline: {
                    Code: 'EA',
                  },
                  Text: ['HHL 100086112 A0AA01  TX 25.20 25502-STATE ROOM TAX'],
                },
              },
              {
                RPH: '006',
                Type: 'GFX',
                Id: '17',
                Service: {
                  SSR_Code: 'OSI',
                  Airline: {
                    Code: 'EA',
                  },
                  Text: ['HHL 100086112 A0AA01  TX 37.80 25605-CITY  ROOM TAX'],
                },
              },
              {
                RPH: '007',
                Type: 'GFX',
                Id: '18',
                Service: {
                  SSR_Code: 'OSI',
                  Airline: {
                    Code: 'EA',
                  },
                  Text: ['HHL 100086112 A0AA01  TSC 0 TTL SURCHARGE'],
                },
              },
              {
                RPH: '008',
                Type: 'GFX',
                Id: '19',
                Service: {
                  SSR_Code: 'OSI',
                  Airline: {
                    Code: 'EA',
                  },
                  Text: [
                    'HHL 100086112 A0AA01  TP 482.95 USD APPROX. TTL PRIC',
                  ],
                },
              },
              {
                RPH: '009',
                Type: 'GFX',
                Id: '22',
                Service: {
                  SSR_Code: 'OSI',
                  Airline: {
                    Code: 'EA',
                  },
                  Text: [
                    'HHL 100086112 A0AA01  TD INCLUDES TAXES AND SURCHARG',
                  ],
                },
              },
            ],
            OpenReservationElements: {
              OpenReservationElement: [
                {
                  id: '3',
                  elementId: 'pnr-or-3',
                },
                {
                  id: '20',
                  type: 'SRVC',
                  elementId: 'pnr-20',
                  ServiceRequest: {
                    airlineCode: 'AA',
                    serviceType: 'OSI',
                    ssrType: 'AFX',
                    FreeText: 'HHL EA BY 1800 11MAR2020 LOCAL PROPERTY TIME',
                    FullText: 'AA HHL EA BY 1800 11MAR2020 LOCAL PROPERTY TIME',
                  },
                },
                {
                  id: '21',
                  type: 'SRVC',
                  elementId: 'pnr-21',
                  ServiceRequest: {
                    airlineCode: 'AA',
                    serviceType: 'OSI',
                    ssrType: 'AFX',
                    FreeText: 'HHL EA CREDIT CARD GUARANTEE',
                    FullText: 'AA HHL EA CREDIT CARD GUARANTEE',
                  },
                },
                {
                  id: '64',
                  type: 'SRVC',
                  elementId: 'pnr-64',
                  ServiceRequest: {
                    airlineCode: 'AA',
                    serviceType: 'OSI',
                    ssrType: 'AFX',
                    FreeText: 'CCR ZL A MINIMUM OF 8 DAYS WILL BE CHARGED',
                    FullText: 'AA CCR ZL A MINIMUM OF 8 DAYS WILL BE CHARGED',
                  },
                },
                {
                  id: '65',
                  type: 'SRVC',
                  elementId: 'pnr-65',
                  ServiceRequest: {
                    airlineCode: 'AA',
                    serviceType: 'OSI',
                    ssrType: 'AFX',
                    FreeText: 'CCR ZL EXTRA DAY RATE APPLIES AFTER 7 DAYS',
                    FullText: 'AA CCR ZL EXTRA DAY RATE APPLIES AFTER 7 DAYS',
                  },
                },
                {
                  id: '67',
                  type: 'SRVC',
                  elementId: 'pnr-67',
                  ServiceRequest: {
                    code: 'OTHS',
                    serviceType: 'SSR',
                    ssrType: 'AFX',
                    FreeText: '/CC WIELGACHNY DZIK',
                    FullText: 'OTHS  /CC WIELGACHNY DZIK',
                  },
                },
                {
                  id: '68',
                  type: 'SRVC',
                  elementId: 'pnr-68',
                  ServiceRequest: {
                    actionCode: 'HK',
                    airlineCode: 'AA',
                    code: 'DOCS',
                    serviceCount: '1',
                    serviceType: 'SSR',
                    ssrType: 'AFX',
                    FreeText: '/DB/01JAN1990/M/DZIK/WIELGACHNY',
                    FullText: 'DOCS AA HK1/DB/01JAN1990/M/DZIK/WIELGACHNY',
                    TravelDocument: {
                      Type: 'DB',
                      DateOfBirth: '01JAN1990',
                      Gender: 'M',
                      LastName: 'DZIK',
                      FirstName: 'WIELGACHNY',
                      Infant: false,
                      HasDocumentData: false,
                    },
                  },
                  NameAssociation: [
                    {
                      LastName: 'DZIK',
                      FirstName: 'WIELGACHNY',
                      NameRefNumber: '01.01',
                      ReferenceId: 1,
                    },
                  ],
                },
                {
                  id: '11',
                  elementId: 'pnr-or-11',
                },
                {
                  id: '11',
                  elementId: 'pnr-or-11',
                },
                {
                  id: '66',
                  elementId: 'pnr-or-66',
                },
                {
                  id: '51',
                  elementId: 'pnr-or-51',
                },
                {
                  id: '12',
                  type: 'SRVC',
                  elementId: 'pnr-12',
                  ServiceRequest: {
                    airlineCode: 'EA',
                    serviceType: 'OSI',
                    ssrType: 'GFX',
                    FreeText: 'HHL 100086112 A0AA01  D CORPORATE RATE',
                    FullText: 'EA HHL 100086112 A0AA01  D CORPORATE RATE',
                  },
                },
                {
                  id: '13',
                  type: 'SRVC',
                  elementId: 'pnr-13',
                  ServiceRequest: {
                    airlineCode: 'EA',
                    serviceType: 'OSI',
                    ssrType: 'GFX',
                    FreeText:
                      'HHL 100086112 A0AA01  D STANDARD STUDIO 2 QUEENS NON',
                    FullText:
                      'EA HHL 100086112 A0AA01  D STANDARD STUDIO 2 QUEENS NON',
                  },
                },
                {
                  id: '14',
                  type: 'SRVC',
                  elementId: 'pnr-14',
                  ServiceRequest: {
                    airlineCode: 'EA',
                    serviceType: 'OSI',
                    ssrType: 'GFX',
                    FreeText:
                      'HHL 100086112 A0AA01  D SMKNG ACCESSIBLE FREE WIFI A',
                    FullText:
                      'EA HHL 100086112 A0AA01  D SMKNG ACCESSIBLE FREE WIFI A',
                  },
                },
                {
                  id: '15',
                  type: 'SRVC',
                  elementId: 'pnr-15',
                  ServiceRequest: {
                    airlineCode: 'EA',
                    serviceType: 'OSI',
                    ssrType: 'GFX',
                    FreeText: 'HHL 100086112 A0AA01  TTX 62.99 TTL TAX',
                    FullText: 'EA HHL 100086112 A0AA01  TTX 62.99 TTL TAX',
                  },
                },
                {
                  id: '16',
                  type: 'SRVC',
                  elementId: 'pnr-16',
                  ServiceRequest: {
                    airlineCode: 'EA',
                    serviceType: 'OSI',
                    ssrType: 'GFX',
                    FreeText:
                      'HHL 100086112 A0AA01  TX 25.20 25502-STATE ROOM TAX',
                    FullText:
                      'EA HHL 100086112 A0AA01  TX 25.20 25502-STATE ROOM TAX',
                  },
                },
                {
                  id: '17',
                  type: 'SRVC',
                  elementId: 'pnr-17',
                  ServiceRequest: {
                    airlineCode: 'EA',
                    serviceType: 'OSI',
                    ssrType: 'GFX',
                    FreeText:
                      'HHL 100086112 A0AA01  TX 37.80 25605-CITY  ROOM TAX',
                    FullText:
                      'EA HHL 100086112 A0AA01  TX 37.80 25605-CITY  ROOM TAX',
                  },
                },
                {
                  id: '18',
                  type: 'SRVC',
                  elementId: 'pnr-18',
                  ServiceRequest: {
                    airlineCode: 'EA',
                    serviceType: 'OSI',
                    ssrType: 'GFX',
                    FreeText: 'HHL 100086112 A0AA01  TSC 0 TTL SURCHARGE',
                    FullText: 'EA HHL 100086112 A0AA01  TSC 0 TTL SURCHARGE',
                  },
                },
                {
                  id: '19',
                  type: 'SRVC',
                  elementId: 'pnr-19',
                  ServiceRequest: {
                    airlineCode: 'EA',
                    serviceType: 'OSI',
                    ssrType: 'GFX',
                    FreeText:
                      'HHL 100086112 A0AA01  TP 482.95 USD APPROX. TTL PRIC',
                    FullText:
                      'EA HHL 100086112 A0AA01  TP 482.95 USD APPROX. TTL PRIC',
                  },
                },
                {
                  id: '22',
                  type: 'SRVC',
                  elementId: 'pnr-22',
                  ServiceRequest: {
                    airlineCode: 'EA',
                    serviceType: 'OSI',
                    ssrType: 'GFX',
                    FreeText:
                      'HHL 100086112 A0AA01  TD INCLUDES TAXES AND SURCHARG',
                    FullText:
                      'EA HHL 100086112 A0AA01  TD INCLUDES TAXES AND SURCHARG',
                  },
                },
                {
                  id: '69',
                  type: 'FP',
                  displayIndex: 1,
                  elementId: 'pnr-69',
                  FormOfPayment: {
                    migrated: false,
                    Check: {
                      Text: 'CHECK',
                    },
                  },
                },
              ],
            },
            AssociationMatrices: {
              AssociationMatrix: [
                {
                  Name: 'PssIDType',
                  Parent: {
                    ref: 'pnr-23',
                  },
                  Child: [
                    {
                      ref: 'pnr-12',
                    },
                    {
                      ref: 'pnr-13',
                    },
                    {
                      ref: 'pnr-14',
                    },
                    {
                      ref: 'pnr-15',
                    },
                    {
                      ref: 'pnr-16',
                    },
                    {
                      ref: 'pnr-17',
                    },
                    {
                      ref: 'pnr-18',
                    },
                    {
                      ref: 'pnr-19',
                    },
                    {
                      ref: 'pnr-20',
                    },
                    {
                      ref: 'pnr-21',
                    },
                    {
                      ref: 'pnr-22',
                    },
                    {
                      ref: 'pnr-or-3',
                    },
                  ],
                },
              ],
            },
          },
        },
      },
    }
    dispatch(saveBookingAction(saveBooking))
  }, [userLogin?.Email])

  const response = {
    CreatePassengerNameRecordRS: {
      ApplicationResults: {
        status: 'Complete',
        Success: [
          {
            timeStamp: '2019-12-12T08:48:30.243-06:00',
          },
        ],
        Warning: [
          {
            type: 'BusinessLogic',
            timeStamp: '2019-12-12T08:48:27.500-06:00',
            SystemSpecificResults: [
              {
                Message: [
                  {
                    code: 'WARN.SWS.HOST.WARNING_RESPONSE',
                    content:
                      'OTA_VehResLLSRQ: A MINIMUM OF 8 DAYS WILL BE CHARGED',
                  },
                  {
                    content: 'EXTRA DAY RATE APPLIES AFTER 7 DAYS',
                  },
                  {
                    content: 'KIOSK SERVICE AVAILABLE',
                  },
                  {
                    content: 'NISSAN NOTE OR SIMILAR',
                  },
                  {
                    content: 'NATIONAL COUNTER SERVICE CONFIRMED',
                  },
                  {
                    content: 'GREEN MEANS GO. THANK YOU FOR SHOPPING ZL',
                  },
                ],
              },
            ],
          },
          {
            type: 'BusinessLogic',
            timeStamp: '2019-12-12T08:48:28.091-06:00',
            SystemSpecificResults: [
              {
                Message: [
                  {
                    code: 'WARN.SWS.HOST.ERROR_IN_RESPONSE',
                    content: 'NO ARNK INSERTED',
                  },
                ],
              },
            ],
          },
          {
            type: 'BusinessLogic',
            timeStamp: '2019-12-12T08:48:28.580-06:00',
            SystemSpecificResults: [
              {
                Message: [
                  {
                    code: 'WARN.SWS.HOST.ERROR_IN_RESPONSE',
                    content:
                      'EndTransactionLLSRQ: BSG NOT ALLOWED GROUP PLANNER ACTIVE - USE CORPORATE NAME FIELD',
                  },
                ],
              },
            ],
          },
        ],
      },
      ItineraryRef: {
        ID: 'DAVRGS',
      },
      AirBook: {
        OriginDestinationOption: {
          FlightSegment: [
            {
              ArrivalDateTime: '03-09T15:11',
              DepartureDateTime: '03-09T10:27',
              eTicket: true,
              FlightNumber: '2923',
              NumberInParty: '001',
              ResBookDesigCode: 'Y',
              Status: 'SS',
              DestinationLocation: {
                LocationCode: 'DFW',
              },
              MarketingAirline: {
                Code: 'AA',
                FlightNumber: '2923',
              },
              OriginLocation: {
                LocationCode: 'LAS',
              },
            },
          ],
        },
      },
      AirPrice: [
        {
          PriceQuote: {
            MiscInformation: {
              BaggageInfo: {
                SubCodeProperties: [
                  {
                    SolutionSequenceNmbr: 1,
                    RPH: 1,
                    AncillaryFeeGroupCode: 'BG',
                    AncillaryService: {
                      SubGroupCode: 'CY',
                      Text: 'CARRY ON HAND BAGGAGE',
                    },
                    CommercialNameofBaggageItemType: 'CARRYON HAND BAGGAGE',
                    EMD_Type: '4',
                    ExtendedSubCodeKey: '0LNABAA',
                    RFIC: 'C',
                  },
                  {
                    SolutionSequenceNmbr: 1,
                    RPH: 2,
                    AncillaryFeeGroupCode: 'BG',
                    AncillaryService: {
                      SubGroupCode: 'CY',
                      Text: 'CARRY ON HAND BAGGAGE',
                    },
                    CommercialNameofBaggageItemType:
                      'CARRY ON UP TO 40 LI 101 LCM',
                    DescriptionOne: {
                      Code: '4S',
                      Text: 'UP TO 40 LINEAR INCHES/101 LINEAR CENTIMETERS',
                    },
                    EMD_Type: '4',
                    ExtendedSubCodeKey: '0MMACAA',
                    RFIC: 'C',
                    SizeWeightInfo: {
                      MaximumSizeInAlternate: {
                        Units: 'C',
                        content: '101',
                      },
                      MaximumSize: {
                        Units: 'I',
                        content: '40',
                      },
                    },
                  },
                  {
                    SolutionSequenceNmbr: 1,
                    RPH: 3,
                    AncillaryFeeGroupCode: 'BG',
                    AncillaryService: {
                      SubGroupCode: 'CY',
                      Text: 'CARRY ON HAND BAGGAGE',
                    },
                    CommercialNameofBaggageItemType:
                      'CARRY ON UP TO 45 LI 115 LCM',
                    DescriptionOne: {
                      Code: '4U',
                      Text: 'UP TO 45 LINEAR INCHES/115 LINEAR CENTIMETERS',
                    },
                    EMD_Type: '4',
                    ExtendedSubCodeKey: '0MUACAA',
                    RFIC: 'C',
                    SizeWeightInfo: {
                      MaximumSizeInAlternate: {
                        Units: 'C',
                        content: '115',
                      },
                      MaximumSize: {
                        Units: 'I',
                        content: '45',
                      },
                    },
                  },
                  {
                    SolutionSequenceNmbr: 1,
                    RPH: 4,
                    AncillaryFeeGroupCode: 'BG',
                    CommercialNameofBaggageItemType:
                      'UPTO50LB 23KG AND62LI 158LCM',
                    DescriptionOne: {
                      Code: '23',
                      Text: 'UP TO 50 POUNDS/23 KILOGRAMS',
                    },
                    DescriptionTwo: {
                      Code: '6U',
                      Text: 'UP TO 62 LINEAR INCHES/158 LINEAR CENTIMETERS',
                    },
                    EMD_Type: '4',
                    ExtendedSubCodeKey: '0GOACAA',
                    RFIC: 'C',
                    SizeWeightInfo: {
                      MaximumSizeInAlternate: {
                        Units: 'C',
                        content: '158',
                      },
                      MaximumSize: {
                        Units: 'I',
                        content: '62',
                      },
                      MaximumWeightInAlternate: {
                        Units: 'K',
                        content: '23',
                      },
                      MaximumWeight: {
                        Units: 'L',
                        content: '50',
                      },
                    },
                  },
                  {
                    SolutionSequenceNmbr: 1,
                    RPH: 5,
                    AncillaryFeeGroupCode: 'BG',
                    CommercialNameofBaggageItemType: 'OVER100LB 45KG BAGGAGE',
                    DescriptionOne: {
                      Code: '1X',
                      Text: 'OVER 100 POUNDS/45 KILOGRAMS',
                    },
                    EMD_Type: '4',
                    ExtendedSubCodeKey: '0DQAEAA',
                    SizeWeightInfo: {
                      MinimumWeightInAlternate: {
                        Units: 'L',
                        content: '45',
                      },
                      MinimumWeight: {
                        Units: 'L',
                        content: '100',
                      },
                    },
                  },
                  {
                    SolutionSequenceNmbr: 1,
                    RPH: 6,
                    AncillaryFeeGroupCode: 'BG',
                    CommercialNameofBaggageItemType: 'ALLOWANCE',
                    EMD_Type: '4',
                    ExtendedSubCodeKey: '0DFAAAA',
                    RFIC: 'C',
                  },
                ],
              },
              HeaderInformation: [
                {
                  SolutionSequenceNmbr: '1',
                  DepartureDate: '2020-03-09',
                  LastTicketingDate: '12-13T23:59',
                  Text: [
                    'VALIDATING CARRIER - AA',
                    'BAG ALLOWANCE     -LASDFW-NIL/AA',
                    '1STCHECKED BAG FEE-LASDFW-USD30.00/AA/UP TO 50 POUNDS/23 KILOGR',
                    'AMS AND UP TO 62 LINEAR INCHES/158 LINEAR CENTIMETERS**',
                    '2NDCHECKED BAG FEE-LASDFW-USD40.00/AA/UP TO 50 POUNDS/23 KILOGR',
                    'AMS AND UP TO 62 LINEAR INCHES/158 LINEAR CENTIMETERS**',
                    '**BAG FEES APPLY AT EACH CHECK IN LOCATION',
                    'CARRY ON ALLOWANCE',
                    'LASDFW-02P/AA',
                    '01/UP TO 40 LINEAR INCHES/101 LINEAR CENTIMETERS',
                    '01/UP TO 45 LINEAR INCHES/115 LINEAR CENTIMETERS',
                    'ADDITIONAL ALLOWANCES AND/OR DISCOUNTS MAY APPLY DEPENDING ON',
                    'FLYER-SPECIFIC FACTORS /E.G. FREQUENT FLYER STATUS/MILITARY/',
                    'CREDIT CARD FORM OF PAYMENT/EARLY PURCHASE OVER INTERNET,ETC./',
                    'EMBARGOES-APPLY TO EACH PASSENGER',
                    'LASDFW-AA',
                    'OVER 100 POUNDS/45 KILOGRAMS NOT PERMITTED',
                    '09MAR DEPARTURE DATE-----LAST DAY TO PURCHASE 13DEC/2359',
                  ],
                  ValidatingCarrier: {
                    Code: 'AA',
                  },
                },
              ],
              SolutionInformation: [
                {
                  SolutionSequenceNmbr: '1',
                  BaseFareCurrencyCode: 'USD',
                  CurrencyCode: 'USD',
                  GrandTotalEquivFareAmount: '867.91',
                  GrandTotalTaxes: '79.39',
                  RequiresRebook: 'false',
                  TicketNumber: '0',
                  TotalAmount: '947.30',
                },
              ],
              ValidatingCarrier: [
                {
                  NewValidatingProcess: true,
                  SolutionSequenceNmbr: '1',
                  SettlementMethod: 'ARC',
                  Ticket: [
                    {
                      Type: 'ETKTPREF',
                      CarrierCode: 'AA',
                      ValidatingCarrierType: 'Default',
                    },
                  ],
                },
              ],
            },
            PricedItinerary: {
              AlternativePricing: 'false',
              CurrencyCode: 'USD',
              MultiTicket: false,
              TotalAmount: '947.30',
              AirItineraryPricingInfo: [
                {
                  SolutionSequenceNmbr: '1',
                  BaggageProvisions: [
                    {
                      RPH: '1',
                      Associations: {
                        CarrierCode: [
                          {
                            RPH: 1,
                            content: 'AA',
                          },
                        ],
                        CountForSegmentAssociatedID: '1',
                        DepartureDate: [
                          {
                            RPH: 1,
                            content: '2020-03-09',
                          },
                        ],
                        DestinationLocation: [
                          {
                            LocationCode: 'DFW',
                            RPH: 1,
                          },
                        ],
                        FlightNumber: [
                          {
                            RPH: 1,
                            content: '2923',
                          },
                        ],
                        OriginLocation: [
                          {
                            LocationCode: 'LAS',
                            RPH: 1,
                          },
                        ],
                        PNR_Segment: [
                          {
                            RPH: 1,
                            content: '2',
                          },
                        ],
                        ResBookDesigCode: [
                          {
                            RPH: 1,
                            content: 'Y',
                          },
                        ],
                        StatusCode: [
                          {
                            RPH: 1,
                            content: 'SS',
                          },
                        ],
                      },
                      CarrierWhoseBaggageProvisionsApply: 'AA',
                      NumPiecesBDI: '0',
                      ProvisionType: 'A',
                      SubCodeInfo: {
                        SubCodeForChargesOthers: '0DFAAAA',
                      },
                    },
                    {
                      RPH: '2',
                      Associations: {
                        CarrierCode: [
                          {
                            RPH: 1,
                            content: 'AA',
                          },
                        ],
                        CountForSegmentAssociatedID: '1',
                        DepartureDate: [
                          {
                            RPH: 1,
                            content: '2020-03-09',
                          },
                        ],
                        DestinationLocation: [
                          {
                            LocationCode: 'DFW',
                            RPH: 1,
                          },
                        ],
                        FlightNumber: [
                          {
                            RPH: 1,
                            content: '2923',
                          },
                        ],
                        OriginLocation: [
                          {
                            LocationCode: 'LAS',
                            RPH: 1,
                          },
                        ],
                        PNR_Segment: [
                          {
                            RPH: 1,
                            content: '2',
                          },
                        ],
                        ResBookDesigCode: [
                          {
                            RPH: 1,
                            content: 'Y',
                          },
                        ],
                        StatusCode: [
                          {
                            RPH: 1,
                            content: 'SS',
                          },
                        ],
                      },
                      CarrierWhoseBaggageProvisionsApply: 'AA',
                      Commissionable: 'N',
                      FeeApplicationIndicator: '3',
                      FeeNotGuaranteedIndicator: 'N',
                      FirstOccurrence: '1',
                      Interlineable: 'Y',
                      LastOccurrence: '1',
                      PassengerType: {
                        Code: 'ADT',
                      },
                      PriceInformation: {
                        Base: {
                          Amount: '30.00',
                          CurrencyCode: 'USD',
                        },
                        Equiv: {
                          Amount: '30.00',
                          CurrencyCode: 'USD',
                        },
                        Total: '30.00',
                      },
                      ProvisionType: 'C',
                      RefundReissue: 'R',
                      SubCodeInfo: {
                        SubCodeForChargesOthers: '0GOACAA',
                      },
                    },
                    {
                      RPH: '3',
                      Associations: {
                        CarrierCode: [
                          {
                            RPH: 1,
                            content: 'AA',
                          },
                        ],
                        CountForSegmentAssociatedID: '1',
                        DepartureDate: [
                          {
                            RPH: 1,
                            content: '2020-03-09',
                          },
                        ],
                        DestinationLocation: [
                          {
                            LocationCode: 'DFW',
                            RPH: 1,
                          },
                        ],
                        FlightNumber: [
                          {
                            RPH: 1,
                            content: '2923',
                          },
                        ],
                        OriginLocation: [
                          {
                            LocationCode: 'LAS',
                            RPH: 1,
                          },
                        ],
                        PNR_Segment: [
                          {
                            RPH: 1,
                            content: '2',
                          },
                        ],
                        ResBookDesigCode: [
                          {
                            RPH: 1,
                            content: 'Y',
                          },
                        ],
                        StatusCode: [
                          {
                            RPH: 1,
                            content: 'SS',
                          },
                        ],
                      },
                      CarrierWhoseBaggageProvisionsApply: 'AA',
                      Commissionable: 'N',
                      FeeApplicationIndicator: '3',
                      FeeNotGuaranteedIndicator: 'N',
                      FirstOccurrence: '2',
                      Interlineable: 'Y',
                      LastOccurrence: '2',
                      PassengerType: {
                        Code: 'ADT',
                      },
                      PriceInformation: {
                        Base: {
                          Amount: '40.00',
                          CurrencyCode: 'USD',
                        },
                        Equiv: {
                          Amount: '40.00',
                          CurrencyCode: 'USD',
                        },
                        Total: '40.00',
                      },
                      ProvisionType: 'C',
                      RefundReissue: 'R',
                      SubCodeInfo: {
                        SubCodeForChargesOthers: '0GOACAA',
                      },
                    },
                    {
                      RPH: '4',
                      Associations: {
                        CarrierCode: [
                          {
                            RPH: 1,
                            content: 'AA',
                          },
                        ],
                        CountForSegmentAssociatedID: '1',
                        DepartureDate: [
                          {
                            RPH: 1,
                            content: '2020-03-09',
                          },
                        ],
                        DestinationLocation: [
                          {
                            LocationCode: 'DFW',
                            RPH: 1,
                          },
                        ],
                        FlightNumber: [
                          {
                            RPH: 1,
                            content: '2923',
                          },
                        ],
                        OriginLocation: [
                          {
                            LocationCode: 'LAS',
                            RPH: 1,
                          },
                        ],
                        PNR_Segment: [
                          {
                            RPH: 1,
                            content: '2',
                          },
                        ],
                        ResBookDesigCode: [
                          {
                            RPH: 1,
                            content: 'Y',
                          },
                        ],
                        StatusCode: [
                          {
                            RPH: 1,
                            content: 'SS',
                          },
                        ],
                      },
                      CarrierWhoseBaggageProvisionsApply: 'AA',
                      NumPiecesBDI: '2',
                      NumPiecesITR: ['1', '1'],
                      ProvisionType: 'B',
                      SubCodeInfo: {
                        SubCodeForAllowance: [
                          {
                            RPH: 1,
                            content: '0MMACAA',
                          },
                          {
                            RPH: 2,
                            content: '0MUACAA',
                          },
                        ],
                        SubCodeForChargesOthers: '0LNABAA',
                      },
                    },
                    {
                      RPH: '5',
                      Associations: {
                        CarrierCode: [
                          {
                            RPH: 1,
                            content: 'AA',
                          },
                        ],
                        CountForSegmentAssociatedID: '1',
                        DepartureDate: [
                          {
                            RPH: 1,
                            content: '2020-03-09',
                          },
                        ],
                        DestinationLocation: [
                          {
                            LocationCode: 'DFW',
                            RPH: 1,
                          },
                        ],
                        FlightNumber: [
                          {
                            RPH: 1,
                            content: '2923',
                          },
                        ],
                        OriginLocation: [
                          {
                            LocationCode: 'LAS',
                            RPH: 1,
                          },
                        ],
                        PNR_Segment: [
                          {
                            RPH: 1,
                            content: '2',
                          },
                        ],
                        ResBookDesigCode: [
                          {
                            RPH: 1,
                            content: 'Y',
                          },
                        ],
                        StatusCode: [
                          {
                            RPH: 1,
                            content: 'SS',
                          },
                        ],
                      },
                      CarrierWhoseBaggageProvisionsApply: 'AA',
                      Commissionable: 'N',
                      FeeNotGuaranteedIndicator: 'Y',
                      NoChargeNotAvailableIndicator: 'X',
                      PassengerType: {
                        Code: 'ADT',
                      },
                      PriceInformation: {
                        Base: {
                          Amount: '0.00',
                        },
                        Equiv: {
                          CurrencyCode: 'USD',
                        },
                      },
                      ProvisionType: 'E',
                      SubCodeInfo: {
                        SubCodeForChargesOthers: '0DQAEAA',
                      },
                    },
                  ],
                  FareCalculation: {
                    Text: 'LAS AA DFW867.91USD867.91END ZPLAS XFLAS4.5',
                  },
                  FareCalculationBreakdown: [
                    {
                      Branch: {
                        PCC: 'G7HE',
                        FirstJointCarrier: 'AA',
                      },
                      Departure: {
                        CityCode: 'LAS',
                        AirportCode: 'LAS',
                        AirlineCode: 'AA',
                        GenericInd: 'O',
                        ArrivalCityCode: 'DFW',
                        ArrivalAirportCode: 'DFW',
                      },
                      FareBasis: {
                        Code: 'YA2AAN',
                        FareAmount: '867.91',
                        FarePassengerType: 'ADT',
                        FareType: 'P',
                        FilingCarrier: 'AA',
                        GlobalInd: 'WH',
                        TripTypeInd: 'O',
                        Market: 'LASDFW',
                        Cabin: 'Y',
                      },
                      FreeBaggageAllowance: 'NONIL',
                      RuleCategoryIndicator: [
                        '5',
                        '8',
                        '10',
                        '12',
                        '15',
                        '16',
                        '18',
                        '23',
                      ],
                    },
                  ],
                  ItinTotalFare: {
                    NonRefundableInd: 'N',
                    BaggageInfo: {
                      US_DOT_Disclosure: {
                        Text: [
                          'BAG ALLOWANCE     -LASDFW-NIL/AA',
                          '1STCHECKED BAG FEE-LASDFW-USD30.00/AA/UP TO 50 POUNDS/23 KILOGR',
                          'AMS AND UP TO 62 LINEAR INCHES/158 LINEAR CENTIMETERS**',
                          '2NDCHECKED BAG FEE-LASDFW-USD40.00/AA/UP TO 50 POUNDS/23 KILOGR',
                          'AMS AND UP TO 62 LINEAR INCHES/158 LINEAR CENTIMETERS**',
                          '**BAG FEES APPLY AT EACH CHECK IN LOCATION',
                          'CARRY ON ALLOWANCE',
                          'LASDFW-02P/AA',
                          '01/UP TO 40 LINEAR INCHES/101 LINEAR CENTIMETERS',
                          '01/UP TO 45 LINEAR INCHES/115 LINEAR CENTIMETERS',
                          'ADDITIONAL ALLOWANCES AND/OR DISCOUNTS MAY APPLY DEPENDING ON',
                          'FLYER-SPECIFIC FACTORS /E.G. FREQUENT FLYER STATUS/MILITARY/',
                          'CREDIT CARD FORM OF PAYMENT/EARLY PURCHASE OVER INTERNET,ETC./',
                          'EMBARGOES-APPLY TO EACH PASSENGER',
                          'LASDFW-AA',
                          'OVER 100 POUNDS/45 KILOGRAMS NOT PERMITTED',
                        ],
                      },
                    },
                    BaseFare: {
                      Amount: '867.91',
                      CurrencyCode: 'USD',
                    },
                    Construction: {
                      Amount: '867.91',
                      CurrencyCode: 'USD',
                      RateOfExchange: '1.000000',
                    },
                    Endorsements: {
                      Text: [
                        'NONREF/SVCCHGPLUSFAREDIF/CXL BY FLT TIME OR NOVALUE',
                      ],
                    },
                    Taxes: {
                      TotalAmount: '79.39',
                      Tax: [
                        {
                          Amount: '65.09',
                          TaxCode: 'US1',
                          TaxName: 'TRANSPORTATION TAX DOMESTIC WH',
                          TicketingTaxCode: 'US',
                        },
                        {
                          Amount: '4.20',
                          TaxCode: 'ZP',
                          TaxName: 'FLIGHT SEGMENT TAX DOMESTIC',
                          TicketingTaxCode: 'ZP',
                        },
                        {
                          Amount: '5.60',
                          TaxCode: 'AY',
                          TaxName: 'PASSENGER CIVIL AVIATION SECUR',
                          TicketingTaxCode: 'AY',
                        },
                        {
                          Amount: '4.50',
                          TaxCode: 'XF',
                          TaxName: 'PASSENGER FACILITY CHARGE',
                          TicketingTaxCode: 'XF',
                        },
                      ],
                    },
                    TotalFare: {
                      Amount: '947.30',
                      CurrencyCode: 'USD',
                    },
                    Warnings: {
                      Warning: [
                        {
                          ShortText: 'BAG ALLOWANCE     -LASDFW-NIL/AA',
                        },
                        {
                          ShortText:
                            '1STCHECKED BAG FEE-LASDFW-USD30.00/AA/UP TO 50 POUNDS/23 KILOGR',
                        },
                        {
                          ShortText:
                            'AMS AND UP TO 62 LINEAR INCHES/158 LINEAR CENTIMETERS**',
                        },
                        {
                          ShortText:
                            '2NDCHECKED BAG FEE-LASDFW-USD40.00/AA/UP TO 50 POUNDS/23 KILOGR',
                        },
                        {
                          ShortText:
                            'AMS AND UP TO 62 LINEAR INCHES/158 LINEAR CENTIMETERS**',
                        },
                        {
                          ShortText:
                            '**BAG FEES APPLY AT EACH CHECK IN LOCATION',
                        },
                        {
                          ShortText: 'CARRY ON ALLOWANCE',
                        },
                        {
                          ShortText: 'LASDFW-02P/AA',
                        },
                        {
                          ShortText:
                            '01/UP TO 40 LINEAR INCHES/101 LINEAR CENTIMETERS',
                        },
                        {
                          ShortText:
                            '01/UP TO 45 LINEAR INCHES/115 LINEAR CENTIMETERS',
                        },
                        {
                          ShortText:
                            'ADDITIONAL ALLOWANCES AND/OR DISCOUNTS MAY APPLY DEPENDING ON',
                        },
                        {
                          ShortText:
                            'FLYER-SPECIFIC FACTORS /E.G. FREQUENT FLYER STATUS/MILITARY/',
                        },
                        {
                          ShortText:
                            'CREDIT CARD FORM OF PAYMENT/EARLY PURCHASE OVER INTERNET,ETC./',
                        },
                        {
                          ShortText: 'EMBARGOES-APPLY TO EACH PASSENGER',
                        },
                        {
                          ShortText: 'LASDFW-AA',
                        },
                        {
                          ShortText:
                            'OVER 100 POUNDS/45 KILOGRAMS NOT PERMITTED',
                        },
                      ],
                    },
                  },
                  PassengerTypeQuantity: {
                    Code: 'ADT',
                    Quantity: '1',
                  },
                  PTC_FareBreakdown: [
                    {
                      Cabin: 'Y',
                      FareBasis: {
                        Code: 'YA2AAN',
                        FareAmount: '867.91',
                        FarePassengerType: 'ADT',
                        FareType: 'P',
                        FilingCarrier: 'AA',
                        GlobalInd: 'WH',
                        Market: 'LASDFW',
                      },
                      FreeBaggageAllowance: 'NONIL',
                    },
                  ],
                },
              ],
            },
          },
        },
      ],
      TravelItineraryRead: {
        TravelItinerary: {
          CustomerInfo: {
            Address: {
              AddressLine: [
                {
                  Id: '6',
                  type: 'O',
                  content: 'SABRE TRAVEL',
                },
                {
                  Id: '7',
                  type: 'O',
                  content: '3150 SABRE DRIVE',
                },
                {
                  Id: '8',
                  type: 'O',
                  content: 'SOUTHLAKE, TX US',
                },
                {
                  Id: '9',
                  type: 'O',
                  content: '76092',
                },
              ],
            },
            ContactNumbers: {
              ContactNumber: [
                {
                  LocationCode: 'DFW',
                  Phone: '202-555-0137-H-1.1',
                  RPH: '001',
                  Id: '5',
                },
              ],
            },
            PaymentInfo: {
              Payment: {
                Form: [
                  {
                    RPH: '001',
                    Id: '69',
                    Text: ['CHECK'],
                  },
                ],
              },
            },
            PersonName: [
              {
                WithInfant: 'false',
                NameNumber: '01.01',
                NameReference: 'ABC123',
                PassengerType: 'ADT',
                RPH: '1',
                elementId: 'pnr-2.1',
                GivenName: 'Nabeel',
                Surname: 'Ahmed',
              },
            ],
          },
          ItineraryInfo: {
            ItineraryPricing: {
              PriceQuote: [
                {
                  RPH: '1',
                  MiscInformation: {
                    BaggageFees: {
                      Text: [
                        'BAG ALLOWANCE     -LASDFW-NIL/AA',
                        '1STCHECKED BAG FEE-LASDFW-USD30.00/AA/UP TO 50 POUNDS/23 KILOGR',
                        'AMS AND UP TO 62 LINEAR INCHES/158 LINEAR CENTIMETERS**',
                        '2NDCHECKED BAG FEE-LASDFW-USD40.00/AA/UP TO 50 POUNDS/23 KILOGR',
                        'AMS AND UP TO 62 LINEAR INCHES/158 LINEAR CENTIMETERS**',
                        '**BAG FEES APPLY AT EACH CHECK IN LOCATION',
                        'CARRY ON ALLOWANCE',
                        'LASDFW-02P/AA',
                        '01/UP TO 40 LINEAR INCHES/101 LINEAR CENTIMETERS',
                        '01/UP TO 45 LINEAR INCHES/115 LINEAR CENTIMETERS',
                        'ADDITIONAL ALLOWANCES AND/OR DISCOUNTS MAY APPLY DEPENDING ON',
                        'FLYER-SPECIFIC FACTORS /E.G. FREQUENT FLYER STATUS/MILITARY/',
                        'CREDIT CARD FORM OF PAYMENT/EARLY PURCHASE OVER INTERNET,ETC./',
                        'EMBARGOES-APPLY TO EACH PASSENGER',
                        'LASDFW-AA',
                        'OVER 100 POUNDS/45 KILOGRAMS NOT PERMITTED',
                      ],
                    },
                    SignatureLine: [
                      {
                        ExpirationDateTime: '00:00',
                        Source: 'SYS',
                        Status: 'ACTIVE',
                        Text: 'G7HE G7HE*AWT 0848/12DEC19',
                      },
                    ],
                  },
                  PricedItinerary: [
                    {
                      DisplayOnly: false,
                      InputMessage: 'WPFCK¥P1ADT¥RQ',
                      RPH: '1',
                      StatusCode: 'A',
                      TaxExempt: false,
                      ValidatingCarrier: 'AA',
                      StoredDateTime: '2019-12-12T08:48',
                      AirItineraryPricingInfo: {
                        ItinTotalFare: [
                          {
                            BaseFare: {
                              Amount: '867.91',
                              CurrencyCode: 'USD',
                            },
                            Taxes: {
                              Tax: {
                                Amount: '79.39',
                                TaxCode: 'XT',
                              },
                              TaxBreakdownCode: [
                                {
                                  TaxPaid: false,
                                  content: '65.09US',
                                },
                                {
                                  TaxPaid: false,
                                  content: '4.20ZP',
                                },
                                {
                                  TaxPaid: false,
                                  content: '5.60AY',
                                },
                                {
                                  TaxPaid: false,
                                  content: '4.50XF',
                                },
                              ],
                            },
                            TotalFare: {
                              Amount: '947.30',
                              CurrencyCode: 'USD',
                            },
                            Totals: {
                              BaseFare: {
                                Amount: '867.91',
                              },
                              Taxes: {
                                Tax: {
                                  Amount: '79.39',
                                },
                              },
                              TotalFare: {
                                Amount: '947.30',
                              },
                            },
                          },
                        ],
                        PassengerTypeQuantity: [
                          {
                            Code: 'ADT',
                            Quantity: '01',
                          },
                        ],
                        PTC_FareBreakdown: [
                          {
                            Endorsements: {
                              Endorsement: [
                                {
                                  type: 'PRICING_PARAMETER',
                                  Text: 'WPFCK$P1ADT$RQ',
                                },
                                {
                                  type: 'WARNING',
                                  Text: 'VALIDATING CARRIER - AA',
                                },
                                {
                                  type: 'SYSTEM_ENDORSEMENT',
                                  Text: 'NONREF/SVCCHGPLUSFAREDIF/CXL BY FLT TIME OR NOVALUE',
                                },
                                {
                                  type: 'DOT_BAGGAGE',
                                  Text: 'BAG ALLOWANCE     -LASDFW-NIL/AA',
                                },
                                {
                                  type: 'DOT_BAGGAGE',
                                  Text: '1STCHECKED BAG FEE-LASDFW-USD30.00/AA/UP TO 50 POUNDS/23 KILOGR',
                                },
                                {
                                  type: 'DOT_BAGGAGE',
                                  Text: 'AMS AND UP TO 62 LINEAR INCHES/158 LINEAR CENTIMETERS**',
                                },
                                {
                                  type: 'DOT_BAGGAGE',
                                  Text: '2NDCHECKED BAG FEE-LASDFW-USD40.00/AA/UP TO 50 POUNDS/23 KILOGR',
                                },
                                {
                                  type: 'DOT_BAGGAGE',
                                  Text: 'AMS AND UP TO 62 LINEAR INCHES/158 LINEAR CENTIMETERS**',
                                },
                                {
                                  type: 'DOT_BAGGAGE',
                                  Text: '**BAG FEES APPLY AT EACH CHECK IN LOCATION',
                                },
                                {
                                  type: 'DOT_BAGGAGE',
                                  Text: 'CARRY ON ALLOWANCE',
                                },
                                {
                                  type: 'DOT_BAGGAGE',
                                  Text: 'LASDFW-02P/AA',
                                },
                                {
                                  type: 'DOT_BAGGAGE',
                                  Text: '01/UP TO 40 LINEAR INCHES/101 LINEAR CENTIMETERS',
                                },
                                {
                                  type: 'DOT_BAGGAGE',
                                  Text: '01/UP TO 45 LINEAR INCHES/115 LINEAR CENTIMETERS',
                                },
                                {
                                  type: 'DOT_BAGGAGE',
                                  Text: 'ADDITIONAL ALLOWANCES AND/OR DISCOUNTS MAY APPLY DEPENDING ON',
                                },
                                {
                                  type: 'DOT_BAGGAGE',
                                  Text: 'FLYER-SPECIFIC FACTORS /E.G. FREQUENT FLYER STATUS/MILITARY/',
                                },
                                {
                                  type: 'DOT_BAGGAGE',
                                  Text: 'CREDIT CARD FORM OF PAYMENT/EARLY PURCHASE OVER INTERNET,ETC./',
                                },
                                {
                                  type: 'DOT_BAGGAGE',
                                  Text: 'EMBARGOES-APPLY TO EACH PASSENGER',
                                },
                                {
                                  type: 'DOT_BAGGAGE',
                                  Text: 'LASDFW-AA',
                                },
                                {
                                  type: 'DOT_BAGGAGE',
                                  Text: 'OVER 100 POUNDS/45 KILOGRAMS NOT PERMITTED',
                                },
                              ],
                            },
                            FareBasis: [
                              {
                                Code: 'YA2AAN',
                              },
                            ],
                            FareCalculation: {
                              Text: [
                                'LAS AA DFW867.91USD867.91END ZPLAS XFLAS4.5',
                              ],
                            },
                            FareSource: 'ATPC',
                            FlightSegment: [
                              {
                                ConnectionInd: 'O',
                                DepartureDateTime: '03-09T10:27',
                                FlightNumber: '2923',
                                ResBookDesigCode: 'Y',
                                SegmentNumber: '1',
                                Status: 'OK',
                                BaggageAllowance: {
                                  Number: 'NIL',
                                },
                                FareBasis: {
                                  Code: 'YA2AAN',
                                },
                                MarketingAirline: {
                                  Code: 'AA',
                                  FlightNumber: '2923',
                                },
                                OriginLocation: {
                                  LocationCode: 'LAS',
                                },
                                ValidityDates: {
                                  NotValidAfter: '2020-03-09',
                                  NotValidBefore: '2020-03-09',
                                },
                              },
                              {
                                OriginLocation: {
                                  LocationCode: 'DFW',
                                },
                              },
                            ],
                            FareComponent: [
                              {
                                FareBasisCode: 'YA2AAN',
                                FareDirectionality: 'FROM',
                                Amount: '86791',
                                TicketDesignator: '',
                                GoverningCarrier: 'AA',
                                FareComponentNumber: '1',
                                Location: {
                                  Origin: 'LAS',
                                  Destination: 'DFW',
                                },
                                Dates: {
                                  DepartureDateTime: '03-09T10:27',
                                  ArrivalDateTime: '03-09T15:11',
                                },
                                FlightSegmentNumbers: {
                                  FlightSegmentNumber: ['1'],
                                },
                              },
                            ],
                            ResTicketingRestrictions: [
                              'LAST DAY TO PURCHASE 13DEC/2359',
                              'GUARANTEED FARE APPL IF PURCHASED BEFORE 13DEC',
                            ],
                          },
                        ],
                      },
                    },
                  ],
                  ResponseHeader: {
                    Text: [
                      'FARE - PRICE RETAINED',
                      'FARE USED TO CALCULATE DISCOUNT',
                      'FARE NOT GUARANTEED UNTIL TICKETED',
                    ],
                  },
                  PriceQuotePlus: {
                    DomesticIntlInd: 'I',
                    PricingStatus: 'S',
                    VerifyFareCalc: false,
                    ItineraryChanged: false,
                    ManualFare: false,
                    NegotiatedFare: false,
                    SystemIndicator: 'S',
                    NUCSuppresion: false,
                    SubjToGovtApproval: false,
                    IT_BT_Fare: 'BT',
                    DisplayOnly: false,
                    DiscountAmount: '0',
                    PassengerInfo: {
                      PassengerType: 'ADT',
                      PassengerData: [
                        {
                          NameNumber: '01.01',
                          content: 'DZIK/WIELGACHNY',
                        },
                      ],
                    },
                    TicketingInstructionsInfo: {},
                  },
                },
              ],
              PriceQuoteTotals: {
                BaseFare: {
                  Amount: '867.91',
                },
                Taxes: {
                  Tax: {
                    Amount: '79.39',
                  },
                },
                TotalFare: {
                  Amount: '947.30',
                },
              },
            },
            ReservationItems: {
              Item: [
                {
                  RPH: '1',
                  FlightSegment: [
                    {
                      AirMilesFlown: '1055',
                      ArrivalDateTime: '03-09T15:11',
                      DayOfWeekInd: '1',
                      DepartureDateTime: '2020-03-09T10:27',
                      SegmentBookedDate: '2019-12-12T08:48:00',
                      ElapsedTime: '02.44',
                      eTicket: true,
                      FlightNumber: '2923',
                      NumberInParty: '01',
                      ResBookDesigCode: 'Y',
                      SegmentNumber: '0001',
                      SmokingAllowed: false,
                      SpecialMeal: false,
                      Status: 'HK',
                      StopQuantity: '00',
                      IsPast: false,
                      CodeShare: false,
                      Id: '11',
                      DestinationLocation: {
                        LocationCode: 'DFW',
                      },
                      Equipment: {
                        AirEquipType: '321',
                      },
                      MarketingAirline: {
                        Code: 'AA',
                        FlightNumber: '2923',
                        ResBookDesigCode: 'Y',
                        Banner: 'MARKETED BY AMERICAN AIRLINES',
                      },
                      Meal: [
                        {
                          Code: 'F',
                        },
                      ],
                      OperatingAirline: [
                        {
                          Code: 'AA',
                          FlightNumber: '2923',
                          ResBookDesigCode: 'Y',
                          Banner: 'OPERATED BY AMERICAN AIRLINES',
                        },
                      ],
                      OperatingAirlinePricing: {
                        Code: 'AA',
                      },
                      DisclosureCarrier: {
                        Code: 'AA',
                        DOT: false,
                        Banner: 'AMERICAN AIRLINES',
                      },
                      OriginLocation: {
                        LocationCode: 'LAS',
                        Terminal: 'TERMINAL 1',
                        TerminalCode: '1',
                      },
                      SupplierRef: {
                        ID: 'DCAA*DAVRGS',
                      },
                      UpdatedArrivalTime: '03-09T15:11',
                      UpdatedDepartureTime: '03-09T10:27',
                    },
                  ],
                  Product: {
                    ProductDetails: {
                      productCategory: 'AIR',
                      ProductName: {
                        type: 'AIR',
                        content: '',
                      },
                      Air: {
                        sequence: 1,
                        segmentAssociationId: 2,
                        DepartureAirport: 'LAS',
                        DepartureTerminalName: 'TERMINAL 1',
                        DepartureTerminalCode: '1',
                        ArrivalAirport: 'DFW',
                        EquipmentType: '321',
                        MarketingAirlineCode: 'AA',
                        MarketingFlightNumber: '2923',
                        MarketingClassOfService: 'Y',
                        MealCode: ['F'],
                        ElapsedTime: 164,
                        AirMilesFlown: 1055,
                        FunnelFlight: false,
                        ChangeOfGauge: false,
                        DisclosureCarrier: {
                          Code: 'AA',
                          DOT: false,
                          Banner: 'AMERICAN AIRLINES',
                        },
                        AirlineRefId: 'DCAA*DAVRGS',
                        Eticket: true,
                        DepartureDateTime: '2020-03-09T10:27:00',
                        ArrivalDateTime: '2020-03-09T15:11:00',
                        FlightNumber: '2923',
                        ClassOfService: 'Y',
                        ActionCode: 'HK',
                        NumberInParty: 1,
                        inboundConnection: false,
                        outboundConnection: false,
                        SegmentBookedDate: '2019-12-12T08:48:00',
                      },
                    },
                  },
                },
                {
                  RPH: '2',
                  Hotel: {
                    DayOfWeekInd: '3',
                    NumberInParty: '01',
                    NumberOfUnits: '1',
                    SegmentNumber: '0002',
                    Status: 'HK',
                    Type: 'HHL',
                    IsPast: false,
                    Id: '23',
                    BasicPropertyInfo: {
                      ChainCode: 'EA',
                      HotelCityCode: 'DFW',
                      HotelCode: '58393',
                      HotelName: 'ESA DALLAS DFW AIRPORT N',
                      Address: {
                        AddressLine: ['7825 HEATHROW DRIVE'],
                        CountryCode: 'US',
                      },
                      CancelPenalty: [
                        {
                          PolicyCode: '06P',
                        },
                      ],
                      ConfirmationNumber: ['2111370829-'],
                      DirectConnect: 'DCEA',
                      ContactNumbers: {
                        ContactNumber: [
                          {
                            Fax: '972-929-4801',
                            Phone: '972-929-3333',
                          },
                        ],
                      },
                    },
                    Customer: {
                      ReserveUnderName: ['DZIK WIELGACHNY'],
                    },
                    Guarantee: 'VI4XXXXXXXXXXX1111EXP 12 21-DZIK',
                    POS: {
                      Source: {
                        RequestorID: ['99999999'],
                      },
                    },
                    RoomRates: {
                      Commission: {
                        NonCommission: false,
                        Percent: '10.00',
                        content: 'AGENT COMMISSION 10.00 PERCENT',
                      },
                      Rate: {
                        Amount: '104.99',
                        CurrencyCode: 'USD',
                        RoomTypeCode: 'A0AA01',
                        HotelTotalPricing: {
                          TotalTax: {
                            Tax: [
                              {
                                Id: 'TX1',
                                content: '25.20 25502-STATE RO',
                              },
                              {
                                Id: 'TX2',
                                content: '37.80 25605-CITY  RO',
                              },
                            ],
                          },
                          TotalSurcharge: {
                            Amount: '0.00',
                          },
                          ApproximateTotal: {
                            AmountAndCurrency: '482.95 USD',
                          },
                        },
                        RateAccessCodeBooked: {
                          ClientIdentificationCode: '   ',
                          RateAccessCode: '   ',
                          CategoryTypeCode: 'R',
                        },
                      },
                    },
                    TimeSpan: {
                      Duration: '004',
                      End: '03-15',
                      Start: '03-11',
                    },
                  },
                  Product: {
                    ProductBase: {
                      SegmentReference: 23,
                    },
                    ProductDetails: {
                      productCategory: 'AGTLCSSEGMENT',
                      productType: 'HHL',
                      vendorCode: 'EA',
                      statusCode: 'HK',
                      startPoint: 'DFW',
                      startDateTime: '2020-03-11T00:00:00',
                      endPoint: 'DFW',
                      endDateTime: '2020-03-15T00:00:00',
                      ProductName: {
                        type: 'HHL',
                        content: 'Lodging',
                      },
                      Lodging: {
                        ResGlobalInfo: {
                          BookingInfo: {
                            Status: '39',
                            InfoSource: '100',
                            RateKey:
                              'ai20pLi4+jBwjzazENuVfgFEJ5AuU6JX6QfkHGTwp+kIgUgk8mGLqO4/kPi4wCrdjH1sDuongiuXbQ0jeRjmeUJTL/NBVnUwG+A3eGEobPZ0CRlk3rmxQV0NauiCVssiq/0vt8X4QqFtAkAexTV2Ed1DuIrY+emxsuFpYI4RSrksosi+gKyrge1kw4uzm6KytAaN6aKGWbk5+CKXHLH+x3blcjwsP7sxItrd0VGRxTelL7bKYR1HsI8QnqL/0IwW+QKBgLVOBAh/DezZtJRtZNn8wMu/HF2mPuxG8CMbpHhlrD3R4xKL/J5hnQRMQugkgXK2oAu2aGZ9MXInueoO8wvpGoxKNb7XrlzOjruJVEISM3EPDErY103pdwGwvao1bCBLUWLTZZMjkxyV0HFeRZW4P3vuR6f9iuiQV6Mff8M=',
                            TransactionId: '15dfa7153c13-CTS1',
                            BookingKey: 'b6bfc130-5588-4302-a0d4-4b023d98b9f4',
                            HotelReservationIds: {
                              HotelReservation: [
                                {
                                  Id: '2111370829',
                                  Type: 40,
                                },
                                {
                                  Id: 'DAVRGS',
                                  Type: 24,
                                },
                              ],
                            },
                          },
                          HotelInfo: {
                            HotelCode: '100086112',
                            CodeContext: 'GLOBAL',
                            GlobalChainCode: 'EA',
                            HotelName: 'Esa Dallas Dfw Airport N',
                            BrandCode: '10000',
                            SabreRating: '1.0',
                            ChainName: 'Extended Stay America',
                            BrandName: 'undefined',
                            SupplierChainCode: 'EA',
                            SourceHotelCode: '58393',
                            LocationInfo: {
                              Latitude: '32.91592',
                              Longitude: '-97.01404',
                              Address: {
                                AddressLine1: '7825 Heathrow Drive',
                                CityName: {
                                  CityCode: 'DFW',
                                  content: 'Irving',
                                },
                                StateProv: {
                                  StateCode: 'TX',
                                  content: '',
                                },
                                PostalCode: '75063',
                                CountryName: {
                                  Code: 'US',
                                  content: 'United States (the)',
                                },
                              },
                              Contact: {
                                Phone: '972-929-3333',
                                Fax: '972-929-4801',
                              },
                            },
                            Amenities: {
                              Amenity: [
                                {
                                  Code: 101,
                                  Description: 'Wheelchair access',
                                },
                                {
                                  Code: 137,
                                  Description:
                                    'Complimentary in-room coffee or tea',
                                },
                                {
                                  Code: 162,
                                  Description: 'Meal plan available',
                                },
                                {
                                  Code: 168,
                                  Description: 'Onsite laundry',
                                },
                                {
                                  Code: 179,
                                  Description:
                                    'Wireless internet connection in public areas',
                                },
                                {
                                  Code: 181,
                                  Description:
                                    'Transportation services - local area',
                                },
                                {
                                  Code: 198,
                                  Description: 'Non-smoking rooms (generic)',
                                },
                                {
                                  Code: 2004,
                                  Description: 'Local Calls',
                                },
                                {
                                  Code: 2006,
                                  Description: 'Refrigerator',
                                },
                                {
                                  Code: 2009,
                                  Description: 'Free WIFI in meeting rooms',
                                },
                                {
                                  Code: 218,
                                  Description: 'Children welcome',
                                },
                                {
                                  Code: 220,
                                  Description:
                                    'Hotel does not provide pornographic films/TV',
                                },
                                {
                                  Code: 227,
                                  Description: 'Complimentary breakfast',
                                  ComplimentaryInd: true,
                                },
                                {
                                  Code: 24,
                                  Description: 'Conference facilities',
                                },
                                {
                                  Code: 258,
                                  Description: 'Accessible rooms',
                                },
                                {
                                  Code: 259,
                                  Description: 'High speed internet access',
                                },
                                {
                                  Code: 260,
                                  Description: 'Interior corridors',
                                },
                                {
                                  Code: 261,
                                  Description: 'High speed wireless',
                                },
                                {
                                  Code: 262,
                                  Description: 'Kitchenette',
                                },
                                {
                                  Code: 282,
                                  Description: 'Airport shuttle service',
                                },
                                {
                                  Code: 312,
                                  Description: 'Smoke-free property',
                                },
                                {
                                  Code: 42,
                                  Description: 'Free parking',
                                  ComplimentaryInd: true,
                                },
                                {
                                  Code: 44,
                                  Description: 'Game room',
                                },
                                {
                                  Code: 48,
                                  Description: 'Health club',
                                },
                              ],
                            },
                            PropertyTypeInfo: {
                              PropertyType: [
                                {
                                  Code: 13,
                                  Description: 'Extended stay',
                                },
                              ],
                            },
                          },
                          StayDateRange: {
                            StartDate: '2020-03-11',
                            EndDate: '2020-03-15',
                          },
                          Total: {
                            AmountAfterTax: 482.95,
                            CurrencyCode: 'USD',
                            Changed: false,
                            SupplierChangedAmount: 104.99,
                          },
                          AdditionalDetails: {
                            AdditionalDetail: [
                              {
                                Code: 14,
                                Text: [
                                  'VISIT US ON THE WEB AT WWW.EXTENDEDSTAY.COM',
                                  'THANK YOU FOR BOOKING EXTENDED STAY HOTELS',
                                  'BY 1800 11MAR2020 LOCAL PROPERTY TIME',
                                  'CREDIT CARD GUARANTEE',
                                  'BY 1800 11MAR2020 LOCAL PROPERTY TIME',
                                  'CREDIT CARD GUARANTEE',
                                ],
                              },
                              {
                                Code: 2101,
                                Text: [
                                  'BY 1800 11MAR2020 LOCAL PROPERTY TIME',
                                  'CREDIT CARD GUARANTEE',
                                ],
                              },
                            ],
                          },
                          Commission: {
                            CommissionIndicator: true,
                            Type: 'Variable',
                            CommissionDescription: {
                              Text: 'AGENT COMMISSION 10.00 PERCENT',
                            },
                          },
                        },
                        Rooms: {
                          Room: [
                            {
                              RoomIndex: 1,
                              InvBlockCode: 'A0AA01',
                              SegmentNumber: 1,
                              GuestRoomInfo: 16,
                              Guests: {
                                Count: 1,
                                Guest: [
                                  {
                                    FirstName: 'WIELGACHNY',
                                    LastName: 'DZIK',
                                    Email: 'services.platform.test@sabre.com',
                                    Index: 1,
                                    LeadGuest: true,
                                    Type: 10,
                                    Contact: {
                                      Phone: '202-555-0137',
                                    },
                                  },
                                ],
                              },
                              RoomDescription: {
                                Name: 'CORPORATE RATE',
                                Text: 'STANDARD STUDIO 2 QUEENS NONSMKNG ACCESSIBLE FREE WIFI AND GRAB AND GO BKFST 32IN LCD TV KITCHEN DINING AND WORK AREA AVAILABLE TO GUESTS TRAVELING ON BUSINESS RATE COMMISSIONABLE AT 10PCT UP TO 7 NIGHTS TAXES AND SERVICE CHARGES NOT INCLUDED 104.99 PER NIGHT STARTING 11MAR FOR 4 NIGHTS 419.96 TOTAL RATE STARTING 11MAR FOR 4 NIGHTS',
                              },
                              BookingStatus: 'null',
                              RatePlan: {
                                RatePlanName: 'CORPORATE RATE',
                                RatePlanType: '24',
                                PrepaidIndicator: false,
                                RatePlanDescription: {},
                                RatePlanInclusions: {},
                                MealsIncluded: {
                                  MealIncluded: [{}],
                                },
                                RateInfo: {
                                  AmountBeforeTax: 419.96,
                                  AmountAfterTax: 482.95,
                                  CurrencyCode: 'USD',
                                  NightlyRate: 104.99,
                                  AdditionalFeesInclusive: true,
                                  TaxInclusive: true,
                                  AdditionalDetails: {
                                    AdditionalDetail: [
                                      {
                                        Code: 32,
                                        Text: ['INCLUDES TAXES AND SURCHARGES'],
                                      },
                                    ],
                                  },
                                  Fees: {
                                    Amount: 0,
                                  },
                                  Taxes: {
                                    Amount: 62.99,
                                    CurrencyCode: 'USD',
                                    Tax: [
                                      {
                                        Code: 27,
                                        Amount: 25.2,
                                        CurrencyCode: 'USD',
                                        TaxDescription: {
                                          Text: '25502-STATE ROOM TAX',
                                        },
                                      },
                                      {
                                        Code: 27,
                                        Amount: 37.8,
                                        CurrencyCode: 'USD',
                                        TaxDescription: {
                                          Text: '25605-CITY  ROOM TAX',
                                        },
                                      },
                                    ],
                                  },
                                  CancelPenalties: {
                                    CancelPenalty: [
                                      {
                                        Refundable: true,
                                        Deadline: {
                                          AbsoluteDeadline:
                                            '2020-03-11T18:00:00',
                                        },
                                      },
                                    ],
                                  },
                                  Guarantee: {
                                    GuaranteeType: 'GUAR',
                                    GuaranteesAccepted: {
                                      GuaranteeAccepted: [
                                        {
                                          GuaranteeTypeCode: 5,
                                          PaymentCards: {
                                            PaymentCard: [
                                              {
                                                CardCode: 'AX',
                                                content: 'AMERICAN EXPRESS',
                                              },
                                              {
                                                CardCode: 'CA',
                                                content: 'MASTERCARD',
                                              },
                                              {
                                                CardCode: 'DC',
                                                content: 'DINERS CLUB CARD',
                                              },
                                              {
                                                CardCode: 'DS',
                                                content: 'DISCOVER CARD',
                                              },
                                              {
                                                CardCode: 'IK',
                                                content: 'MASTER CARD',
                                              },
                                              {
                                                CardCode: 'JC',
                                                content: 'JCB CREDIT CARD',
                                              },
                                              {
                                                CardCode: 'MC',
                                                content: 'MASTER CARD',
                                              },
                                              {
                                                CardCode: 'VI',
                                                content: 'VISA',
                                              },
                                              {
                                                CardCode: 'VS',
                                                content: 'VISA',
                                              },
                                            ],
                                          },
                                        },
                                        {
                                          GuaranteeTypeCode: 19,
                                        },
                                        {
                                          GuaranteeTypeCode: 29,
                                        },
                                      ],
                                    },
                                  },
                                },
                              },
                            },
                          ],
                        },
                        PaymentInformation: {
                          Type: 'GUARANTEE',
                        },
                        POS: {
                          Source: {
                            AgencyName: 'SABRE TRAVEL',
                            ISOCountryCode: 'US',
                            PseudoCityCode: 'G7HE',
                            RequestorID: {
                              Id: '99999999',
                            },
                            AgencyAddress: {
                              AddressLine1: '3150 SABRE DRIVE',
                              AddressLine2: 'SOUTHLAKE, TX US',
                              AddressLine3: '76092',
                              CountryName: {
                                Code: 'US',
                                content: '',
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
                {
                  RPH: '3',
                  MiscSegment: {
                    DayOfWeekInd: '6',
                    DepartureDateTime: '03-14',
                    NumberInParty: '01',
                    SegmentNumber: '0003',
                    Status: 'GK',
                    Type: 'OTH',
                    IsPast: false,
                    Id: '66',
                    OriginLocation: {
                      LocationCode: 'ORD',
                    },
                    Text: ['TEST OTH MISCELLANEOUS SEGMENT'],
                    Vendor: {
                      Code: 'AS',
                    },
                  },
                },
                {
                  RPH: '4',
                  Vehicle: {
                    Id: '51',
                    DayOfWeekInd: '1',
                    SegmentNumber: '0004',
                    Status: 'HK',
                    IsPast: false,
                    ConfirmationNumber: '1005434227COUNT-',
                    DirectConnect: 'DCZL',
                    VehRentalCore: {
                      PickUpDateTime: '03-16T09:00',
                      PickUpDay: '1',
                      ReturnDateTime: '03-23T19:00',
                      LocationDetails: {
                        LocationCode: 'LAS',
                      },
                    },
                    VehVendorAvail: {
                      VehResCore: {
                        PricedEquip: {
                          Equipment: {
                            EquipType: 'CCAR',
                            Quantity: '01',
                          },
                        },
                        RentalRate: {
                          Changed: 'C',
                          GuaranteedQuoted: 'G',
                          RateCode: '¤NW8',
                          STM_RatePlan: '¤NW8',
                          VehicleTypes: {
                            VehType: 'CCAR',
                          },
                        },
                        VehicleCharges: {
                          VehicleCharge: {
                            GuaranteeInd: 'VI4XXXXXXXXXXX1111EXP 12 21-DZIK',
                            Amount: [
                              '¤USD290.00 UNL WY XD48.33 UNL XH24.17 UNL',
                            ],
                            ChargeDetails: {
                              ApproximateTotalCharge: [
                                {
                                  Amount: '290.00',
                                  MileageAllowance: 'UNL',
                                  RateType: 'WEEKLY RATE',
                                },
                                {
                                  Amount: '24.17',
                                  MileageAllowance: 'UNL',
                                  RateType: 'EXTRA HOUR',
                                },
                                {
                                  Amount: '48.33',
                                  MileageAllowance: 'UNL',
                                  RateType: 'EXTRA DAY',
                                },
                                {
                                  Amount: '482.65',
                                  MileageAllowance: 'UNL',
                                  NumDays: '8',
                                  NumHours: '0',
                                  RateType: 'APPROXIMATE TOTAL PRICE',
                                  TotalMandatoryCharges: '144.32',
                                },
                              ],
                            },
                            Mileage: {
                              CurrencyCode: 'USD',
                            },
                          },
                        },
                      },
                      Vendor: {
                        Code: 'ZL',
                      },
                    },
                  },
                },
              ],
            },
            Ticketing: [
              {
                RPH: '01',
                TicketTimeLimit: 'TAW/',
              },
            ],
          },
          ItineraryRef: {
            AirExtras: false,
            ID: 'DAVRGS',
            InhibitCode: 'U',
            PartitionID: 'AA',
            PrimeHostID: '1S',
            Header: ['PRICE QUOTE RECORD EXISTS - SYSTEM'],
            Source: {
              AAA_PseudoCityCode: 'G7HE',
              CreateDateTime: '2019-12-12T08:48',
              CreationAgent: 'AWT',
              HomePseudoCityCode: 'G7HE',
              PseudoCityCode: 'G7HE',
              ReceivedFrom: 'SP TEST',
              LastUpdateDateTime: '2019-12-12T08:48',
              SequenceNumber: '1',
            },
          },
          RemarkInfo: {},
          SpecialServiceInfo: [
            {
              RPH: '001',
              Type: 'AFX',
              Id: '20',
              Service: {
                SSR_Code: 'OSI',
                Text: ['AA HHL EA BY 1800 11MAR2020 LOCAL PROPERTY TIME'],
              },
            },
            {
              RPH: '002',
              Type: 'AFX',
              Id: '21',
              Service: {
                SSR_Code: 'OSI',
                Text: ['AA HHL EA CREDIT CARD GUARANTEE'],
              },
            },
            {
              RPH: '003',
              Type: 'AFX',
              Id: '64',
              Service: {
                SSR_Code: 'OSI',
                Text: ['AA CCR ZL A MINIMUM OF 8 DAYS WILL BE CHARGED'],
              },
            },
            {
              RPH: '004',
              Type: 'AFX',
              Id: '65',
              Service: {
                SSR_Code: 'OSI',
                Text: ['AA CCR ZL EXTRA DAY RATE APPLIES AFTER 7 DAYS'],
              },
            },
            {
              RPH: '005',
              Type: 'AFX',
              Id: '67',
              Service: {
                SSR_Code: 'SSR',
                SSR_Type: 'OTHS',
                Text: ['/CC WIELGACHNY DZIK'],
              },
            },
            {
              RPH: '006',
              Type: 'AFX',
              Id: '68',
              Service: {
                SSR_Code: 'SSR',
                SSR_Type: 'DOCS',
                PersonName: [
                  {
                    NameNumber: '01.01',
                    content: 'DZIK/WIELGACHNY',
                  },
                ],
                Text: ['AA HK1/DB/01JAN1990/M/DZIK/WIELGACHNY'],
              },
            },
            {
              RPH: '001',
              Type: 'GFX',
              Id: '12',
              Service: {
                SSR_Code: 'OSI',
                Airline: {
                  Code: 'EA',
                },
                Text: ['HHL 100086112 A0AA01  D CORPORATE RATE'],
              },
            },
            {
              RPH: '002',
              Type: 'GFX',
              Id: '13',
              Service: {
                SSR_Code: 'OSI',
                Airline: {
                  Code: 'EA',
                },
                Text: ['HHL 100086112 A0AA01  D STANDARD STUDIO 2 QUEENS NON'],
              },
            },
            {
              RPH: '003',
              Type: 'GFX',
              Id: '14',
              Service: {
                SSR_Code: 'OSI',
                Airline: {
                  Code: 'EA',
                },
                Text: ['HHL 100086112 A0AA01  D SMKNG ACCESSIBLE FREE WIFI A'],
              },
            },
            {
              RPH: '004',
              Type: 'GFX',
              Id: '15',
              Service: {
                SSR_Code: 'OSI',
                Airline: {
                  Code: 'EA',
                },
                Text: ['HHL 100086112 A0AA01  TTX 62.99 TTL TAX'],
              },
            },
            {
              RPH: '005',
              Type: 'GFX',
              Id: '16',
              Service: {
                SSR_Code: 'OSI',
                Airline: {
                  Code: 'EA',
                },
                Text: ['HHL 100086112 A0AA01  TX 25.20 25502-STATE ROOM TAX'],
              },
            },
            {
              RPH: '006',
              Type: 'GFX',
              Id: '17',
              Service: {
                SSR_Code: 'OSI',
                Airline: {
                  Code: 'EA',
                },
                Text: ['HHL 100086112 A0AA01  TX 37.80 25605-CITY  ROOM TAX'],
              },
            },
            {
              RPH: '007',
              Type: 'GFX',
              Id: '18',
              Service: {
                SSR_Code: 'OSI',
                Airline: {
                  Code: 'EA',
                },
                Text: ['HHL 100086112 A0AA01  TSC 0 TTL SURCHARGE'],
              },
            },
            {
              RPH: '008',
              Type: 'GFX',
              Id: '19',
              Service: {
                SSR_Code: 'OSI',
                Airline: {
                  Code: 'EA',
                },
                Text: ['HHL 100086112 A0AA01  TP 482.95 USD APPROX. TTL PRIC'],
              },
            },
            {
              RPH: '009',
              Type: 'GFX',
              Id: '22',
              Service: {
                SSR_Code: 'OSI',
                Airline: {
                  Code: 'EA',
                },
                Text: ['HHL 100086112 A0AA01  TD INCLUDES TAXES AND SURCHARG'],
              },
            },
          ],
          OpenReservationElements: {
            OpenReservationElement: [
              {
                id: '3',
                elementId: 'pnr-or-3',
              },
              {
                id: '20',
                type: 'SRVC',
                elementId: 'pnr-20',
                ServiceRequest: {
                  airlineCode: 'AA',
                  serviceType: 'OSI',
                  ssrType: 'AFX',
                  FreeText: 'HHL EA BY 1800 11MAR2020 LOCAL PROPERTY TIME',
                  FullText: 'AA HHL EA BY 1800 11MAR2020 LOCAL PROPERTY TIME',
                },
              },
              {
                id: '21',
                type: 'SRVC',
                elementId: 'pnr-21',
                ServiceRequest: {
                  airlineCode: 'AA',
                  serviceType: 'OSI',
                  ssrType: 'AFX',
                  FreeText: 'HHL EA CREDIT CARD GUARANTEE',
                  FullText: 'AA HHL EA CREDIT CARD GUARANTEE',
                },
              },
              {
                id: '64',
                type: 'SRVC',
                elementId: 'pnr-64',
                ServiceRequest: {
                  airlineCode: 'AA',
                  serviceType: 'OSI',
                  ssrType: 'AFX',
                  FreeText: 'CCR ZL A MINIMUM OF 8 DAYS WILL BE CHARGED',
                  FullText: 'AA CCR ZL A MINIMUM OF 8 DAYS WILL BE CHARGED',
                },
              },
              {
                id: '65',
                type: 'SRVC',
                elementId: 'pnr-65',
                ServiceRequest: {
                  airlineCode: 'AA',
                  serviceType: 'OSI',
                  ssrType: 'AFX',
                  FreeText: 'CCR ZL EXTRA DAY RATE APPLIES AFTER 7 DAYS',
                  FullText: 'AA CCR ZL EXTRA DAY RATE APPLIES AFTER 7 DAYS',
                },
              },
              {
                id: '67',
                type: 'SRVC',
                elementId: 'pnr-67',
                ServiceRequest: {
                  code: 'OTHS',
                  serviceType: 'SSR',
                  ssrType: 'AFX',
                  FreeText: '/CC WIELGACHNY DZIK',
                  FullText: 'OTHS  /CC WIELGACHNY DZIK',
                },
              },
              {
                id: '68',
                type: 'SRVC',
                elementId: 'pnr-68',
                ServiceRequest: {
                  actionCode: 'HK',
                  airlineCode: 'AA',
                  code: 'DOCS',
                  serviceCount: '1',
                  serviceType: 'SSR',
                  ssrType: 'AFX',
                  FreeText: '/DB/01JAN1990/M/DZIK/WIELGACHNY',
                  FullText: 'DOCS AA HK1/DB/01JAN1990/M/DZIK/WIELGACHNY',
                  TravelDocument: {
                    Type: 'DB',
                    DateOfBirth: '01JAN1990',
                    Gender: 'M',
                    LastName: 'DZIK',
                    FirstName: 'WIELGACHNY',
                    Infant: false,
                    HasDocumentData: false,
                  },
                },
                NameAssociation: [
                  {
                    LastName: 'DZIK',
                    FirstName: 'WIELGACHNY',
                    NameRefNumber: '01.01',
                    ReferenceId: 1,
                  },
                ],
              },
              {
                id: '11',
                elementId: 'pnr-or-11',
              },
              {
                id: '11',
                elementId: 'pnr-or-11',
              },
              {
                id: '66',
                elementId: 'pnr-or-66',
              },
              {
                id: '51',
                elementId: 'pnr-or-51',
              },
              {
                id: '12',
                type: 'SRVC',
                elementId: 'pnr-12',
                ServiceRequest: {
                  airlineCode: 'EA',
                  serviceType: 'OSI',
                  ssrType: 'GFX',
                  FreeText: 'HHL 100086112 A0AA01  D CORPORATE RATE',
                  FullText: 'EA HHL 100086112 A0AA01  D CORPORATE RATE',
                },
              },
              {
                id: '13',
                type: 'SRVC',
                elementId: 'pnr-13',
                ServiceRequest: {
                  airlineCode: 'EA',
                  serviceType: 'OSI',
                  ssrType: 'GFX',
                  FreeText:
                    'HHL 100086112 A0AA01  D STANDARD STUDIO 2 QUEENS NON',
                  FullText:
                    'EA HHL 100086112 A0AA01  D STANDARD STUDIO 2 QUEENS NON',
                },
              },
              {
                id: '14',
                type: 'SRVC',
                elementId: 'pnr-14',
                ServiceRequest: {
                  airlineCode: 'EA',
                  serviceType: 'OSI',
                  ssrType: 'GFX',
                  FreeText:
                    'HHL 100086112 A0AA01  D SMKNG ACCESSIBLE FREE WIFI A',
                  FullText:
                    'EA HHL 100086112 A0AA01  D SMKNG ACCESSIBLE FREE WIFI A',
                },
              },
              {
                id: '15',
                type: 'SRVC',
                elementId: 'pnr-15',
                ServiceRequest: {
                  airlineCode: 'EA',
                  serviceType: 'OSI',
                  ssrType: 'GFX',
                  FreeText: 'HHL 100086112 A0AA01  TTX 62.99 TTL TAX',
                  FullText: 'EA HHL 100086112 A0AA01  TTX 62.99 TTL TAX',
                },
              },
              {
                id: '16',
                type: 'SRVC',
                elementId: 'pnr-16',
                ServiceRequest: {
                  airlineCode: 'EA',
                  serviceType: 'OSI',
                  ssrType: 'GFX',
                  FreeText:
                    'HHL 100086112 A0AA01  TX 25.20 25502-STATE ROOM TAX',
                  FullText:
                    'EA HHL 100086112 A0AA01  TX 25.20 25502-STATE ROOM TAX',
                },
              },
              {
                id: '17',
                type: 'SRVC',
                elementId: 'pnr-17',
                ServiceRequest: {
                  airlineCode: 'EA',
                  serviceType: 'OSI',
                  ssrType: 'GFX',
                  FreeText:
                    'HHL 100086112 A0AA01  TX 37.80 25605-CITY  ROOM TAX',
                  FullText:
                    'EA HHL 100086112 A0AA01  TX 37.80 25605-CITY  ROOM TAX',
                },
              },
              {
                id: '18',
                type: 'SRVC',
                elementId: 'pnr-18',
                ServiceRequest: {
                  airlineCode: 'EA',
                  serviceType: 'OSI',
                  ssrType: 'GFX',
                  FreeText: 'HHL 100086112 A0AA01  TSC 0 TTL SURCHARGE',
                  FullText: 'EA HHL 100086112 A0AA01  TSC 0 TTL SURCHARGE',
                },
              },
              {
                id: '19',
                type: 'SRVC',
                elementId: 'pnr-19',
                ServiceRequest: {
                  airlineCode: 'EA',
                  serviceType: 'OSI',
                  ssrType: 'GFX',
                  FreeText:
                    'HHL 100086112 A0AA01  TP 482.95 USD APPROX. TTL PRIC',
                  FullText:
                    'EA HHL 100086112 A0AA01  TP 482.95 USD APPROX. TTL PRIC',
                },
              },
              {
                id: '22',
                type: 'SRVC',
                elementId: 'pnr-22',
                ServiceRequest: {
                  airlineCode: 'EA',
                  serviceType: 'OSI',
                  ssrType: 'GFX',
                  FreeText:
                    'HHL 100086112 A0AA01  TD INCLUDES TAXES AND SURCHARG',
                  FullText:
                    'EA HHL 100086112 A0AA01  TD INCLUDES TAXES AND SURCHARG',
                },
              },
              {
                id: '69',
                type: 'FP',
                displayIndex: 1,
                elementId: 'pnr-69',
                FormOfPayment: {
                  migrated: false,
                  Check: {
                    Text: 'CHECK',
                  },
                },
              },
            ],
          },
          AssociationMatrices: {
            AssociationMatrix: [
              {
                Name: 'PssIDType',
                Parent: {
                  ref: 'pnr-23',
                },
                Child: [
                  {
                    ref: 'pnr-12',
                  },
                  {
                    ref: 'pnr-13',
                  },
                  {
                    ref: 'pnr-14',
                  },
                  {
                    ref: 'pnr-15',
                  },
                  {
                    ref: 'pnr-16',
                  },
                  {
                    ref: 'pnr-17',
                  },
                  {
                    ref: 'pnr-18',
                  },
                  {
                    ref: 'pnr-19',
                  },
                  {
                    ref: 'pnr-20',
                  },
                  {
                    ref: 'pnr-21',
                  },
                  {
                    ref: 'pnr-22',
                  },
                  {
                    ref: 'pnr-or-3',
                  },
                ],
              },
            ],
          },
        },
      },
    },
    Links: [
      {
        rel: 'self',
        href: 'https://api.test.sabre.com/v2.4.0/passenger/records?mode=create',
      },
      {
        rel: 'linkTemplate',
        href: 'https://api.test.sabre.com/<version>/passenger/records?mode=<mode>',
      },
    ],
  }

  const pnrNumber = response?.CreatePassengerNameRecordRS?.ItineraryRef?.ID
  const pName =
    response?.CreatePassengerNameRecordRS?.TravelItineraryRead?.TravelItinerary
      ?.CustomerInfo?.PersonName

  return (
    <div>
      <section className='breadcrumb-outer text-center'>
        <div className='container'>
          <div className='breadcrumb-content'>
            <h2 className='text-uppercase'>Flight Booking</h2>
            <h4 className='white'>Flight For You</h4>
            <nav aria-label='breadcrumb'>
              <ul className='breadcrumb'>
                <li className='breadcrumb-item'>
                  <a href='/'>Home</a>
                </li>
                <li className='breadcrumb-item'>
                  <a href='/flight'>Flight</a>
                </li>
                <li className='breadcrumb-item active' aria-current='page'>
                  Booking page
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className='section-overlay'></div>
      </section>
      {loading ? (
        <p style={{ textAlign: 'center' }}>
          <CircularProgress size={36} />
        </p>
      ) : (
        <>
          <section className='flight-destinations' style={{ paddingTop: 0 }}>
            {flightSearchData ? (
              <div className='container'>
                <div className='row'>
                  <div id='content' className='col-md-12'>
                    <div className='booking-confirmed booking-outer'>
                      <div className='confirmation-title'>
                        <div className='form-title form-title-1'>
                          <h2>
                            Congratulations your booking has been confirmed
                          </h2>
                        </div>
                        <p>
                          A confirmation email has been sent to your provided
                          email address.
                        </p>
                      </div>
                      <div className='detail-content content-wrapper'>
                        <div className='description flight-book'>
                          <div
                            className='selected-flight-panel'
                            style={{ border: '1px solid' }}
                          >
                            <div className='header'>
                              <span className='title'>
                                Itinerary and Reservation Details{' '}
                              </span>
                            </div>
                            {flightSearchData?.OriginDestinationInformation?.map(
                              (p) => (
                                <div className='outbound-panel'>
                                  {p?.TPA_Extensions?.Flight.map((f, index) => {
                                    return (
                                      <>
                                        <div className='outbound-panel-content'>
                                          <div>
                                            <div className='detail-panel'>
                                              <div
                                                className='box1'
                                                style={{
                                                  display: 'flex',
                                                  justifyContent: 'center',
                                                  alignItems: 'center',
                                                }}
                                              >
                                                <div
                                                  className='flight-name-logo'
                                                  style={{ paddingLeft: 0 }}
                                                >
                                                  <div
                                                    className='flight-content'
                                                    style={{
                                                      display: 'flex',
                                                      justifyContent: 'center',
                                                      flexDirection: 'column',
                                                      alignItems: 'center',
                                                    }}
                                                  >
                                                    <span className='name'>
                                                      <img
                                                        src={`/images/AirlineLogos/Rectangular/${f?.Airline?.Marketing}.png`}
                                                        style={{
                                                          display: 'flex',
                                                          justifyContent:
                                                            'center',
                                                          width: '140px',
                                                          textAlign: 'center',
                                                          alignItems: 'center',
                                                          alignContent:
                                                            'center',
                                                        }}
                                                      />
                                                    </span>
                                                    <span
                                                      style={{
                                                        marginTop: '8px',
                                                        width: 'auto',
                                                      }}
                                                    >
                                                      {codeToFlight(
                                                        f?.Airline?.Marketing
                                                      )}
                                                    </span>
                                                    <span
                                                      className='f-time'
                                                      style={{
                                                        width: 'auto',
                                                      }}
                                                    >
                                                      {f?.Airline?.Marketing}{' '}
                                                      {f?.Number}
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                className='box2'
                                                style={{
                                                  paddingLeft: 13,
                                                  borderLeft: '1px solid',
                                                }}
                                              >
                                                <span className='f-title'>
                                                  Departure
                                                </span>
                                                <span className='f-time'>
                                                  {codeToCity(
                                                    f?.OriginLocation
                                                      ?.LocationCode
                                                  )}
                                                </span>

                                                <span className='f-airport'>
                                                  {f?.DepartureDateTime}
                                                </span>
                                              </div>

                                              <div
                                                className='box4'
                                                style={{
                                                  borderRight: '1px solid',
                                                  paddingLeft: '13px',
                                                }}
                                              >
                                                <span className='f-title'>
                                                  Arrival
                                                </span>
                                                <span className='f-time'>
                                                  {codeToCity(
                                                    f?.DestinationLocation
                                                      ?.LocationCode
                                                  )}
                                                </span>

                                                <span className='f-airport'>
                                                  {Moment(
                                                    f?.ArrivalDateTime
                                                  ).format(
                                                    'dddd Do MMMM, h:mm '
                                                  )}
                                                </span>
                                              </div>
                                              <div
                                                className='box3'
                                                style={{
                                                  paddingLeft: 20,
                                                  marginTop: 'auto',
                                                }}
                                              >
                                                <span className='f-departure-return-status'></span>
                                                <span className='f-airport'>
                                                  Non stop flight
                                                </span>
                                                <span className='f-airport'>
                                                  Duration :{' '}
                                                  {Moment.utc(
                                                    Moment(
                                                      f?.ArrivalDateTime,
                                                      'YYYY/MM/DD HH:mm:ss'
                                                    ).diff(
                                                      Moment(
                                                        f?.DepartureDateTime,
                                                        'YYYY/MM/DD HH:mm:ss'
                                                      )
                                                    )
                                                  ).format('HH') + 'hr'}{' '}
                                                  {Moment.utc(
                                                    Moment(
                                                      f?.ArrivalDateTime,
                                                      'YYYY/MM/DD HH:mm:ss'
                                                    ).diff(
                                                      Moment(
                                                        f?.DepartureDateTime,
                                                        'YYYY/MM/DD HH:mm:ss'
                                                      )
                                                    )
                                                  ).format('mm') + 'm'}
                                                </span>
                                                <span className='f-airport'>
                                                  Cabin : Economy
                                                </span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </>
                                    )
                                  })}
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                      <div className='detail-content content-wrapper'>
                        <div className='description flight-book'>
                          <div
                            className='selected-flight-panel'
                            style={{ border: '1px solid' }}
                          >
                            <div className='header'>
                              <span className='title'>Passenger Details </span>
                            </div>
                            <div className='outbound-panel'>
                              <div className='outbound-panel-content'>
                                <div className='container'>
                                  <div className='row'>
                                    {pName.map((p) => (
                                      <>
                                        <div className='col-md-4'>
                                          <label htmlFor='departure'>
                                            Passenger Name
                                          </label>
                                          <span style={{ color: 'initial' }}>
                                            {p?.GivenName} {p?.Surname}
                                          </span>
                                        </div>
                                        <div className='col-md-2'>
                                          <label htmlFor='departure'>
                                            Type
                                          </label>
                                          <span style={{ color: 'initial' }}>
                                            {changePassengerCode(
                                              p?.PassengerType
                                            )}
                                          </span>
                                        </div>
                                      </>
                                    ))}

                                    <div className='col-md-2'>
                                      <label htmlFor='departure'>
                                        Airline PNR
                                      </label>
                                      <span style={{ color: 'initial' }}>
                                        {pnrNumber}
                                      </span>
                                    </div>
                                    <div className='col-md-4'>
                                      <label htmlFor='departure'>
                                        E-Ticker Number
                                      </label>
                                      <span style={{ color: 'initial' }}>
                                        ----
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class='make-payment'>
                        <div class='form-title form-title-1'>
                          <h3>Payment</h3>
                        </div>
                        <p>
                          Pellentesque ac turpis egestas, varius justo et,
                          condimentum augue. Praesent aliquam, nisl feugiat
                          vehicula condimentum, justo tellus scelerisque metus.
                          Pellentesque ac turpis egestas, varius justo et,
                          condimentum augue. Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit, sed do eiusmod tempor
                          incididunt ut labore et dolore magna aliqua.
                        </p>
                        <a href='#' class='f-payment'>
                          Payment is made by Credit Card Via Paypal.
                        </a>
                      </div>

                      <div class='make-payment'>
                        <div class='form-title form-title-1'>
                          <h3>Booking Detail</h3>
                        </div>
                        <p>
                          Pellentesque ac turpis egestas, varius justo et,
                          condimentum augue. Praesent aliquam, nisl feugiat
                          vehicula condimentum, justo tellus scelerisque metus.
                          Pellentesque ac turpis egestas, varius justo et,
                          condimentum augue. Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit, sed do eiusmod tempor
                          incididunt ut labore et dolore magna aliqua.
                        </p>
                        <a href='#' class='f-payment'>
                          https://www.yatra.com/flight-details/?=f4acb19f-9542-4a5c-b8ee
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <p
                style={{
                  textAlign: 'center',
                  fontSize: 24,
                  fontWeight: 'bold',
                  marginTop: 50,
                }}
              >
                Error in Creating PNR
              </p>
            )}
          </section>
        </>
      )}
    </div>
  )
}

export default BookingConfirmed
