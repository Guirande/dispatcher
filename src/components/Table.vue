<template>
  <section>
    <b-field grouped group-multiline>
      <b-button
          label="Clear checked"
          type="is-danger"
          icon-left="close"
          class="field"
          @click="checkedRows = []" />

      <b-select v-model="checkboxPosition">
        <option value="left">Checkbox at left</option>
        <option value="right">Checkbox at right</option>
      </b-select>
    </b-field>

    <b-tabs>
      <b-tab-item label="Table">
        <b-table
            :data="data"
            :columns="columns"
            :checked-rows.sync="checkedRows"
            :is-row-checkable="(row) => row.id !== 3 && row.id !== 4"
            checkable
            :checkbox-position="checkboxPosition">

          <template #bottom-left>
            <b>Total checked</b>: {{ checkedRows.length }}
          </template>
        </b-table>
      </b-tab-item>

      <b-tab-item label="Checked rows">
        <pre>{{ checkedRows }}</pre>
      </b-tab-item>
    </b-tabs>
  </section>
</template>

<script>
export default {
  data() {
    const data = [
      { 'id': 1, 'first_name': 'Jesse', 'last_name': 'Simmons', 'date': '2016-10-15 13:43:27', 'gender': 'Male' },
      { 'id': 2, 'first_name': 'John', 'last_name': 'Jacobs', 'date': '2016-12-15 06:00:53', 'gender': 'Male' },
      { 'id': 3, 'first_name': 'Tina', 'last_name': 'Gilbert', 'date': '2016-04-26 06:26:28', 'gender': 'Female' },
      { 'id': 4, 'first_name': 'Clarence', 'last_name': 'Flores', 'date': '2016-04-10 10:28:46', 'gender': 'Male' },
      { 'id': 5, 'first_name': 'Anne', 'last_name': 'Lee', 'date': '2016-12-06 14:38:38', 'gender': 'Female' }
    ]

    return {
      data,
      checkboxPosition: 'left',
      checkedRows: [data[1], data[3]],
      columns: [
        {
          field: 'id',
          label: 'ID',
          width: '40',
          numeric: true
        },
        {
          field: 'first_name',
          label: 'First Name',
        },
        {
          field: 'last_name',
          label: 'Last Name',
        },
        {
          field: 'date',
          label: 'Date',
          centered: true
        },
        {
          field: 'gender',
          label: 'Gender',
        }
      ]
    }
  },

  created() {
    var convert = require('xml-js');
    var xml =
        '<?xml version="1.0" encoding="UTF-8"?>\n' +
        '<query-response>\n' +
        '    <data-table filter="WI" count="7518">\n' +
        '        <columns>\n' +
        '            <column>Unit T-State</column>\n' +
        '            <column>Unit Nbr</column>\n' +
        '            <column>Stage</column>\n' +
        '            <column>Kind</column>\n' +
        '            <column>WI Position</column>\n' +
        '            <column>Carrier</column>\n' +
        '            <column>Queue</column>\n' +
        '            <column>Queue Seq.</column>\n' +
        '            <column>MVHS Fetch CHE Id</column>\n' +
        '            <column>MVHS Time Fetch</column>\n' +
        '            <column>MVHS Carry CHE Id</column>\n' +
        '            <column>MVHS Time Carry Complete</column>\n' +
        '            <column>MVHS Put CHE Id</column>\n' +
        '            <column>MVHS Pool Time Put</column>\n' +
        '            <column>MVHS Time Carry CHE Dispatch</column>\n' +
        '            <column>Est Mv Time</column>\n' +
        '            <column>Unit Type ISO</column>\n' +
        '            <column>WI Created</column>\n' +
        '            <column>MVHS Rehandle Count</column>\n' +
        '        </columns>\n' +
        '        <rows>\n' +
        '            <row primary-key="2659833">\n' +
        '                <field>Yard</field>\n' +
        '                <field>MNBU3094007</field>\n' +
        '                <field>Complete</field>\n' +
        '                <field>Receival</field>\n' +
        '                <field>T-AAP924SF-TIP-U</field>\n' +
        '                <field>@724221</field>\n' +
        '                <field>ROAD</field>\n' +
        '                <field>1037</field>\n' +
        '                <field />\n' +
        '                <field>27-Jan-21 1742</field>\n' +
        '                <field />\n' +
        '                <field>27-Jan-21 1742</field>\n' +
        '                <field>4533</field>\n' +
        '                <field>27-Jan-21 1742</field>\n' +
        '                <field>27-Jan-21 1742</field>\n' +
        '                <field />\n' +
        '                <field>45R4</field>\n' +
        '                <field>27-Jan-21 1733</field>\n' +
        '                <field>0</field>\n' +
        '            </row>\n' +
        '            <row primary-key="2659681">\n' +
        '                <field>Yard</field>\n' +
        '                <field>MNBU0366462</field>\n' +
        '                <field>Complete</field>\n' +
        '                <field>Receival</field>\n' +
        '                <field>T-AGU904MP-TIP-U</field>\n' +
        '                <field>@724102</field>\n' +
        '                <field>ROAD</field>\n' +
        '                <field>905</field>\n' +
        '                <field />\n' +
        '                <field>27-Jan-21 1459</field>\n' +
        '                <field />\n' +
        '                <field>27-Jan-21 1459</field>\n' +
        '                <field>4519</field>\n' +
        '                <field>27-Jan-21 1459</field>\n' +
        '                <field>27-Jan-21 1459</field>\n' +
        '                <field />\n' +
        '                <field>45R4</field>\n' +
        '                <field>27-Jan-21 1427</field>\n' +
        '                <field>0</field>\n' +
        '            </row>\n' +
        '            <row primary-key="2658864">\n' +
        '                <field>Yard</field>\n' +
        '                <field>MNBU3382493</field>\n' +
        '                <field>Complete</field>\n' +
        '                <field>Receival</field>\n' +
        '                <field>T-AJE793MC-TIP-U</field>\n' +
        '                <field>@723964</field>\n' +
        '                <field>ROAD</field>\n' +
        '                <field>756</field>\n' +
        '                <field />\n' +
        '                <field>27-Jan-21 0847</field>\n' +
        '                <field />\n' +
        '                <field>27-Jan-21 0847</field>\n' +
        '                <field>4518</field>\n' +
        '                <field>27-Jan-21 0847</field>\n' +
        '                <field>27-Jan-21 0847</field>\n' +
        '                <field />\n' +
        '                <field>45R4</field>\n' +
        '                <field>27-Jan-21 0819</field>\n' +
        '                <field>0</field>\n' +
        '            </row>\n' +
        '            <row primary-key="2660898">\n' +
        '                <field>Yard</field>\n' +
        '                <field>MSCU4517359</field>\n' +
        '                <field>Planned</field>\n' +
        '                <field>Load</field>\n' +
        '                <field>V-MBROWOM050R-260488</field>\n' +
        '                <field>MBROWOM050R</field>\n' +
        '                <field>MBRO-load-27A</field>\n' +
        '                <field>39</field>\n' +
        '                <field />\n' +
        '                <field />\n' +
        '                <field />\n' +
        '                <field />\n' +
        '                <field />\n' +
        '                <field />\n' +
        '                <field />\n' +
        '                <field>30-Jan-21 1007</field>\n' +
        '                <field>4351</field>\n' +
        '                <field>28-Jan-21 0954</field>\n' +
        '                <field>0</field>\n' +
        '            </row>\n' +
        '            <row primary-key="2660904">\n' +
        '                <field>Yard</field>\n' +
        '                <field>MSCU4535429</field>\n' +
        '                <field>Planned</field>\n' +
        '                <field>Load</field>\n' +
        '                <field>V-MBROWOM050R-261188</field>\n' +
        '                <field>MBROWOM050R</field>\n' +
        '                <field>MBRO-load-27A</field>\n' +
        '                <field>45</field>\n' +
        '                <field />\n' +
        '                <field />\n' +
        '                <field />\n' +
        '                <field />\n' +
        '                <field />\n' +
        '                <field />\n' +
        '                <field />\n' +
        '                <field>30-Jan-21 1030</field>\n' +
        '                <field>4351</field>\n' +
        '                <field>28-Jan-21 0955</field>\n' +
        '                <field>0</field>\n' +
        '            </row>\n' +
        '            <row primary-key="2660009">\n' +
        '                <field>Yard</field>\n' +
        '                <field>TRLU6960074</field>\n' +
        '                <field>Complete</field>\n' +
        '                <field>Receival</field>\n' +
        '                <field>T-AIC376MC-TIP-U</field>\n' +
        '                <field>@724345</field>\n' +
        '                <field>ROAD</field>\n' +
        '                <field>1176</field>\n' +
        '                <field />\n' +
        '                <field>27-Jan-21 2127</field>\n' +
        '                <field />\n' +
        '                <field>27-Jan-21 2127</field>\n' +
        '                <field>4534</field>\n' +
        '                <field>27-Jan-21 2127</field>\n' +
        '                <field>27-Jan-21 2127</field>\n' +
        '                <field />\n' +
        '                <field>4351</field>\n' +
        '                <field>27-Jan-21 2055</field>\n' +
        '                <field>0</field>\n' +
        '            </row>\n' +
        '            <row primary-key="2660053">\n' +
        '                <field>Yard</field>\n' +
        '                <field>TRLU6957384</field>\n' +
        '                <field>Complete</field>\n' +
        '                <field>Receival</field>\n' +
        '                <field>T-ADY583MP-TIP-U</field>\n' +
        '                <field>@724379</field>\n' +
        '                <field>ROAD</field>\n' +
        '                <field>1219</field>\n' +
        '                <field />\n' +
        '                <field>27-Jan-21 2221</field>\n' +
        '                <field />\n' +
        '                <field>27-Jan-21 2221</field>\n' +
        '                <field>4526</field>\n' +
        '                <field>27-Jan-21 2221</field>\n' +
        '                <field>27-Jan-21 2221</field>\n' +
        '                <field />\n' +
        '                <field>4351</field>\n' +
        '                <field>27-Jan-21 2142</field>\n' +
        '                <field>0</field>\n' +
        '            </row>\n' +
        '            <row primary-key="2659834">\n' +
        '                <field>Yard</field>\n' +
        '                <field>TRLU6408580</field>\n' +
        '                <field>Complete</field>\n' +
        '                <field>Receival</field>\n' +
        '                <field>T-AAQ366SF-TIP-U</field>\n' +
        '                <field>@723786</field>\n' +
        '                <field>ROAD</field>\n' +
        '                <field>1038</field>\n' +
        '                <field />\n' +
        '                <field>27-Jan-21 1832</field>\n' +
        '                <field />\n' +
        '                <field>27-Jan-21 1832</field>\n' +
        '                <field />\n' +
        '                <field>27-Jan-21 1832</field>\n' +
        '                <field>27-Jan-21 1832</field>\n' +
        '                <field />\n' +
        '                <field>4351</field>\n' +
        '                <field>27-Jan-21 1735</field>\n' +
        '                <field>0</field>\n' +
        '            </row>\n' +
        '            <row primary-key="2658214">\n' +
        '                <field>Yard</field>\n' +
        '                <field>SUDU7653201</field>\n' +
        '                <field>Complete</field>\n' +
        '                <field>Receival</field>\n' +
        '                <field>T-MLZ7576-TIP-U</field>\n' +
        '                <field>@723810</field>\n' +
        '                <field>ROAD</field>\n' +
        '                <field>652</field>\n' +
        '                <field />\n' +
        '                <field>27-Jan-21 0007</field>\n' +
        '                <field />\n' +
        '                <field>27-Jan-21 0007</field>\n' +
        '                <field>4520</field>\n' +
        '                <field>27-Jan-21 0007</field>\n' +
        '                <field>27-Jan-21 0007</field>\n' +
        '                <field />\n' +
        '                <field>22G1</field>\n' +
        '                <field>26-Jan-21 2340</field>\n' +
        '                <field>0</field>\n' +
        '            </row>\n' +
        '            <row primary-key="2657142">\n' +
        '                <field>Yard</field>\n' +
        '                <field>SUDU7577776</field>\n' +
        '                <field>Complete</field>\n' +
        '                <field>Receival</field>\n' +
        '                <field>T-MBP4040-TIP-U</field>\n' +
        '                <field>@723623</field>\n' +
        '                <field>ROAD</field>\n' +
        '                <field>465</field>\n' +
        '                <field />\n' +
        '                <field>26-Jan-21 1720</field>\n' +
        '                <field />\n' +
        '                <field>26-Jan-21 1720</field>\n' +
        '                <field>4533</field>\n' +
        '                <field>26-Jan-21 1720</field>\n' +
        '                <field>26-Jan-21 1720</field>\n' +
        '                <field />\n' +
        '                <field>22G1</field>\n' +
        '                <field>26-Jan-21 1713</field>\n' +
        '                <field>0</field>\n' +
        '            </row>\n' +
        '            <row primary-key="2659734">\n' +
        '                <field>Yard</field>\n' +
        '                <field>SEGU1755504</field>\n' +
        '                <field>Complete</field>\n' +
        '                <field>Receival</field>\n' +
        '                <field>T-ADZ5727-TIP-U</field>\n' +
        '                <field>@724145</field>\n' +
        '                <field>ROAD</field>\n' +
        '                <field>953</field>\n' +
        '                <field />\n' +
        '                <field>27-Jan-21 1600</field>\n' +
        '                <field />\n' +
        '                <field>27-Jan-21 1600</field>\n' +
        '                <field>4527</field>\n' +
        '                <field>27-Jan-21 1600</field>\n' +
        '                <field>27-Jan-21 1600</field>\n' +
        '                <field />\n' +
        '                <field>22G1</field>\n' +
        '                <field>27-Jan-21 1539</field>\n' +
        '                <field>0</field>\n' +
        '            </row>\n' +
        '            <row primary-key="2657555">\n' +
        '                <field>Yard</field>\n' +
        '                <field>TCKU1268257</field>\n' +
        '                <field>Complete</field>\n' +
        '                <field>Receival</field>\n' +
        '                <field>T-AFA021MC-TIP-U</field>\n' +
        '                <field>@723669</field>\n' +
        '                <field>ROAD</field>\n' +
        '                <field>513</field>\n' +
        '                <field />\n' +
        '                <field>26-Jan-21 1841</field>\n' +
        '                <field />\n' +
        '                <field>26-Jan-21 1841</field>\n' +
        '                <field>4519</field>\n' +
        '                <field>26-Jan-21 1841</field>\n' +
        '                <field>26-Jan-21 1841</field>\n' +
        '                <field />\n' +
        '                <field>22G1</field>\n' +
        '                <field>26-Jan-21 1820</field>\n' +
        '                <field>0</field>\n' +
        '            </row>\n' +
        '            <row primary-key="2656990">\n' +
        '                <field>Yard</field>\n' +
        '                <field>TRLU9319439</field>\n' +
        '                <field>Complete</field>\n' +
        '                <field>Receival</field>\n' +
        '                <field>T-MMM5905-TIP-U</field>\n' +
        '                <field>@723612</field>\n' +
        '                <field>ROAD</field>\n' +
        '                <field>456</field>\n' +
        '                <field />\n' +
        '                <field>26-Jan-21 1724</field>\n' +
        '                <field />\n' +
        '                <field>26-Jan-21 1724</field>\n' +
        '                <field>4534</field>\n' +
        '                <field>26-Jan-21 1724</field>\n' +
        '                <field>26-Jan-21 1724</field>\n' +
        '                <field />\n' +
        '                <field>22G1</field>\n' +
        '                <field>26-Jan-21 1656</field>\n' +
        '                <field>0</field>\n' +
        '            </row>\n' +
        '            <row primary-key="2660102">\n' +
        '                <field>Yard</field>\n' +
        '                <field>CAIU6727283</field>\n' +
        '                <field>Complete</field>\n' +
        '                <field>Receival</field>\n' +
        '                <field>T-AFJ0306-TIP-U</field>\n' +
        '                <field>@724421</field>\n' +
        '                <field>ROAD</field>\n' +
        '                <field>1266</field>\n' +
        '                <field />\n' +
        '                <field>27-Jan-21 2346</field>\n' +
        '                <field />\n' +
        '                <field>27-Jan-21 2346</field>\n' +
        '                <field>4527</field>\n' +
        '                <field>27-Jan-21 2346</field>\n' +
        '                <field>27-Jan-21 2346</field>\n' +
        '                <field />\n' +
        '                <field>22G1</field>\n' +
        '                <field>27-Jan-21 2245</field>\n' +
        '                <field>0</field>\n' +
        '            </row>\n' +
        '            <row primary-key="2658879">\n' +
        '                <field>Yard</field>\n' +
        '                <field>MRKU7595706</field>\n' +
        '                <field>Complete</field>\n' +
        '                <field>Receival</field>\n' +
        '                <field>T-AEZ5973-TIP-U</field>\n' +
        '                <field>@723979</field>\n' +
        '                <field>ROAD</field>\n' +
        '                <field>765</field>\n' +
        '                <field />\n' +
        '                <field>27-Jan-21 1046</field>\n' +
        '                <field />\n' +
        '                <field>27-Jan-21 1046</field>\n' +
        '                <field>4527</field>\n' +
        '                <field>27-Jan-21 1046</field>\n' +
        '                <field>27-Jan-21 1046</field>\n' +
        '                <field />\n' +
        '                <field>22G1</field>\n' +
        '                <field>27-Jan-21 0946</field>\n' +
        '                <field>0</field>\n' +
        '            </row>\n' +
        '            <row primary-key="2659593">\n' +
        '                <field>Yard</field>\n' +
        '                <field>MRKU9836530</field>\n' +
        '                <field>Complete</field>\n' +
        '                <field>Receival</field>\n' +
        '                <field>T-AEZ9137-TIP-U</field>\n' +
        '                <field>@724029</field>\n' +
        '                <field>ROAD</field>\n' +
        '                <field>823</field>\n' +
        '                <field />\n' +
        '                <field>27-Jan-21 1249</field>\n' +
        '                <field />\n' +
        '                <field>27-Jan-21 1249</field>\n' +
        '                <field>4537</field>\n' +
        '                <field>27-Jan-21 1249</field>\n' +
        '                <field>27-Jan-21 1249</field>\n' +
        '                <field />\n' +
        '                <field>22G1</field>\n' +
        '                <field>27-Jan-21 1217</field>\n' +
        '                <field>0</field>\n' +
        '            </row>\n' +
        '            <row primary-key="2659953">\n' +
        '                <field>Yard</field>\n' +
        '                <field>APZU3304120</field>\n' +
        '                <field>Complete</field>\n' +
        '                <field>Receival</field>\n' +
        '                <field>T-AAQ363SF-TIP-U</field>\n' +
        '                <field>@724298</field>\n' +
        '                <field>ROAD</field>\n' +
        '                <field>1122</field>\n' +
        '                <field />\n' +
        '                <field>27-Jan-21 2015</field>\n' +
        '                <field />\n' +
        '                <field>27-Jan-21 2015</field>\n' +
        '                <field>4532</field>\n' +
        '                <field>27-Jan-21 2015</field>\n' +
        '                <field>27-Jan-21 2015</field>\n' +
        '                <field />\n' +
        '                <field>22G1</field>\n' +
        '                <field>27-Jan-21 1954</field>\n' +
        '                <field>0</field>\n' +
        '            </row>\n' +
        '            <row primary-key="2659764">\n' +
        '                <field>Yard</field>\n' +
        '                <field>TCKU7739185</field>\n' +
        '                <field>Complete</field>\n' +
        '                <field>Receival</field>\n' +
        '                <field>T-AAA195NP-TIP-U</field>\n' +
        '                <field>@724171</field>\n' +
        '                <field>ROAD</field>\n' +
        '                <field>982</field>\n' +
        '                <field />\n' +
        '                <field>27-Jan-21 1731</field>\n' +
        '                <field />\n' +
        '                <field>27-Jan-21 1731</field>\n' +
        '                <field>4519</field>\n' +
        '                <field>27-Jan-21 1731</field>\n' +
        '                <field>27-Jan-21 1731</field>\n' +
        '                <field />\n' +
        '                <field>45G1</field>\n' +
        '                <field>27-Jan-21 1619</field>\n' +
        '                <field>0</field>\n' +
        '            </row>\n' +
        '            <row primary-key="2658314">\n' +
        '                <field>Yard</field>\n' +
        '                <field>TCLU9786645</field>\n' +
        '                <field>Complete</field>\n' +
        '                <field>Receival</field>\n' +
        '                <field>T-AFU990MP-TIP-U</field>\n' +
        '                <field>@723881</field>\n' +
        '                <field>ROAD</field>\n' +
        '                <field>723</field>\n' +
        '                <field />\n' +
        '                <field>27-Jan-21 0214</field>\n' +
        '                <field />\n' +
        '                <field>27-Jan-21 0214</field>\n' +
        '                <field>4534</field>\n' +
        '                <field>27-Jan-21 0214</field>\n' +
        '                <field>27-Jan-21 0214</field>\n' +
        '                <field />\n' +
        '                <field>45G1</field>\n' +
        '                <field>27-Jan-21 0145</field>\n' +
        '                <field>0</field>\n' +
        '            </row>\n' +
        '            <row primary-key="2660902">\n' +
        '                <field>Yard</field>\n' +
        '                <field>SEGU9214276</field>\n' +
        '                <field>Planned</field>\n' +
        '                <field>Load</field>\n' +
        '                <field>V-MBROWOM050R-260788</field>\n' +
        '                <field>MBROWOM050R</field>\n' +
        '                <field>MBRO-load-27A</field>\n' +
        '                <field>43</field>\n' +
        '                <field />\n' +
        '                <field />\n' +
        '                <field />\n' +
        '                <field />\n' +
        '                <field />\n' +
        '                <field />\n' +
        '                <field />\n' +
        '                <field>30-Jan-21 1022</field>\n' +
        '                <field>45R1</field>\n' +
        '                <field>28-Jan-21 0955</field>\n' +
        '                <field>0</field>\n' +
        '            </row>\n' +
        '            <row primary-key="2656831">\n' +
        '                <field>Yard</field>\n' +
        '                <field>TGHU0793642</field>\n' +
        '                <field>Complete</field>\n' +
        '                <field>Receival</field>\n' +
        '                <field>T-ADC3963-TIP-U</field>\n' +
        '                <field>@723506</field>\n' +
        '                <field>ROAD</field>\n' +
        '                <field>333</field>\n' +
        '                <field />\n' +
        '                <field>26-Jan-21 1446</field>\n' +
        '                <field />\n' +
        '                <field>26-Jan-21 1446</field>\n' +
        '                <field>4519</field>\n' +
        '                <field>26-Jan-21 1446</field>\n' +
        '                <field>26-Jan-21 1446</field>\n' +
        '                <field />\n' +
        '                <field>2210</field>\n' +
        '                <field>26-Jan-21 1439</field>\n' +
        '                <field>0</field>\n' +
        '            </row>\n' +
        '            <row primary-key="2660411">\n' +
        '                <field>Yard</field>\n' +
        '                <field>FSCU7323344</field>\n' +
        '                <field>Planned</field>\n' +
        '                <field>Load</field>\n' +
        '                <field>V-MBROWOM050R-070412</field>\n' +
        '                <field>MBROWOM050R</field>\n' +
        '                <field>MBRO-load-07B</field>\n' +
        '                <field>29</field>\n' +
        '                <field />\n' +
        '                <field />\n' +
        '                <field />\n' +
        '                <field />\n' +
        '                <field />\n' +
        '                <field />\n' +
        '                <field />\n' +
        '                <field>29-Jan-21 1103</field>\n' +
        '                <field>2210</field>\n' +
        '                <field>28-Jan-21 0913</field>\n' +
        '                <field>0</field>\n' +
        '            </row>\n' +
        '            <row primary-key="2658924">\n' +
        '                <field>Yard</field>\n' +
        '                <field>MSCU6275790</field>\n' +
        '                <field>Complete</field>\n' +
        '                <field>Receival</field>\n' +
        '                <field>T-AEU9310-TIP-U</field>\n' +
        '                <field>@723999</field>\n' +
        '                <field>ROAD</field>\n' +
        '                <field>788</field>\n' +
        '                <field />\n' +
        '                <field>27-Jan-21 1103</field>\n' +
        '                <field />\n' +
        '                <field>27-Jan-21 1103</field>\n' +
        '                <field>4527</field>\n' +
        '                <field>27-Jan-21 1103</field>\n' +
        '                <field>27-Jan-21 1103</field>\n' +
        '                <field />\n' +
        '                <field>2210</field>\n' +
        '                <field>27-Jan-21 1051</field>\n' +
        '                <field>0</field>\n' +
        '            </row>\n' +
        '            <row primary-key="2660398">\n' +
        '                <field>Yard</field>\n' +
        '                <field>TEMU2095757</field>\n' +
        '                <field>Planned</field>\n' +
        '                <field>Load</field>\n' +
        '                <field>V-MBROWOM050R-050106</field>\n' +
        '                <field>MBROWOM050R</field>\n' +
        '                <field>MBRO-load-07B</field>\n' +
        '                <field>16</field>\n' +
        '                <field />\n' +
        '                <field />\n' +
        '                <field />\n' +
        '                <field />\n' +
        '                <field />\n' +
        '                <field />\n' +
        '                <field />\n' +
        '                <field>29-Jan-21 1030</field>\n' +
        '                <field>2210</field>\n' +
        '                <field>28-Jan-21 0913</field>\n' +
        '                <field>0</field>\n' +
        '            </row>\n' +
        '            <row primary-key="1630573">\n' +
        '                <field>Yard</field>\n' +
        '                <field>PILDMY2240</field>\n' +
        '                <field>Complete</field>\n' +
        '                <field>Delivery</field>\n' +
        '                <field>Y-BEIRA-AREAG</field>\n' +
        '                <field />\n' +
        '                <field>ROAD</field>\n' +
        '                <field>261</field>\n' +
        '                <field>4517</field>\n' +
        '                <field>04-Jul-19 1442</field>\n' +
        '                <field />\n' +
        '                <field>04-Jul-19 1442</field>\n' +
        '                <field />\n' +
        '                <field>04-Jul-19 1442</field>\n' +
        '                <field>04-Jul-19 1442</field>\n' +
        '                <field />\n' +
        '                <field>2210</field>\n' +
        '                <field>04-Jul-19 1343</field>\n' +
        '                <field>0</field>\n' +
        '            </row>\n' +
        '            <row primary-key="1818073">\n' +
        '                <field>Yard</field>\n' +
        '                <field>PILDMY2240</field>\n' +
        '                <field>Complete</field>\n' +
        '                <field>Delivery</field>\n' +
        '                <field>Y-BEIRA-AREAG</field>\n' +
        '                <field />\n' +
        '                <field>ROAD</field>\n' +
        '                <field>2788</field>\n' +
        '                <field>FL0904</field>\n' +
        '                <field>11-Oct-19 1318</field>\n' +
        '                <field />\n' +
        '                <field>11-Oct-19 1318</field>\n' +
        '                <field />\n' +
        '                <field>11-Oct-19 1318</field>\n' +
        '                <field>11-Oct-19 1318</field>\n' +
        '                <field />\n' +
        '                <field>2210</field>\n' +
        '                <field>11-Oct-19 1231</field>\n' +
        '                <field>0</field>\n' +
        '            </row>\n' +
        '            <row primary-key="1821152">\n' +
        '                <field>Yard</field>\n' +
        '                <field>PILDMY2240</field>\n' +
        '                <field>Complete</field>\n' +
        '                <field>Delivery</field>\n' +
        '                <field>Y-BEIRA-AREAG</field>\n' +
        '                <field />\n' +
        '                <field>ROAD</field>\n' +
        '                <field>3884</field>\n' +
        '                <field>FL0904</field>\n' +
        '                <field>12-Oct-19 1205</field>\n' +
        '                <field />\n' +
        '                <field>12-Oct-19 1205</field>\n' +
        '                <field />\n' +
        '                <field>12-Oct-19 1205</field>\n' +
        '                <field>12-Oct-19 1205</field>\n' +
        '                <field />\n' +
        '                <field>2210</field>\n' +
        '                <field>12-Oct-19 1126</field>\n' +
        '                <field>0</field>\n' +
        '            </row>\n' +
        '            <row primary-key="1832871">\n' +
        '                <field>Yard</field>\n' +
        '                <field>PILDMY2240</field>\n' +
        '                <field>Complete</field>\n' +
        '                <field>Delivery</field>\n' +
        '                <field>Y-BEIRA-AREAG</field>\n' +
        '                <field />\n' +
        '                <field>ROAD</field>\n' +
        '                <field>164</field>\n' +
        '                <field>FL0903</field>\n' +
        '                <field>17-Oct-19 1024</field>\n' +
        '                <field />\n' +
        '                <field>17-Oct-19 1024</field>\n' +
        '                <field />\n' +
        '                <field>17-Oct-19 1024</field>\n' +
        '                <field>17-Oct-19 1024</field>\n' +
        '                <field />\n' +
        '                <field>2210</field>\n' +
        '                <field>17-Oct-19 1003</field>\n' +
        '                <field>0</field>\n' +
        '            </row>\n' +
        '            <row primary-key="1533877">\n' +
        '                <field>Yard</field>\n' +
        '                <field>PILDMY2240</field>\n' +
        '                <field>Complete</field>\n' +
        '                <field>Delivery</field>\n' +
        '                <field>Y-BEIRA-AREAG</field>\n' +
        '                <field />\n' +
        '                <field>ROAD</field>\n' +
        '                <field>1857</field>\n' +
        '                <field>4529</field>\n' +
        '                <field>10-May-19 1143</field>\n' +
        '                <field />\n' +
        '                <field>10-May-19 1143</field>\n' +
        '                <field />\n' +
        '                <field>10-May-19 1143</field>\n' +
        '                <field>10-May-19 1143</field>\n' +
        '                <field />\n' +
        '                <field>2210</field>\n' +
        '                <field>10-May-19 1118</field>\n' +
        '                <field>0</field>\n' +
        '            </row>\n' +
        '            <row primary-key="1698767">\n' +
        '                <field>Yard</field>\n' +
        '                <field>PILDMY2240</field>\n' +
        '                <field>Complete</field>\n' +
        '                <field>Delivery</field>\n' +
        '                <field>Y-BEIRA-AREAG</field>\n' +
        '                <field />\n' +
        '                <field>ROAD</field>\n' +
        '                <field>1253</field>\n' +
        '                <field>4530</field>\n' +
        '                <field>12-Aug-19 1517</field>\n' +
        '                <field />\n' +
        '                <field>12-Aug-19 1517</field>\n' +
        '                <field />\n' +
        '                <field>12-Aug-19 1517</field>\n' +
        '                <field>12-Aug-19 1517</field>\n' +
        '                <field />\n' +
        '                <field>2210</field>\n' +
        '                <field>12-Aug-19 1458</field>\n' +
        '                <field>0</field>\n' +
        '            </row>\n' +
        '            <row primary-key="1522848">\n' +
        '                <field>Yard</field>\n' +
        '                <field>PILDMY2240</field>\n' +
        '                <field>Complete</field>\n' +
        '                <field>Yard Move</field>\n' +
        '                <field>Y-BEIRA-AREAG</field>\n' +
        '                <field />\n' +
        '                <field>ROAD</field>\n' +
        '                <field>900</field>\n' +
        '                <field>4528</field>\n' +
        '                <field />\n' +
        '                <field />\n' +
        '                <field />\n' +
        '                <field>4528</field>\n' +
        '                <field />\n' +
        '                <field />\n' +
        '                <field />\n' +
        '                <field>2210</field>\n' +
        '                <field>03-May-19 1617</field>\n' +
        '                <field>0</field>\n' +
        '            </row>\n' +
        '            <row primary-key="1613099">\n' +
        '                <field>Yard</field>\n' +
        '                <field>PILDMY2240</field>\n' +
        '                <field>Complete</field>\n' +
        '                <field>Delivery</field>\n' +
        '                <field>Y-BEIRA-AREAG</field>\n' +
        '                <field />\n' +
        '                <field>ROAD</field>\n' +
        '                <field>1447</field>\n' +
        '                <field>4525</field>\n' +
        '                <field>22-Jun-19 1212</field>\n' +
        '                <field />\n' +
        '                <field>22-Jun-19 1212</field>\n' +
        '                <field />\n' +
        '                <field>22-Jun-19 1212</field>\n' +
        '                <field>22-Jun-19 1212</field>\n' +
        '                <field />\n' +
        '                <field>2210</field>\n' +
        '                <field>22-Jun-19 1000</field>\n' +
        '                <field>0</field>\n' +
        '            </row>\n' +
        '            <row primary-key="2277828">\n' +
        '                <field>Yard</field>\n' +
        '                <field>PILDMY2240</field>\n' +
        '                <field>Complete</field>\n' +
        '                <field>Delivery</field>\n' +
        '                <field>Y-BEIRA-AREAG</field>\n' +
        '                <field />\n' +
        '                <field>ROAD</field>\n' +
        '                <field>213</field>\n' +
        '                <field>FL0903</field>\n' +
        '                <field>13-Jul-20 1533</field>\n' +
        '                <field />\n' +
        '                <field>13-Jul-20 1533</field>\n' +
        '                <field />\n' +
        '                <field>13-Jul-20 1533</field>\n' +
        '                <field>13-Jul-20 1533</field>\n' +
        '                <field />\n' +
        '                <field>2210</field>\n' +
        '                <field>13-Jul-20 1509</field>\n' +
        '                <field>0</field>\n' +
        '            </row>\n' +
        '            <row primary-key="2660196">\n' +
        '                <field>Yard</field>\n' +
        '                <field>MEDU5592883</field>\n' +
        '                <field>Complete</field>\n' +
        '                <field>Receival</field>\n' +
        '                <field>T-AEZ7970-TIP-U</field>\n' +
        '                <field>@724488</field>\n' +
        '                <field>ROAD</field>\n' +
        '                <field>587</field>\n' +
        '                <field />\n' +
        '                <field>28-Jan-21 0756</field>\n' +
        '                <field />\n' +
        '                <field>28-Jan-21 0756</field>\n' +
        '                <field>4536</field>\n' +
        '                <field>28-Jan-21 0756</field>\n' +
        '                <field>28-Jan-21 0756</field>\n' +
        '                <field />\n' +
        '                <field>2210</field>\n' +
        '                <field>28-Jan-21 0734</field>\n' +
        '                <field>0</field>\n' +
        '            </row>\n' +
        '        </rows>\n' +
        '    </data-table>\n' +
        '</query-response>';
    var result1 = convert.xml2json(xml, {compact: true, spaces: 4});
    var result2 = convert.xml2json(xml, {compact: false, spaces: 4});
    console.log(result1, '\n', result2);
    const axios = require('axios');
    axios.get('/api/pais/all')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
  }
}
</script>
