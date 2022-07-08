export function outputEmailTemplate(code){
    return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:v="urn:schemas-microsoft-com:vml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
>
  <head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, maximum-scale=1"
    />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="format-detection" content="date=no" />
    <meta name="format-detection" content="address=no" />
    <meta name="format-detection" content="telephone=no" />
    <meta name="x-apple-disable-message-reformatting" />

    <link
      href="https://fonts.googleapis.com/css?family=Muli:400,400i,700,700i"
      rel="stylesheet"
    />
    <link
      rel="icon"
      href="${process.env.base_url}/logo-01.png"
      type="image/x-icon"
    />

    <title>ARTICLY</title>

    <style type="text/css" media="screen">
      /* Linked Styles */
      body {
        padding: 0 !important;
        margin: 0 !important;
        display: block !important;
        min-width: 100% !important;
        width: 100% !important;
        background: #ffffff;
        -webkit-text-size-adjust: none;
      }

      a {
        color: #66c7ff;
        text-decoration: none;
      }

      p {
        padding: 0 !important;
        margin: 0 !important;
      }

      img {
        -ms-interpolation-mode: bicubic;
        /* Allow smoother rendering of resized image in Internet Explorer */
      }

      .mcnPreviewText {
        display: none !important;
      }

      .cke_editable,
      .cke_editable a,
      .cke_editable span,
      .cke_editable a span {
        color: #000001 !important;
      }

      /* Mobile styles */
      @media only screen and (max-device-width: 480px),
        only screen and (max-width: 480px) {
        .mobile-shell {
          width: 100% !important;
          min-width: 100% !important;
        }

        .text-header,
        .m-center {
          text-align: center !important;
        }

        .center {
          margin: 0 auto !important;
        }

        .container {
          padding: 10px 10px !important;
        }

        .td {
          width: 100% !important;
          min-width: 100% !important;
        }

        .m-br-15 {
          height: 15px !important;
        }

        .p30-15 {
          padding: 10px 15px 0px 15px !important;
        }

        .m-td,
        .m-hide {
          display: none !important;
          width: 0 !important;
          height: 0 !important;
          font-size: 0 !important;
          line-height: 0 !important;
          min-height: 0 !important;
        }

        .m-block {
          display: block !important;
        }

        .fluid-img img {
          width: 100% !important;
          max-width: 100% !important;
          height: auto !important;
        }

        .column,
        .column-top,
        .column-empty,
        .column-empty2,
        .column-dir-top {
          float: left !important;
          width: 100% !important;
          display: block !important;
        }

        .column-empty {
          padding-bottom: 10px !important;
        }

        .column-empty2 {
          padding-bottom: 30px !important;
        }

        .content-spacing {
          width: 15px !important;
        }
      }
    </style>
  </head>

  <body
    class="body"
    style="
      padding: 0 !important;
      margin: 0 !important;
      display: block !important;
      min-width: 100% !important;
      width: 100% !important;
      background: #e4eced;
      -webkit-text-size-adjust: none;
    "
  >
    <table
      width="100%"
      border="0"
      cellspacing="0"
      cellpadding="0"
      bgcolor="#e4eced"
    >
      <tr>
        <td align="center" valign="top">
          <table
            width="650"
            border="0"
            cellspacing="0"
            cellpadding="0"
            class="mobile-shell"
          >
            <tr>
              <td
                class="td container"
                style="
                  width: 650px;
                  min-width: 650px;
                  font-size: 0pt;
                  line-height: 0pt;
                  margin: 0;
                  font-weight: normal;
                  padding: 0px 0px 30px 0px;
                "
              >
                <!-- Header -->
                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                    <td class="p30-15" style="padding: 0px 30px 30px 30px">
                      <table
                        width="100%"
                        border="0"
                        cellspacing="0"
                        cellpadding="0"
                      >
                        <tr>
                          <th
                            class="column-top"
                            width="145"
                            style="
                              font-size: 0pt;
                              line-height: 0pt;
                              padding: 0;
                              margin: 0;
                              font-weight: normal;
                              vertical-align: top;
                            "
                          >
                            <table
                              width="100%"
                              border="0"
                              cellspacing="0"
                              cellpadding="0"
                            >
                              <tr>
                                <td
                                  class="img m-center"
                                  style="
                                    font-size: 0pt;
                                    line-height: 0pt;
                                    text-align: left;
                                  "
                                >
                                  <center>
                                    <img
                                      src="${process.env.base_url}/logo-01.png"
                                      width="131"
                                      height="131"
                                      mc:edit="image_1"
                                      style="max-width: 131px"
                                      border="0"
                                      alt=""
                                    />
                                  </center>
                                </td>
                              </tr>
                            </table>
                          </th>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>

                <div mc:repeatable="Select" mc:variant="Intro">
                  <table
                    width="100%"
                    border="0"
                    cellspacing="0"
                    cellpadding="0"
                  >
                    <tr>
                      <td style="padding-bottom: 10px">
                        <table
                          width="100%"
                          border="0"
                          cellspacing="0"
                          cellpadding="0"
                        >
                          <tr>
                            <td
                              class="tbrr p30-15"
                              style="
                                padding: 60px 30px;
                                border-radius: 26px 26px 0px 0px;
                              "
                              bgcolor="#ffffff"
                            >
                              <table
                                width="100%"
                                border="0"
                                cellspacing="0"
                                cellpadding="0"
                              >
                                <tr>
                                  <td
                                    class="h1 pb25"
                                    style="
                                      color: #b6070c;
                                      font-family: 'Muli', Arial, sans-serif;
                                      font-size: 40px;
                                      line-height: 46px;
                                      text-align: center;
                                      padding-bottom: 5px;
                                    "
                                  >
                                    <div mc:edit="text_2">
                                      Welcome to OneTap!
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    class="text-center pb25"
                                    style="
                                      color: #b6070c;
                                      font-family: 'Muli', Arial, sans-serif;
                                      font-size: 16px;
                                      line-height: 30px;
                                      text-align: center;
                                      padding-bottom: 25px;
                                    "
                                  >
                                    <div mc:edit="text_3">
                                      We're glad to have you here!
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    class="text-center pb25"
                                    style="
                                      color: #b6070c;
                                      font-family: 'Muli', Arial, sans-serif;
                                      font-size: 16px;
                                      line-height: 30px;
                                      text-align: center;
                                      padding-bottom: 25px;
                                    "
                                  >
                                    <div mc:edit="text_3">
                                      Click the button below to confirm your
                                      email and start using OneTap App.
                                    </div>
                                  </td>
                                </tr>
                                <!-- Button -->
                                <tr mc:hideable>
                                  <td align="center">
                                    <table
                                      class="center"
                                      border="0"
                                      cellspacing="0"
                                      cellpadding="0"
                                      style="text-align: center"
                                    >
                                      <tr>
                                        <td
                                          class="pink-button text-button"
                                          style="
                                            background: #b6070c;
                                            color: #c1cddc;
                                            font-family: 'Muli', Arial,
                                              sans-serif;
                                            font-size: 14px;
                                            line-height: 18px;
                                            padding: 12px 30px;
                                            text-align: center;
                                            border-radius: 22px 22px 22px 22px;
                                            font-weight: bold;
                                          "
                                        >
                                          <div mc:edit="text_4">
                                            <a
                                              href="${process.env.base_url}/auth/${code}"
                                              class="link-white"
                                              style="
                                                color: #ffffff;
                                                text-decoration: none;
                                              "
                                              ><span
                                                class="link-white"
                                                style="
                                                  color: #ffffff;
                                                  text-decoration: none;
                                                "
                                                >CONFIRM ACCOUNT</span
                                              ></a
                                            >
                                          </div>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    class="img m-center"
                                    style="
                                      font-size: 0pt;
                                      line-height: 0pt;
                                      text-align: left;
                                      padding: 0px;
                                    "
                                  >
                                  </td>
                                </tr>
                                <!-- END Button -->
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </div>

                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                    <td
                      class="text-footer3 p30-15"
                      style="
                        padding: 20px 30px 0px 30px;
                        color: #475c77;
                        font-family: 'Muli', Arial, sans-serif;
                        font-size: 14px;
                        line-height: 18px;
                        text-align: center;
                      "
                    >
                      <div mc:edit="text_4">
                        This message was sent by <b>OneTap</b>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="text-footer3 p30-15"
                      style="
                        padding: 10px 30px 0px 30px;
                        color: #475c77;
                        font-family: 'Muli', Arial, sans-serif;
                        font-size: 14px;
                        line-height: 18px;
                        text-align: center;
                      "
                    >
                      <div mc:edit="text_4">
                        Lim Del Rosario St., Digos City, Davao del Sur,
                        Philippines
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td
                      class="text-footer3 p30-15"
                      style="
                        padding: 10px 30px 0px 30px;
                        color: #475c77;
                        font-family: 'Muli', Arial, sans-serif;
                        font-size: 14px;
                        line-height: 18px;
                        text-align: center;
                      "
                    >
                      <div mc:edit="text_4">
                        © 2022 OneTap. All rights reserved
                      </div>
                    </td>
                  </tr>
                </table>
                <!-- END Footer -->
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}