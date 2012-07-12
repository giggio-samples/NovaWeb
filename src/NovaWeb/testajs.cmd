rem @echo off
set caminho=%~dp0
set caminho=%caminho:\=/%
"%~dp0..\phantomjs\phantomjs.exe" "%~dp0ScriptTestes\libs\phantom-jasmine\run_jasmine_test.coffee" "file:///%caminho%ScriptTestes/TodosOsTestes.htm" %1 %2 %3 %4