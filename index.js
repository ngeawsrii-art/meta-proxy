    
   {
  "openapi": "3.1.0",
  "info": {
    "title": "Meta ADS Interest Finder",
    "version": "1.0.3",
    "description": "ค้นหากลุ่มเป้าหมาย (Interest) จาก Facebook Ads API ผ่าน Proxy ของคุณ"
  },
  "servers": [
    { "url": "(2320205044967713)" }
  ],
  "paths": {
    "/meta-interest": {
      "get": {
        "operationId": "get_meta_interest",
        "summary": "ค้นหา Interest จาก Facebook API ผ่าน Proxy",
        "parameters": [
          {
            "name": "q",
            "in": "query",
            "required": true,
            "schema": { "type": "string" },
            "description": "คำค้น เช่น 'สุขภาพ', 'เกม', 'แม่และเด็ก'"
          },
          {
            "name": "limit",
            "in": "query",
            "required": false,
            "schema": { "type": "integer", "default": 10 },
            "description": "จำนวนผลลัพธ์สูงสุดที่ต้องการดึง (ค่าเริ่มต้น = 10)"
          }
        ],
        "responses": {
          "200": {
            "description": "ผลลัพธ์ Interest จาก Meta API",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "data": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "id": { "type": "string" },
                          "name": { "type": "string" },
                          "type": { "type": "string" },
                          "audience_size_lower_bound": { "type": "integer" },
                          "audience_size_upper_bound": { "type": "integer" },
                          "description": { "type": "string" }
                        }
                      }
                    }
                  },
                  "required": ["data"]
                }
              }
            }
          }
        }
      }
    }
  }
}


