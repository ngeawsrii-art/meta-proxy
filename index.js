{\rtf1\ansi\ansicpg874\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0  \{\
  "openapi": "3.1.0",\
  "info": \{\
    "title": "Meta ADS Interest Finder",\
    "version": "1.0.3",\
    "description": "\uc0\u3588 \u3657 \u3609 \u3627 \u3634 \u3585 \u3621 \u3640 \u3656 \u3617 \u3648 \u3611 \u3657 \u3634 \u3627 \u3617 \u3634 \u3618  (Interest) \u3592 \u3634 \u3585  Facebook Ads API \u3612 \u3656 \u3634 \u3609  Proxy \u3586 \u3629 \u3591 \u3588 \u3640 \u3603 "\
  \},\
  "servers": [\
    \{ "url": "(2320205044967713)" \}\
  ],\
  "paths": \{\
    "/meta-interest": \{\
      "get": \{\
        "operationId": "get_meta_interest",\
        "summary": "\uc0\u3588 \u3657 \u3609 \u3627 \u3634  Interest \u3592 \u3634 \u3585  Facebook API \u3612 \u3656 \u3634 \u3609  Proxy",\
        "parameters": [\
          \{\
            "name": "q",\
            "in": "query",\
            "required": true,\
            "schema": \{ "type": "string" \},\
            "description": "\uc0\u3588 \u3635 \u3588 \u3657 \u3609  \u3648 \u3594 \u3656 \u3609  '\u3626 \u3640 \u3586 \u3616 \u3634 \u3614 ', '\u3648 \u3585 \u3617 ', '\u3649 \u3617 \u3656 \u3649 \u3621 \u3632 \u3648 \u3604 \u3655 \u3585 '"\
          \},\
          \{\
            "name": "limit",\
            "in": "query",\
            "required": false,\
            "schema": \{ "type": "integer", "default": 10 \},\
            "description": "\uc0\u3592 \u3635 \u3609 \u3623 \u3609 \u3612 \u3621 \u3621 \u3633 \u3614 \u3608 \u3660 \u3626 \u3641 \u3591 \u3626 \u3640 \u3604 \u3607 \u3637 \u3656 \u3605 \u3657 \u3629 \u3591 \u3585 \u3634 \u3619 \u3604 \u3638 \u3591  (\u3588 \u3656 \u3634 \u3648 \u3619 \u3636 \u3656 \u3617 \u3605 \u3657 \u3609  = 10)"\
          \}\
        ],\
        "responses": \{\
          "200": \{\
            "description": "\uc0\u3612 \u3621 \u3621 \u3633 \u3614 \u3608 \u3660  Interest \u3592 \u3634 \u3585  Meta API",\
            "content": \{\
              "application/json": \{\
                "schema": \{\
                  "type": "object",\
                  "properties": \{\
                    "data": \{\
                      "type": "array",\
                      "items": \{\
                        "type": "object",\
                        "properties": \{\
                          "id": \{ "type": "string" \},\
                          "name": \{ "type": "string" \},\
                          "type": \{ "type": "string" \},\
                          "audience_size_lower_bound": \{ "type": "integer" \},\
                          "audience_size_upper_bound": \{ "type": "integer" \},\
                          "description": \{ "type": "string" \}\
                        \}\
                      \}\
                    \}\
                  \},\
                  "required": ["data"]\
                \}\
              \}\
            \}\
          \}\
        \}\
      \}\
    \}\
  \}\
\}\
\
}